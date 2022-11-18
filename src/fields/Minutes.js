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
function Minutes(props) {
    var value = props.value, setValue = props.setValue, locale = props.locale, className = props.className, disabled = props.disabled, readOnly = props.readOnly, leadingZero = props.leadingZero, clockFormat = props.clockFormat, period = props.period, selectProps = __rest(props, ["value", "setValue", "locale", "className", "disabled", "readOnly", "leadingZero", "clockFormat", "period"]);
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-field': true,
                'react-js-cron-minutes': true
            },
            _a["".concat(className, "-field")] = !!className,
            _a["".concat(className, "-minutes")] = !!className,
            _a));
    }, [className]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: internalClassName }, { children: [period === 'hour'
                ? locale.prefixMinutesForHourPeriod !== '' && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixMinutesForHourPeriod ||
                        locale_1.DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod }))
                : locale.prefixMinutes !== '' && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixMinutes || locale_1.DEFAULT_LOCALE_EN.prefixMinutes })), (0, jsx_runtime_1.jsx)(CustomSelect_1["default"], __assign({ placeholder: period === 'hour'
                    ? locale.emptyMinutesForHourPeriod ||
                        locale_1.DEFAULT_LOCALE_EN.emptyMinutesForHourPeriod
                    : locale.emptyMinutes || locale_1.DEFAULT_LOCALE_EN.emptyMinutes, value: value, unit: constants_1.UNITS[0], setValue: setValue, locale: locale, className: className, disabled: disabled, readOnly: readOnly, leadingZero: leadingZero, clockFormat: clockFormat, period: period }, selectProps)), period === 'hour' && locale.suffixMinutesForHourPeriod !== '' && ((0, jsx_runtime_1.jsx)("span", { children: locale.suffixMinutesForHourPeriod ||
                    locale_1.DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod }))] })));
}
exports["default"] = Minutes;
