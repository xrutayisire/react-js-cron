"use strict";
exports.__esModule = true;
exports.parsePartArray = exports.formatValue = exports.partToString = exports.getCronStringFromValues = exports.setValuesFromCronString = void 0;
var constants_1 = require("./constants");
var utils_1 = require("./utils");
/**
 * Set values from cron string
 */
function setValuesFromCronString(cronString, setInternalError, onError, allowEmpty, internalValueRef, firstRender, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod) {
    onError && onError(undefined);
    setInternalError(false);
    var error = false;
    // Handle empty cron string
    if (!cronString) {
        if (allowEmpty === 'always' ||
            (firstRender && allowEmpty === 'for-default-value')) {
            return;
        }
        error = true;
    }
    if (!error) {
        // Shortcuts management
        if (shortcuts &&
            (shortcuts === true || shortcuts.includes(cronString))) {
            if (cronString === '@reboot') {
                setPeriod('reboot');
                return;
            }
            // Convert a shortcut to a valid cron string
            var shortcutObject = constants_1.SUPPORTED_SHORTCUTS.find(function (supportedShortcut) { return supportedShortcut.name === cronString; });
            if (shortcutObject) {
                cronString = shortcutObject.value;
            }
        }
        try {
            var cronParts = parseCronString(cronString);
            var period = getPeriodFromCronparts(cronParts);
            setPeriod(period);
            setMinutes(cronParts[0]);
            setHours(cronParts[1]);
            setMonthDays(cronParts[2]);
            setMonths(cronParts[3]);
            setWeekDays(cronParts[4]);
        }
        catch (err) {
            // Specific errors are not handle (yet)
            error = true;
        }
    }
    if (error) {
        internalValueRef.current = cronString;
        setInternalError(true);
        (0, utils_1.setError)(onError, locale);
    }
}
exports.setValuesFromCronString = setValuesFromCronString;
/**
 * Get cron string from values
 */
function getCronStringFromValues(period, months, monthDays, weekDays, hours, minutes, humanizeValue) {
    if (period === 'reboot') {
        return '@reboot';
    }
    var newMonths = period === 'year' && months ? months : [];
    var newMonthDays = (period === 'year' || period === 'month') && monthDays ? monthDays : [];
    var newWeekDays = (period === 'year' || period === 'month' || period === 'week') && weekDays
        ? weekDays
        : [];
    var newHours = period !== 'minute' && period !== 'hour' && hours ? hours : [];
    var newMinutes = period !== 'minute' && minutes ? minutes : [];
    var parsedArray = parseCronArray([newMinutes, newHours, newMonthDays, newMonths, newWeekDays], humanizeValue);
    return cronToString(parsedArray);
}
exports.getCronStringFromValues = getCronStringFromValues;
/**
 * Returns the cron part array as a string.
 */
function partToString(cronPart, unit, humanize, leadingZero, clockFormat) {
    var retval = '';
    if (isFull(cronPart, unit) || cronPart.length === 0) {
        retval = '*';
    }
    else {
        var step = getStep(cronPart);
        if (step && isInterval(cronPart, step)) {
            if (isFullInterval(cronPart, unit, step)) {
                retval = "*/".concat(step);
            }
            else {
                retval = "".concat(formatValue(getMin(cronPart), unit, humanize, leadingZero, clockFormat), "-").concat(formatValue(getMax(cronPart), unit, humanize, leadingZero, clockFormat), "/").concat(step);
            }
        }
        else {
            retval = toRanges(cronPart)
                .map(function (range) {
                if (Array.isArray(range)) {
                    return "".concat(formatValue(range[0], unit, humanize, leadingZero, clockFormat), "-").concat(formatValue(range[1], unit, humanize, leadingZero, clockFormat));
                }
                return formatValue(range, unit, humanize, leadingZero, clockFormat);
            })
                .join(',');
        }
    }
    return retval;
}
exports.partToString = partToString;
/**
 * Format the value
 */
function formatValue(value, unit, humanize, leadingZero, clockFormat) {
    var cronPartString = value.toString();
    var type = unit.type, alt = unit.alt, min = unit.min;
    var needLeadingZero = leadingZero && (leadingZero === true || leadingZero.includes(type));
    var need24HourClock = clockFormat === '24-hour-clock' && (type === 'hours' || type === 'minutes');
    if ((humanize && type === 'week-days') || (humanize && type === 'months')) {
        cronPartString = alt[value - min];
    }
    else if (value < 10 && (needLeadingZero || need24HourClock)) {
        cronPartString = cronPartString.padStart(2, '0');
    }
    if (type === 'hours' && clockFormat === '12-hour-clock') {
        var suffix = value >= 12 ? 'PM' : 'AM';
        var hour = value % 12 || 12;
        if (hour < 10 && needLeadingZero) {
            hour = hour.toString().padStart(2, '0');
        }
        cronPartString = "".concat(hour).concat(suffix);
    }
    return cronPartString;
}
exports.formatValue = formatValue;
/**
 * Parses a 2-dimentional array of integers as a cron schedule
 */
function parseCronArray(cronArr, humanizeValue) {
    if (cronArr.length === 5) {
        return cronArr.map(function (partArr, idx) {
            var unit = constants_1.UNITS[idx];
            var parsedArray = parsePartArray(partArr, unit);
            return partToString(parsedArray, unit, humanizeValue);
        });
    }
    throw new Error('Invalid cron array');
}
/**
 * Returns the cron array as a string
 */
function cronToString(parts) {
    return parts.join(' ');
}
/**
 * Find the period from cron parts
 */
function getPeriodFromCronparts(cronParts) {
    if (cronParts[3].length > 0) {
        return 'year';
    }
    else if (cronParts[2].length > 0) {
        return 'month';
    }
    else if (cronParts[4].length > 0) {
        return 'week';
    }
    else if (cronParts[1].length > 0) {
        return 'day';
    }
    else if (cronParts[0].length > 0) {
        return 'hour';
    }
    return 'minute';
}
/**
 * Parses a cron string to an array of parts
 */
function parseCronString(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid cron string');
    }
    var parts = str.replace(/\s+/g, ' ').trim().split(' ');
    if (parts.length === 5) {
        return parts.map(function (partStr, idx) {
            return parsePartString(partStr, constants_1.UNITS[idx]);
        });
    }
    throw new Error('Invalid cron string format');
}
/**
 * Parses a string as a range of positive integers
 */
function parsePartString(str, unit) {
    if (str === '*' || str === '*/1') {
        return [];
    }
    var stringParts = str.split('/');
    if (stringParts.length > 2) {
        throw new Error("Invalid value \"".concat(unit.type, "\""));
    }
    var rangeString = replaceAlternatives(stringParts[0], unit.min, unit.alt);
    var parsedValues;
    if (rangeString === '*') {
        parsedValues = (0, utils_1.range)(unit.min, unit.max);
    }
    else {
        parsedValues = (0, utils_1.sort)((0, utils_1.dedup)(fixSunday(rangeString
            .split(',')
            .map(function (range) {
            return parseRange(range, str, unit);
        })
            .flat(), unit)));
        var value = outOfRange(parsedValues, unit);
        if (typeof value !== 'undefined') {
            throw new Error("Value \"".concat(value, "\" out of range for ").concat(unit.type));
        }
    }
    var step = parseStep(stringParts[1], unit);
    var intervalValues = applyInterval(parsedValues, step);
    if (intervalValues.length === unit.total) {
        return [];
    }
    else if (intervalValues.length === 0) {
        throw new Error("Empty interval value \"".concat(str, "\" for ").concat(unit.type));
    }
    return intervalValues;
}
/**
 * Replaces the alternative representations of numbers in a string
 */
function replaceAlternatives(str, min, alt) {
    if (alt) {
        str = str.toUpperCase();
        for (var i = 0; i < alt.length; i++) {
            str = str.replace(alt[i], "".concat(i + min));
        }
    }
    return str;
}
/**
 * Replace all 7 with 0 as Sunday can be represented by both
 */
function fixSunday(values, unit) {
    if (unit.type === 'week-days') {
        values = values.map(function (value) {
            if (value === 7) {
                return 0;
            }
            return value;
        });
    }
    return values;
}
/**
 * Parses a range string
 */
function parseRange(rangeStr, context, unit) {
    var subparts = rangeStr.split('-');
    if (subparts.length === 1) {
        var value = parseInt(subparts[0], 10);
        if (isNaN(value)) {
            throw new Error("Invalid value \"".concat(context, "\" for ").concat(unit.type));
        }
        return [value];
    }
    else if (subparts.length === 2) {
        var minValue = parseInt(subparts[0], 10);
        var maxValue = parseInt(subparts[1], 10);
        if (maxValue <= minValue) {
            throw new Error("Max range is less than min range in \"".concat(rangeStr, "\" for ").concat(unit.type));
        }
        return (0, utils_1.range)(minValue, maxValue);
    }
    else {
        throw new Error("Invalid value \"".concat(rangeStr, "\" for ").concat(unit.type));
    }
}
/**
 * Finds an element from values that is outside of the range of unit
 */
function outOfRange(values, unit) {
    var first = values[0];
    var last = values[values.length - 1];
    if (first < unit.min) {
        return first;
    }
    else if (last > unit.max) {
        return last;
    }
    return;
}
/**
 * Parses the step from a part string
 */
function parseStep(step, unit) {
    if (typeof step !== 'undefined') {
        var parsedStep = parseInt(step, 10);
        if (isNaN(parsedStep) || parsedStep < 1) {
            throw new Error("Invalid interval step value \"".concat(step, "\" for ").concat(unit.type));
        }
        return parsedStep;
    }
}
/**
 * Applies an interval step to a collection of values
 */
function applyInterval(values, step) {
    if (step) {
        var minVal_1 = values[0];
        values = values.filter(function (value) {
            return value % step === minVal_1 % step || value === minVal_1;
        });
    }
    return values;
}
/**
 * Validates a range of positive integers
 */
function parsePartArray(arr, unit) {
    var values = (0, utils_1.sort)((0, utils_1.dedup)(fixSunday(arr, unit)));
    if (values.length === 0) {
        return values;
    }
    var value = outOfRange(values, unit);
    if (typeof value !== 'undefined') {
        throw new Error("Value \"".concat(value, "\" out of range for ").concat(unit.type));
    }
    return values;
}
exports.parsePartArray = parsePartArray;
/**
 * Returns true if range has all the values of the unit
 */
function isFull(values, unit) {
    return values.length === unit.max - unit.min + 1;
}
/**
 * Returns the difference between first and second elements in the range
 */
function getStep(values) {
    if (values.length > 2) {
        var step = values[1] - values[0];
        if (step > 1) {
            return step;
        }
    }
}
/**
 * Returns true if the range can be represented as an interval
 */
function isInterval(values, step) {
    for (var i = 1; i < values.length; i++) {
        var prev = values[i - 1];
        var value = values[i];
        if (value - prev !== step) {
            return false;
        }
    }
    return true;
}
/**
 * Returns true if the range contains all the interval values
 */
function isFullInterval(values, unit, step) {
    var min = getMin(values);
    var max = getMax(values);
    var haveAllValues = values.length === (max - min) / step + 1;
    if (min === unit.min && max + step > unit.max && haveAllValues) {
        return true;
    }
    return false;
}
/**
 * Returns the smallest value in the range
 */
function getMin(values) {
    return values[0];
}
/**
 * Returns the largest value in the range
 */
function getMax(values) {
    return values[values.length - 1];
}
/**
 * Returns the range as an array of ranges
 * defined as arrays of positive integers
 */
function toRanges(values) {
    var retval = [];
    var startPart = null;
    values.forEach(function (value, index, self) {
        if (value !== self[index + 1] - 1) {
            if (startPart !== null) {
                retval.push([startPart, value]);
                startPart = null;
            }
            else {
                retval.push(value);
            }
        }
        else if (startPart === null) {
            startPart = value;
        }
    });
    return retval;
}
