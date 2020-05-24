import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { FieldProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function MonthDays(props: FieldProps) {
  const { value, setValue, locale, className } = props

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-month-days': true,
        [`${className}-month-days`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {locale.prefixMonthDays !== '' && (
        <span>
          {locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays}
        </span>
      )}

      <CustomSelect
        placeholder={locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays}
        value={value}
        setValue={setValue}
        nbOptions={31}
        startAtZero={false}
        type='month-days'
        locale={locale}
        className={className}
      />
    </div>
  )
}
