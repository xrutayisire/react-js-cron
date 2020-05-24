import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { FieldProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'

export default function Hours(props: FieldProps) {
  const { value, setValue, locale, className } = props

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-hours': true,
        [`${className}-hours`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {locale.prefixHours !== '' && (
        <span>{locale.prefixHours || DEFAULT_LOCALE_EN.prefixHours}</span>
      )}

      <CustomSelect
        placeholder={locale.emptyHours || DEFAULT_LOCALE_EN.emptyHours}
        value={value}
        nbOptions={24}
        type='hours'
        setValue={setValue}
        locale={locale}
        className={className}
      />
    </div>
  )
}
