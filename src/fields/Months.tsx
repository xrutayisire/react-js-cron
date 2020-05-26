import React, { useMemo } from 'react'

import { MonthsProps } from '../types'
import CustomSelect from '../components/CustomSelect'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function Months(props: MonthsProps) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    disabled,
    readOnly,
  } = props
  const optionsList = locale.months || DEFAULT_LOCALE_EN.months

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-months': true,
        [`${className}-months`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {locale.prefixMonths !== '' && (
        <span>{locale.prefixMonths || DEFAULT_LOCALE_EN.prefixMonths}</span>
      )}

      <CustomSelect
        placeholder={locale.emptyMonths || DEFAULT_LOCALE_EN.emptyMonths}
        optionsList={optionsList}
        grid={false}
        value={value}
        type='months'
        setValue={setValue}
        startAtZero={false}
        locale={locale}
        className={className}
        humanizeLabels={humanizeLabels}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  )
}
