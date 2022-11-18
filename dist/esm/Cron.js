const _excluded = ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "allowEmpty", "humanizeLabels", "humanizeValue", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"],
  _excluded2 = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { Button } from '@mui/material';
import Period from './fields/Period';
import MonthDays from './fields/MonthDays';
import Months from './fields/Months';
import Hours from './fields/Hours';
import Minutes from './fields/Minutes';
import WeekDays from './fields/WeekDays';
import { classNames, setError, usePrevious } from './utils';
import { DEFAULT_LOCALE_EN } from './locale';
import { setValuesFromCronString, getCronStringFromValues } from './converter';
import './styles.css';
export default function Cron(props) {
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
      shortcuts = ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly'],
      clockFormat
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const internalValueRef = useRef(value);
  const defaultPeriodRef = useRef(defaultPeriod);
  const [period, setPeriod] = useState();
  const [monthDays, setMonthDays] = useState();
  const [months, setMonths] = useState();
  const [weekDays, setWeekDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [error, setInternalError] = useState(false);
  const [valueCleared, setValueCleared] = useState(false);
  const previousValueCleared = usePrevious(valueCleared);
  const localeJSON = JSON.stringify(locale);
  useEffect(() => {
    setValuesFromCronString(value, setInternalError, onError, allowEmpty, internalValueRef, true, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
  },
  []);
  useEffect(() => {
    if (value !== internalValueRef.current) {
      setValuesFromCronString(value, setInternalError, onError, allowEmpty, internalValueRef, false, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
    }
  },
  [value, internalValueRef, localeJSON, allowEmpty, shortcuts]);
  useEffect(() => {
    if ((period || minutes || months || monthDays || weekDays || hours || minutes) && !valueCleared && !previousValueCleared) {
      const cron = getCronStringFromValues(period || defaultPeriodRef.current, months, monthDays, weekDays, hours, minutes, humanizeValue);
      setValue(cron);
      internalValueRef.current = cron;
      onError && onError(undefined);
      setInternalError(false);
    } else if (valueCleared) {
      setValueCleared(false);
    }
  },
  [period, monthDays, months, weekDays, hours, minutes, humanizeValue, valueCleared]);
  const handleClear = useCallback(() => {
    setMonthDays(undefined);
    setMonths(undefined);
    setWeekDays(undefined);
    setHours(undefined);
    setMinutes(undefined);

    let newValue = '';
    const newPeriod = period !== 'reboot' && period ? period : defaultPeriodRef.current;
    if (newPeriod !== period) {
      setPeriod(newPeriod);
    }

    if (clearButtonAction === 'fill-with-every') {
      const cron = getCronStringFromValues(newPeriod, undefined, undefined, undefined, undefined, undefined);
      newValue = cron;
    }
    setValue(newValue);
    internalValueRef.current = newValue;
    setValueCleared(true);
    if (allowEmpty === 'never' && clearButtonAction === 'empty') {
      setInternalError(true);
      setError(onError, locale);
    } else {
      onError && onError(undefined);
      setInternalError(false);
    }
  },
  [period, setValue, onError, clearButtonAction]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron': true,
    'react-js-cron-error': error && displayError,
    'react-js-cron-disabled': disabled,
    'react-js-cron-read-only': readOnly,
    [`${className}`]: !!className,
    [`${className}-error`]: error && displayError && !!className,
    [`${className}-disabled`]: disabled && !!className,
    [`${className}-read-only`]: readOnly && !!className
  }), [className, error, displayError, disabled, readOnly]);
  const {
      className: clearButtonClassNameProp
    } = clearButtonProps,
    otherClearButtonProps = _objectWithoutProperties(clearButtonProps, _excluded2);
  const clearButtonClassName = useMemo(() => classNames({
    'react-js-cron-clear-button': true,
    [`${className}-clear-button`]: !!className,
    [`${clearButtonClassNameProp}`]: !!clearButtonClassNameProp
  }), [className, clearButtonClassNameProp]);
  const otherClearButtonPropsJSON = JSON.stringify(otherClearButtonProps);
  const clearButtonNode = useMemo(() => {
    if (clearButton && !readOnly) {
      return React.createElement(Button, {
        style: {
          marginLeft: '10px'
        },
        className: clearButtonClassName,
        variant: "contained",
        color: "secondary",
        disabled: disabled,
        onClick: handleClear
      }, locale.clearButtonText || DEFAULT_LOCALE_EN.clearButtonText);
    }
    return null;
  },
  [clearButton, readOnly, localeJSON, clearButtonClassName, disabled, otherClearButtonPropsJSON, handleClear]);
  const periodForRender = period || defaultPeriodRef.current;
  return React.createElement("div", {
    className: internalClassName
  }, React.createElement(Period, _extends({
    value: periodForRender,
    setValue: setPeriod,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    shortcuts: shortcuts
  }, selectProps)), periodForRender === 'reboot' ? clearButtonNode : React.createElement(React.Fragment, null, periodForRender === 'year' && React.createElement(Months, _extends({
    value: months,
    setValue: setMonths,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: periodForRender
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month') && React.createElement(MonthDays, _extends({
    value: monthDays,
    setValue: setMonthDays,
    locale: locale,
    className: className,
    weekDays: weekDays,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: periodForRender
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month' || periodForRender === 'week') && React.createElement(WeekDays, _extends({
    value: weekDays,
    setValue: setWeekDays,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    monthDays: monthDays,
    disabled: disabled,
    readOnly: readOnly,
    period: periodForRender
  }, selectProps)), React.createElement("div", null, periodForRender !== 'minute' && periodForRender !== 'hour' && React.createElement(Hours, _extends({
    value: hours,
    setValue: setHours,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: periodForRender
  }, selectProps)), periodForRender !== 'minute' && React.createElement(Minutes, _extends({
    value: minutes,
    setValue: setMinutes,
    locale: locale,
    period: periodForRender,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat
  }, selectProps)), clearButtonNode)));
}