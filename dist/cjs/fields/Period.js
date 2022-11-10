"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Period;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _locale = require("../locale");

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Period(props) {
  var value = props.value,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      disabled = props.disabled,
      readOnly = props.readOnly,
      shortcuts = props.shortcuts,
      allowedPeriods = props.allowedPeriods;
  var options = [];

  if (allowedPeriods.includes('year')) {
    options.push({
      value: 'year',
      label: locale.yearOption || _locale.DEFAULT_LOCALE_EN.yearOption
    });
  }

  if (allowedPeriods.includes('month')) {
    options.push({
      value: 'month',
      label: locale.monthOption || _locale.DEFAULT_LOCALE_EN.monthOption
    });
  }

  if (allowedPeriods.includes('week')) {
    options.push({
      value: 'week',
      label: locale.weekOption || _locale.DEFAULT_LOCALE_EN.weekOption
    });
  }

  if (allowedPeriods.includes('day')) {
    options.push({
      value: 'day',
      label: locale.dayOption || _locale.DEFAULT_LOCALE_EN.dayOption
    });
  }

  if (allowedPeriods.includes('hour')) {
    options.push({
      value: 'hour',
      label: locale.hourOption || _locale.DEFAULT_LOCALE_EN.hourOption
    });
  }

  if (allowedPeriods.includes('minute')) {
    options.push({
      value: 'minute',
      label: locale.minuteOption || _locale.DEFAULT_LOCALE_EN.minuteOption
    });
  }

  if (allowedPeriods.includes('reboot') && shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
    options.push({
      value: 'reboot',
      label: locale.rebootOption || _locale.DEFAULT_LOCALE_EN.rebootOption
    });
  }

  var handleChange = (0, _react.useCallback)(function (newValue) {
    if (!readOnly) {
      setValue(newValue);
    }
  }, [setValue, readOnly]);
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;

    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-period': true
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-period"), !!className), _classNames));
  }, [className]);
  var selectClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty({
      'react-js-cron-select': true,
      'react-js-cron-select-no-prefix': locale.prefixPeriod === ''
    }, "".concat(className, "-select"), !!className));
  }, [className, locale.prefixPeriod]);
  var dropdownClassName = (0, _react.useMemo)(function () {
    var _classNames3;

    return (0, _utils.classNames)((_classNames3 = {
      'react-js-cron-select-dropdown': true,
      'react-js-cron-select-dropdown-period': true
    }, _defineProperty(_classNames3, "".concat(className, "-select-dropdown"), !!className), _defineProperty(_classNames3, "".concat(className, "-select-dropdown-period"), !!className), _classNames3));
  }, [className]);
  return _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixPeriod !== '' && _react["default"].createElement("span", null, locale.prefixPeriod || _locale.DEFAULT_LOCALE_EN.prefixPeriod), _react["default"].createElement(_antd.Select, {
    key: JSON.stringify(locale),
    defaultValue: value,
    value: value,
    onChange: handleChange,
    options: options,
    className: selectClassName,
    dropdownClassName: dropdownClassName,
    disabled: disabled,
    showArrow: !readOnly,
    open: readOnly ? false : undefined
  }));
}