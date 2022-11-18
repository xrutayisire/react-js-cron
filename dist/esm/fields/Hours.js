const _excluded = ["value", "setValue", "locale", "className", "disabled", "readOnly", "leadingZero", "clockFormat", "period"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function Hours(props) {
  const {
      value,
      setValue,
      locale,
      className,
      disabled,
      readOnly,
      leadingZero,
      clockFormat,
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-hours': true,
    [`${className}-field`]: !!className,
    [`${className}-hours`]: !!className
  }), [className]);
  return React.createElement("div", {
    className: internalClassName
  }, locale.prefixHours !== '' && React.createElement("span", null, locale.prefixHours || DEFAULT_LOCALE_EN.prefixHours), React.createElement(CustomSelect, _extends({
    placeholder: locale.emptyHours || DEFAULT_LOCALE_EN.emptyHours,
    value: value,
    unit: UNITS[1],
    setValue: setValue,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: period
  }, selectProps)));
}