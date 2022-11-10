"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomSelect;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _locale = require("../locale");

var _utils = require("../utils");

var _converter = require("../converter");

var _excluded = ["value", "grid", "optionsList", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "leadingZero", "clockFormat", "period", "unit", "unitFilter", "periodicityOnDoubleClick", "mode", "allowClear"];

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
      _props$grid = props.grid,
      grid = _props$grid === void 0 ? true : _props$grid,
      optionsList = props.optionsList,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      humanizeLabels = props.humanizeLabels,
      disabled = props.disabled,
      readOnly = props.readOnly,
      leadingZero = props.leadingZero,
      clockFormat = props.clockFormat,
      period = props.period,
      unit = props.unit,
      _props$unitFilter = props.unitFilter,
      unitFilter = _props$unitFilter === void 0 ? function (_) {
    return true;
  } : _props$unitFilter,
      periodicityOnDoubleClick = props.periodicityOnDoubleClick,
      mode = props.mode,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
      otherProps = _objectWithoutProperties(props, _excluded);

  var stringValue = (0, _react.useMemo)(function () {
    if (value && Array.isArray(value)) {
      return value.map(function (value) {
        return value.toString();
      });
    }
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
    }).filter(unitFilter);
  }, [optionsList, leadingZero, humanizeLabels, clockFormat]);
  var localeJSON = JSON.stringify(locale);
  var renderTag = (0, _react.useCallback)(function (props) {
    var itemValue = props.value;

    if (!value || value[0] !== Number(itemValue)) {
      return _react["default"].createElement(_react["default"].Fragment, null);
    }

    var parsedArray = (0, _converter.parsePartArray)(value, unit);
    var cronValue = (0, _converter.partToString)(parsedArray, unit, humanizeLabels, leadingZero, clockFormat);
    var testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
    return _react["default"].createElement("div", null, testEveryValue[1] ? "".concat(locale.everyText || _locale.DEFAULT_LOCALE_EN.everyText, " ").concat(testEveryValue[1]) : cronValue);
  }, [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
  var simpleClick = (0, _react.useCallback)(function (newValueOption) {
    var newValueOptions = Array.isArray(newValueOption) ? (0, _utils.sort)(newValueOption) : [newValueOption];
    var newValue = newValueOptions;

    if (value) {
      newValue = mode === 'single' ? [] : _toConsumableArray(value);
      newValueOptions.forEach(function (o) {
        var newValueOptionNumber = Number(o);

        if (value.some(function (v) {
          return v === newValueOptionNumber;
        })) {
          newValue = newValue.filter(function (v) {
            return v !== newValueOptionNumber;
          });
        } else {
          newValue = (0, _utils.sort)([].concat(_toConsumableArray(newValue), [newValueOptionNumber]));
        }
      });
    }

    if (newValue.length === unit.total) {
      setValue([]);
    } else {
      setValue(newValue);
    }
  }, [setValue, value]);
  var doubleClick = (0, _react.useCallback)(function (newValueOption) {
    if (newValueOption !== 0 && newValueOption !== 1) {
      var limit = unit.total + unit.min;
      var newValue = [];

      for (var i = unit.min; i < limit; i++) {
        if (i % newValueOption === 0) {
          newValue.push(i);
        }
      }

      var oldValueEqualNewValue = value && newValue && value.length === newValue.length && value.every(function (v, i) {
        return v === newValue[i];
      });
      var allValuesSelected = newValue.length === options.length;

      if (allValuesSelected) {
        setValue([]);
      } else if (oldValueEqualNewValue) {
        setValue([]);
      } else {
        setValue(newValue);
      }
    } else {
      setValue([]);
    }
  }, [value, options, setValue]);
  var clicksRef = (0, _react.useRef)([]);
  var onOptionClick = (0, _react.useCallback)(function (newValueOption) {
    if (!readOnly) {
      var doubleClickTimeout = 300;
      var clicks = clicksRef.current;
      clicks.push({
        time: new Date().getTime(),
        value: Number(newValueOption)
      });
      var id = window.setTimeout(function () {
        if (periodicityOnDoubleClick && clicks.length > 1 && clicks[clicks.length - 1].time - clicks[clicks.length - 2].time < doubleClickTimeout) {
          if (clicks[clicks.length - 1].value === clicks[clicks.length - 2].value) {
            doubleClick(Number(newValueOption));
          } else {
            simpleClick([clicks[clicks.length - 2].value, clicks[clicks.length - 1].value]);
          }
        } else {
          simpleClick(Number(newValueOption));
        }

        clicksRef.current = [];
      }, doubleClickTimeout);
      return function () {
        window.clearTimeout(id);
      };
    }
  }, [clicksRef, simpleClick, doubleClick, readOnly, periodicityOnDoubleClick]);
  var onClear = (0, _react.useCallback)(function () {
    if (!readOnly) {
      setValue([]);
    }
  }, [setValue, readOnly]);
  var internalClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty({
      'react-js-cron-select': true,
      'react-js-cron-custom-select': true
    }, "".concat(className, "-select"), !!className));
  }, [className]);
  var dropdownClassNames = (0, _react.useMemo)(function () {
    var _classNames2;

    return (0, _utils.classNames)((_classNames2 = {
      'react-js-cron-select-dropdown': true
    }, _defineProperty(_classNames2, "react-js-cron-select-dropdown-".concat(unit.type), true), _defineProperty(_classNames2, 'react-js-cron-custom-select-dropdown', true), _defineProperty(_classNames2, "react-js-cron-custom-select-dropdown-".concat(unit.type), true), _defineProperty(_classNames2, "react-js-cron-custom-select-dropdown-minutes-large", unit.type === 'minutes' && period !== 'hour' && period !== 'day'), _defineProperty(_classNames2, "react-js-cron-custom-select-dropdown-minutes-medium", unit.type === 'minutes' && (period === 'day' || period === 'hour')), _defineProperty(_classNames2, 'react-js-cron-custom-select-dropdown-hours-twelve-hour-clock', unit.type === 'hours' && clockFormat === '12-hour-clock'), _defineProperty(_classNames2, 'react-js-cron-custom-select-dropdown-grid', !!grid), _defineProperty(_classNames2, "".concat(className, "-select-dropdown"), !!className), _defineProperty(_classNames2, "".concat(className, "-select-dropdown-").concat(unit.type), !!className), _classNames2));
  }, [className, grid, clockFormat, period]);
  return _react["default"].createElement(_antd.Select, _extends({
    mode: mode === 'single' && !periodicityOnDoubleClick ? undefined : 'multiple',
    allowClear: allowClear && !readOnly,
    virtual: false,
    open: readOnly ? false : undefined,
    value: stringValue,
    onClear: onClear,
    tagRender: renderTag,
    className: internalClassName,
    dropdownClassName: dropdownClassNames,
    options: options,
    showSearch: false,
    showArrow: !readOnly,
    menuItemSelectedIcon: null,
    dropdownMatchSelectWidth: false,
    onSelect: onOptionClick,
    onDeselect: onOptionClick,
    disabled: disabled,
    dropdownAlign: (unit.type === 'minutes' || unit.type === 'hours') && period !== 'day' && period !== 'hour' ? {
      points: ['tr', 'br']
    } : undefined
  }, otherProps));
}