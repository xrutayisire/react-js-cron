import React, { useMemo } from 'react'

import { WeekDaysProps } from '../types'
import CustomSelect from '../components/CustomSelect'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function WeekDays(props: WeekDaysProps) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    period,
    monthDays,
    disabled,
  } = props
  const optionsList = locale.weekDays || DEFAULT_LOCALE_EN.weekDays
  const noMonthDays = period === 'week' || !monthDays || monthDays.length === 0

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-week-days': true,
        'react-js-cron-week-days-placeholder': !noMonthDays,
        [`${className}-week-days`]: !!className,
      }),
    [className, noMonthDays]
  )

  const localeJSON = JSON.stringify(locale)
  const placeholder = useMemo(() => {
    if (noMonthDays) {
      return locale.emptyWeekDays || DEFAULT_LOCALE_EN.emptyWeekDays
    }

    return locale.emptyWeekDaysShort || DEFAULT_LOCALE_EN.emptyWeekDaysShort
  }, [noMonthDays, localeJSON]) // eslint-disable-line

  return (
    <div className={internalClassName}>
      {locale.prefixWeekDays !== '' && period === 'week' && (
        <span>{locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays}</span>
      )}

      {locale.prefixWeekDaysForMonthAndYearPeriod !== '' &&
        period !== 'week' && (
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
        type='week-days'
        setValue={setValue}
        locale={locale}
        className={className}
        humanizeLabels={humanizeLabels}
        disabled={disabled}
      />
    </div>
  )
}
