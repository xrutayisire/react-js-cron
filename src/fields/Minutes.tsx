import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { MinutesProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'
import { UNITS } from '../constants'

export default function Minutes(props: MinutesProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
  } = props
  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-minutes': true,
        [`${className}-field`]: !!className,
        [`${className}-minutes`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {period === 'hour'
        ? locale.prefixMinutesForHourPeriod !== '' && (
            <span>
              {locale.prefixMinutesForHourPeriod ||
                DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod}
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
            ? locale.emptyMinutesForHourPeriod ||
              DEFAULT_LOCALE_EN.emptyMinutesForHourPeriod
            : locale.emptyMinutes || DEFAULT_LOCALE_EN.emptyMinutes
        }
        value={value}
        unit={UNITS[0]}
        setValue={setValue}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        leadingZero={leadingZero}
        clockFormat={clockFormat}
        period={period}
      />

      {period === 'hour' && locale.suffixMinutesForHourPeriod !== '' && (
        <span>
          {locale.suffixMinutesForHourPeriod ||
            DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod}
        </span>
      )}
    </div>
  )
}
