"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthDays;

var _react = _interopRequireWildcard(require("react"));

var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));

var _locale = require("../locale");

var _utils = require("../utils");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MonthDays(props) {
  var value = props.value,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      weekDays = props.weekDays,
      disabled = props.disabled,
      readOnly = props.readOnly,
      leadingZero = props.leadingZero,
      period = props.period,
      periodicityOnDoubleClick = props.periodicityOnDoubleClick,
      mode = props.mode,
      unitFilter = props.unitFilter,
      allowClear = props.allowClear;
  var noWeekDays = !weekDays || weekDays.length === 0;
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;

    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-month-days': true,
      'react-js-cron-month-days-placeholder': !noWeekDays
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-month-days"), !!className), _classNames));
  }, [className, noWeekDays]);
  var localeJSON = JSON.stringify(locale);
  var placeholder = (0, _react.useMemo)(function () {
    if (noWeekDays) {
      return locale.emptyMonthDays || _locale.DEFAULT_LOCALE_EN.emptyMonthDays;
    }

    return locale.emptyMonthDaysShort || _locale.DEFAULT_LOCALE_EN.emptyMonthDaysShort;
  }, [noWeekDays, localeJSON]);
  var displayMonthDays = !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!weekDays || weekDays.length === 0);
  return displayMonthDays ? _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixMonthDays !== '' && _react["default"].createElement("span", null, locale.prefixMonthDays || _locale.DEFAULT_LOCALE_EN.prefixMonthDays), _react["default"].createElement(_CustomSelect["default"], {
    placeholder: placeholder,
    value: value,
    setValue: setValue,
    unit: _constants.UNITS[2],
    unitFilter: unitFilter,
    allowClear: allowClear,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: period,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode
  })) : null;
}