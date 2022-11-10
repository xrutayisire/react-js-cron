function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    period,
    periodicityOnDoubleClick,
    mode,
    unitFilter,
    allowClear
  } = props;
  const optionsList = locale.months || DEFAULT_LOCALE_EN.months;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-months': true,
    [`${className}-field`]: !!className,
    [`${className}-months`]: !!className
  }), [className]);
  return React.createElement("div", {
    className: internalClassName
  }, locale.prefixMonths !== '' && React.createElement("span", null, locale.prefixMonths || DEFAULT_LOCALE_EN.prefixMonths), React.createElement(CustomSelect, {
    placeholder: locale.emptyMonths || DEFAULT_LOCALE_EN.emptyMonths,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, UNITS[3]), {}, {
      alt: locale.altMonths || DEFAULT_LOCALE_EN.altMonths
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
  }));
}