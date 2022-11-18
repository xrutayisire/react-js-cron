const _excluded = ["value", "setValue", "locale", "className", "weekDays", "disabled", "readOnly", "leadingZero", "period"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function MonthDays(props) {
  const {
      value,
      setValue,
      locale,
      className,
      weekDays,
      disabled,
      readOnly,
      leadingZero,
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const noWeekDays = !weekDays || weekDays.length === 0;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-month-days': true,
    'react-js-cron-month-days-placeholder': !noWeekDays,
    [`${className}-field`]: !!className,
    [`${className}-month-days`]: !!className
  }), [className, noWeekDays]);
  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(() => {
    if (noWeekDays) {
      return locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays;
    }
    return locale.emptyMonthDaysShort || DEFAULT_LOCALE_EN.emptyMonthDaysShort;
  },
  [noWeekDays, localeJSON]);
  const displayMonthDays = !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!weekDays || weekDays.length === 0);
  return displayMonthDays ? React.createElement("div", {
    className: internalClassName
  }, locale.prefixMonthDays !== '' && React.createElement("span", null, locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays), React.createElement(CustomSelect, _extends({
    placeholder: placeholder,
    value: value,
    setValue: setValue,
    unit: UNITS[2],
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: period
  }, selectProps))) : null;
}