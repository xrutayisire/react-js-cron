const _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "monthDays", "disabled", "readOnly", "period"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
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
  },
  [noMonthDays, localeJSON]);
  const displayWeekDays = period === 'week' || !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!monthDays || monthDays.length === 0);
  const monthDaysIsDisplayed = !readOnly || monthDays && monthDays.length > 0 || (!monthDays || monthDays.length === 0) && (!value || value.length === 0);
  return displayWeekDays ? React.createElement("div", {
    className: internalClassName
  }, locale.prefixWeekDays !== '' && (period === 'week' || !monthDaysIsDisplayed) && React.createElement("span", null, locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays), locale.prefixWeekDaysForMonthAndYearPeriod !== '' && period !== 'week' && monthDaysIsDisplayed && React.createElement("span", null, locale.prefixWeekDaysForMonthAndYearPeriod || DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod), React.createElement(CustomSelect, _extends({
    placeholder: placeholder,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, UNITS[4]), {}, {
      alt: locale.altWeekDays || DEFAULT_LOCALE_EN.altWeekDays
    }),
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period
  }, selectProps))) : null;
}