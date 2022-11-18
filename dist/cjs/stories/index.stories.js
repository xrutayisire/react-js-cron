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
exports.InputWithOnEnter = InputWithOnEnter;
exports.InvalidDefaultValue = InvalidDefaultValue;
exports.LeadingZero = LeadingZero;
exports.LocalInput = LocalInput;
exports.NoClearButton = NoClearButton;
exports.NoPrefixAndSuffix = NoPrefixAndSuffix;
exports.ReadOnly = ReadOnly;
exports.ReadOnlyInput = ReadOnlyInput;
exports.Shortcuts = Shortcuts;
exports.TrackError = TrackError;
exports.TwelveHourClock = TwelveHourClock;
exports.TwentyFourHourClock = TwentyFourHourClock;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Info = _interopRequireDefault(require("@mui/icons-material/Info"));
var _DividerWithText = _interopRequireDefault(require("../components/DividerWithText"));
var _index = _interopRequireDefault(require("../index"));
var _constants = require("./constants.stories");
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '30 5 * * 1,6';
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    textValue = _useState4[0],
    setTextValue = _useState4[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    setTextValue(newValue);
  }, [setTextValue]);
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    onError = _useState6[1];
  return _react["default"].createElement("div", null, _react["default"].createElement(_material.TextField, {
    value: textValue,
    inputRef: inputRef,
    onBlur: function onBlur(event) {
      setValue(event.target.value);
    }
    ,
    onChange: function onChange(event) {
      customSetValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    displayInput = _useState8[0],
    setDisplayInput = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    changeValueonChange = _useState10[0],
    setChangeValueonChange = _useState10[1];
  var _useState11 = (0, _react.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    changeValueOnEnter = _useState12[0],
    setChangeValueOnEnter = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    readOnlyInput = _useState14[0],
    setReadOnlyInput = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    disabled = _useState16[0],
    setDisabled = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    readOnly = _useState18[0],
    setReadOnly = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = _slicedToArray(_useState19, 2),
    humanizeLabels = _useState20[0],
    setHumanizeLabels = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    humanizeValue = _useState22[0],
    setHumanizeValue = _useState22[1];
  var _useState23 = (0, _react.useState)(true),
    _useState24 = _slicedToArray(_useState23, 2),
    displayErrorText = _useState24[0],
    setDisplayErrorText = _useState24[1];
  var _useState25 = (0, _react.useState)(true),
    _useState26 = _slicedToArray(_useState25, 2),
    displayErrorStyle = _useState26[0],
    setDisplayErrorStyle = _useState26[1];
  var _useState27 = (0, _react.useState)(true),
    _useState28 = _slicedToArray(_useState27, 2),
    displayClearButton = _useState28[0],
    setDisplayClearButton = _useState28[1];
  var _useState29 = (0, _react.useState)(true),
    _useState30 = _slicedToArray(_useState29, 2),
    supportShortcuts = _useState30[0],
    setSupportShortcuts = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    removePrefixSuffix = _useState32[0],
    setRemovePrefixSuffix = _useState32[1];
  var _useState33 = (0, _react.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    customStyle = _useState34[0],
    setCustomStyle = _useState34[1];
  var _useState35 = (0, _react.useState)('for-default-value'),
    _useState36 = _slicedToArray(_useState35, 2),
    allowEmpty = _useState36[0],
    setAllowEmpty = _useState36[1];
  var _useState37 = (0, _react.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    clockFormat = _useState38[0],
    setClockFormat = _useState38[1];
  var _useState39 = (0, _react.useState)('english'),
    _useState40 = _slicedToArray(_useState39, 2),
    locale = _useState40[0],
    setLocale = _useState40[1];
  var _useState41 = (0, _react.useState)('day'),
    _useState42 = _slicedToArray(_useState41, 2),
    defaultPeriod = _useState42[0],
    setDefaultPeriod = _useState42[1];
  var _useState43 = (0, _react.useState)('@daily'),
    _useState44 = _slicedToArray(_useState43, 2),
    defaultValue = _useState44[0],
    setDefaultValue = _useState44[1];
  var _useState45 = (0, _react.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    leadingZero = _useState46[0],
    setLeadingZero = _useState46[1];
  var _useState47 = (0, _react.useState)('render'),
    _useState48 = _slicedToArray(_useState47, 2),
    key = _useState48[0],
    setKey = _useState48[1];
  var inputRef = (0, _react.useRef)();
  var _useState49 = (0, _react.useState)(defaultValue),
    _useState50 = _slicedToArray(_useState49, 2),
    value = _useState50[0],
    setValue = _useState50[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState51 = (0, _react.useState)(),
    _useState52 = _slicedToArray(_useState51, 2),
    error = _useState52[0],
    onError = _useState52[1];
  var _useState53 = (0, _react.useState)('fill-with-every'),
    _useState54 = _slicedToArray(_useState53, 2),
    clearButtonAction = _useState54[0],
    setClearButtonAction = _useState54[1];
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
  (0, _react.useEffect)(function () {
    if (displayInput && value !== null) {
    }
  },
  [displayInput]);
  return _react["default"].createElement("div", null, _react["default"].createElement(_material.FormGroup, {
    row: true,
    className: "demo-dynamic-settings"
  }, _react["default"].createElement(_material.FormControlLabel, {
    label: "Display input",
    control: _react["default"].createElement(_material.Switch, {
      checked: displayInput,
      onChange: function onChange() {
        return setDisplayInput(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Change input value on blur",
    control: _react["default"].createElement(_material.Switch, {
      checked: changeValueonChange,
      onChange: function onChange() {
        return setChangeValueonChange(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Change input value on enter",
    control: _react["default"].createElement(_material.Switch, {
      checked: changeValueOnEnter,
      onChange: function onChange() {
        return setChangeValueOnEnter(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Read-Only input",
    control: _react["default"].createElement(_material.Switch, {
      checked: readOnlyInput,
      onChange: function onChange() {
        return setReadOnlyInput(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Disabled",
    control: _react["default"].createElement(_material.Switch, {
      checked: disabled,
      onChange: function onChange() {
        return setDisabled(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Read-Only",
    control: _react["default"].createElement(_material.Switch, {
      checked: readOnly,
      onChange: function onChange() {
        return setReadOnly(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Humainze labels",
    control: _react["default"].createElement(_material.Switch, {
      checked: humanizeLabels,
      onChange: function onChange() {
        return setHumanizeLabels(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Humanize value",
    control: _react["default"].createElement(_material.Switch, {
      checked: humanizeValue,
      onChange: function onChange() {
        return setHumanizeValue(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Display error text",
    control: _react["default"].createElement(_material.Switch, {
      checked: displayErrorText,
      onChange: function onChange() {
        return setDisplayErrorText(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Display error style",
    control: _react["default"].createElement(_material.Switch, {
      checked: displayErrorStyle,
      onChange: function onChange() {
        return setDisplayErrorStyle(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Display clear button",
    control: _react["default"].createElement(_material.Switch, {
      checked: displayClearButton,
      onChange: function onChange() {
        return setDisplayClearButton(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Support shortcuts",
    control: _react["default"].createElement(_material.Switch, {
      checked: supportShortcuts,
      onChange: function onChange() {
        return setSupportShortcuts(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Remove prefix/suffix",
    control: _react["default"].createElement(_material.Switch, {
      checked: removePrefixSuffix,
      onChange: function onChange() {
        return setRemovePrefixSuffix(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Set custom style",
    control: _react["default"].createElement(_material.Switch, {
      checked: customStyle,
      onChange: function onChange() {
        return setCustomStyle(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Leading zero",
    control: _react["default"].createElement(_material.Switch, {
      checked: leadingZero,
      onChange: function onChange() {
        return setLeadingZero(function (prevValue) {
          return !prevValue;
        });
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Clock format",
    control: _react["default"].createElement(_material.RadioGroup, {
      value: clockFormat,
      onChange: function onChange(e) {
        return setClockFormat(e.target.value);
      }
    }, _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "",
      label: "None"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "12-hour-clock",
      label: "12-hour clock"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "24-hour-clock",
      label: "24-hour-clock"
    }))
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Locale",
    control: _react["default"].createElement(_material.RadioGroup, {
      value: locale,
      onChange: function onChange(e) {
        return setLocale(e.target.value);
      }
    }, _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "english",
      label: "English"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "french",
      label: "French"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "english-variant",
      label: "English variant"
    }))
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Clear button action",
    control: _react["default"].createElement(_material.RadioGroup, {
      value: clearButtonAction,
      onChange: function onChange(e) {
        return setClearButtonAction(e.target.value);
      }
    }, _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "empty",
      label: "Empty"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "fill-with-every",
      label: "Fill with every"
    }))
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Empty value management *",
    control: _react["default"].createElement(_material.RadioGroup, {
      value: allowEmpty,
      onChange: function onChange(e) {
        return setAllowEmpty(e.target.value);
      }
    }, _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "for-default-value",
      label: "For default value"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "always",
      label: "Always"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "never",
      label: "Never"
    }))
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Default value *",
    control: _react["default"].createElement(_material.Input, {
      value: defaultValue,
      onChange: function onChange(e) {
        return setDefaultValue(e.target.value);
      }
    })
  }), _react["default"].createElement(_material.FormControlLabel, {
    label: "Default period **",
    control: _react["default"].createElement(_material.RadioGroup, {
      value: defaultPeriod,
      onChange: function onChange(e) {
        return setDefaultPeriod(e.target.value);
      }
    }, _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "year",
      label: "Year"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "month",
      label: "Month"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "week",
      label: "Week"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "day",
      label: "Day"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "hour",
      label: "Hour"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "minute",
      label: "Minute"
    }), _react["default"].createElement(_material.FormControlLabel, {
      control: _react["default"].createElement(_material.Radio, null),
      value: "reboot",
      label: "Reboot"
    }))
  }), _react["default"].createElement("p", null, "(*) Need to reset the component to see the changes"), _react["default"].createElement("p", null, "(**) Need to reset the component and to have an empty default value to see the changes")), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      customSetValue(defaultValue);
      setKey(Math.random().toString(36).substring(7));
    }
  }, "Reset cron component")), displayInput && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_material.Input, {
    readOnly: readOnlyInput,
    onChange: function onChange(event) {
      changeValueonChange && setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR")), _react["default"].createElement(_index["default"], {
    key: key,
    value: value,
    setValue: customSetValue,
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
    locale: transformedLocale
  }), displayErrorText && _react["default"].createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Error: ", error ? error.description : 'undefined'));
}
function LocalInput() {
  var inputRef = (0, _react.useRef)();
  var defaultValue = '';
  var _useState55 = (0, _react.useState)(defaultValue),
    _useState56 = _slicedToArray(_useState55, 2),
    value = _useState56[0],
    setValue = _useState56[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return _react["default"].createElement("div", null, _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"onChange\" event must be used instead of \"onChange\" to prevent a value change from the cron component")), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Don't directly set the value of the Input with the prop \"value\", you will not be able to edit it")), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue
  }));
}
function InputWithOnEnter() {
  var inputRef = (0, _react.useRef)();
  var defaultValue = '0 10 * * 1,3,5';
  var _useState57 = (0, _react.useState)(defaultValue),
    _useState58 = _slicedToArray(_useState57, 2),
    value = _useState58[0],
    setValue = _useState58[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return _react["default"].createElement("div", null, _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can also add \"onEnter\" support to set the value")), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue
  }));
}
function ReadOnlyInput() {
  var defaultValue = '0 10 * * 1,3,5';
  var _useState59 = (0, _react.useState)(defaultValue),
    _useState60 = _slicedToArray(_useState59, 2),
    value = _useState60[0],
    setValue = _useState60[1];
  return _react["default"].createElement("div", null, _react["default"].createElement(_material.Input, {
    readOnly: true,
    value: value
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
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
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"defaultPeriod\" prop only work for empty default value")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '* * * * MON-WED,sat';
  var _useState69 = (0, _react.useState)(defaultValue),
    _useState70 = _slicedToArray(_useState69, 2),
    value = _useState70[0],
    setValue = _useState70[1];
  var _useState71 = (0, _react.useState)(),
    _useState72 = _slicedToArray(_useState71, 2),
    error = _useState72[0],
    onError = _useState72[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Humanize labels: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeLabels\" is true")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes the labels in the cron component")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '* * * * MON-WED,sat';
  var _useState73 = (0, _react.useState)(defaultValue),
    _useState74 = _slicedToArray(_useState73, 2),
    value = _useState74[0],
    setValue = _useState74[1];
  var _useState75 = (0, _react.useState)(),
    _useState76 = _slicedToArray(_useState75, 2),
    error = _useState76[0],
    onError = _useState76[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Humanize labels: false"), _react["default"].createElement("p", null, "Humanize value: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    humanizeLabels: false,
    humanizeValue: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeValue\" is false")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The prop \"humanizeValue\" cannot be used to prohibit used of valid string value like \"MON,WED\"")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is true, the component will automatically convert a valid number value to string")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is false, the component will automatically convert a valid string value to number")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "A valid string value can be in lowercase or uppercase")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '* * * * MON-WED,sat';
  var _useState77 = (0, _react.useState)(defaultValue),
    _useState78 = _slicedToArray(_useState77, 2),
    value = _useState78[0],
    setValue = _useState78[1];
  var _useState79 = (0, _react.useState)(),
    _useState80 = _slicedToArray(_useState79, 2),
    error = _useState80[0],
    onError = _useState80[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Humanize labels: true"), _react["default"].createElement("p", null, "Humanize value: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    humanizeValue: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes in the cron component both the labels and the value")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '5 3 2-3,8 * *';
  var _useState81 = (0, _react.useState)(defaultValue),
    _useState82 = _slicedToArray(_useState81, 2),
    value = _useState82[0],
    setValue = _useState82[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Leading zero: \"always\""), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    leadingZero: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can set the prop to a boolean or an array [\"minutes\", \"hours\", \"month-days\"]")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '';
  var _useState83 = (0, _react.useState)(defaultValue),
    _useState84 = _slicedToArray(_useState83, 2),
    value = _useState84[0],
    setValue = _useState84[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState85 = (0, _react.useState)(),
    _useState86 = _slicedToArray(_useState85, 2),
    error = _useState86[0],
    onError = _useState86[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement("div", {
    style: {
      marginTop: 10
    }
  }, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Write a bad cron expression to trigger an error after the \"onChange\" event")), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '';
  var _useState87 = (0, _react.useState)(defaultValue),
    _useState88 = _slicedToArray(_useState87, 2),
    value = _useState88[0],
    setValue = _useState88[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState89 = (0, _react.useState)(),
    _useState90 = _slicedToArray(_useState89, 2),
    error = _useState90[0],
    onError = _useState90[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Display error: false"), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    displayError: false
  }));
}
function NoClearButton() {
  var defaultValue = '';
  var _useState91 = (0, _react.useState)(defaultValue),
    _useState92 = _slicedToArray(_useState91, 2),
    value = _useState92[0],
    setValue = _useState92[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clear button: false"), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    clearButton: false,
    value: value,
    setValue: setValue
  }));
}
function ClearButtonEmptyValue() {
  var clearButtonAction = 'empty';
  var defaultValue = '0 10 * * 1,3,5';
  var _useState93 = (0, _react.useState)(defaultValue),
    _useState94 = _slicedToArray(_useState93, 2),
    value = _useState94[0],
    setValue = _useState94[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clear button action: ", clearButtonAction), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    clearButtonAction: clearButtonAction
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"clearButtonAction\" prop allow you to empty the field or fill it with \"* * * * *\"")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var _useState95 = (0, _react.useState)(defaultValue),
    _useState96 = _slicedToArray(_useState95, 2),
    value = _useState96[0],
    setValue = _useState96[1];
  var _useState97 = (0, _react.useState)(),
    _useState98 = _slicedToArray(_useState97, 2),
    error = _useState98[0],
    onError = _useState98[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: setValue,
    onError: onError
  }));
}
function EmptyNeverAllowed() {
  var inputRef = (0, _react.useRef)();
  var defaultValue = '';
  var _useState99 = (0, _react.useState)(defaultValue),
    _useState100 = _slicedToArray(_useState99, 2),
    value = _useState100[0],
    setValue = _useState100[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState101 = (0, _react.useState)(),
    _useState102 = _slicedToArray(_useState101, 2),
    error = _useState102[0],
    onError = _useState102[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Allow empty: \"never\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    allowEmpty: "never"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '';
  var _useState103 = (0, _react.useState)(defaultValue),
    _useState104 = _slicedToArray(_useState103, 2),
    value = _useState104[0],
    setValue = _useState104[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState105 = (0, _react.useState)(),
    _useState106 = _slicedToArray(_useState105, 2),
    error = _useState106[0],
    onError = _useState106[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Allow empty: \"always\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    allowEmpty: "always"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '@monthly';
  var _useState107 = (0, _react.useState)(defaultValue),
    _useState108 = _slicedToArray(_useState107, 2),
    value = _useState108[0],
    setValue = _useState108[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState109 = (0, _react.useState)(),
    _useState110 = _slicedToArray(_useState109, 2),
    error = _useState110[0],
    onError = _useState110[1];
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
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Shortcuts: true"), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    shortcuts: true
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"Shortcuts\" is [\"@yearly\", \"@annually\", \"@monthly\", \"@weekly\", \"@daily\", \"@midnight\", \"@hourly\"]")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Just pass true to activate all shortcuts including \"@reboot\"")), _react["default"].createElement(_material.Typography, {
    variant: "h6",
    id: "tableTitle",
    component: "div"
  }, "Supported shortcuts"), _react["default"].createElement(_material.Table, {
    style: {
      marginTop: 20
    }
  }, _react["default"].createElement(_material.TableHead, null, _react["default"].createElement(_material.TableRow, null, columns.map(function (obj) {
    return _react["default"].createElement(_material.TableCell, {
      key: obj.key
    }, obj.dataIndex);
  }))), _react["default"].createElement(_material.TableBody, null, data.map(function (_ref) {
    var key = _ref.key,
      name = _ref.name,
      description = _ref.description,
      value = _ref.value;
    return _react["default"].createElement(_material.TableRow, {
      key: key
    }, _react["default"].createElement(_material.TableCell, null, name), _react["default"].createElement(_material.TableCell, null, description), _react["default"].createElement(_material.TableCell, null, value));
  }))));
}
function TwelveHourClock() {
  var inputRef = (0, _react.useRef)();
  var defaultValue = '2 5,7,18 * * SUN';
  var _useState111 = (0, _react.useState)(defaultValue),
    _useState112 = _slicedToArray(_useState111, 2),
    value = _useState112[0],
    setValue = _useState112[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState113 = (0, _react.useState)(),
    _useState114 = _slicedToArray(_useState113, 2),
    error = _useState114[0],
    onError = _useState114[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clock format: \"12-hour-clock\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    clockFormat: "12-hour-clock"
  }));
}
function TwentyFourHourClock() {
  var inputRef = (0, _react.useRef)();
  var defaultValue = '2 5,7,18 * * SUN';
  var _useState115 = (0, _react.useState)(defaultValue),
    _useState116 = _slicedToArray(_useState115, 2),
    value = _useState116[0],
    setValue = _useState116[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState117 = (0, _react.useState)(),
    _useState118 = _slicedToArray(_useState117, 2),
    error = _useState118[0],
    onError = _useState118[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Clock format: \"24-hour-clock\""), _react["default"].createElement("p", null, "Default value: ", defaultValue), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    clockFormat: "24-hour-clock"
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "This prop override the prop \"leadingZero\" for \"hours\" and \"minutes\"")));
}
function FrenchLocale() {
  var inputRef = (0, _react.useRef)();
  var defaultValue = '* * 1-2 2,8 1,3,6';
  var _useState119 = (0, _react.useState)(defaultValue),
    _useState120 = _slicedToArray(_useState119, 2),
    value = _useState120[0],
    setValue = _useState120[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState121 = (0, _react.useState)(),
    _useState122 = _slicedToArray(_useState121, 2),
    error = _useState122[0],
    onError = _useState122[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "locale: FRENCH_LOCALE"), _react["default"].createElement("p", null, "humanizeLabels: true (by default)"), _react["default"].createElement("p", null, "Erreur: ", error ? error.description : 'undefined'), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OU"), _react["default"].createElement(_index["default"], {
    locale: _constants.FRENCH_LOCALE,
    value: value,
    setValue: customSetValue,
    onError: onError
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The order of the \"locale\" properties \"weekDays\", \"months\", \"altMonths\" and \"altWeekDays\" is important! The index will be used as value")), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var _useState123 = (0, _react.useState)(defaultValue),
    _useState124 = _slicedToArray(_useState123, 2),
    value = _useState124[0],
    setValue = _useState124[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "locale: ENGLISH_VARIANT_LOCALE"), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    locale: _constants.ENGLISH_VARIANT_LOCALE,
    value: value,
    setValue: setValue
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var _useState125 = (0, _react.useState)(defaultValue),
    _useState126 = _slicedToArray(_useState125, 2),
    value = _useState126[0],
    setValue = _useState126[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "locale: NO_PREFIX_SUFFIX_LOCALE"), _react["default"].createElement("p", null, "Value: ", value), _react["default"].createElement(_index["default"], {
    locale: _constants.NO_PREFIX_SUFFIX_LOCALE,
    value: value,
    setValue: setValue
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
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
  var inputRef = (0, _react.useRef)();
  var defaultValue = '30 14 22 * *';
  var _useState127 = (0, _react.useState)(defaultValue),
    _useState128 = _slicedToArray(_useState127, 2),
    value = _useState128[0],
    setValue = _useState128[1];
  var customSetValue = (0, _react.useCallback)(function (newValue) {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  var _useState129 = (0, _react.useState)(),
    _useState130 = _slicedToArray(_useState129, 2),
    error = _useState130[0],
    onError = _useState130[1];
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "className: my-project-cron"), _react["default"].createElement("p", null, "clearButtonProps: { type: \"default\" }"), _react["default"].createElement("p", null, "Error: ", error ? error.description : 'undefined'), _react["default"].createElement(_material.Input, {
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  }), _react["default"].createElement(_DividerWithText["default"], null, "OR"), _react["default"].createElement(_index["default"], {
    value: value,
    setValue: customSetValue,
    onError: onError,
    className: "my-project-cron",
    clearButtonProps: {
      type: 'button'
    }
  }), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Custom CSS example (See file \"styles.stories.css\"):"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "Bold prefix and suffix"), _react["default"].createElement("li", null, "Red prefix and suffix on error"), _react["default"].createElement("li", null, "Bigger border radius for selects and clear button"), _react["default"].createElement("li", null, "Gray backgroud for selected options"), _react["default"].createElement("li", null, "Clear button type changed to \"default\""))), _react["default"].createElement("div", null, _react["default"].createElement(_Info["default"], {
    style: {
      marginRight: 5
    }
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Available classes when using the prop \"className\":"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, ".my-project-cron"), _react["default"].createElement("li", null, ".my-project-cron-error"), _react["default"].createElement("li", null, ".my-project-cron-disabled"), _react["default"].createElement("li", null, ".my-project-cron-read-only"), _react["default"].createElement("li", null, ".my-project-cron-clear-button"), _react["default"].createElement("li", null, ".my-project-cron-field"), _react["default"].createElement("li", null, ".my-project-cron-period"), _react["default"].createElement("li", null, ".my-project-cron-minutes"), _react["default"].createElement("li", null, ".my-project-cron-hours"), _react["default"].createElement("li", null, ".my-project-cron-months"), _react["default"].createElement("li", null, ".my-project-cron-month-days"), _react["default"].createElement("li", null, ".my-project-cron-week-days"), _react["default"].createElement("li", null, ".my-project-cron-select"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-period"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-minutes"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-hours"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-months"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-month-days"), _react["default"].createElement("li", null, ".my-project-cron-select-dropdown-week-days"))));
}