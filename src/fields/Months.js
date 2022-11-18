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
function Months(props) {
    var value = props.value, setValue = props.setValue, locale = props.locale, className = props.className, humanizeLabels = props.humanizeLabels, disabled = props.disabled, readOnly = props.readOnly, period = props.period, selectProps = __rest(props, ["value", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "period"]);
    var optionsList = locale.months || locale_1.DEFAULT_LOCALE_EN.months;
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-field': true,
                'react-js-cron-months': true
            },
            _a["".concat(className, "-field")] = !!className,
            _a["".concat(className, "-months")] = !!className,
            _a));
    }, [className]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: internalClassName }, { children: [locale.prefixMonths !== '' && ((0, jsx_runtime_1.jsx)("span", { children: locale.prefixMonths || locale_1.DEFAULT_LOCALE_EN.prefixMonths })), (0, jsx_runtime_1.jsx)(CustomSelect_1["default"], __assign({ placeholder: locale.emptyMonths || locale_1.DEFAULT_LOCALE_EN.emptyMonths, optionsList: optionsList, grid: false, value: value, unit: __assign(__assign({}, constants_1.UNITS[3]), { 
                    // Allow translation of alternative labels when using "humanizeLabels"
                    // Issue #3
                    alt: locale.altMonths || locale_1.DEFAULT_LOCALE_EN.altMonths }), setValue: setValue, locale: locale, className: className, humanizeLabels: humanizeLabels, disabled: disabled, readOnly: readOnly, period: period }, selectProps))] })));
}
exports["default"] = Months;
