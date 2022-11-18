"use strict";
exports.__esModule = true;
exports.usePrevious = exports.setError = exports.classNames = exports.dedup = exports.sort = exports.range = void 0;
var react_1 = require("react");
var locale_1 = require("./locale");
/**
 * Creates an array of integers from start to end, inclusive
 */
function range(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
exports.range = range;
/**
 * Sorts an array of numbers
 */
function sort(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array;
}
exports.sort = sort;
/**
 * Removes duplicate entries from an array
 */
function dedup(array) {
    var result = [];
    array.forEach(function (i) {
        if (result.indexOf(i) < 0) {
            result.push(i);
        }
    });
    return result;
}
exports.dedup = dedup;
/**
 * Simple classNames util function to prevent adding external library 'classnames'
 */
function classNames(classes) {
    return Object.entries(classes)
        .filter(function (_a) {
        var key = _a[0], value = _a[1];
        return key && value;
    })
        .map(function (_a) {
        var key = _a[0];
        return key;
    })
        .join(' ');
}
exports.classNames = classNames;
/**
 * Handle onError prop to set the error
 */
function setError(onError, locale) {
    onError &&
        onError({
            type: 'invalid_cron',
            description: locale.errorInvalidCron || locale_1.DEFAULT_LOCALE_EN.errorInvalidCron
        });
}
exports.setError = setError;
/**
 * React useEffect hook to return the previous value
 */
function usePrevious(value) {
    var ref = (0, react_1.useRef)(value);
    (0, react_1.useEffect)(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}
exports.usePrevious = usePrevious;
