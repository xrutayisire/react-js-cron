import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { UNITS } from '../constants'
import { DEFAULT_LOCALE_EN } from '../locale'
import { MonthDaysProps } from '../types'
import { classNames } from '../utils'

export default function MonthDays(props: MonthDaysProps) {
  const {
    value,
    setValue,
    locale,
    className,
    weekDays,
    disabled,
    readOnly,
    leadingZero,
    period,
    periodicityOnDoubleClick,
    mode,
    allowClear,
    filterOption,
    getPopupContainer,
  } = props
  const noWeekDays = !weekDays || weekDays.length === 0

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-month-days': true,
        'react-js-cron-month-days-placeholder': !noWeekDays,
        [`${className}-field`]: !!className,
        [`${className}-month-days`]: !!className,
      }),
    [className, noWeekDays]
  )

  const localeJSON = JSON.stringify(locale)
  const placeholder = useMemo(
    () => {
      if (noWeekDays) {
        return locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays
      }

      return locale.emptyMonthDaysShort || DEFAULT_LOCALE_EN.emptyMonthDaysShort
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noWeekDays, localeJSON]
  )

  const displayMonthDays =
    !readOnly ||
    (value && value.length > 0) ||
    ((!value || value.length === 0) && (!weekDays || weekDays.length === 0))

  return displayMonthDays ? (
    <div className={internalClassName}>
      {locale.prefixMonthDays !== '' && (
        <span>
          {locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays}
        </span>
      )}

      <CustomSelect
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        unit={UNITS[2]}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        leadingZero={leadingZero}
        period={period}
        periodicityOnDoubleClick={periodicityOnDoubleClick}
        mode={mode}
        allowClear={allowClear}
        filterOption={filterOption}
        getPopupContainer={getPopupContainer}
      />
    </div>
  ) : null
}
