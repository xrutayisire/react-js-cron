const _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "period"];
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
export default function Months(props) {
  const {
      value,
      setValue,
      locale,
      className,
      humanizeLabels,
      disabled,
      readOnly,
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const optionsList = locale.months || DEFAULT_LOCALE_EN.months;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-months': true,
    [`${className}-field`]: !!className,
    [`${className}-months`]: !!className
  }), [className]);
  return React.createElement("div", {
    className: internalClassName
  }, locale.prefixMonths !== '' && React.createElement("span", null, locale.prefixMonths || DEFAULT_LOCALE_EN.prefixMonths), React.createElement(CustomSelect, _extends({
    placeholder: locale.emptyMonths || DEFAULT_LOCALE_EN.emptyMonths,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, UNITS[3]), {}, {
      alt: locale.altMonths || DEFAULT_LOCALE_EN.altMonths
    }),
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period
  }, selectProps)));
}