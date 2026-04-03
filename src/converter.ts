import { MutableRefObject } from 'react'

import { SUPPORTED_SHORTCUTS, UNITS } from './constants'
import {
  AllowEmpty,
  ClockFormat,
  DropdownConfig,
  DropdownsConfig,
  LeadingZero,
  Locale,
  OnError,
  PeriodType,
  SetInternalError,
  SetValueNumbersOrUndefined,
  SetValuePeriod,
  Shortcuts,
  Unit,
} from './types'
import { convertStringToNumber, dedup, range, setError, sort } from './utils'

/**
 * Set values from cron string
 */
export function setValuesFromCronString(
  cronString: string,
  setInternalError: SetInternalError,
  onError: OnError,
  allowEmpty: AllowEmpty,
  internalValueRef: MutableRefObject<string>,
  firstRender: boolean,
  locale: Locale,
  shortcuts: Shortcuts,
  setMinutes: SetValueNumbersOrUndefined,
  setHours: SetValueNumbersOrUndefined,
  setMonthDays: SetValueNumbersOrUndefined,
  setMonths: SetValueNumbersOrUndefined,
  setWeekDays: SetValueNumbersOrUndefined,
  setPeriod: SetValuePeriod,
  defaultPeriod?: PeriodType,
  allowedPeriods?: PeriodType[],
  dropdownsConfig?: DropdownsConfig,
) {
  if (onError) {
    onError(undefined)
  }
  setInternalError(false)

  let error = false

  // Handle empty cron string
  if (!cronString) {
    if (
      allowEmpty === 'always' ||
      (firstRender && allowEmpty === 'for-default-value')
    ) {
      return
    }

    error = true
  }

  if (!error) {
    // Shortcuts management
    if (
      shortcuts &&
      (shortcuts === true || shortcuts.includes(cronString as any))
    ) {
      if (cronString === '@reboot') {
        setPeriod('reboot')

        return
      }

      // Convert a shortcut to a valid cron string
      const shortcutObject = SUPPORTED_SHORTCUTS.find(
        (supportedShortcut) => supportedShortcut.name === cronString,
      )

      if (shortcutObject) {
        cronString = shortcutObject.value
      }
    }

    try {
      const cronParts = parseCronString(cronString)
      const period = getPeriodFromCronParts(
        cronParts,
        defaultPeriod,
        allowedPeriods,
      )

      setPeriod(period)
      setMinutes(cronParts[0])
      setHours(cronParts[1])
      setMonthDays(cronParts[2])
      setMonths(cronParts[3])
      setWeekDays(cronParts[4])

      // Check if all parts are empty (= * * * * *)
      const allEmpty = cronParts.every((part) => part.length === 0)
      if (allEmpty) {
        if (
          allowEmpty === 'never' ||
          (!firstRender && allowEmpty === 'for-default-value')
        ) {
          error = true
        }
      }

      // Per-dropdown allowEmpty check
      if (!error) {
        error = hasDropdownAllowEmptyError(
          cronParts,
          period,
          firstRender,
          dropdownsConfig,
        )
      }
    } catch {
      // Specific errors are not handle (yet)
      error = true
    }
  }
  if (error) {
    internalValueRef.current = cronString
    setInternalError(true)
    setError(onError, locale)
  }
}

/**
 * Check if any active dropdown has an empty value that should trigger an error
 * based on its per-dropdown allowEmpty configuration
 */
export function hasDropdownAllowEmptyError(
  cronParts: number[][],
  period: PeriodType,
  allowForDefaultValue: boolean,
  dropdownsConfig?: DropdownsConfig,
): boolean {
  if (!dropdownsConfig || period === 'reboot') return false

  const fields: {
    key: 'minutes' | 'hours' | 'month-days' | 'months' | 'week-days'
    index: number
    isActive: boolean
  }[] = [
    { key: 'minutes', index: 0, isActive: period !== 'minute' },
    {
      key: 'hours',
      index: 1,
      isActive: period !== 'minute' && period !== 'hour',
    },
    {
      key: 'month-days',
      index: 2,
      isActive: period === 'year' || period === 'month',
    },
    { key: 'months', index: 3, isActive: period === 'year' },
    {
      key: 'week-days',
      index: 4,
      isActive: period === 'year' || period === 'month' || period === 'week',
    },
  ]

  return fields.some(({ key, index, isActive }) => {
    if (!isActive) return false

    const fieldAllowEmpty = dropdownsConfig[key]?.allowEmpty
    if (!fieldAllowEmpty) return false
    if (cronParts[index].length !== 0) return false

    return (
      fieldAllowEmpty === 'never' ||
      (fieldAllowEmpty === 'for-default-value' && !allowForDefaultValue)
    )
  })
}

/**
 * Get cron string from values
 */
export function getCronStringFromValues(
  period: PeriodType,
  months: number[] | undefined,
  monthDays: number[] | undefined,
  weekDays: number[] | undefined,
  hours: number[] | undefined,
  minutes: number[] | undefined,
  humanizeValue: boolean | undefined,
  dropdownsConfig: DropdownsConfig | undefined,
) {
  if (period === 'reboot') {
    return '@reboot'
  }

  const newMonths = period === 'year' && months ? months : []
  const newMonthDays =
    (period === 'year' || period === 'month') && monthDays ? monthDays : []
  const newWeekDays =
    (period === 'year' || period === 'month' || period === 'week') && weekDays
      ? weekDays
      : []
  const newHours =
    period !== 'minute' && period !== 'hour' && hours ? hours : []
  const newMinutes = period !== 'minute' && minutes ? minutes : []

  const parsedArray = parseCronArray(
    [newMinutes, newHours, newMonthDays, newMonths, newWeekDays],
    humanizeValue,
    dropdownsConfig,
  )

  return cronToString(parsedArray)
}

/**
 * Returns the cron part array as a string.
 */
export function partToString(
  cronPart: number[],
  unit: Unit,
  humanize?: boolean,
  leadingZero?: LeadingZero,
  clockFormat?: ClockFormat,
) {
  let retval = ''

  if (isFull(cronPart, unit) || cronPart.length === 0) {
    retval = '*'
  } else {
    const step = getStep(cronPart)

    if (step && isInterval(cronPart, step)) {
      if (isFullInterval(cronPart, unit, step)) {
        retval = `*/${step}`
      } else {
        retval = `${formatValue(
          getMin(cronPart),
          unit,
          humanize,
          leadingZero,
          clockFormat,
        )}-${formatValue(
          getMax(cronPart),
          unit,
          humanize,
          leadingZero,
          clockFormat,
        )}/${step}`
      }
    } else if (
      cronPart.length === 2 &&
      cronPart[1] - cronPart[0] > 1 &&
      isFullInterval(cronPart, unit, cronPart[1] - cronPart[0])
    ) {
      // getStep requires 3+ values, so check 2-element full intervals here
      // e.g. months [1,7] → */6 instead of 1,7
      retval = `*/${cronPart[1] - cronPart[0]}`
    } else {
      retval = toRanges(cronPart)
        .map((range: number | number[]) => {
          if (Array.isArray(range)) {
            return `${formatValue(
              range[0],
              unit,
              humanize,
              leadingZero,
              clockFormat,
            )}-${formatValue(
              range[1],
              unit,
              humanize,
              leadingZero,
              clockFormat,
            )}`
          }

          return formatValue(range, unit, humanize, leadingZero, clockFormat)
        })
        .join(',')
    }
  }
  return retval
}

/**
 * Format the value
 */
export function formatValue(
  value: number,
  unit: Unit,
  humanize?: boolean,
  leadingZero?: LeadingZero,
  clockFormat?: ClockFormat,
) {
  let cronPartString = value.toString()
  const { type, alt, min } = unit
  const needLeadingZero =
    leadingZero && (leadingZero === true || leadingZero.includes(type as any))
  const need24HourClock =
    clockFormat === '24-hour-clock' && (type === 'hours' || type === 'minutes')

  if ((humanize && type === 'week-days') || (humanize && type === 'months')) {
    cronPartString = alt![value - min]
  } else if (value < 10 && (needLeadingZero || need24HourClock)) {
    cronPartString = cronPartString.padStart(2, '0')
  }

  if (type === 'hours' && clockFormat === '12-hour-clock') {
    const suffix = value >= 12 ? 'PM' : 'AM'
    let hour: number | string = value % 12 || 12

    if (hour < 10 && needLeadingZero) {
      hour = hour.toString().padStart(2, '0')
    }

    cronPartString = `${hour}${suffix}`
  }

  return cronPartString
}

/**
 * Validates a range of positive integers
 */
export function parsePartArray(arr: number[], unit: Unit) {
  const values = sort(dedup(fixSunday(arr, unit)))

  if (values.length === 0) {
    return values
  }

  const value = outOfRange(values, unit)

  if (typeof value !== 'undefined') {
    throw new Error(`Value "${value}" out of range for ${unit.type}`)
  }

  return values
}

/**
 * Parses a 2-dimensional array of integers as a cron schedule
 */
function parseCronArray(
  cronArr: number[][],
  humanizeValue: boolean | undefined,
  dropdownsConfig: DropdownsConfig | undefined,
) {
  return cronArr.map((partArr, idx) => {
    const unit = UNITS[idx]
    const parsedArray = parsePartArray(partArr, unit)
    const dropdownOption: DropdownConfig | undefined =
      dropdownsConfig?.[unit.type]

    return partToString(
      parsedArray,
      unit,
      dropdownOption?.humanizeValue ?? humanizeValue,
    )
  })
}

/**
 * Returns the cron array as a string
 */
function cronToString(parts: string[]) {
  return parts.join(' ')
}

/**
 * Period hierarchy from most specific to most broad.
 * A cron expression with minimum period P is compatible with any period >= P.
 */
const PERIOD_ORDER: PeriodType[] = [
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
]

function getPeriodRank(period: PeriodType): number {
  const rank = PERIOD_ORDER.indexOf(period)
  return rank === -1 ? -1 : rank
}

/**
 * Find the period from cron parts, respecting defaultPeriod and allowedPeriods
 * when the cron expression is ambiguous (compatible with multiple periods).
 */
function getPeriodFromCronParts(
  cronParts: number[][],
  defaultPeriod?: PeriodType,
  allowedPeriods?: PeriodType[],
): PeriodType {
  // Determine the minimum compatible period from the cron fields
  let minPeriod: PeriodType
  if (cronParts[3].length > 0) {
    minPeriod = 'year'
  } else if (cronParts[2].length > 0) {
    minPeriod = 'month'
  } else if (cronParts[4].length > 0) {
    minPeriod = 'week'
  } else if (cronParts[1].length > 0) {
    minPeriod = 'day'
  } else if (cronParts[0].length > 0) {
    minPeriod = 'hour'
  } else {
    minPeriod = 'minute'
  }

  const minRank = getPeriodRank(minPeriod)

  // If defaultPeriod is explicitly provided and compatible, prefer it
  if (defaultPeriod) {
    const defaultRank = getPeriodRank(defaultPeriod)

    if (
      defaultRank >= minRank &&
      (!allowedPeriods || allowedPeriods.includes(defaultPeriod))
    ) {
      return defaultPeriod
    }
  }

  // Find the smallest allowed period that is compatible (rank >= minRank)
  if (allowedPeriods) {
    for (let i = minRank; i < PERIOD_ORDER.length; i++) {
      if (allowedPeriods.includes(PERIOD_ORDER[i])) {
        return PERIOD_ORDER[i]
      }
    }
  } else {
    return minPeriod
  }

  // Fallback: use minPeriod even if not allowed (edge case)
  return minPeriod
}

/**
 * Parses a cron string to an array of parts
 */
export function parseCronString(str: string) {
  if (typeof str !== 'string') {
    throw new Error('Invalid cron string')
  }

  const parts = str.replace(/\s+/g, ' ').trim().split(' ')

  if (parts.length === 5) {
    return parts.map((partStr, idx) => {
      return parsePartString(partStr, UNITS[idx])
    })
  }

  throw new Error('Invalid cron string format')
}

/**
 * Parses a string as a range of positive integers
 */
function parsePartString(str: string, unit: Unit) {
  if (str === '*' || str === '*/1') {
    return []
  }

  const values = sort(
    dedup(
      fixSunday(
        replaceAlternatives(str, unit.min, unit.alt)
          .split(',')
          .map((value) => {
            const valueParts = value.split('/')

            if (valueParts.length > 2) {
              throw new Error(`Invalid value "${str} for "${unit.type}"`)
            }

            let parsedValues: number[]
            const left = valueParts[0]
            const right = valueParts[1]

            if (left === '*') {
              parsedValues = range(unit.min, unit.max)
            } else {
              parsedValues = parseRange(left, str, unit)
            }

            const step = parseStep(right, unit)
            const intervalValues = applyInterval(parsedValues, step)

            return intervalValues
          })
          .flat(),
        unit,
      ),
    ),
  )

  const value = outOfRange(values, unit)

  if (typeof value !== 'undefined') {
    throw new Error(`Value "${value}" out of range for ${unit.type}`)
  }

  // Prevent to return full array
  // If all values are selected we don't want any selection visible
  if (values.length === unit.total) {
    return []
  }

  return values
}

/**
 * Replaces the alternative representations of numbers in a string
 */
function replaceAlternatives(str: string, min: number, alt?: string[]) {
  if (alt) {
    str = str.toUpperCase()

    for (let i = 0; i < alt.length; i++) {
      str = str.replace(alt[i], `${i + min}`)
    }
  }
  return str
}

/**
 * Replace all 7 with 0 as Sunday can be represented by both
 */
function fixSunday(values: number[], unit: Unit) {
  if (unit.type === 'week-days') {
    values = values.map(function (value) {
      if (value === 7) {
        return 0
      }

      return value
    })
  }

  return values
}

/**
 * Parses a range string
 */
function parseRange(rangeStr: string, context: string, unit: Unit) {
  const subparts = rangeStr.split('-')

  if (subparts.length === 1) {
    const value = convertStringToNumber(subparts[0])

    if (isNaN(value)) {
      throw new Error(`Invalid value "${context}" for ${unit.type}`)
    }

    return [value]
  } else if (subparts.length === 2) {
    const minValue = convertStringToNumber(subparts[0])
    const maxValue = convertStringToNumber(subparts[1])

    if (isNaN(minValue) || isNaN(maxValue)) {
      throw new Error(`Invalid value "${context}" for ${unit.type}`)
    }

    // Fix to allow equal min and max range values
    // cf: https://github.com/roccivic/cron-converter/pull/15
    if (maxValue < minValue) {
      throw new Error(
        `Max range is less than min range in "${rangeStr}" for ${unit.type}`,
      )
    }

    return range(minValue, maxValue)
  } else {
    throw new Error(`Invalid value "${rangeStr}" for ${unit.type}`)
  }
}

/**
 * Finds an element from values that is outside of the range of unit
 */
function outOfRange(values: number[], unit: Unit) {
  const first = values[0]
  const last = values[values.length - 1]

  if (first < unit.min) {
    return first
  } else if (last > unit.max) {
    return last
  }

  return
}

/**
 * Parses the step from a part string
 */
function parseStep(step: string, unit: Unit) {
  if (typeof step !== 'undefined') {
    const parsedStep = convertStringToNumber(step)

    if (isNaN(parsedStep) || parsedStep < 1) {
      throw new Error(`Invalid interval step value "${step}" for ${unit.type}`)
    }

    return parsedStep
  }
}

/**
 * Applies an interval step to a collection of values
 */
function applyInterval(values: number[], step?: number) {
  if (step) {
    const minVal = values[0]

    values = values.filter((value) => {
      return value % step === minVal % step || value === minVal
    })
  }

  return values
}

/**
 * Returns true if range has all the values of the unit
 */
function isFull(values: number[], unit: Unit) {
  return values.length === unit.max - unit.min + 1
}

/**
 * Returns the difference between first and second elements in the range
 */
function getStep(values: number[]) {
  if (values.length > 2) {
    const step = values[1] - values[0]

    if (step > 1) {
      return step
    }
  }
}

/**
 * Returns true if the range can be represented as an interval
 */
function isInterval(values: number[], step: number) {
  for (let i = 1; i < values.length; i++) {
    const prev = values[i - 1]
    const value = values[i]

    if (value - prev !== step) {
      return false
    }
  }

  return true
}

/**
 * Returns true if the range contains all the interval values
 */
function isFullInterval(values: number[], unit: Unit, step: number) {
  const min = getMin(values)
  const max = getMax(values)
  const haveAllValues = values.length === (max - min) / step + 1

  if (min === unit.min && max + step > unit.max && haveAllValues) {
    return true
  }

  return false
}

/**
 * Returns the smallest value in the range
 */
function getMin(values: number[]) {
  return values[0]
}

/**
 * Returns the largest value in the range
 */
function getMax(values: number[]) {
  return values[values.length - 1]
}

/**
 * Returns the range as an array of ranges
 * defined as arrays of positive integers
 */
function toRanges(values: number[]) {
  const retval: (number[] | number)[] = []
  let startPart: number | null = null

  values.forEach((value, index, self) => {
    if (value !== self[index + 1] - 1) {
      if (startPart !== null) {
        retval.push([startPart, value])
        startPart = null
      } else {
        retval.push(value)
      }
    } else if (startPart === null) {
      startPart = value
    }
  })

  return retval
}
