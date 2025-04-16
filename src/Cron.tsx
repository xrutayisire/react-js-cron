import { Button } from 'antd'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { getCronStringFromValues, setValuesFromCronString } from './converter'
import Hours from './fields/Hours'
import Minutes from './fields/Minutes'
import MonthDays from './fields/MonthDays'
import Months from './fields/Months'
import Period from './fields/Period'
import WeekDays from './fields/WeekDays'
import { DEFAULT_LOCALE_EN } from './locale'
import { CronProps, PeriodType } from './types'
import { classNames, setError, usePrevious } from './utils'

export default function Cron(props: CronProps) {
  const {
    clearButton = true,
    clearButtonProps = {},
    clearButtonAction = 'fill-with-every',
    locale = DEFAULT_LOCALE_EN,
    value = '',
    setValue,
    displayError = true,
    onError,
    className,
    defaultPeriod = 'day',
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
    periodicityOnDoubleClick = true,
    mode = 'multiple',
    allowedDropdowns = [
      'period',
      'months',
      'month-days',
      'week-days',
      'hours',
      'minutes',
    ],
    allowedPeriods = [
      'year',
      'month',
      'week',
      'day',
      'hour',
      'minute',
      'reboot',
    ],
    allowClear,
    dropdownsConfig,
    getPopupContainer,
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
  const [valueCleared, setValueCleared] = useState<boolean>(false)
  const previousValueCleared = usePrevious(valueCleared)
  const localeJSON = JSON.stringify(locale)

  useEffect(
    () => {
      setValuesFromCronString(
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
        setMonths,
        setWeekDays,
        setPeriod
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(
    () => {
      if (value !== internalValueRef.current) {
        setValuesFromCronString(
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
          setMonths,
          setWeekDays,
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
      // and if the user didn't use the clear button
      if (
        (period || minutes || months || monthDays || weekDays || hours) &&
        !valueCleared &&
        !previousValueCleared
      ) {
        const selectedPeriod = period || defaultPeriodRef.current
        const cron = getCronStringFromValues(
          selectedPeriod,
          months,
          monthDays,
          weekDays,
          hours,
          minutes,
          humanizeValue,
          dropdownsConfig
        )

        setValue(cron, { selectedPeriod })
        internalValueRef.current = cron

        onError && onError(undefined)
        setInternalError(false)
      } else if (valueCleared) {
        setValueCleared(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      period,
      monthDays,
      months,
      weekDays,
      hours,
      minutes,
      humanizeValue,
      valueCleared,
      dropdownsConfig,
    ]
  )

  const handleClear = useCallback(
    () => {
      setMonthDays(undefined)
      setMonths(undefined)
      setWeekDays(undefined)
      setHours(undefined)
      setMinutes(undefined)

      // When clearButtonAction is 'empty'
      let newValue = ''

      const newPeriod =
        period !== 'reboot' && period ? period : defaultPeriodRef.current

      if (newPeriod !== period) {
        setPeriod(newPeriod)
      }

      // When clearButtonAction is 'fill-with-every'
      if (clearButtonAction === 'fill-with-every') {
        const cron = getCronStringFromValues(
          newPeriod,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined
        )

        newValue = cron
      }

      setValue(newValue, { selectedPeriod: newPeriod })
      internalValueRef.current = newValue

      setValueCleared(true)

      if (allowEmpty === 'never' && clearButtonAction === 'empty') {
        setInternalError(true)
        setError(onError, locale)
      } else {
        onError && onError(undefined)
        setInternalError(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [period, setValue, onError, clearButtonAction]
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

  const { className: clearButtonClassNameProp, ...otherClearButtonProps } =
    clearButtonProps
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
      {allowedDropdowns.includes('period') && (
        <Period
          value={periodForRender}
          setValue={setPeriod}
          locale={locale}
          className={className}
          disabled={dropdownsConfig?.period?.disabled ?? disabled}
          readOnly={dropdownsConfig?.period?.readOnly ?? readOnly}
          shortcuts={shortcuts}
          allowedPeriods={allowedPeriods}
          allowClear={dropdownsConfig?.period?.allowClear ?? allowClear}
          getPopupContainer={getPopupContainer}
        />
      )}

      {periodForRender === 'reboot' ? (
        clearButtonNode
      ) : (
        <>
          {periodForRender === 'year' &&
            allowedDropdowns.includes('months') && (
              <Months
                value={months}
                setValue={setMonths}
                locale={locale}
                className={className}
                humanizeLabels={
                  dropdownsConfig?.months?.humanizeLabels ?? humanizeLabels
                }
                disabled={dropdownsConfig?.months?.disabled ?? disabled}
                readOnly={dropdownsConfig?.months?.readOnly ?? readOnly}
                period={periodForRender}
                periodicityOnDoubleClick={
                  dropdownsConfig?.months?.periodicityOnDoubleClick ??
                  periodicityOnDoubleClick
                }
                mode={dropdownsConfig?.months?.mode ?? mode}
                allowClear={dropdownsConfig?.months?.allowClear ?? allowClear}
                filterOption={dropdownsConfig?.months?.filterOption}
                getPopupContainer={getPopupContainer}
              />
            )}

          {(periodForRender === 'year' || periodForRender === 'month') &&
            allowedDropdowns.includes('month-days') && (
              <MonthDays
                value={monthDays}
                setValue={setMonthDays}
                locale={locale}
                className={className}
                weekDays={weekDays}
                disabled={dropdownsConfig?.['month-days']?.disabled ?? disabled}
                readOnly={dropdownsConfig?.['month-days']?.readOnly ?? readOnly}
                leadingZero={
                  dropdownsConfig?.['month-days']?.leadingZero ?? leadingZero
                }
                period={periodForRender}
                periodicityOnDoubleClick={
                  dropdownsConfig?.['month-days']?.periodicityOnDoubleClick ??
                  periodicityOnDoubleClick
                }
                mode={dropdownsConfig?.['month-days']?.mode ?? mode}
                allowClear={
                  dropdownsConfig?.['month-days']?.allowClear ?? allowClear
                }
                filterOption={dropdownsConfig?.['month-days']?.filterOption}
                getPopupContainer={getPopupContainer}
              />
            )}

          {(periodForRender === 'year' ||
            periodForRender === 'month' ||
            periodForRender === 'week') &&
            allowedDropdowns.includes('week-days') && (
              <WeekDays
                value={weekDays}
                setValue={setWeekDays}
                locale={locale}
                className={className}
                humanizeLabels={
                  dropdownsConfig?.['week-days']?.humanizeLabels ??
                  humanizeLabels
                }
                monthDays={monthDays}
                disabled={dropdownsConfig?.['week-days']?.disabled ?? disabled}
                readOnly={dropdownsConfig?.['week-days']?.readOnly ?? readOnly}
                period={periodForRender}
                periodicityOnDoubleClick={
                  dropdownsConfig?.['week-days']?.periodicityOnDoubleClick ??
                  periodicityOnDoubleClick
                }
                mode={dropdownsConfig?.['week-days']?.mode ?? mode}
                allowClear={
                  dropdownsConfig?.['week-days']?.allowClear ?? allowClear
                }
                filterOption={dropdownsConfig?.['week-days']?.filterOption}
                getPopupContainer={getPopupContainer}
              />
            )}

          <div>
            {periodForRender !== 'minute' &&
              periodForRender !== 'hour' &&
              allowedDropdowns.includes('hours') && (
                <Hours
                  value={hours}
                  setValue={setHours}
                  locale={locale}
                  className={className}
                  disabled={dropdownsConfig?.hours?.disabled ?? disabled}
                  readOnly={dropdownsConfig?.hours?.readOnly ?? readOnly}
                  leadingZero={
                    dropdownsConfig?.hours?.leadingZero ?? leadingZero
                  }
                  clockFormat={clockFormat}
                  period={periodForRender}
                  periodicityOnDoubleClick={
                    dropdownsConfig?.hours?.periodicityOnDoubleClick ??
                    periodicityOnDoubleClick
                  }
                  mode={dropdownsConfig?.hours?.mode ?? mode}
                  allowClear={dropdownsConfig?.hours?.allowClear ?? allowClear}
                  filterOption={dropdownsConfig?.hours?.filterOption}
                  getPopupContainer={getPopupContainer}
                />
              )}

            {periodForRender !== 'minute' &&
              allowedDropdowns.includes('minutes') && (
                <Minutes
                  value={minutes}
                  setValue={setMinutes}
                  locale={locale}
                  period={periodForRender}
                  className={className}
                  disabled={dropdownsConfig?.minutes?.disabled ?? disabled}
                  readOnly={dropdownsConfig?.minutes?.readOnly ?? readOnly}
                  leadingZero={
                    dropdownsConfig?.minutes?.leadingZero ?? leadingZero
                  }
                  clockFormat={clockFormat}
                  periodicityOnDoubleClick={
                    dropdownsConfig?.minutes?.periodicityOnDoubleClick ??
                    periodicityOnDoubleClick
                  }
                  mode={dropdownsConfig?.minutes?.mode ?? mode}
                  allowClear={
                    dropdownsConfig?.minutes?.allowClear ?? allowClear
                  }
                  filterOption={dropdownsConfig?.minutes?.filterOption}
                  getPopupContainer={getPopupContainer}
                />
              )}

            {clearButtonNode}
          </div>
        </>
      )}
    </div>
  )
}
