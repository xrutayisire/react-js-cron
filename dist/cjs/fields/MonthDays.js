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
var _excluded = ["value", "setValue", "locale", "className", "weekDays", "disabled", "readOnly", "leadingZero", "period"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    selectProps = _objectWithoutProperties(props, _excluded);
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
  },
  [noWeekDays, localeJSON]);
  var displayMonthDays = !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!weekDays || weekDays.length === 0);
  return displayMonthDays ? _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixMonthDays !== '' && _react["default"].createElement("span", null, locale.prefixMonthDays || _locale.DEFAULT_LOCALE_EN.prefixMonthDays), _react["default"].createElement(_CustomSelect["default"], _extends({
    placeholder: placeholder,
    value: value,
    setValue: setValue,
    unit: _constants.UNITS[2],
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: period
  }, selectProps))) : null;
}