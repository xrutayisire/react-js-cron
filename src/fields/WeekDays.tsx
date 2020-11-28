import React, { useMemo } from 'react'

import { WeekDaysProps } from '../types'
import CustomSelect from '../components/CustomSelect'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'
import { UNITS } from '../constants'

export default function WeekDays(props: WeekDaysProps) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    monthDays,
    disabled,
    readOnly,
    period,
  } = props
  const optionsList = locale.weekDays || DEFAULT_LOCALE_EN.weekDays
  const noMonthDays = period === 'week' || !monthDays || monthDays.length === 0

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-week-days': true,
        'react-js-cron-week-days-placeholder': !noMonthDays,
        [`${className}-field`]: !!className,
        [`${className}-week-days`]: !!className,
      }),
    [className, noMonthDays]
  )

  const localeJSON = JSON.stringify(locale)
  const placeholder = useMemo(
    () => {
      if (noMonthDays) {
        return locale.emptyWeekDays || DEFAULT_LOCALE_EN.emptyWeekDays
      }

      return locale.emptyWeekDaysShort || DEFAULT_LOCALE_EN.emptyWeekDaysShort
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noMonthDays, localeJSON]
  )

  const displayWeekDays =
    period === 'week' ||
    !readOnly ||
    (value && value.length > 0) ||
    ((!value || value.length === 0) && (!monthDays || monthDays.length === 0))

  const monthDaysIsDisplayed =
    !readOnly ||
    (monthDays && monthDays.length > 0) ||
    ((!monthDays || monthDays.length === 0) && (!value || value.length === 0))

  return displayWeekDays ? (
    <div className={internalClassName}>
      {locale.prefixWeekDays !== '' &&
        (period === 'week' || !monthDaysIsDisplayed) && (
          <span>
            {locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays}
          </span>
        )}

      {locale.prefixWeekDaysForMonthAndYearPeriod !== '' &&
        period !== 'week' &&
        monthDaysIsDisplayed && (
          <span>
            {locale.prefixWeekDaysForMonthAndYearPeriod ||
              DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod}
          </span>
        )}

      <CustomSelect
        placeholder={placeholder}
        optionsList={optionsList}
        grid={false}
        value={value}
        unit={{
          ...UNITS[4],
          // Allow translation of alternative labels when using "humanizeLabels"
          // Issue #3
          alt: locale.altWeekDays || DEFAULT_LOCALE_EN.altWeekDays,
        }}
        setValue={setValue}
        locale={locale}
        className={className}
        humanizeLabels={humanizeLabels}
        disabled={disabled}
        readOnly={readOnly}
        period={period}
      />
    </div>
  ) : null
}
