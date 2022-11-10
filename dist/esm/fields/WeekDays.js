function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function WeekDays(props) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    monthDays,
    disabled,
    readOnly,
    period,
    periodicityOnDoubleClick,
    mode,
    unitFilter,
    allowClear
  } = props;
  const optionsList = locale.weekDays || DEFAULT_LOCALE_EN.weekDays;
  const noMonthDays = period === 'week' || !monthDays || monthDays.length === 0;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-week-days': true,
    'react-js-cron-week-days-placeholder': !noMonthDays,
    [`${className}-field`]: !!className,
    [`${className}-week-days`]: !!className
  }), [className, noMonthDays]);
  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(() => {
    if (noMonthDays) {
      return locale.emptyWeekDays || DEFAULT_LOCALE_EN.emptyWeekDays;
    }

    return locale.emptyWeekDaysShort || DEFAULT_LOCALE_EN.emptyWeekDaysShort;
  }, [noMonthDays, localeJSON]);
  const displayWeekDays = period === 'week' || !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!monthDays || monthDays.length === 0);
  const monthDaysIsDisplayed = !readOnly || monthDays && monthDays.length > 0 || (!monthDays || monthDays.length === 0) && (!value || value.length === 0);
  return displayWeekDays ? React.createElement("div", {
    className: internalClassName
  }, locale.prefixWeekDays !== '' && (period === 'week' || !monthDaysIsDisplayed) && React.createElement("span", null, locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays), locale.prefixWeekDaysForMonthAndYearPeriod !== '' && period !== 'week' && monthDaysIsDisplayed && React.createElement("span", null, locale.prefixWeekDaysForMonthAndYearPeriod || DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod), React.createElement(CustomSelect, {
    placeholder: placeholder,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, UNITS[4]), {}, {
      alt: locale.altWeekDays || DEFAULT_LOCALE_EN.altWeekDays
    }),
    unitFilter: unitFilter,
    allowClear: allowClear,
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode
  })) : null;
}