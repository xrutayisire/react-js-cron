import { Select } from 'antd'
import React, { useCallback, useMemo, useRef } from 'react'

import { formatValue, parsePartArray, partToString } from '../converter'
import { DEFAULT_LOCALE_EN } from '../locale'
import { Clicks, CustomSelectProps } from '../types'
import { classNames, sort } from '../utils'

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
    periodicityOnDoubleClick,
    mode,
    allowClear,
    filterOption = () => true,
    getPopupContainer,
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
        return optionsList
          .map((option, index) => {
            const number = unit.min === 0 ? index : index + 1

            return {
              value: number.toString(),
              label: option,
            }
          })
          .filter(filterOption)
      }

      return [...Array(unit.total)]
        .map((e, index) => {
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
        .filter(filterOption)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [optionsList, leadingZero, humanizeLabels, clockFormat]
  )
  const localeJSON = JSON.stringify(locale)
  const renderTag = useCallback(
    (props: { value: string[] | undefined }) => {
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
        newValue = mode === 'single' ? [] : [...value]

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
            periodicityOnDoubleClick &&
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
    [clicksRef, simpleClick, doubleClick, readOnly, periodicityOnDoubleClick]
  )

  // Used by the select clear icon
  const onClear = useCallback(() => {
    if (!readOnly) {
      setValue([])
    }
  }, [setValue, readOnly])

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-select': true,
        'react-js-cron-custom-select': true,
        [`${className}-select`]: !!className,
      }),
    [className]
  )

  const popupClassName = useMemo(
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
    <Select<string[] | undefined>
      // Use 'multiple' instead of 'tags‘ mode
      // cf: Issue #2
      mode={
        mode === 'single' && !periodicityOnDoubleClick ? undefined : 'multiple'
      }
      allowClear={allowClear ?? !readOnly}
      virtual={false}
      open={readOnly ? false : undefined}
      value={stringValue}
      onClear={onClear}
      tagRender={renderTag}
      className={internalClassName}
      popupClassName={popupClassName}
      options={options}
      showSearch={false}
      suffixIcon={readOnly ? null : undefined}
      menuItemSelectedIcon={null}
      popupMatchSelectWidth={false}
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
      data-testid={`custom-select-${unit.type}`}
      getPopupContainer={getPopupContainer}
      {...otherProps}
    />
  )
}
