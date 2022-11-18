import React, { useMemo, useCallback } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { CustomSelectProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames, sort } from '../utils'
import { parsePartArray, partToString, formatValue } from '../converter'

export default function CustomSelect(props: CustomSelectProps) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    optionsList,
    unit,
    ...selectProps
  } = props

  const stringValue = useMemo(() => {
    if (value && Array.isArray(value)) {
      return value.map((value: number) => value.toString())
    }
    return []
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
    (props: any) => {
      const value = props

      if (!value) {
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
            ? `${locale.everyText || DEFAULT_LOCALE_EN.everyText} 
            ${testEveryValue[1]}`
            : cronValue}
        </div>
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, localeJSON, humanizeLabels, leadingZero, clockFormat]
  )

  const simpleClick = useCallback(
    (event: any) => {
      let newValueOption: number[] = event.target.value;
      if (newValueOption.length == 0) {
        newValueOption.push(0);
      }
      newValueOption = Array.isArray(newValueOption)
        ? sort(newValueOption)
        : [newValueOption]
      const newValue: number[] = newValueOption

      if (newValue.length === unit.total) {
        setValue([])
      } else {
        setValue(newValue)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, value]
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

  return (
    <Select
      multiple={true}
      open={readOnly ? false : undefined}
      value={stringValue}
      onChange={simpleClick}
      renderValue={renderTag}
      className={internalClassName}
      autoWidth={false}
      disabled={disabled}
      {...selectProps}
    >
      {options.map((obj) => (
        <MenuItem key={obj.value} value={obj.value}>
          {obj.label}
        </MenuItem>
      ))}
    </Select>
  )
}
