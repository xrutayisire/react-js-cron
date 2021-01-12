import React, { useMemo, useCallback } from 'react'
import { Select, MenuItem } from '@material-ui/core'

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
    (props) => {
      const value = props

      if (!value || Number(value[0]) === NaN) {
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

      // if (value) {
      //   newValue = [...value]

      //   newValueOptions.forEach((o) => {
      //     const newValueOptionNumber = Number(o)

      //     if (value.some((v) => v === newValueOptionNumber)) {
      //       newValue = newValue.filter((v) => v !== newValueOptionNumber)
      //     } else {
      //       newValue = sort([...newValue, newValueOptionNumber])
      //     }
      //   })
      // }

      if (newValue.length === unit.total) {
        setValue([])
      } else {
        setValue(newValue)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, value]
  )

  // const doubleClick = useCallback(
  //   (newValueOption: number) => {
  //     if (newValueOption !== 0 && newValueOption !== 1) {
  //       const limit = unit.total + unit.min
  //       const newValue: number[] = []

  //       for (let i = unit.min; i < limit; i++) {
  //         if (i % newValueOption === 0) {
  //           newValue.push(i)
  //         }
  //       }
  //       const oldValueEqualNewValue =
  //         value &&
  //         newValue &&
  //         value.length === newValue.length &&
  //         value.every((v: number, i: number) => v === newValue[i])
  //       const allValuesSelected = newValue.length === options.length

  //       if (allValuesSelected) {
  //         setValue([])
  //       } else if (oldValueEqualNewValue) {
  //         setValue([])
  //       } else {
  //         setValue(newValue)
  //       }
  //     } else {
  //       setValue([])
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [value, options, setValue]
  // )
  // // Used by the select clear icon
  // const onChange = useCallback(
  //   (newValue: any) => {
  //     if (!readOnly) {
  //       if (newValue && newValue.length === 0) {
  //         setValue([])
  //       }
  //     }
  //   },
  //   [setValue, readOnly]
  // )

  // const clicksRef = useRef<Clicks[]>([])
  // const onOptionClick = useCallback(
  //   (event: any) => {
  //     const newValueOption = event.target.value;
  //     if (!readOnly) {
  //       // const doubleClickTimeout = 300
  //       // const clicks = clicksRef.current
  //       // newValueOption.forEach((newValue: number) => {


  //       //   clicks.push({
  //       //     time: new Date().getTime(),
  //       //     value: Number(newValue),
  //       //   })
  //       // });
  //       simpleClick(Number(newValueOption))
  //       const id = window.setTimeout(() => {
  //         if (
  //           clicks.length > 1 &&
  //           clicks[clicks.length - 1].time - clicks[clicks.length - 2].time <
  //           doubleClickTimeout
  //         ) {
  //           if (
  //             clicks[clicks.length - 1].value ===
  //             clicks[clicks.length - 2].value
  //           ) {
  //             doubleClick(Number(newValueOption))
  //           } else {
  //             simpleClick([
  //               clicks[clicks.length - 2].value,
  //               clicks[clicks.length - 1].value,
  //             ])
  //           }
  //         } else {
  //           simpleClick(Number(newValueOption))
  //         }

  //         clicksRef.current = []
  //       }, doubleClickTimeout)
  //       onChange(newValueOption)
  //       return () => {
  //         window.clearTimeout(id)
  //       }
  //     }
  //   },
  //   [clicksRef, simpleClick, doubleClick, readOnly, onChange]
  // )



  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-select': true,
        'react-js-cron-custom-select': true,
        [`${className}-select`]: !!className,
      }),
    [className]
  )

  // const dropdownClassNames = useMemo(
  //   () =>
  //     classNames({
  //       'react-js-cron-select-dropdown': true,
  //       [`react-js-cron-select-dropdown-${unit.type}`]: true,
  //       'react-js-cron-custom-select-dropdown': true,
  //       [`react-js-cron-custom-select-dropdown-${unit.type}`]: true,
  //       [`react-js-cron-custom-select-dropdown-minutes-large`]:
  //         unit.type === 'minutes' && period !== 'hour' && period !== 'day',
  //       [`react-js-cron-custom-select-dropdown-minutes-medium`]:
  //         unit.type === 'minutes' && (period === 'day' || period === 'hour'),
  //       'react-js-cron-custom-select-dropdown-hours-twelve-hour-clock':
  //         unit.type === 'hours' && clockFormat === '12-hour-clock',
  //       'react-js-cron-custom-select-dropdown-grid': !!grid,
  //       [`${className}-select-dropdown`]: !!className,
  //       [`${className}-select-dropdown-${unit.type}`]: !!className,
  //     }),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [className, grid, clockFormat, period]
  // )

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
    >
      {options.map((obj) => (
        <MenuItem key={obj.value} value={obj.value}>
          {obj.label}
        </MenuItem>
      ))}
    </Select>
  )
}
