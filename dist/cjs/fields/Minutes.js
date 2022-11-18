"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Minutes;
var _react = _interopRequireWildcard(require("react"));
var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));
var _locale = require("../locale");
var _utils = require("../utils");
var _constants = require("../constants");
var _excluded = ["value", "setValue", "locale", "className", "disabled", "readOnly", "leadingZero", "clockFormat", "period"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Minutes(props) {
  var value = props.value,
    setValue = props.setValue,
    locale = props.locale,
    className = props.className,
    disabled = props.disabled,
    readOnly = props.readOnly,
    leadingZero = props.leadingZero,
    clockFormat = props.clockFormat,
    period = props.period,
    selectProps = _objectWithoutProperties(props, _excluded);
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;
    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-minutes': true
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-minutes"), !!className), _classNames));
  }, [className]);
  return _react["default"].createElement("div", {
    className: internalClassName
  }, period === 'hour' ? locale.prefixMinutesForHourPeriod !== '' && _react["default"].createElement("span", null, locale.prefixMinutesForHourPeriod || _locale.DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod) : locale.prefixMinutes !== '' && _react["default"].createElement("span", null, locale.prefixMinutes || _locale.DEFAULT_LOCALE_EN.prefixMinutes), _react["default"].createElement(_CustomSelect["default"], _extends({
    placeholder: period === 'hour' ? locale.emptyMinutesForHourPeriod || _locale.DEFAULT_LOCALE_EN.emptyMinutesForHourPeriod : locale.emptyMinutes || _locale.DEFAULT_LOCALE_EN.emptyMinutes,
    value: value,
    unit: _constants.UNITS[0],
    setValue: setValue,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: period
  }, selectProps)), period === 'hour' && locale.suffixMinutesForHourPeriod !== '' && _react["default"].createElement("span", null, locale.suffixMinutesForHourPeriod || _locale.DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod));
}