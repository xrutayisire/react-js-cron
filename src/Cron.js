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
var material_1 = require("@mui/material");
var Period_1 = require("./fields/Period");
var MonthDays_1 = require("./fields/MonthDays");
var Months_1 = require("./fields/Months");
var Hours_1 = require("./fields/Hours");
var Minutes_1 = require("./fields/Minutes");
var WeekDays_1 = require("./fields/WeekDays");
var utils_1 = require("./utils");
var locale_1 = require("./locale");
var converter_1 = require("./converter");
require("./styles.css");
function Cron(props) {
    var _a = props.clearButton, clearButton = _a === void 0 ? true : _a, _b = props.clearButtonProps, clearButtonProps = _b === void 0 ? {} : _b, _c = props.clearButtonAction, clearButtonAction = _c === void 0 ? 'fill-with-every' : _c, _d = props.locale, locale = _d === void 0 ? locale_1.DEFAULT_LOCALE_EN : _d, _e = props.value, value = _e === void 0 ? '' : _e, setValue = props.setValue, _f = props.displayError, displayError = _f === void 0 ? true : _f, onError = props.onError, className = props.className, _g = props.defaultPeriod, defaultPeriod = _g === void 0 ? 'day' : _g, _h = props.allowEmpty, allowEmpty = _h === void 0 ? 'for-default-value' : _h, _j = props.humanizeLabels, humanizeLabels = _j === void 0 ? true : _j, _k = props.humanizeValue, humanizeValue = _k === void 0 ? false : _k, _l = props.disabled, disabled = _l === void 0 ? false : _l, _m = props.readOnly, readOnly = _m === void 0 ? false : _m, _o = props.leadingZero, leadingZero = _o === void 0 ? false : _o, _p = props.shortcuts, shortcuts = _p === void 0 ? [
        '@yearly',
        '@annually',
        '@monthly',
        '@weekly',
        '@daily',
        '@midnight',
        '@hourly',
    ] : _p, clockFormat = props.clockFormat, selectProps = __rest(props, ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "allowEmpty", "humanizeLabels", "humanizeValue", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"]);
    var internalValueRef = (0, react_1.useRef)(value);
    var defaultPeriodRef = (0, react_1.useRef)(defaultPeriod);
    var _q = (0, react_1.useState)(), period = _q[0], setPeriod = _q[1];
    var _r = (0, react_1.useState)(), monthDays = _r[0], setMonthDays = _r[1];
    var _s = (0, react_1.useState)(), months = _s[0], setMonths = _s[1];
    var _t = (0, react_1.useState)(), weekDays = _t[0], setWeekDays = _t[1];
    var _u = (0, react_1.useState)(), hours = _u[0], setHours = _u[1];
    var _v = (0, react_1.useState)(), minutes = _v[0], setMinutes = _v[1];
    var _w = (0, react_1.useState)(false), error = _w[0], setInternalError = _w[1];
    var _x = (0, react_1.useState)(false), valueCleared = _x[0], setValueCleared = _x[1];
    var previousValueCleared = (0, utils_1.usePrevious)(valueCleared);
    var localeJSON = JSON.stringify(locale);
    (0, react_1.useEffect)(function () {
        (0, converter_1.setValuesFromCronString)(value, setInternalError, onError, allowEmpty, internalValueRef, true, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    (0, react_1.useEffect)(function () {
        if (value !== internalValueRef.current) {
            (0, converter_1.setValuesFromCronString)(value, setInternalError, onError, allowEmpty, internalValueRef, false, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, internalValueRef, localeJSON, allowEmpty, shortcuts]);
    (0, react_1.useEffect)(function () {
        // Only change the value if a user touched a field
        // and if the user didn't use the clear button
        if ((period ||
            minutes ||
            months ||
            monthDays ||
            weekDays ||
            hours ||
            minutes) &&
            !valueCleared &&
            !previousValueCleared) {
            var cron = (0, converter_1.getCronStringFromValues)(period || defaultPeriodRef.current, months, monthDays, weekDays, hours, minutes, humanizeValue);
            setValue(cron);
            internalValueRef.current = cron;
            onError && onError(undefined);
            setInternalError(false);
        }
        else if (valueCleared) {
            setValueCleared(false);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        period,
        monthDays,
        months,
        weekDays,
        hours,
        minutes,
        humanizeValue,
        valueCleared,
    ]);
    var handleClear = (0, react_1.useCallback)(function () {
        setMonthDays(undefined);
        setMonths(undefined);
        setWeekDays(undefined);
        setHours(undefined);
        setMinutes(undefined);
        // When clearButtonAction is 'empty'
        var newValue = '';
        var newPeriod = period !== 'reboot' && period ? period : defaultPeriodRef.current;
        if (newPeriod !== period) {
            setPeriod(newPeriod);
        }
        // When clearButtonAction is 'fill-with-every'
        if (clearButtonAction === 'fill-with-every') {
            var cron = (0, converter_1.getCronStringFromValues)(newPeriod, undefined, undefined, undefined, undefined, undefined);
            newValue = cron;
        }
        setValue(newValue);
        internalValueRef.current = newValue;
        setValueCleared(true);
        if (allowEmpty === 'never' && clearButtonAction === 'empty') {
            setInternalError(true);
            (0, utils_1.setError)(onError, locale);
        }
        else {
            onError && onError(undefined);
            setInternalError(false);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [period, setValue, onError, clearButtonAction]);
    var internalClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron': true,
                'react-js-cron-error': error && displayError,
                'react-js-cron-disabled': disabled,
                'react-js-cron-read-only': readOnly
            },
            _a["".concat(className)] = !!className,
            _a["".concat(className, "-error")] = error && displayError && !!className,
            _a["".concat(className, "-disabled")] = disabled && !!className,
            _a["".concat(className, "-read-only")] = readOnly && !!className,
            _a));
    }, [className, error, displayError, disabled, readOnly]);
    var clearButtonClassNameProp = clearButtonProps.className, otherClearButtonProps = __rest(clearButtonProps, ["className"]);
    var clearButtonClassName = (0, react_1.useMemo)(function () {
        var _a;
        return (0, utils_1.classNames)((_a = {
                'react-js-cron-clear-button': true
            },
            _a["".concat(className, "-clear-button")] = !!className,
            _a["".concat(clearButtonClassNameProp)] = !!clearButtonClassNameProp,
            _a));
    }, [className, clearButtonClassNameProp]);
    var otherClearButtonPropsJSON = JSON.stringify(otherClearButtonProps);
    var clearButtonNode = (0, react_1.useMemo)(function () {
        if (clearButton && !readOnly) {
            return ((0, jsx_runtime_1.jsx)(material_1.Button, __assign({ style: { marginLeft: '10px' }, className: clearButtonClassName, variant: 'contained', color: 'secondary', disabled: disabled, onClick: handleClear }, { children: locale.clearButtonText || locale_1.DEFAULT_LOCALE_EN.clearButtonText })));
        }
        return null;
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        clearButton,
        readOnly,
        localeJSON,
        clearButtonClassName,
        disabled,
        otherClearButtonPropsJSON,
        handleClear,
    ]);
    var periodForRender = period || defaultPeriodRef.current;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: internalClassName }, { children: [(0, jsx_runtime_1.jsx)(Period_1["default"], __assign({ value: periodForRender, setValue: setPeriod, locale: locale, className: className, disabled: disabled, readOnly: readOnly, shortcuts: shortcuts }, selectProps)), periodForRender === 'reboot' ? (clearButtonNode) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [periodForRender === 'year' && ((0, jsx_runtime_1.jsx)(Months_1["default"], __assign({ value: months, setValue: setMonths, locale: locale, className: className, humanizeLabels: humanizeLabels, disabled: disabled, readOnly: readOnly, period: periodForRender }, selectProps))), (periodForRender === 'year' || periodForRender === 'month') && ((0, jsx_runtime_1.jsx)(MonthDays_1["default"], __assign({ value: monthDays, setValue: setMonthDays, locale: locale, className: className, weekDays: weekDays, disabled: disabled, readOnly: readOnly, leadingZero: leadingZero, period: periodForRender }, selectProps))), (periodForRender === 'year' ||
                        periodForRender === 'month' ||
                        periodForRender === 'week') && ((0, jsx_runtime_1.jsx)(WeekDays_1["default"], __assign({ value: weekDays, setValue: setWeekDays, locale: locale, className: className, humanizeLabels: humanizeLabels, monthDays: monthDays, disabled: disabled, readOnly: readOnly, period: periodForRender }, selectProps))), (0, jsx_runtime_1.jsxs)("div", { children: [periodForRender !== 'minute' && periodForRender !== 'hour' && ((0, jsx_runtime_1.jsx)(Hours_1["default"], __assign({ value: hours, setValue: setHours, locale: locale, className: className, disabled: disabled, readOnly: readOnly, leadingZero: leadingZero, clockFormat: clockFormat, period: periodForRender }, selectProps))), periodForRender !== 'minute' && ((0, jsx_runtime_1.jsx)(Minutes_1["default"], __assign({ value: minutes, setValue: setMinutes, locale: locale, period: periodForRender, className: className, disabled: disabled, readOnly: readOnly, leadingZero: leadingZero, clockFormat: clockFormat }, selectProps))), clearButtonNode] })] }))] })));
}
exports["default"] = Cron;
