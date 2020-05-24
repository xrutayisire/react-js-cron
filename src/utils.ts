import { MutableRefObject } from 'react'

import {
  SetValueNumbersOrUndefined,
  CronType,
  SetValuePeriod,
  SetInternalError,
  SetError,
  Locale,
  PeriodType,
  CronValues,
  Classes,
} from './types'
import { DEFAULT_LOCALE_EN } from './locale'

// Set cron (string like * * * * *)
export function setCron(
  string: string,
  setInternalError: SetInternalError,
  setError: SetError,
  internalValueRef: MutableRefObject<string>,
  firstRender: boolean,
  locale: Locale,
  setMinutes: SetValueNumbersOrUndefined,
  setHours: SetValueNumbersOrUndefined,
  setMonthDays: SetValueNumbersOrUndefined,
  setWeekDays: SetValueNumbersOrUndefined,
  setMonths: SetValueNumbersOrUndefined,
  setPeriod: SetValuePeriod
) {
  if (!string) return

  setError && setError(undefined)
  setInternalError(false)

  let error = false

  const values: CronValues = {
    period: undefined,
    minutes: undefined,
    hours: undefined,
    months: undefined,
    'week-days': undefined,
    'month-days': undefined,
  }

  const assignValueOrError = (item: string, type: CronType) => {
    if (item !== '*/1') {
      const cronValue = getCronValueFromString(item, type)

      if (cronValue !== undefined) {
        values[type] = cronValue
      } else {
        error = true
      }
    } else {
      values[type] = '*'
    }
  }

  try {
    // Sanitize
    const cronString = string
      .replace(/\s+/g, ' ')
      .replace(/^ +/, '')
      .replace(/ +$/, '')
    const mask = cronString
      .replace(/\*\//g, '')
      .replace(/[^* ]/g, '-')
      .replace(/-+/g, '-')
      .replace(/ +/g, '')
    const items = cronString.split(' ')

    if (items.length !== 5) {
      error = true
    }

    if (mask === '*****') {
      // 1 possibility
      values.period = 'minute'
    } else if (mask === '-****') {
      // 1 possibility
      values.period = 'hour'
      assignValueOrError(items[0], 'minutes')
    } else if (mask.substring(2, mask.length) === '***') {
      // 4 possibilities
      values.period = 'day'
      assignValueOrError(items[0], 'minutes')
      assignValueOrError(items[1], 'hours')
    } else if (mask.substring(2, mask.length) === '-**') {
      // 4 possibilities
      values.period = 'month'
      assignValueOrError(items[0], 'minutes')
      assignValueOrError(items[1], 'hours')
      assignValueOrError(items[2], 'month-days')
    } else if (mask.substring(2, mask.length) === '**-') {
      // 4 possibilities
      values.period = 'week'
      assignValueOrError(items[0], 'minutes')
      assignValueOrError(items[1], 'hours')
      assignValueOrError(items[4], 'week-days')
    } else if (mask.substring(3, mask.length) === '-*') {
      // 8 possibilities
      values.period = 'year'
      assignValueOrError(items[0], 'minutes')
      assignValueOrError(items[1], 'hours')
      assignValueOrError(items[2], 'month-days')
      assignValueOrError(items[3], 'months')
    } else {
      error = true
    }
  } catch (e) {
    error = true
  }

  if (!error) {
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        const newValue = value === '*' ? undefined : value

        switch (key as CronType) {
          case 'period':
            setPeriod(newValue as PeriodType)
            break
          case 'minutes':
            setMinutes(newValue as number[])
            break
          case 'hours':
            setHours(newValue as number[])
            break
          case 'week-days':
            setWeekDays(newValue as number[])
            break
          case 'month-days':
            setMonthDays(newValue as number[])
            break
          case 'months':
            setMonths(newValue as number[])
            break

          default:
            break
        }
      }
    })
  } else {
    // Only set the internal error if it's not at the first render because the default
    // value is not valid
    if (!firstRender) {
      setInternalError(true)
      internalValueRef.current = ''
    }

    setError &&
      setError({
        type: 'invalid_cron',
        description:
          locale.errorInvalidCron || DEFAULT_LOCALE_EN.errorInvalidCron,
      })
  }
}

// Get a cron value array from a string, ex: "2-5" => "[2,3,4,5]"
function getCronValueFromString(string: string, type: CronType) {
  const value: any[] = []
  let m: any
  let stringValue = string

  if (stringValue !== '*') {
    while (stringValue !== '') {
      const startValue = itemStartAt(type)
      const limit = itemMaxNumber(type)

      // Test "*/n" expression
      m = stringValue.match(/^\*\/([0-9]+),?/)
      if (m && m.length === 2) {
        if (Number(m[1]) > limit) {
          return
        }

        for (let i = 0; i < limit + startValue; i += m[1] | 0) {
          if (i >= startValue) {
            value.push(i)
          }
        }
        stringValue = stringValue.replace(m[0], '')
        continue
      }
      // Test "a-b/n" expression
      m = stringValue.match(/^([0-9]+)-([0-9]+)\/([0-9]+),?/)
      if (m && m.length === 4) {
        if (
          Number(m[1]) < startValue ||
          Number(m[2]) > limit ||
          Number(m[3]) > limit
        ) {
          return
        }

        for (let i = m[1] | 0; i <= (m[2] | 0); i += m[3] | 0) {
          value.push(i)
        }
        stringValue = stringValue.replace(m[0], '')
        continue
      }
      // Test "a-b" expression
      m = stringValue.match(/^([0-9]+)-([0-9]+),?/)
      if (m && m.length === 3) {
        if (Number(m[1]) < startValue || Number(m[2]) > limit) {
          return
        }

        for (let i = m[1] | 0; i <= (m[2] | 0); i++) {
          value.push(i)
        }
        stringValue = stringValue.replace(m[0], '')
        continue
      }
      // Test "c" expression
      m = stringValue.match(/^([0-9]+),?/)
      if (m && m.length === 2) {
        if (Number(m[1]) > limit || Number(m[1]) < startValue) {
          return
        }

        value.push(m[1] | 0)
        stringValue = stringValue.replace(m[0], '')
        continue
      }

      // Something goes wrong in the expression
      return
    }
  }

  return value
}

// Get a cron value string from array of number, ex: "[2,3,4,5]" => "2-5"
export function getCronValueFromNumbers(
  arrayNumberValue: number[] | undefined,
  type: CronType
) {
  if (!arrayNumberValue || arrayNumberValue.length === 0) {
    return '*'
  }

  const cron: string[] = [arrayNumberValue[0].toString()]
  let s = arrayNumberValue[0]
  let c = arrayNumberValue[0]
  const n = arrayNumberValue.length

  for (let i = 1; i < n; i++) {
    if (arrayNumberValue[i] === c + 1) {
      c = arrayNumberValue[i]
      cron[cron.length - 1] = s + '-' + c
    } else {
      s = c = arrayNumberValue[i]
      cron.push(c.toString())
    }
  }

  if (cron.length > 1) {
    const multiple = cron[0] === '0' ? Number(+cron[1]) : Number(+cron[0])
    const total = getTotalItem(multiple, type)
    let valid = true

    if (total === cron.length) {
      let counter = 0

      for (let i = 1; i < cron.length; i++) {
        counter += multiple

        if (Number(cron[i]) % multiple !== 0 || multiple * i !== counter) {
          valid = false
          break
        }
      }

      if (valid) {
        return '*/' + multiple
      }
    }
  }

  return cron.join(',')
}

export function getCron(
  period: PeriodType,
  months: number[] | undefined,
  monthDays: number[] | undefined,
  weekDays: number[] | undefined,
  hours: number[] | undefined,
  minutes: number[] | undefined
) {
  const items = ['*', '*', '*', '*', '*']

  if (period === 'hour') {
    items[0] = getCronValueFromNumbers(minutes, 'minutes')
  }

  if (
    period === 'day' ||
    period === 'week' ||
    period === 'month' ||
    period === 'year'
  ) {
    items[0] = getCronValueFromNumbers(minutes, 'minutes')
    items[1] = getCronValueFromNumbers(hours, 'hours')
  }

  if (period === 'month' || period === 'year') {
    items[2] = getCronValueFromNumbers(monthDays, 'month-days')
  }

  if (period === 'year') {
    items[3] = getCronValueFromNumbers(months, 'months')
  }

  if (period === 'week') {
    items[4] = getCronValueFromNumbers(weekDays, 'week-days')
  }

  return items.join(' ')
}

function itemMaxNumber(type: CronType) {
  switch (type) {
    case 'minutes':
      return 60
    case 'hours':
      return 24
    case 'month-days':
      return 31
    case 'months':
      return 12
    default:
      // weekDays
      return 7
  }
}

export function itemStartAt(type: CronType) {
  switch (type) {
    case 'minutes':
    case 'hours':
      return 0
    case 'month-days':
      return 1
    case 'months':
      return 1
    default:
      // weekDays
      return 1
  }
}

export function getTotalItem(multiple: number, type: CronType) {
  let total = 0

  switch (type) {
    case 'minutes':
      total = 60 - itemStartAt(type)
      break
    case 'hours':
      total = 24 - itemStartAt(type)
      break
    case 'month-days':
      total = 31 - itemStartAt(type)
      break
    case 'months':
      total = 12 - itemStartAt(type)
      break
    case 'week-days':
      total = 7 - itemStartAt(type)
      break
  }

  if (multiple) {
    let lastMultiple = 0
    for (let i = 0; i < total; i++) {
      if (i % multiple !== 0) continue
      lastMultiple = i
    }
    return lastMultiple / multiple + 1
  }

  return total
}

// Simple classNames util function to prevent adding external library 'classnames'
export function classNames(classes: Classes) {
  return Object.entries(classes)
    .filter(([key, value]) => key && value)
    .map(([key]) => key)
    .join(' ')
}
