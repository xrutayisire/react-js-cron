import React, { useCallback, useMemo } from 'react'
import { Select } from 'antd'

import { PeriodProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function Period(props: PeriodProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    shortcuts,
  } = props
  let options = [
    {
      value: 'year',
      label: locale.yearOption || DEFAULT_LOCALE_EN.yearOption,
    },
    {
      value: 'month',
      label: locale.monthOption || DEFAULT_LOCALE_EN.monthOption,
    },
    {
      value: 'week',
      label: locale.weekOption || DEFAULT_LOCALE_EN.weekOption,
    },
    {
      value: 'day',
      label: locale.dayOption || DEFAULT_LOCALE_EN.dayOption,
    },
    {
      value: 'hour',
      label: locale.hourOption || DEFAULT_LOCALE_EN.hourOption,
    },
    {
      value: 'minute',
      label: locale.minuteOption || DEFAULT_LOCALE_EN.minuteOption,
    },
  ]

  if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
    options = [
      ...options,
      {
        value: 'reboot',
        label: locale.rebootOption || DEFAULT_LOCALE_EN.rebootOption,
      },
    ]
  }

  const handleChange = useCallback(
    (newValue) => {
      if (!readOnly) {
        setValue(newValue)
      }
    },
    [setValue, readOnly]
  )

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-period': true,
        [`${className}-field`]: !!className,
        [`${className}-period`]: !!className,
      }),
    [className]
  )

  const selectClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-select': true,
        'react-js-cron-select-no-prefix': locale.prefixPeriod === '',
        [`${className}-select`]: !!className,
      }),
    [className, locale.prefixPeriod]
  )

  const dropdownClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-select-dropdown': true,
        'react-js-cron-select-dropdown-period': true,
        [`${className}-select-dropdown`]: !!className,
        [`${className}-select-dropdown-period`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {locale.prefixPeriod !== '' && (
        <span>{locale.prefixPeriod || DEFAULT_LOCALE_EN.prefixPeriod}</span>
      )}

      <Select
        key={JSON.stringify(locale)}
        defaultValue={value}
        value={value}
        onChange={handleChange}
        options={options}
        className={selectClassName}
        dropdownClassName={dropdownClassName}
        disabled={disabled}
        showArrow={!readOnly}
        open={readOnly ? false : undefined}
      />
    </div>
  )
}
