import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { Select } from 'antd'

import { CustomSelectProps } from '../types'
import {
  getCronValueFromNumbers,
  itemMaxNumber,
  itemStartAt,
  classNames,
} from '../utils'
import { DEFAULT_LOCALE_EN } from '../locale'

export default function CustomSelect(props: CustomSelectProps) {
  const {
    value,
    nbOptions,
    grid = true,
    startAtZero = true,
    type,
    optionsList,
    setValue,
    locale,
    className,
    ...otherProps
  } = props

  const [open, setOpen] = useState(false)

  const stringValue = useMemo(() => {
    if (value && Array.isArray(value)) {
      return value.map((value: number) => value.toString())
    }
  }, [value])

  useEffect(() => {
    Array.from(
      document.getElementsByClassName('ant-select-selection-search-input')
    ).forEach((element: Element) => {
      element.setAttribute('readonly', 'readonly')
    })
  }, [])

  const options = useMemo(() => {
    if (optionsList) {
      return optionsList.map((option, index) => {
        const number = startAtZero ? index : index + 1

        return {
          value: number.toString(),
          label: option,
        }
      })
    }

    return [...Array(nbOptions)].map((e, index) => {
      const number = startAtZero ? index : index + 1

      return {
        value: number.toString(),
        label: number.toString(),
      }
    })
  }, [optionsList, nbOptions, startAtZero])

  const renderTag = useCallback(
    (props) => {
      const { value: itemValue } = props

      if (!value || value[0] !== Number(itemValue)) {
        return <></>
      }

      const cronValue = getCronValueFromNumbers(value, type)
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
    [value, type, locale]
  )

  const onClick = useCallback(() => {
    setOpen(true)
  }, [])

  const onBlur = useCallback(() => {
    setOpen(false)
  }, [])

  const simpleClick = useCallback(
    (newValueOption: string) => {
      const newValueOptionNumber = Number(newValueOption)
      let newValue

      if (value) {
        if (value.some((v) => v === newValueOptionNumber)) {
          newValue = value.filter((v) => v !== newValueOptionNumber)
        } else {
          newValue = [...value, newValueOptionNumber].sort(
            (a: number, b: number) => a - b
          )
        }
      } else {
        newValue = [newValueOptionNumber]
      }

      setValue(newValue)
    },
    [setValue, value]
  )

  const doubleClick = useCallback(
    (newValueOption: string) => {
      const startValue = itemStartAt(type)
      const limit = itemMaxNumber(type) + startValue
      const multiple = +newValueOption
      const newValue: number[] = []

      for (let i = startValue; i < limit; i++) {
        if (i % multiple === 0) {
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
    },
    [type, value, options, setValue]
  )

  const clicksRef = useRef<number[]>([])
  const onOptionClick = useCallback(
    (newValueOption: string) => {
      const doubleClickTimeout = 300
      const clicks = clicksRef.current
      clicks.push(new Date().getTime())

      const id = window.setTimeout(() => {
        if (
          clicks.length > 1 &&
          clicks[clicks.length - 1] - clicks[clicks.length - 2] <
            doubleClickTimeout
        ) {
          doubleClick(newValueOption)
        } else {
          simpleClick(newValueOption)
        }

        clicksRef.current = []
      }, doubleClickTimeout)

      return () => {
        window.clearTimeout(id)
      }
    },
    [clicksRef, simpleClick, doubleClick]
  )

  const onChange = useCallback(
    (newValue: any) => {
      if (newValue && newValue.length === 0) {
        setValue([])
      }
    },
    [setValue]
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
        [`react-js-cron-select-dropdown-${type}`]: true,
        'react-js-cron-custom-select-dropdown': true,
        [`react-js-cron-custom-select-dropdown-${type}`]: true,
        'react-js-cron-custom-select-dropdown-grid': !!grid,
        [`${className}-select-dropdown`]: !!className,
        [`${className}-select-dropdown-${type}`]: !!className,
      }),
    [className, type, grid]
  )

  return (
    <Select
      mode='tags'
      allowClear
      virtual={false}
      open={open}
      value={stringValue}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      tagRender={renderTag}
      className={internalClassName}
      dropdownClassName={dropdownClassNames}
      options={options}
      showSearch={false}
      showArrow={true}
      menuItemSelectedIcon={null}
      dropdownMatchSelectWidth={false}
      onSelect={onOptionClick}
      onDeselect={onOptionClick}
      {...otherProps}
    />
  )
}
