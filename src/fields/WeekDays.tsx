import React, { useMemo } from 'react'

import { FieldProps } from '../types'
import CustomSelect from '../components/CustomSelect'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function WeekDays(props: FieldProps) {
  const { value, setValue, locale, className } = props
  const optionsList = locale.weekDays || DEFAULT_LOCALE_EN.weekDays

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-week-days': true,
        [`${className}-week-days`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {locale.prefixWeekDays !== '' && (
        <span>{locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays}</span>
      )}

      <CustomSelect
        placeholder={locale.emptyWeekDays || DEFAULT_LOCALE_EN.emptyWeekDays}
        optionsList={optionsList}
        grid={false}
        value={value}
        type='week-days'
        setValue={setValue}
        startAtZero={false}
        locale={locale}
        className={className}
      />
    </div>
  )
}
