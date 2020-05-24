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
        ? locale.prefixMinutesWhenHoursPeriod !== '' && (
            <span>
              {locale.prefixMinutesWhenHoursPeriod ||
                DEFAULT_LOCALE_EN.prefixMinutesWhenHoursPeriod}
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
            ? locale.emptyMinutesWhenHoursPeriod ||
              DEFAULT_LOCALE_EN.emptyMinutesWhenHoursPeriod
            : locale.emptyMinutes || DEFAULT_LOCALE_EN.emptyMinutes
        }
        value={value}
        nbOptions={60}
        type='minutes'
        setValue={setValue}
        locale={locale}
        className={className}
      />

      {period === 'hour' && locale.suffixMinutesWhenHoursPeriod !== '' && (
        <span>
          {locale.suffixMinutesWhenHoursPeriod ||
            DEFAULT_LOCALE_EN.suffixMinutesWhenHoursPeriod}
        </span>
      )}
    </div>
  )
}
