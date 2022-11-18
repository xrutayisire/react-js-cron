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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CustomSelect_1 = require("../components/CustomSelect");
var locale_1 = require("../locale");
var utils_1 = require("../utils");
var constants_1 = require("../constants");
function MonthDays(props) {
    var value = props.value, setValue = props.setValue, locale = props.locale, className = props.className, weekDays = props.weekDays, disabled = props.disabled, readOnly = props.readOnly, leadingZero = props.leadingZero, period = props.period, selectProps = __rest(props, ["value", "setValue", "locale", "className", "weekDays", "disabled", "readOnly", "leadingZero", "period"]);
    var noWeekDays = !weekDays || weekDays.length === 0;
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-field': true,
                'react-js-cron-month-days': true,
                'react-js-cron-month-days-placeholder': !noWeekDays
            },
            _a["".concat(className, "-field")] = !!className,
            _a["".concat(className, "-month-days")] = !!className,
            _a));
    }, [className, noWeekDays]);
    var localeJSON = JSON.stringify(locale);
    var placeholder = (0, react_1.useMemo)(function () {
        if (noWeekDays) {
            return locale.emptyMonthDays || locale_1.DEFAULT_LOCALE_EN.emptyMonthDays;
        }
        return locale.emptyMonthDaysShort || locale_1.DEFAULT_LOCALE_EN.emptyMonthDaysShort;
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noWeekDays, localeJSON]);
    var displayMonthDays = !readOnly ||
        (value && value.length > 0) ||
        ((!value || value.length === 0) && (!weekDays || weekDays.length === 0));
    return displayMonthDays ? ((0, jsx_runtime_1.jsxs)("div", __assign({ className: internalClassName }, { children: [locale.prefixMonthDays !== '' && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixMonthDays || locale_1.DEFAULT_LOCALE_EN.prefixMonthDays })), (0, jsx_runtime_1.jsx)(CustomSelect_1["default"], __assign({ placeholder: placeholder, value: value, setValue: setValue, unit: constants_1.UNITS[2], locale: locale, className: className, disabled: disabled, readOnly: readOnly, leadingZero: leadingZero, period: period }, selectProps))] }))) : null;
}
exports["default"] = MonthDays;
