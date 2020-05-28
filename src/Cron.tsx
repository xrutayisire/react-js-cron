import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Button } from 'antd'

import { CronProps, PeriodType } from './types'
import Period from './fields/Period'
import MonthDays from './fields/MonthDays'
import Months from './fields/Months'
import Hours from './fields/Hours'
import Minutes from './fields/Minutes'
import WeekDays from './fields/WeekDays'
import { setCron, getCron, classNames } from './utils'
import { DEFAULT_LOCALE_EN } from './locale'

import './styles.css'

export default function Cron(props: CronProps) {
  const {
    clearButton = true,
    locale = DEFAULT_LOCALE_EN,
    value = '',
    setValue,
    displayError = true,
    onError,
    className,
    defaultPeriod = 'day',
    clearButtonProps = {},
    allowEmpty = 'for-default-value',
    humanizeLabels = true,
    humanizeValue = false,
    disabled = false,
    readOnly = false,
    leadingZero = false,
    shortcuts = [
      '@yearly',
      '@annually',
      '@monthly',
      '@weekly',
      '@daily',
      '@midnight',
      '@hourly',
    ],
    clockFormat,
  } = props
  const internalValueRef = useRef<string>(value)
  const defaultPeriodRef = useRef<PeriodType>(defaultPeriod)
  const [period, setPeriod] = useState<PeriodType | undefined>()
  const [monthDays, setMonthDays] = useState<number[] | undefined>()
  const [months, setMonths] = useState<number[] | undefined>()
  const [weekDays, setWeekDays] = useState<number[] | undefined>()
  const [hours, setHours] = useState<number[] | undefined>()
  const [minutes, setMinutes] = useState<number[] | undefined>()
  const [error, setInternalError] = useState<boolean>(false)
  const localeJSON = JSON.stringify(locale)

  useEffect(
    () => {
      setCron(
        value,
        setInternalError,
        onError,
        allowEmpty,
        internalValueRef,
        true,
        locale,
        shortcuts,
        setMinutes,
        setHours,
        setMonthDays,
        setWeekDays,
        setMonths,
        setPeriod
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(
    () => {
      if (value !== internalValueRef.current) {
        setCron(
          value,
          setInternalError,
          onError,
          allowEmpty,
          internalValueRef,
          false,
          locale,
          shortcuts,
          setMinutes,
          setHours,
          setMonthDays,
          setWeekDays,
          setMonths,
          setPeriod
        )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, internalValueRef, localeJSON, allowEmpty, shortcuts]
  )

  useEffect(
    () => {
      // Only change the value if a user touched a field
      if (
        period ||
        minutes ||
        months ||
        monthDays ||
        weekDays ||
        hours ||
        minutes
      ) {
        const cron = getCron(
          period || defaultPeriodRef.current,
          months,
          monthDays,
          weekDays,
          hours,
          minutes,
          humanizeValue
        )

        setValue(cron)
        internalValueRef.current = cron

        onError && onError(undefined)
        setInternalError(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [period, monthDays, months, weekDays, hours, minutes, humanizeValue]
  )

  const handleClear = useCallback(
    () => {
      setMonthDays(undefined)
      setMonths(undefined)
      setWeekDays(undefined)
      setHours(undefined)
      setMinutes(undefined)

      const cron = getCron(
        period || defaultPeriodRef.current,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        humanizeValue
      )

      setValue(cron)
      internalValueRef.current = cron

      onError && onError(undefined)
      setInternalError(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [period, humanizeValue, setValue, onError]
  )

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron': true,
        'react-js-cron-error': error && displayError,
        'react-js-cron-disabled': disabled,
        'react-js-cron-read-only': readOnly,
        [`${className}`]: !!className,
        [`${className}-error`]: error && displayError && !!className,
        [`${className}-disabled`]: disabled && !!className,
        [`${className}-read-only`]: readOnly && !!className,
      }),
    [className, error, displayError, disabled, readOnly]
  )

  const {
    className: clearButtonClassNameProp,
    ...otherClearButtonProps
  } = clearButtonProps
  const clearButtonClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-clear-button': true,
        [`${className}-clear-button`]: !!className,
        [`${clearButtonClassNameProp}`]: !!clearButtonClassNameProp,
      }),
    [className, clearButtonClassNameProp]
  )

  const otherClearButtonPropsJSON = JSON.stringify(otherClearButtonProps)
  const clearButtonNode = useMemo(
    () => {
      if (clearButton && !readOnly) {
        return (
          <Button
            className={clearButtonClassName}
            danger
            type='primary'
            disabled={disabled}
            {...otherClearButtonProps}
            onClick={handleClear}
          >
            {locale.clearButtonText || DEFAULT_LOCALE_EN.clearButtonText}
          </Button>
        )
      }

      return null
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      clearButton,
      readOnly,
      localeJSON,
      clearButtonClassName,
      disabled,
      otherClearButtonPropsJSON,
      handleClear,
    ]
  )

  const periodForRender = period || defaultPeriodRef.current

  return (
    <div className={internalClassName}>
      <Period
        value={periodForRender}
        setValue={setPeriod}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        shortcuts={shortcuts}
      />

      {periodForRender === 'reboot' ? (
        clearButtonNode
      ) : (
        <>
          {periodForRender === 'year' && (
            <Months
              value={months}
              setValue={setMonths}
              locale={locale}
              className={className}
              humanizeLabels={humanizeLabels}
              disabled={disabled}
              readOnly={readOnly}
              period={periodForRender}
            />
          )}

          {(periodForRender === 'year' || periodForRender === 'month') && (
            <MonthDays
              value={monthDays}
              setValue={setMonthDays}
              locale={locale}
              className={className}
              weekDays={weekDays}
              disabled={disabled}
              readOnly={readOnly}
              leadingZero={leadingZero}
              period={periodForRender}
            />
          )}

          {(periodForRender === 'year' ||
            periodForRender === 'month' ||
            periodForRender === 'week') && (
            <WeekDays
              value={weekDays}
              setValue={setWeekDays}
              locale={locale}
              className={className}
              humanizeLabels={humanizeLabels}
              monthDays={monthDays}
              disabled={disabled}
              readOnly={readOnly}
              period={periodForRender}
            />
          )}

          <div>
            {periodForRender !== 'minute' && periodForRender !== 'hour' && (
              <Hours
                value={hours}
                setValue={setHours}
                locale={locale}
                className={className}
                disabled={disabled}
                readOnly={readOnly}
                leadingZero={leadingZero}
                clockFormat={clockFormat}
                period={periodForRender}
              />
            )}

            {periodForRender !== 'minute' && (
              <Minutes
                value={minutes}
                setValue={setMinutes}
                locale={locale}
                period={periodForRender}
                className={className}
                disabled={disabled}
                readOnly={readOnly}
                leadingZero={leadingZero}
                clockFormat={clockFormat}
              />
            )}

            {clearButtonNode}
          </div>
        </>
      )}
    </div>
  )
}
