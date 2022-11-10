"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearButtonEmptyValue = ClearButtonEmptyValue;
exports.CustomENLocale = CustomENLocale;
exports.CustomStyle = CustomStyle;
exports.DefaultPeriod = DefaultPeriod;
exports.DefaultValue = DefaultValue;
exports.Demo = Demo;
exports.DisableErrorStyle = DisableErrorStyle;
exports.Disabled = Disabled;
exports.DynamicSettings = DynamicSettings;
exports.EmptyAlwaysAllowed = EmptyAlwaysAllowed;
exports.EmptyNeverAllowed = EmptyNeverAllowed;
exports.FrenchLocale = FrenchLocale;
exports.HumanizeLabels = HumanizeLabels;
exports.HumanizeLabelsAndValue = HumanizeLabelsAndValue;
exports.HumanizeValue = HumanizeValue;
exports.Input = Input;
exports.InputWithOnEnter = InputWithOnEnter;
exports.InvalidDefaultValue = InvalidDefaultValue;
exports.LeadingZero = LeadingZero;
exports.NoClearButton = NoClearButton;
exports.NoPeriodicityOnDoubleClick = NoPeriodicityOnDoubleClick;
exports.NoPrefixAndSuffix = NoPrefixAndSuffix;
exports.ReadOnly = ReadOnly;
exports.ReadOnlyInput = ReadOnlyInput;
exports.RestrictPeriodAndSelection = RestrictPeriodAndSelection;
exports.Shortcuts = Shortcuts;
exports.SingleSelectionMode = SingleSelectionMode;
exports.SingleSelectionModeAutoClose = SingleSelectionModeAutoClose;
exports.TrackError = TrackError;
exports.TrackSelectedPeriod = TrackSelectedPeriod;
exports.TwelveHourClock = TwelveHourClock;
exports.TwentyFourHourClock = TwentyFourHourClock;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _index = _interopRequireDefault(require("../index"));

var _constants = require("./constants.stories");

var _utils = require("./utils.stories");

require("../styles.css");

require("./styles.stories.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'ReactJS Cron',
  component: Demo
};
exports["default"] = _default;

function Demo() {
  var defaultValue = '30 5 * * 1,6';

  var _useCronReducer = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer2 = _slicedToArray(_useCronReducer, 2),
      values = _useCronReducer2[0],
      dispatchValues = _useCronReducer2[1];

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      onError = _useState2[1];

  return _react["default"].createElement("div", null, _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    },
    onPressEnter: function onPressEnter() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Double click on a dropdown option to automatically select / unselect a periodicity")), _react["default"].createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Error: ", error ? error.description : 'undefined'));
}

function DynamicSettings() {
  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      displayInput = _useState4[0],
      setDisplayInput = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      changeValueOnBlur = _useState6[0],
      setChangeValueOnBlur = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      changeValueOnEnter = _useState8[0],
      setChangeValueOnEnter = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      readOnlyInput = _useState10[0],
      setReadOnlyInput = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      disabled = _useState12[0],
      setDisabled = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      readOnly = _useState14[0],
      setReadOnly = _useState14[1];

  var _useState15 = (0, _react.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      humanizeLabels = _useState16[0],
      setHumanizeLabels = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      humanizeValue = _useState18[0],
      setHumanizeValue = _useState18[1];

  var _useState19 = (0, _react.useState)(true),
      _useState20 = _slicedToArray(_useState19, 2),
      displayErrorText = _useState20[0],
      setDisplayErrorText = _useState20[1];

  var _useState21 = (0, _react.useState)(true),
      _useState22 = _slicedToArray(_useState21, 2),
      displayErrorStyle = _useState22[0],
      setDisplayErrorStyle = _useState22[1];

  var _useState23 = (0, _react.useState)(true),
      _useState24 = _slicedToArray(_useState23, 2),
      displayClearButton = _useState24[0],
      setDisplayClearButton = _useState24[1];

  var _useState25 = (0, _react.useState)(true),
      _useState26 = _slicedToArray(_useState25, 2),
      supportShortcuts = _useState26[0],
      setSupportShortcuts = _useState26[1];

  var _useState27 = (0, _react.useState)(false),
      _useState28 = _slicedToArray(_useState27, 2),
      removePrefixSuffix = _useState28[0],
      setRemovePrefixSuffix = _useState28[1];

  var _useState29 = (0, _react.useState)(false),
      _useState30 = _slicedToArray(_useState29, 2),
      customStyle = _useState30[0],
      setCustomStyle = _useState30[1];

  var _useState31 = (0, _react.useState)('for-default-value'),
      _useState32 = _slicedToArray(_useState31, 2),
      allowEmpty = _useState32[0],
      setAllowEmpty = _useState32[1];

  var _useState33 = (0, _react.useState)(''),
      _useState34 = _slicedToArray(_useState33, 2),
      clockFormat = _useState34[0],
      setClockFormat = _useState34[1];

  var _useState35 = (0, _react.useState)('english'),
      _useState36 = _slicedToArray(_useState35, 2),
      locale = _useState36[0],
      setLocale = _useState36[1];

  var _useState37 = (0, _react.useState)('day'),
      _useState38 = _slicedToArray(_useState37, 2),
      defaultPeriod = _useState38[0],
      setDefaultPeriod = _useState38[1];

  var _useState39 = (0, _react.useState)('day'),
      _useState40 = _slicedToArray(_useState39, 2),
      selectedPeriod = _useState40[0],
      setSelectedPeriod = _useState40[1];

  var _useState41 = (0, _react.useState)('@daily'),
      _useState42 = _slicedToArray(_useState41, 2),
      defaultValue = _useState42[0],
      setDefaultValue = _useState42[1];

  var _useState43 = (0, _react.useState)(false),
      _useState44 = _slicedToArray(_useState43, 2),
      leadingZero = _useState44[0],
      setLeadingZero = _useState44[1];

  var _useState45 = (0, _react.useState)(true),
      _useState46 = _slicedToArray(_useState45, 2),
      periodicityOnDoubleClick = _useState46[0],
      setPeriodicityOnDoubleClick = _useState46[1];

  var _useState47 = (0, _react.useState)('multiple'),
      _useState48 = _slicedToArray(_useState47, 2),
      mode = _useState48[0],
      setMode = _useState48[1];

  var _useState49 = (0, _react.useState)('render'),
      _useState50 = _slicedToArray(_useState49, 2),
      key = _useState50[0],
      setKey = _useState50[1];

  var _useCronReducer3 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer4 = _slicedToArray(_useCronReducer3, 2),
      values = _useCronReducer4[0],
      dispatchValues = _useCronReducer4[1];

  var _useState51 = (0, _react.useState)(),
      _useState52 = _slicedToArray(_useState51, 2),
      error = _useState52[0],
      onError = _useState52[1];

  var _useState53 = (0, _react.useState)('fill-with-every'),
      _useState54 = _slicedToArray(_useState53, 2),
      clearButtonAction = _useState54[0],
      setClearButtonAction = _useState54[1];

  var defaultAllowedDropdowns = ['period', 'months', 'month-days', 'week-days', 'hours', 'minutes'];

  var _useState55 = (0, _react.useState)(defaultAllowedDropdowns),
      _useState56 = _slicedToArray(_useState55, 2),
      allowedDropdowns = _useState56[0],
      setAllowedDropdowns = _useState56[1];

  var defaultAllowedPeriods = ['year', 'month', 'week', 'day', 'hour', 'minute', 'reboot'];

  var _useState57 = (0, _react.useState)(defaultAllowedPeriods),
      _useState58 = _slicedToArray(_useState57, 2),
      allowedPeriods = _useState58[0],
      setAllowedPeriods = _useState58[1];

  var transformedLocale = (0, _react.useMemo)(function () {
    var newLocale;

    switch (locale) {
      case 'french':
        newLocale = _constants.FRENCH_LOCALE;
        break;

      case 'english-variant':
        newLocale = _constants.ENGLISH_VARIANT_LOCALE;
        break;

      default:
        newLocale = {};
        break;
    }

    if (removePrefixSuffix) {
      newLocale = _objectSpread(_objectSpread({}, newLocale), _constants.NO_PREFIX_SUFFIX_LOCALE);
    }

    return newLocale;
  }, [locale, removePrefixSuffix]);
  return _react["default"].createElement("div", null, _react["default"].createElement(_antd.Form, {
    layout: "inline",
    className: "demo-dynamic-settings"
  }, _react["default"].createElement(_antd.Form.Item, {
    label: "Display input"
  }, _react["default"].createElement(_antd.Switch, {
    checked: displayInput,
    onChange: function onChange() {
      return setDisplayInput(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Change input value on blur"
  }, _react["default"].createElement(_antd.Switch, {
    checked: changeValueOnBlur,
    onChange: function onChange() {
      return setChangeValueOnBlur(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Change input value on enter"
  }, _react["default"].createElement(_antd.Switch, {
    checked: changeValueOnEnter,
    onChange: function onChange() {
      return setChangeValueOnEnter(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Read-Only input"
  }, _react["default"].createElement(_antd.Switch, {
    checked: readOnlyInput,
    onChange: function onChange() {
      return setReadOnlyInput(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Disabled"
  }, _react["default"].createElement(_antd.Switch, {
    checked: disabled,
    onChange: function onChange() {
      return setDisabled(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Read-Only"
  }, _react["default"].createElement(_antd.Switch, {
    checked: readOnly,
    onChange: function onChange() {
      return setReadOnly(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Humainze labels"
  }, _react["default"].createElement(_antd.Switch, {
    checked: humanizeLabels,
    onChange: function onChange() {
      return setHumanizeLabels(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Humanize value"
  }, _react["default"].createElement(_antd.Switch, {
    checked: humanizeValue,
    onChange: function onChange() {
      return setHumanizeValue(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Display error text"
  }, _react["default"].createElement(_antd.Switch, {
    checked: displayErrorText,
    onChange: function onChange() {
      return setDisplayErrorText(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Display error style"
  }, _react["default"].createElement(_antd.Switch, {
    checked: displayErrorStyle,
    onChange: function onChange() {
      return setDisplayErrorStyle(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Display clear button"
  }, _react["default"].createElement(_antd.Switch, {
    checked: displayClearButton,
    onChange: function onChange() {
      return setDisplayClearButton(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Support shortcuts"
  }, _react["default"].createElement(_antd.Switch, {
    checked: supportShortcuts,
    onChange: function onChange() {
      return setSupportShortcuts(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Remove prefix/suffix"
  }, _react["default"].createElement(_antd.Switch, {
    checked: removePrefixSuffix,
    onChange: function onChange() {
      return setRemovePrefixSuffix(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Set custom style"
  }, _react["default"].createElement(_antd.Switch, {
    checked: customStyle,
    onChange: function onChange() {
      return setCustomStyle(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Leading zero"
  }, _react["default"].createElement(_antd.Switch, {
    checked: leadingZero,
    onChange: function onChange() {
      return setLeadingZero(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Periodicity on double click"
  }, _react["default"].createElement(_antd.Switch, {
    checked: periodicityOnDoubleClick,
    onChange: function onChange() {
      return setPeriodicityOnDoubleClick(function (prevValue) {
        return !prevValue;
      });
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Clock format"
  }, _react["default"].createElement(_antd.Radio.Group, {
    value: clockFormat,
    onChange: function onChange(e) {
      return setClockFormat(e.target.value);
    }
  }, _react["default"].createElement(_antd.Radio.Button, {
    value: ""
  }, "None"), _react["default"].createElement(_antd.Radio.Button, {
    value: "12-hour-clock"
  }, "12-hour clock"), _react["default"].createElement(_antd.Radio.Button, {
    value: "24-hour-clock"
  }, "24-hour-clock"))), _react["default"].createElement(_antd.Form.Item, {
    label: "Mode"
  }, _react["default"].createElement(_antd.Radio.Group, {
    value: mode,
    onChange: function onChange(e) {
      return setMode(e.target.value);
    }
  }, _react["default"].createElement(_antd.Radio.Button, {
    value: "single"
  }, "Single"), _react["default"].createElement(_antd.Radio.Button, {
    value: "multiple"
  }, "Multiple"))), _react["default"].createElement(_antd.Form.Item, {
    label: "Allowed dropdowns"
  }, _react["default"].createElement(_antd.Select, {
    mode: "multiple",
    value: allowedDropdowns,
    onChange: function onChange(value) {
      setAllowedDropdowns(value);
    },
    style: {
      minWidth: 535
    }
  }, defaultAllowedDropdowns.map(function (allowedDropdown) {
    return _react["default"].createElement(_antd.Select.Option, {
      key: allowedDropdown
    }, allowedDropdown);
  }))), _react["default"].createElement(_antd.Form.Item, {
    label: "Allowed periods"
  }, _react["default"].createElement(_antd.Select, {
    mode: "multiple",
    value: allowedPeriods,
    onChange: function onChange(value) {
      setAllowedPeriods(value);
    },
    style: {
      minWidth: 485
    }
  }, defaultAllowedPeriods.map(function (allowedPeriod) {
    return _react["default"].createElement(_antd.Select.Option, {
      key: allowedPeriod
    }, allowedPeriod);
  }))), _react["default"].createElement(_antd.Form.Item, {
    label: "Locale"
  }, _react["default"].createElement(_antd.Radio.Group, {
    value: locale,
    onChange: function onChange(e) {
      return setLocale(e.target.value);
    }
  }, _react["default"].createElement(_antd.Radio.Button, {
    value: "english"
  }, "English"), _react["default"].createElement(_antd.Radio.Button, {
    value: "french"
  }, "French"), _react["default"].createElement(_antd.Radio.Button, {
    value: "english-variant"
  }, "English variant"))), _react["default"].createElement(_antd.Form.Item, {
    label: "Clear button action"
  }, _react["default"].createElement(_antd.Radio.Group, {
    value: clearButtonAction,
    onChange: function onChange(e) {
      return setClearButtonAction(e.target.value);
    }
  }, _react["default"].createElement(_antd.Radio.Button, {
    value: "empty"
  }, "Empty"), _react["default"].createElement(_antd.Radio.Button, {
    value: "fill-with-every"
  }, "Fill with every"))), _react["default"].createElement(_antd.Form.Item, {
    label: "Empty value management *"
  }, _react["default"].createElement(_antd.Radio.Group, {
    value: allowEmpty,
    onChange: function onChange(e) {
      return setAllowEmpty(e.target.value);
    }
  }, _react["default"].createElement(_antd.Radio.Button, {
    value: "for-default-value"
  }, "For default value"), _react["default"].createElement(_antd.Radio.Button, {
    value: "always"
  }, "Always"), _react["default"].createElement(_antd.Radio.Button, {
    value: "never"
  }, "Never"))), _react["default"].createElement(_antd.Form.Item, {
    label: "Default value *"
  }, _react["default"].createElement(_antd.Input, {
    value: defaultValue,
    onChange: function onChange(e) {
      return setDefaultValue(e.target.value);
    }
  })), _react["default"].createElement(_antd.Form.Item, {
    label: "Default period **"
  }, _react["default"].createElement(_antd.Radio.Group, {
    value: defaultPeriod,
    onChange: function onChange(e) {
      return setDefaultPeriod(e.target.value);
    }
  }, _react["default"].createElement(_antd.Radio.Button, {
    value: "year"
  }, "Year"), _react["default"].createElement(_antd.Radio.Button, {
    value: "month"
  }, "Month"), _react["default"].createElement(_antd.Radio.Button, {
    value: "week"
  }, "Week"), _react["default"].createElement(_antd.Radio.Button, {
    value: "day"
  }, "Day"), _react["default"].createElement(_antd.Radio.Button, {
    value: "hour"
  }, "Hour"), _react["default"].createElement(_antd.Radio.Button, {
    value: "minute"
  }, "Minute"), _react["default"].createElement(_antd.Radio.Button, {
    value: "reboot"
  }, "Reboot"))), _react["default"].createElement("p", null, "(*) Need to reset the component to see the changes"), _react["default"].createElement("p", null, "(**) Need to reset the component and to have an empty default value to see the changes")), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      dispatchValues({
        type: 'set_values',
        value: defaultValue
      });
      setKey(Math.random().toString(36).substring(7));
      setSelectedPeriod(defaultPeriod);
    }
  }, "Reset cron component")), displayInput && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_antd.Input, {
    readOnly: readOnlyInput || mode === 'single',
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      changeValueOnBlur && dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    },
    onPressEnter: function onPressEnter() {
      changeValueOnEnter && dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR")), _react["default"].createElement(_index["default"], {
    key: key,
    value: values.cronValue,
    setValue: function setValue(newValue, _ref) {
      var selectedPeriod = _ref.selectedPeriod;
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
      setSelectedPeriod(selectedPeriod);
    },
    onError: onError,
    disabled: disabled,
    readOnly: readOnly,
    humanizeLabels: humanizeLabels,
    humanizeValue: humanizeValue,
    displayError: displayErrorStyle,
    clearButton: displayClearButton,
    clearButtonAction: clearButtonAction,
    shortcuts: supportShortcuts,
    allowEmpty: allowEmpty,
    clockFormat: clockFormat === '' ? undefined : clockFormat,
    defaultPeriod: defaultPeriod,
    leadingZero: leadingZero,
    className: customStyle ? 'my-project-cron' : undefined,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode,
    allowedDropdowns: allowedDropdowns,
    allowedPeriods: allowedPeriods,
    locale: transformedLocale,
    clearButtonProps: customStyle ? {
      type: 'default'
    } : undefined
  }), _react["default"].createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Selected period: ", selectedPeriod), displayErrorText && _react["default"].createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Error: ", error ? error.description : 'undefined'));
}

function Input() {
  var defaultValue = '';

  var _useCronReducer5 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer6 = _slicedToArray(_useCronReducer5, 2),
      values = _useCronReducer6[0],
      dispatchValues = _useCronReducer6[1];

  return _react["default"].createElement("div", null, _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"onBlur\" event must be used instead of \"onChange\" to prevent a value change from the cron component")), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    }
  }));
}

function InputWithOnEnter() {
  var defaultValue = '0 10 * * 1,3,5';

  var _useCronReducer7 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer8 = _slicedToArray(_useCronReducer7, 2),
      values = _useCronReducer8[0],
      dispatchValues = _useCronReducer8[1];

  return _react["default"].createElement("div", null, _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    },
    onPressEnter: function onPressEnter() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can also add \"onEnter\" support to set the value")), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    }
  }), ' ');
}

function ReadOnlyInput() {
  var defaultValue = '0 10 * * 1,3,5';

  var _useState59 = (0, _react.useState)(defaultValue),
      _useState60 = _slicedToArray(_useState59, 2),
      value = _useState60[0],
      setValue = _useState60[1];

  return _react["default"].createElement("div", null, _react["default"].createElement(_antd.Input, {
    readOnly: true,
    value: value
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue
  }));
}

function DefaultValue() {
  var defaultValue = '*/7 */2 */3 * *';

  var _useState61 = (0, _react.useState)(defaultValue),
      _useState62 = _slicedToArray(_useState61, 2),
      value = _useState62[0],
      setValue = _useState62[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The first value will always be used as default value")));
}

function DefaultPeriod() {
  var defaultValue = '';
  var defaultPeriod = 'year';

  var _useState63 = (0, _react.useState)(defaultValue),
      _useState64 = _slicedToArray(_useState63, 2),
      value = _useState64[0],
      setValue = _useState64[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default period: ", defaultPeriod), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    defaultPeriod: defaultPeriod
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"defaultPeriod\" prop only work for empty default value")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"defaultPeriod\" is \"day\"")));
}

function Disabled() {
  var defaultValue = '30 5 * * 1,6';

  var _useState65 = (0, _react.useState)(defaultValue),
      _useState66 = _slicedToArray(_useState65, 2),
      value = _useState66[0],
      setValue = _useState66[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Disabled: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    disabled: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"disabled\" is false")));
}

function ReadOnly() {
  var defaultValue = '30 5 * * 1,6';

  var _useState67 = (0, _react.useState)(defaultValue),
      _useState68 = _slicedToArray(_useState67, 2),
      value = _useState68[0],
      setValue = _useState68[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Read only: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    readOnly: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"readOnly\" is false")));
}

function HumanizeLabels() {
  var defaultValue = '* * * * MON-WED,sat';

  var _useCronReducer9 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer10 = _slicedToArray(_useCronReducer9, 2),
      values = _useCronReducer10[0],
      dispatchValues = _useCronReducer10[1];

  var _useState69 = (0, _react.useState)(),
      _useState70 = _slicedToArray(_useState69, 2),
      error = _useState70[0],
      onError = _useState70[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Humanize labels: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeLabels\" is true")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes the labels in the cron component")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Can be used with \"locale\" prop and \"altMonths\" / \"altWeekDays\" properties in order to display translated labels")));
}

function HumanizeValue() {
  var defaultValue = '* * * * MON-WED,sat';

  var _useCronReducer11 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer12 = _slicedToArray(_useCronReducer11, 2),
      values = _useCronReducer12[0],
      dispatchValues = _useCronReducer12[1];

  var _useState71 = (0, _react.useState)(),
      _useState72 = _slicedToArray(_useState71, 2),
      error = _useState72[0],
      onError = _useState72[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Humanize labels: false"), _react["default"].createElement("p", null, "Humanize value: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    humanizeLabels: false,
    humanizeValue: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeValue\" is false")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The prop \"humanizeValue\" cannot be used to prohibit used of valid string value like \"MON,WED\"")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is true, the component will automatically convert a valid number value to string")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is false, the component will automatically convert a valid string value to number")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "A valid string value can be in lowercase or uppercase")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")));
}

function HumanizeLabelsAndValue() {
  var defaultValue = '* * * * MON-WED,sat';

  var _useCronReducer13 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer14 = _slicedToArray(_useCronReducer13, 2),
      values = _useCronReducer14[0],
      dispatchValues = _useCronReducer14[1];

  var _useState73 = (0, _react.useState)(),
      _useState74 = _slicedToArray(_useState73, 2),
      error = _useState74[0],
      onError = _useState74[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Humanize labels: true"), _react["default"].createElement("p", null, "Humanize value: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    humanizeValue: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes in the cron component both the labels and the value")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")));
}

function LeadingZero() {
  var defaultValue = '5 3 2-3,8 * *';

  var _useCronReducer15 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer16 = _slicedToArray(_useCronReducer15, 2),
      values = _useCronReducer16[0],
      dispatchValues = _useCronReducer16[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Leading zero: \"always\""), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    leadingZero: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can set the prop to a boolean or an array [\"minutes\", \"hours\", \"month-days\"]")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"leadingZero\" is \"never\"")));
}

function TrackError() {
  var defaultValue = '';

  var _useCronReducer17 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer18 = _slicedToArray(_useCronReducer17, 2),
      values = _useCronReducer18[0],
      dispatchValues = _useCronReducer18[1];

  var _useState75 = (0, _react.useState)(),
      _useState76 = _slicedToArray(_useState75, 2),
      error = _useState76[0],
      onError = _useState76[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Write a bad cron expression to trigger an error after the \"onBlur\" event")), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Use prop \"onError\" to be able to know when the value is invalid")));
}

function DisableErrorStyle() {
  var defaultValue = '';

  var _useCronReducer19 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer20 = _slicedToArray(_useCronReducer19, 2),
      values = _useCronReducer20[0],
      dispatchValues = _useCronReducer20[1];

  var _useState77 = (0, _react.useState)(),
      _useState78 = _slicedToArray(_useState77, 2),
      error = _useState78[0],
      onError = _useState78[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Display error: false"), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    displayError: false
  }));
}

function NoClearButton() {
  var defaultValue = '';

  var _useState79 = (0, _react.useState)(defaultValue),
      _useState80 = _slicedToArray(_useState79, 2),
      value = _useState80[0],
      setValue = _useState80[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clear button: false"), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    clearButton: false,
    value: value,
    setValue: setValue
  }));
}

function ClearButtonEmptyValue() {
  var clearButtonAction = 'empty';
  var defaultValue = '0 10 * * 1,3,5';

  var _useState81 = (0, _react.useState)(defaultValue),
      _useState82 = _slicedToArray(_useState81, 2),
      value = _useState82[0],
      setValue = _useState82[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clear button action: ", clearButtonAction), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    clearButtonAction: clearButtonAction
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"clearButtonAction\" prop allow you to empty the field or fill it with \"* * * * *\"")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"clearButtonAction\" is \"fill-with-every\"")));
}

function InvalidDefaultValue() {
  var defaultValue = '*/2 */2 */2 1-6 */6 * *';

  var _useState83 = (0, _react.useState)(defaultValue),
      _useState84 = _slicedToArray(_useState83, 2),
      value = _useState84[0],
      setValue = _useState84[1];

  var _useState85 = (0, _react.useState)(),
      _useState86 = _slicedToArray(_useState85, 2),
      error = _useState86[0],
      onError = _useState86[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    onError: onError
  }));
}

function EmptyNeverAllowed() {
  var defaultValue = '';

  var _useCronReducer21 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer22 = _slicedToArray(_useCronReducer21, 2),
      values = _useCronReducer22[0],
      dispatchValues = _useCronReducer22[1];

  var _useState87 = (0, _react.useState)(),
      _useState88 = _slicedToArray(_useState87, 2),
      error = _useState88[0],
      onError = _useState88[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Allow empty: \"never\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    allowEmpty: "never"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"allowEmpty\" is \"for-default-value\"")));
}

function EmptyAlwaysAllowed() {
  var defaultValue = '';

  var _useCronReducer23 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer24 = _slicedToArray(_useCronReducer23, 2),
      values = _useCronReducer24[0],
      dispatchValues = _useCronReducer24[1];

  var _useState89 = (0, _react.useState)(),
      _useState90 = _slicedToArray(_useState89, 2),
      error = _useState90[0],
      onError = _useState90[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Allow empty: \"always\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    allowEmpty: "always"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"allowEmpty\" is \"for-default-value\"")));
}

function Shortcuts() {
  var defaultValue = '@monthly';

  var _useCronReducer25 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer26 = _slicedToArray(_useCronReducer25, 2),
      values = _useCronReducer26[0],
      dispatchValues = _useCronReducer26[1];

  var _useState91 = (0, _react.useState)(),
      _useState92 = _slicedToArray(_useState91, 2),
      error = _useState92[0],
      onError = _useState92[1];

  var columns = [{
    dataIndex: 'name',
    key: 'name'
  }, {
    dataIndex: 'description',
    key: 'description'
  }, {
    dataIndex: 'value',
    key: 'value'
  }];
  var data = [{
    key: '1',
    name: '@yearly (or @annually)',
    description: 'Run once a year at midnight of 1 January',
    value: '0 0 1 1 *'
  }, {
    key: '2',
    name: '@monthly',
    description: 'Run once a month at midnight of the first day of the month',
    value: '0 0 1 * *'
  }, {
    key: '3',
    name: '@weekly',
    description: 'Run once a week at midnight on Sunday morning',
    value: '0 0 * * 0'
  }, {
    key: '4',
    name: '@daily (or @midnight)',
    description: 'Run once a day at midnight',
    value: '0 0 * * *'
  }, {
    key: '5',
    name: '@hourly',
    description: 'Run once an hour at the beginning of the hour',
    value: '0 * * * *'
  }, {
    key: '6',
    name: '@reboot',
    description: 'Run at startup',
    value: '@reboot'
  }];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Shortcuts: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    shortcuts: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"Shortcuts\" is [\"@yearly\", \"@annually\", \"@monthly\", \"@weekly\", \"@daily\", \"@midnight\", \"@hourly\"]")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Just pass true to activate all shortcuts including \"@reboot\"")), _react["default"].createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    showHeader: false,
    bordered: true,
    pagination: false,
    style: {
      marginTop: 20
    },
    title: function title() {
      return _react["default"].createElement("h3", null, "Supported shortcuts");
    }
  }));
}

function TwelveHourClock() {
  var defaultValue = '2 5,7,18 * * SUN';

  var _useCronReducer27 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer28 = _slicedToArray(_useCronReducer27, 2),
      values = _useCronReducer28[0],
      dispatchValues = _useCronReducer28[1];

  var _useState93 = (0, _react.useState)(),
      _useState94 = _slicedToArray(_useState93, 2),
      error = _useState94[0],
      onError = _useState94[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clock format: \"12-hour-clock\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    clockFormat: "12-hour-clock"
  }));
}

function TwentyFourHourClock() {
  var defaultValue = '2 5,7,18 * * SUN';

  var _useCronReducer29 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer30 = _slicedToArray(_useCronReducer29, 2),
      values = _useCronReducer30[0],
      dispatchValues = _useCronReducer30[1];

  var _useState95 = (0, _react.useState)(),
      _useState96 = _slicedToArray(_useState95, 2),
      error = _useState96[0],
      onError = _useState96[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clock format: \"24-hour-clock\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    clockFormat: "24-hour-clock"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "This prop override the prop \"leadingZero\" for \"hours\" and \"minutes\"")));
}

function NoPeriodicityOnDoubleClick() {
  var defaultValue = '30 5 * * 1,6';

  var _useState97 = (0, _react.useState)(defaultValue),
      _useState98 = _slicedToArray(_useState97, 2),
      value = _useState98[0],
      setValue = _useState98[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "periodicityOnDoubleClick: false"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    periodicityOnDoubleClick: false
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can disable the double click on a dropdown option that automatically select / unselect a periodicity")));
}

function SingleSelectionMode() {
  var defaultValue = '30 3 4 4 1';

  var _useState99 = (0, _react.useState)(defaultValue),
      _useState100 = _slicedToArray(_useState99, 2),
      value = _useState100[0],
      setValue = _useState100[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "mode: \"single\""), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    mode: "single"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If you want to disable the double click on a dropdown option that automatically select / unselect a periodicity, set \"periodicityOnDoubleClick\" prop at false")));
}

function SingleSelectionModeAutoClose() {
  var defaultValue = '30 3 4 4 1';

  var _useState101 = (0, _react.useState)(defaultValue),
      _useState102 = _slicedToArray(_useState101, 2),
      value = _useState102[0],
      setValue = _useState102[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "mode: \"single\""), _react["default"].createElement("p", null, "periodicityOnDoubleClick: false"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    mode: "single",
    periodicityOnDoubleClick: false
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "When single mode is active and \"periodicityOnDoubleClick\" is false, each dropdown will automatically close after selecting a value")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If you want to disable the double click on a dropdown option that automatically select / unselect a periodicity, set \"periodicityOnDoubleClick\" prop at false")));
}

function RestrictPeriodAndSelection() {
  var defaultValue = '* * 4 * 1';

  var _useState103 = (0, _react.useState)(defaultValue),
      _useState104 = _slicedToArray(_useState103, 2),
      value = _useState104[0],
      setValue = _useState104[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "allowedDropdowns: [\"period\", \"months\", \"month-days\", \"week-days\"]"), _react["default"].createElement("p", null, "allowedPeriods: [\"year\", \"month\", \"week\", \"minute\"]"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    allowedDropdowns: ['period', 'months', 'month-days', 'week-days'],
    allowedPeriods: ['year', 'month', 'week', 'minute']
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "E.g.: Hide hours and minutes by removing them from \"allowedDropdowns\" prop.")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "E.g.: Also hide \"day\" and \"hour\" periods with \"allowedPeriods\" because hours and minutes cannot be changed.")));
}

function TrackSelectedPeriod() {
  var defaultValue = '';
  var defaultPeriod = 'month';

  var _useState105 = (0, _react.useState)(defaultValue),
      _useState106 = _slicedToArray(_useState105, 2),
      value = _useState106[0],
      _setValue = _useState106[1];

  var _useState107 = (0, _react.useState)(defaultPeriod),
      _useState108 = _slicedToArray(_useState107, 2),
      selectedPeriod = _useState108[0],
      setSelectedPeriod = _useState108[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Selected period: ", selectedPeriod), _react["default"].createElement(_index["default"], {
    value: value,
    defaultPeriod: defaultPeriod,
    setValue: function setValue(value, _ref2) {
      var selectedPeriod = _ref2.selectedPeriod;

      _setValue(value);

      setSelectedPeriod(selectedPeriod);
    }
  }));
}

function FrenchLocale() {
  var defaultValue = '* * 1-2 2,8 1,3,6';

  var _useCronReducer31 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer32 = _slicedToArray(_useCronReducer31, 2),
      values = _useCronReducer32[0],
      dispatchValues = _useCronReducer32[1];

  var _useState109 = (0, _react.useState)(),
      _useState110 = _slicedToArray(_useState109, 2),
      error = _useState110[0],
      onError = _useState110[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "locale: FRENCH_LOCALE"), _react["default"].createElement("p", null, "humanizeLabels: true (by default)"), _react["default"].createElement("p", null, "Erreur: ", error ? error.description : 'undefined'), _react["default"].createElement("p", null, "Value: ", values.cronValue), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OU"), _react["default"].createElement(_index["default"], {
    locale: _constants.FRENCH_LOCALE,
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The order of the \"locale\" properties \"weekDays\", \"months\", \"altMonths\" and \"altWeekDays\" is important! The index will be used as value")), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Sunday must always be the first value of \"weekDays\" and \"altWeekDays\" property because it's \"0\"")));
}

function CustomENLocale() {
  var defaultValue = '30 14 22 * *';

  var _useState111 = (0, _react.useState)(defaultValue),
      _useState112 = _slicedToArray(_useState111, 2),
      value = _useState112[0],
      setValue = _useState112[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "locale: ENGLISH_VARIANT_LOCALE"), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    locale: _constants.ENGLISH_VARIANT_LOCALE,
    value: value,
    setValue: setValue
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Not all translations need to be changed when using the prop \"locale\"")));
}

function NoPrefixAndSuffix() {
  var defaultValue = '30 14 22 * *';

  var _useState113 = (0, _react.useState)(defaultValue),
      _useState114 = _slicedToArray(_useState113, 2),
      value = _useState114[0],
      setValue = _useState114[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "locale: NO_PREFIX_SUFFIX_LOCALE"), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    locale: _constants.NO_PREFIX_SUFFIX_LOCALE,
    value: value,
    setValue: setValue
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Using empty string '' for a prefix / suffix translation will remove the text")));
}

function CustomStyle() {
  var defaultValue = '30 14 22 * *';

  var _useCronReducer33 = (0, _utils.useCronReducer)(defaultValue),
      _useCronReducer34 = _slicedToArray(_useCronReducer33, 2),
      values = _useCronReducer34[0],
      dispatchValues = _useCronReducer34[1];

  var _useState115 = (0, _react.useState)(),
      _useState116 = _slicedToArray(_useState115, 2),
      error = _useState116[0],
      onError = _useState116[1];

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "className: my-project-cron"), _react["default"].createElement("p", null, "clearButtonProps: { type: \"default\" }"), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_antd.Input, {
    value: values.inputValue,
    onChange: function onChange(event) {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: function onBlur() {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), _react["default"].createElement(_antd.Divider, null, "OR"), _react["default"].createElement(_index["default"], {
    value: values.cronValue,
    setValue: function setValue(newValue) {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    className: "my-project-cron",
    clearButtonProps: {
      type: 'default'
    }
  }), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Custom CSS example (See file \"styles.stories.css\"):"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "Bold prefix and suffix"), _react["default"].createElement("li", null, "Red prefix and suffix on error"), _react["default"].createElement("li", null, "Bigger border radius for selects and clear button"), _react["default"].createElement("li", null, "Gray backgroud for selected options"), _react["default"].createElement("li", null, "Clear button type changed to \"default\""))), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Available classes when using the prop \"className\":"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, ".my-project-cron"), _react["default"].createElement("li", null, ".my-project-cron-error"), _react["default"].createElement("li", null, ".my-project-cron-disabled"), _react["default"].createElement("li", null, ".my-project-cron-read-only"), _react["default"].createElement("li", null, ".my-project-cron-clear-button"), _react["default"].createElement("li", null, ".my-project-cron-field"), _react["default"].createElement("li", null, ".my-project-cron-period"), _react["default"].createElement("li", null, ".my-project-cron-minutes"), _react["default"].createElement("li", null, ".my-project-cron-hours"), _react["default"].createElement("li", null, ".my-project-cron-months"), _react["default"].createElement("li", null, ".my-project-cron-month-days"), _react["default"].createElement("li", null, ".my-project-cron-week-days"), _react["default"].createElement("li", null, ".my-project-cron-select"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-period"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-minutes"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-hours"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-months"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-month-days"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-week-days"))), _react["default"].createElement("div", null, _react["default"].createElement(_icons.InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Don't forget to import antd default style")));
}