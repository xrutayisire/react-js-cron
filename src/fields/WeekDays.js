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
function WeekDays(props) {
    var value = props.value, setValue = props.setValue, locale = props.locale, className = props.className, humanizeLabels = props.humanizeLabels, monthDays = props.monthDays, disabled = props.disabled, readOnly = props.readOnly, period = props.period, selectProps = __rest(props, ["value", "setValue", "locale", "className", "humanizeLabels", "monthDays", "disabled", "readOnly", "period"]);
    var optionsList = locale.weekDays || locale_1.DEFAULT_LOCALE_EN.weekDays;
    var noMonthDays = period === 'week' || !monthDays || monthDays.length === 0;
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-field': true,
                'react-js-cron-week-days': true,
                'react-js-cron-week-days-placeholder': !noMonthDays
            },
            _a["".concat(className, "-field")] = !!className,
            _a["".concat(className, "-week-days")] = !!className,
            _a));
    }, [className, noMonthDays]);
    var localeJSON = JSON.stringify(locale);
    var placeholder = (0, react_1.useMemo)(function () {
        if (noMonthDays) {
            return locale.emptyWeekDays || locale_1.DEFAULT_LOCALE_EN.emptyWeekDays;
        }
        return locale.emptyWeekDaysShort || locale_1.DEFAULT_LOCALE_EN.emptyWeekDaysShort;
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noMonthDays, localeJSON]);
    var displayWeekDays = period === 'week' ||
        !readOnly ||
        (value && value.length > 0) ||
        ((!value || value.length === 0) && (!monthDays || monthDays.length === 0));
    var monthDaysIsDisplayed = !readOnly ||
        (monthDays && monthDays.length > 0) ||
        ((!monthDays || monthDays.length === 0) && (!value || value.length === 0));
    return displayWeekDays ? ((0, jsx_runtime_1.jsxs)("div", __assign({ className: internalClassName }, { children: [locale.prefixWeekDays !== '' &&
                (period === 'week' || !monthDaysIsDisplayed) && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixWeekDays || locale_1.DEFAULT_LOCALE_EN.prefixWeekDays })), locale.prefixWeekDaysForMonthAndYearPeriod !== '' &&
                period !== 'week' &&
                monthDaysIsDisplayed && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixWeekDaysForMonthAndYearPeriod ||
                    locale_1.DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod })), (0, jsx_runtime_1.jsx)(CustomSelect_1["default"], __assign({ placeholder: placeholder, optionsList: optionsList, grid: false, value: value, unit: __assign(__assign({}, constants_1.UNITS[4]), { 
                    // Allow translation of alternative labels when using "humanizeLabels"
                    // Issue #3
                    alt: locale.altWeekDays || locale_1.DEFAULT_LOCALE_EN.altWeekDays }), setValue: setValue, locale: locale, className: className, humanizeLabels: humanizeLabels, disabled: disabled, readOnly: readOnly, period: period }, selectProps))] }))) : null;
}
exports["default"] = WeekDays;
