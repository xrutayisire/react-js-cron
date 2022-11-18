const _excluded = ["value", "setValue", "locale", "className", "disabled", "readOnly", "shortcuts"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useCallback, useMemo } from 'react';
import { Select, MenuItem } from '@mui/material';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
export default function Period(props) {
  const {
      value,
      setValue,
      locale,
      className,
      disabled,
      readOnly,
      shortcuts
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  let options = [{
    value: 'year',
    label: locale.yearOption || DEFAULT_LOCALE_EN.yearOption
  }, {
    value: 'month',
    label: locale.monthOption || DEFAULT_LOCALE_EN.monthOption
  }, {
    value: 'week',
    label: locale.weekOption || DEFAULT_LOCALE_EN.weekOption
  }, {
    value: 'day',
    label: locale.dayOption || DEFAULT_LOCALE_EN.dayOption
  }, {
    value: 'hour',
    label: locale.hourOption || DEFAULT_LOCALE_EN.hourOption
  }, {
    value: 'minute',
    label: locale.minuteOption || DEFAULT_LOCALE_EN.minuteOption
  }];
  if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
    options = [...options, {
      value: 'reboot',
      label: locale.rebootOption || DEFAULT_LOCALE_EN.rebootOption
    }];
  }
  const handleChange = useCallback(event => {
    if (!readOnly) {
      setValue(event.target.value);
    }
  }, [setValue, readOnly]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-period': true,
    [`${className}-field`]: !!className,
    [`${className}-period`]: !!className
  }), [className]);
  const selectClassName = useMemo(() => classNames({
    'react-js-cron-select': true,
    'react-js-cron-select-no-prefix': locale.prefixPeriod === '',
    [`${className}-select`]: !!className
  }), [className, locale.prefixPeriod]);

  return React.createElement("div", {
    className: internalClassName
  }, locale.prefixPeriod !== '' && React.createElement("span", null, locale.prefixPeriod || DEFAULT_LOCALE_EN.prefixPeriod), React.createElement(Select, _extends({
    key: JSON.stringify(locale),
    defaultValue: value,
    value: value,
    onChange: handleChange,
    className: selectClassName,
    disabled: disabled,
    open: readOnly ? false : undefined
  }, selectProps), options.map(obj => React.createElement(MenuItem, {
    key: obj.value,
    value: obj.value
  }, obj.label))));
}