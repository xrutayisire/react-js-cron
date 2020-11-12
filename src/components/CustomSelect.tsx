import React, { useMemo, useCallback, useRef } from 'react'
import Select from 'antd/lib/select'

import { CustomSelectProps, Clicks } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames, sort } from '../utils'
import { parsePartArray, partToString, formatValue } from '../converter'

export default function CustomSelect(props: CustomSelectProps) {
  const {
    value,
    grid = true,
    optionsList,
    setValue,
    locale,
    className,
    humanizeLabels,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    unit,
    ...otherProps
  } = props

  const stringValue = useMemo(() => {
    if (value && Array.isArray(value)) {
      return value.map((value: number) => value.toString())
    }
  }, [value])

  const options = useMemo(
    () => {
      if (optionsList) {
        return optionsList.map((option, index) => {
          const number = unit.min === 0 ? index : index + 1

          return {
            value: number.toString(),
            label: option,
          }
        })
      }

      return [...Array(unit.total)].map((e, index) => {
        const number = unit.min === 0 ? index : index + 1

        return {
          value: number.toString(),
          label: formatValue(
            number,
            unit,
            humanizeLabels,
            leadingZero,
            clockFormat
          ),
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [optionsList, leadingZero, humanizeLabels, clockFormat]
  )
  const localeJSON = JSON.stringify(locale)
  const renderTag = useCallback(
    (props) => {
      const { value: itemValue } = props

      if (!value || value[0] !== Number(itemValue)) {
        return <></>
      }

      const parsedArray = parsePartArray(value, unit)
      const cronValue = partToString(
        parsedArray,
        unit,
        humanizeLabels,
        leadingZero,
        clockFormat
      )
      const testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || []

      return (
        <div>
          {testEveryValue[1]
            ? `${locale.everyText || DEFAULT_LOCALE_EN.everyText} ${
                testEveryValue[1]
              }`
            : cronValue}
        </div>
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, localeJSON, humanizeLabels, leadingZero, clockFormat]
  )

  const simpleClick = useCallback(
    (newValueOption: number | number[]) => {
      const newValueOptions = Array.isArray(newValueOption)
        ? sort(newValueOption)
        : [newValueOption]
      let newValue: number[] = newValueOptions

      if (value) {
        newValue = [...value]

        newValueOptions.forEach((o) => {
          const newValueOptionNumber = Number(o)

          if (value.some((v) => v === newValueOptionNumber)) {
            newValue = newValue.filter((v) => v !== newValueOptionNumber)
          } else {
            newValue = sort([...newValue, newValueOptionNumber])
          }
        })
      }

      if (newValue.length === unit.total) {
        setValue([])
      } else {
        setValue(newValue)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, value]
  )

  const doubleClick = useCallback(
    (newValueOption: number) => {
      if (newValueOption !== 0 && newValueOption !== 1) {
        const limit = unit.total + unit.min
        const newValue: number[] = []

        for (let i = unit.min; i < limit; i++) {
          if (i % newValueOption === 0) {
            newValue.push(i)
          }
        }
        const oldValueEqualNewValue =
          value &&
          newValue &&
          value.length === newValue.length &&
          value.every((v: number, i: number) => v === newValue[i])
        const allValuesSelected = newValue.length === options.length

        if (allValuesSelected) {
          setValue([])
        } else if (oldValueEqualNewValue) {
          setValue([])
        } else {
          setValue(newValue)
        }
      } else {
        setValue([])
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, options, setValue]
  )

  const clicksRef = useRef<Clicks[]>([])
  const onOptionClick = useCallback(
    (newValueOption: string) => {
      if (!readOnly) {
        const doubleClickTimeout = 300
        const clicks = clicksRef.current

        clicks.push({
          time: new Date().getTime(),
          value: Number(newValueOption),
        })

        const id = window.setTimeout(() => {
          if (
            clicks.length > 1 &&
            clicks[clicks.length - 1].time - clicks[clicks.length - 2].time <
              doubleClickTimeout
          ) {
            if (
              clicks[clicks.length - 1].value ===
              clicks[clicks.length - 2].value
            ) {
              doubleClick(Number(newValueOption))
            } else {
              simpleClick([
                clicks[clicks.length - 2].value,
                clicks[clicks.length - 1].value,
              ])
            }
          } else {
            simpleClick(Number(newValueOption))
          }

          clicksRef.current = []
        }, doubleClickTimeout)

        return () => {
          window.clearTimeout(id)
        }
      }
    },
    [clicksRef, simpleClick, doubleClick, readOnly]
  )

  // Used by the select clear icon
  const onChange = useCallback(
    (newValue: any) => {
      if (!readOnly) {
        if (newValue && newValue.length === 0) {
          setValue([])
        }
      }
    },
    [setValue, readOnly]
  )

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-select': true,
        'react-js-cron-custom-select': true,
        [`${className}-select`]: !!className,
      }),
    [className]
  )

  const dropdownClassNames = useMemo(
    () =>
      classNames({
        'react-js-cron-select-dropdown': true,
        [`react-js-cron-select-dropdown-${unit.type}`]: true,
        'react-js-cron-custom-select-dropdown': true,
        [`react-js-cron-custom-select-dropdown-${unit.type}`]: true,
        [`react-js-cron-custom-select-dropdown-minutes-large`]:
          unit.type === 'minutes' && period !== 'hour' && period !== 'day',
        [`react-js-cron-custom-select-dropdown-minutes-medium`]:
          unit.type === 'minutes' && (period === 'day' || period === 'hour'),
        'react-js-cron-custom-select-dropdown-hours-twelve-hour-clock':
          unit.type === 'hours' && clockFormat === '12-hour-clock',
        'react-js-cron-custom-select-dropdown-grid': !!grid,
        [`${className}-select-dropdown`]: !!className,
        [`${className}-select-dropdown-${unit.type}`]: !!className,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [className, grid, clockFormat, period]
  )

  return (
    <Select
      // Use 'multiple' instead of 'tags‘ mode
      // cf: Issue #2
      mode='multiple'
      allowClear={!readOnly}
      virtual={false}
      open={readOnly ? false : undefined}
      value={stringValue}
      onChange={onChange}
      tagRender={renderTag}
      className={internalClassName}
      dropdownClassName={dropdownClassNames}
      options={options}
      showSearch={false}
      showArrow={!readOnly}
      menuItemSelectedIcon={null}
      dropdownMatchSelectWidth={false}
      onSelect={onOptionClick}
      onDeselect={onOptionClick}
      disabled={disabled}
      dropdownAlign={
        (unit.type === 'minutes' || unit.type === 'hours') &&
        period !== 'day' &&
        period !== 'hour'
          ? {
              // Usage: https://github.com/yiminghe/dom-align
              // Set direction to left to prevent dropdown to overlap window
              points: ['tr', 'br'],
            }
          : undefined
      }
      {...otherProps}
    />
  )
}
