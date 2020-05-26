import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { MinutesProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function Minutes(props: MinutesProps) {
  const { value, setValue, locale, period, className } = props

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-minutes': true,
        [`${className}-minutes`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {period === 'hour'
        ? locale.prefixMinutesWhenHourPeriod !== '' && (
            <span>
              {locale.prefixMinutesWhenHourPeriod ||
                DEFAULT_LOCALE_EN.prefixMinutesWhenHourPeriod}
            </span>
          )
        : locale.prefixMinutes !== '' && (
            <span>
              {locale.prefixMinutes || DEFAULT_LOCALE_EN.prefixMinutes}
            </span>
          )}

      <CustomSelect
        placeholder={
          period === 'hour'
            ? locale.emptyMinutesWhenHourPeriod ||
              DEFAULT_LOCALE_EN.emptyMinutesWhenHourPeriod
            : locale.emptyMinutes || DEFAULT_LOCALE_EN.emptyMinutes
        }
        value={value}
        nbOptions={60}
        type='minutes'
        setValue={setValue}
        locale={locale}
        className={className}
      />

      {period === 'hour' && locale.suffixMinutesWhenHourPeriod !== '' && (
        <span>
          {locale.suffixMinutesWhenHourPeriod ||
            DEFAULT_LOCALE_EN.suffixMinutesWhenHourPeriod}
        </span>
      )}
    </div>
  )
}
