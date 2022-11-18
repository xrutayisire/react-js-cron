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
var material_1 = require("@mui/material");
var locale_1 = require("../locale");
var utils_1 = require("../utils");
function Period(props) {
    var value = props.value, setValue = props.setValue, locale = props.locale, className = props.className, disabled = props.disabled, readOnly = props.readOnly, shortcuts = props.shortcuts, selectProps = __rest(props, ["value", "setValue", "locale", "className", "disabled", "readOnly", "shortcuts"]);
    var options = [
        {
            value: 'year',
            label: locale.yearOption || locale_1.DEFAULT_LOCALE_EN.yearOption
        },
        {
            value: 'month',
            label: locale.monthOption || locale_1.DEFAULT_LOCALE_EN.monthOption
        },
        {
            value: 'week',
            label: locale.weekOption || locale_1.DEFAULT_LOCALE_EN.weekOption
        },
        {
            value: 'day',
            label: locale.dayOption || locale_1.DEFAULT_LOCALE_EN.dayOption
        },
        {
            value: 'hour',
            label: locale.hourOption || locale_1.DEFAULT_LOCALE_EN.hourOption
        },
        {
            value: 'minute',
            label: locale.minuteOption || locale_1.DEFAULT_LOCALE_EN.minuteOption
        },
    ];
    if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
        options = __spreadArray(__spreadArray([], options, true), [
            {
                value: 'reboot',
                label: locale.rebootOption || locale_1.DEFAULT_LOCALE_EN.rebootOption
            },
        ], false);
    }
    var handleChange = (0, react_1.useCallback)(function (event) {
        if (!readOnly) {
            setValue(event.target.value);
        }
    }, [setValue, readOnly]);
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-field': true,
                'react-js-cron-period': true
            },
            _a["".concat(className, "-field")] = !!className,
            _a["".concat(className, "-period")] = !!className,
            _a));
    }, [className]);
    var selectClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-select': true,
                'react-js-cron-select-no-prefix': locale.prefixPeriod === ''
            },
            _a["".concat(className, "-select")] = !!className,
            _a));
    }, [className, locale.prefixPeriod]);
    // const dropdownClassName = useMemo(
    //   () =>
    //     classNames({
    //       'react-js-cron-select-dropdown': true,
    //       'react-js-cron-select-dropdown-period': true,
    //       [`${className}-select-dropdown`]: !!className,
    //       [`${className}-select-dropdown-period`]: !!className,
    //     }),
    //   [className]
    // )
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: internalClassName }, { children: [locale.prefixPeriod !== '' && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixPeriod || locale_1.DEFAULT_LOCALE_EN.prefixPeriod })), (0, jsx_runtime_1.jsx)(material_1.Select, __assign({ defaultValue: value, value: value, onChange: handleChange, className: selectClassName, disabled: disabled, open: readOnly ? false : undefined }, selectProps, { children: options.map(function (obj) { return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: obj.value }, { children: obj.label }), obj.value)); }) }), JSON.stringify(locale))] })));
}
exports["default"] = Period;
