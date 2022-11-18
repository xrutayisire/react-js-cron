"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var MenuItem_1 = require("@mui/material/MenuItem");
var Select_1 = require("@mui/material/Select");
var locale_1 = require("../locale");
var utils_1 = require("../utils");
var converter_1 = require("../converter");
function CustomSelect(props) {
    var value = props.value, setValue = props.setValue, locale = props.locale, className = props.className, humanizeLabels = props.humanizeLabels, disabled = props.disabled, readOnly = props.readOnly, leadingZero = props.leadingZero, clockFormat = props.clockFormat, optionsList = props.optionsList, unit = props.unit, selectProps = __rest(props, ["value", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "leadingZero", "clockFormat", "optionsList", "unit"]);
    var stringValue = (0, react_1.useMemo)(function () {
        if (value && Array.isArray(value)) {
            return value.map(function (value) { return value.toString(); });
        }
        return [];
    }, [value]);
    var options = (0, react_1.useMemo)(function () {
        if (optionsList) {
            return optionsList.map(function (option, index) {
                var number = unit.min === 0 ? index : index + 1;
                return {
                    value: number.toString(),
                    label: option
                };
            });
        }
        return __spreadArray([], Array(unit.total), true).map(function (e, index) {
            var number = unit.min === 0 ? index : index + 1;
            return {
                value: number.toString(),
                label: (0, converter_1.formatValue)(number, unit, humanizeLabels, leadingZero, clockFormat)
            };
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [optionsList, leadingZero, humanizeLabels, clockFormat]);
    var localeJSON = JSON.stringify(locale);
    var renderTag = (0, react_1.useCallback)(function (props) {
        var value = props;
        if (!value) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
        }
        var parsedArray = (0, converter_1.parsePartArray)(value, unit);
        var cronValue = (0, converter_1.partToString)(parsedArray, unit, humanizeLabels, leadingZero, clockFormat);
        var testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
        return ((0, jsx_runtime_1.jsx)("div", { children: testEveryValue[1]
                ? "".concat(locale.everyText || locale_1.DEFAULT_LOCALE_EN.everyText, " \n            ").concat(testEveryValue[1])
                : cronValue }));
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
    var simpleClick = (0, react_1.useCallback)(function (event) {
        var newValueOption = event.target.value;
        if (newValueOption.length == 0) {
            newValueOption.push(0);
        }
        newValueOption = Array.isArray(newValueOption)
            ? (0, utils_1.sort)(newValueOption)
            : [newValueOption];
        var newValue = newValueOption;
        if (newValue.length === unit.total) {
            setValue([]);
        }
        else {
            setValue(newValue);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, value]);
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-select': true,
                'react-js-cron-custom-select': true
            },
            _a["".concat(className, "-select")] = !!className,
            _a));
    }, [className]);
    return ((0, jsx_runtime_1.jsx)(Select_1["default"], __assign({ multiple: true, open: readOnly ? false : undefined, value: stringValue, onChange: simpleClick, renderValue: renderTag, className: internalClassName, autoWidth: false, disabled: disabled }, selectProps, { children: options.map(function (obj) { return ((0, jsx_runtime_1.jsx)(MenuItem_1["default"], __assign({ value: obj.value }, { children: obj.label }), obj.value)); }) })));
}
exports["default"] = CustomSelect;
