"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomSelect;
var _react = _interopRequireWildcard(require("react"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _locale = require("../locale");
var _utils = require("../utils");
var _converter = require("../converter");
var _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "leadingZero", "clockFormat", "optionsList", "unit"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function CustomSelect(props) {
  var value = props.value,
    setValue = props.setValue,
    locale = props.locale,
    className = props.className,
    humanizeLabels = props.humanizeLabels,
    disabled = props.disabled,
    readOnly = props.readOnly,
    leadingZero = props.leadingZero,
    clockFormat = props.clockFormat,
    optionsList = props.optionsList,
    unit = props.unit,
    selectProps = _objectWithoutProperties(props, _excluded);
  var stringValue = (0, _react.useMemo)(function () {
    if (value && Array.isArray(value)) {
      return value.map(function (value) {
        return value.toString();
      });
    }
    return [];
  }, [value]);
  var options = (0, _react.useMemo)(function () {
    if (optionsList) {
      return optionsList.map(function (option, index) {
        var number = unit.min === 0 ? index : index + 1;
        return {
          value: number.toString(),
          label: option
        };
      });
    }
    return _toConsumableArray(Array(unit.total)).map(function (e, index) {
      var number = unit.min === 0 ? index : index + 1;
      return {
        value: number.toString(),
        label: (0, _converter.formatValue)(number, unit, humanizeLabels, leadingZero, clockFormat)
      };
    });
  },
  [optionsList, leadingZero, humanizeLabels, clockFormat]);
  var localeJSON = JSON.stringify(locale);
  var renderTag = (0, _react.useCallback)(function (props) {
    var value = props;
    if (!value) {
      return _react["default"].createElement(_react["default"].Fragment, null);
    }
    var parsedArray = (0, _converter.parsePartArray)(value, unit);
    var cronValue = (0, _converter.partToString)(parsedArray, unit, humanizeLabels, leadingZero, clockFormat);
    var testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
    return _react["default"].createElement("div", null, testEveryValue[1] ? "".concat(locale.everyText || _locale.DEFAULT_LOCALE_EN.everyText, " \n            ").concat(testEveryValue[1]) : cronValue);
  },
  [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
  var simpleClick = (0, _react.useCallback)(function (event) {
    var newValueOption = event.target.value;
    if (newValueOption.length == 0) {
      newValueOption.push(0);
    }
    newValueOption = Array.isArray(newValueOption) ? (0, _utils.sort)(newValueOption) : [newValueOption];
    var newValue = newValueOption;
    if (newValue.length === unit.total) {
      setValue([]);
    } else {
      setValue(newValue);
    }
  },
  [setValue, value]);
  var internalClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty({
      'react-js-cron-select': true,
      'react-js-cron-custom-select': true
    }, "".concat(className, "-select"), !!className));
  }, [className]);
  return _react["default"].createElement(_Select["default"], _extends({
    multiple: true,
    open: readOnly ? false : undefined,
    value: stringValue,
    onChange: simpleClick,
    renderValue: renderTag,
    className: internalClassName,
    autoWidth: false,
    disabled: disabled
  }, selectProps), options.map(function (obj) {
    return _react["default"].createElement(_MenuItem["default"], {
      key: obj.value,
      value: obj.value
    }, obj.label);
  }));
}