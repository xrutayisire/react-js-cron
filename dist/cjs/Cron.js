"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Cron;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Period = _interopRequireDefault(require("./fields/Period"));
var _MonthDays = _interopRequireDefault(require("./fields/MonthDays"));
var _Months = _interopRequireDefault(require("./fields/Months"));
var _Hours = _interopRequireDefault(require("./fields/Hours"));
var _Minutes = _interopRequireDefault(require("./fields/Minutes"));
var _WeekDays = _interopRequireDefault(require("./fields/WeekDays"));
var _utils = require("./utils");
var _locale = require("./locale");
var _converter = require("./converter");
require("./styles.css");
var _excluded = ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "allowEmpty", "humanizeLabels", "humanizeValue", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"],
  _excluded2 = ["className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Cron(props) {
  var _props$clearButton = props.clearButton,
    clearButton = _props$clearButton === void 0 ? true : _props$clearButton,
    _props$clearButtonPro = props.clearButtonProps,
    clearButtonProps = _props$clearButtonPro === void 0 ? {} : _props$clearButtonPro,
    _props$clearButtonAct = props.clearButtonAction,
    clearButtonAction = _props$clearButtonAct === void 0 ? 'fill-with-every' : _props$clearButtonAct,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? _locale.DEFAULT_LOCALE_EN : _props$locale,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    setValue = props.setValue,
    _props$displayError = props.displayError,
    displayError = _props$displayError === void 0 ? true : _props$displayError,
    onError = props.onError,
    className = props.className,
    _props$defaultPeriod = props.defaultPeriod,
    defaultPeriod = _props$defaultPeriod === void 0 ? 'day' : _props$defaultPeriod,
    _props$allowEmpty = props.allowEmpty,
    allowEmpty = _props$allowEmpty === void 0 ? 'for-default-value' : _props$allowEmpty,
    _props$humanizeLabels = props.humanizeLabels,
    humanizeLabels = _props$humanizeLabels === void 0 ? true : _props$humanizeLabels,
    _props$humanizeValue = props.humanizeValue,
    humanizeValue = _props$humanizeValue === void 0 ? false : _props$humanizeValue,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    _props$leadingZero = props.leadingZero,
    leadingZero = _props$leadingZero === void 0 ? false : _props$leadingZero,
    _props$shortcuts = props.shortcuts,
    shortcuts = _props$shortcuts === void 0 ? ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly'] : _props$shortcuts,
    clockFormat = props.clockFormat,
    selectProps = _objectWithoutProperties(props, _excluded);
  var internalValueRef = (0, _react.useRef)(value);
  var defaultPeriodRef = (0, _react.useRef)(defaultPeriod);
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    period = _useState2[0],
    setPeriod = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    monthDays = _useState4[0],
    setMonthDays = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    months = _useState6[0],
    setMonths = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    weekDays = _useState8[0],
    setWeekDays = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    hours = _useState10[0],
    setHours = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    minutes = _useState12[0],
    setMinutes = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setInternalError = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    valueCleared = _useState16[0],
    setValueCleared = _useState16[1];
  var previousValueCleared = (0, _utils.usePrevious)(valueCleared);
  var localeJSON = JSON.stringify(locale);
  (0, _react.useEffect)(function () {
    (0, _converter.setValuesFromCronString)(value, setInternalError, onError, allowEmpty, internalValueRef, true, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
  },
  []);
  (0, _react.useEffect)(function () {
    if (value !== internalValueRef.current) {
      (0, _converter.setValuesFromCronString)(value, setInternalError, onError, allowEmpty, internalValueRef, false, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
    }
  },
  [value, internalValueRef, localeJSON, allowEmpty, shortcuts]);
  (0, _react.useEffect)(function () {
    if ((period || minutes || months || monthDays || weekDays || hours || minutes) && !valueCleared && !previousValueCleared) {
      var cron = (0, _converter.getCronStringFromValues)(period || defaultPeriodRef.current, months, monthDays, weekDays, hours, minutes, humanizeValue);
      setValue(cron);
      internalValueRef.current = cron;
      onError && onError(undefined);
      setInternalError(false);
    } else if (valueCleared) {
      setValueCleared(false);
    }
  },
  [period, monthDays, months, weekDays, hours, minutes, humanizeValue, valueCleared]);
  var handleClear = (0, _react.useCallback)(function () {
    setMonthDays(undefined);
    setMonths(undefined);
    setWeekDays(undefined);
    setHours(undefined);
    setMinutes(undefined);

    var newValue = '';
    var newPeriod = period !== 'reboot' && period ? period : defaultPeriodRef.current;
    if (newPeriod !== period) {
      setPeriod(newPeriod);
    }

    if (clearButtonAction === 'fill-with-every') {
      var cron = (0, _converter.getCronStringFromValues)(newPeriod, undefined, undefined, undefined, undefined, undefined);
      newValue = cron;
    }
    setValue(newValue);
    internalValueRef.current = newValue;
    setValueCleared(true);
    if (allowEmpty === 'never' && clearButtonAction === 'empty') {
      setInternalError(true);
      (0, _utils.setError)(onError, locale);
    } else {
      onError && onError(undefined);
      setInternalError(false);
    }
  },
  [period, setValue, onError, clearButtonAction]);
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;
    return (0, _utils.classNames)((_classNames = {
      'react-js-cron': true,
      'react-js-cron-error': error && displayError,
      'react-js-cron-disabled': disabled,
      'react-js-cron-read-only': readOnly
    }, _defineProperty(_classNames, "".concat(className), !!className), _defineProperty(_classNames, "".concat(className, "-error"), error && displayError && !!className), _defineProperty(_classNames, "".concat(className, "-disabled"), disabled && !!className), _defineProperty(_classNames, "".concat(className, "-read-only"), readOnly && !!className), _classNames));
  }, [className, error, displayError, disabled, readOnly]);
  var clearButtonClassNameProp = clearButtonProps.className,
    otherClearButtonProps = _objectWithoutProperties(clearButtonProps, _excluded2);
  var clearButtonClassName = (0, _react.useMemo)(function () {
    var _classNames2;
    return (0, _utils.classNames)((_classNames2 = {
      'react-js-cron-clear-button': true
    }, _defineProperty(_classNames2, "".concat(className, "-clear-button"), !!className), _defineProperty(_classNames2, "".concat(clearButtonClassNameProp), !!clearButtonClassNameProp), _classNames2));
  }, [className, clearButtonClassNameProp]);
  var otherClearButtonPropsJSON = JSON.stringify(otherClearButtonProps);
  var clearButtonNode = (0, _react.useMemo)(function () {
    if (clearButton && !readOnly) {
      return _react["default"].createElement(_material.Button, {
        style: {
          marginLeft: '10px'
        },
        className: clearButtonClassName,
        variant: "contained",
        color: "secondary",
        disabled: disabled,
        onClick: handleClear
      }, locale.clearButtonText || _locale.DEFAULT_LOCALE_EN.clearButtonText);
    }
    return null;
  },
  [clearButton, readOnly, localeJSON, clearButtonClassName, disabled, otherClearButtonPropsJSON, handleClear]);
  var periodForRender = period || defaultPeriodRef.current;
  return _react["default"].createElement("div", {
    className: internalClassName
  }, _react["default"].createElement(_Period["default"], _extends({
    value: periodForRender,
    setValue: setPeriod,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    shortcuts: shortcuts
  }, selectProps)), periodForRender === 'reboot' ? clearButtonNode : _react["default"].createElement(_react["default"].Fragment, null, periodForRender === 'year' && _react["default"].createElement(_Months["default"], _extends({
    value: months,
    setValue: setMonths,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: periodForRender
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month') && _react["default"].createElement(_MonthDays["default"], _extends({
    value: monthDays,
    setValue: setMonthDays,
    locale: locale,
    className: className,
    weekDays: weekDays,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: periodForRender
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month' || periodForRender === 'week') && _react["default"].createElement(_WeekDays["default"], _extends({
    value: weekDays,
    setValue: setWeekDays,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    monthDays: monthDays,
    disabled: disabled,
    readOnly: readOnly,
    period: periodForRender
  }, selectProps)), _react["default"].createElement("div", null, periodForRender !== 'minute' && periodForRender !== 'hour' && _react["default"].createElement(_Hours["default"], _extends({
    value: hours,
    setValue: setHours,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: periodForRender
  }, selectProps)), periodForRender !== 'minute' && _react["default"].createElement(_Minutes["default"], _extends({
    value: minutes,
    setValue: setMinutes,
    locale: locale,
    period: periodForRender,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat
  }, selectProps)), clearButtonNode)));
}