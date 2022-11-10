"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatValue = formatValue;
exports.getCronStringFromValues = getCronStringFromValues;
exports.parsePartArray = parsePartArray;
exports.partToString = partToString;
exports.setValuesFromCronString = setValuesFromCronString;

var _constants = require("./constants");

var _utils = require("./utils");

function setValuesFromCronString(cronString, setInternalError, onError, allowEmpty, internalValueRef, firstRender, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod) {
  onError && onError(undefined);
  setInternalError(false);
  var error = false;

  if (!cronString) {
    if (allowEmpty === 'always' || firstRender && allowEmpty === 'for-default-value') {
      return;
    }

    error = true;
  }

  if (!error) {
    if (shortcuts && (shortcuts === true || shortcuts.includes(cronString))) {
      if (cronString === '@reboot') {
        setPeriod('reboot');
        return;
      }

      var shortcutObject = _constants.SUPPORTED_SHORTCUTS.find(function (supportedShortcut) {
        return supportedShortcut.name === cronString;
      });

      if (shortcutObject) {
        cronString = shortcutObject.value;
      }
    }

    try {
      var cronParts = parseCronString(cronString);
      var period = getPeriodFromCronParts(cronParts);
      setPeriod(period);
      setMinutes(cronParts[0]);
      setHours(cronParts[1]);
      setMonthDays(cronParts[2]);
      setMonths(cronParts[3]);
      setWeekDays(cronParts[4]);
    } catch (err) {
      error = true;
    }
  }

  if (error) {
    internalValueRef.current = cronString;
    setInternalError(true);
    (0, _utils.setError)(onError, locale);
  }
}

function getCronStringFromValues(period, months, monthDays, weekDays, hours, minutes, humanizeValue) {
  if (period === 'reboot') {
    return '@reboot';
  }

  var newMonths = period === 'year' && months ? months : [];
  var newMonthDays = (period === 'year' || period === 'month') && monthDays ? monthDays : [];
  var newWeekDays = (period === 'year' || period === 'month' || period === 'week') && weekDays ? weekDays : [];
  var newHours = period !== 'minute' && period !== 'hour' && hours ? hours : [];
  var newMinutes = period !== 'minute' && minutes ? minutes : [];
  var parsedArray = parseCronArray([newMinutes, newHours, newMonthDays, newMonths, newWeekDays], humanizeValue);
  return cronToString(parsedArray);
}

function partToString(cronPart, unit, humanize, leadingZero, clockFormat) {
  var retval = '';

  if (isFull(cronPart, unit) || cronPart.length === 0) {
    retval = '*';
  } else {
    var step = getStep(cronPart);

    if (step && isInterval(cronPart, step)) {
      if (isFullInterval(cronPart, unit, step)) {
        retval = "*/".concat(step);
      } else {
        retval = "".concat(formatValue(getMin(cronPart), unit, humanize, leadingZero, clockFormat), "-").concat(formatValue(getMax(cronPart), unit, humanize, leadingZero, clockFormat), "/").concat(step);
      }
    } else {
      retval = toRanges(cronPart).map(function (range) {
        if (Array.isArray(range)) {
          return "".concat(formatValue(range[0], unit, humanize, leadingZero, clockFormat), "-").concat(formatValue(range[1], unit, humanize, leadingZero, clockFormat));
        }

        return formatValue(range, unit, humanize, leadingZero, clockFormat);
      }).join(',');
    }
  }

  return retval;
}

function formatValue(value, unit, humanize, leadingZero, clockFormat) {
  var cronPartString = value.toString();
  var type = unit.type,
      alt = unit.alt,
      min = unit.min;
  var needLeadingZero = leadingZero && (leadingZero === true || leadingZero.includes(type));
  var need24HourClock = clockFormat === '24-hour-clock' && (type === 'hours' || type === 'minutes');

  if (humanize && type === 'week-days' || humanize && type === 'months') {
    cronPartString = alt[value - min];
  } else if (value < 10 && (needLeadingZero || need24HourClock)) {
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

function parsePartArray(arr, unit) {
  var values = (0, _utils.sort)((0, _utils.dedup)(fixSunday(arr, unit)));

  if (values.length === 0) {
    return values;
  }

  var value = outOfRange(values, unit);

  if (typeof value !== 'undefined') {
    throw new Error("Value \"".concat(value, "\" out of range for ").concat(unit.type));
  }

  return values;
}

function parseCronArray(cronArr, humanizeValue) {
  return cronArr.map(function (partArr, idx) {
    var unit = _constants.UNITS[idx];
    var parsedArray = parsePartArray(partArr, unit);
    return partToString(parsedArray, unit, humanizeValue);
  });
}

function cronToString(parts) {
  return parts.join(' ');
}

function getPeriodFromCronParts(cronParts) {
  if (cronParts[3].length > 0) {
    return 'year';
  } else if (cronParts[2].length > 0) {
    return 'month';
  } else if (cronParts[4].length > 0) {
    return 'week';
  } else if (cronParts[1].length > 0) {
    return 'day';
  } else if (cronParts[0].length > 0) {
    return 'hour';
  }

  return 'minute';
}

function parseCronString(str) {
  if (typeof str !== 'string') {
    throw new Error('Invalid cron string');
  }

  var parts = str.replace(/\s+/g, ' ').trim().split(' ');

  if (parts.length === 5) {
    return parts.map(function (partStr, idx) {
      return parsePartString(partStr, _constants.UNITS[idx]);
    });
  }

  throw new Error('Invalid cron string format');
}

function parsePartString(str, unit) {
  if (str === '*' || str === '*/1') {
    return [];
  }

  var values = (0, _utils.sort)((0, _utils.dedup)(fixSunday(replaceAlternatives(str, unit.min, unit.alt).split(',').map(function (value) {
    var valueParts = value.split('/');

    if (valueParts.length > 2) {
      throw new Error("Invalid value \"".concat(str, " for \"").concat(unit.type, "\""));
    }

    var parsedValues;
    var left = valueParts[0];
    var right = valueParts[1];

    if (left === '*') {
      parsedValues = (0, _utils.range)(unit.min, unit.max);
    } else {
      parsedValues = parseRange(left, str, unit);
    }

    var step = parseStep(right, unit);
    var intervalValues = applyInterval(parsedValues, step);
    return intervalValues;
  }).flat(), unit)));
  var value = outOfRange(values, unit);

  if (typeof value !== 'undefined') {
    throw new Error("Value \"".concat(value, "\" out of range for ").concat(unit.type));
  }

  if (values.length === unit.total) {
    return [];
  }

  return values;
}

function replaceAlternatives(str, min, alt) {
  if (alt) {
    str = str.toUpperCase();

    for (var i = 0; i < alt.length; i++) {
      str = str.replace(alt[i], "".concat(i + min));
    }
  }

  return str;
}

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

function parseRange(rangeStr, context, unit) {
  var subparts = rangeStr.split('-');

  if (subparts.length === 1) {
    var value = (0, _utils.convertStringToNumber)(subparts[0]);

    if (isNaN(value)) {
      throw new Error("Invalid value \"".concat(context, "\" for ").concat(unit.type));
    }

    return [value];
  } else if (subparts.length === 2) {
    var minValue = (0, _utils.convertStringToNumber)(subparts[0]);
    var maxValue = (0, _utils.convertStringToNumber)(subparts[1]);

    if (isNaN(minValue) || isNaN(maxValue)) {
      throw new Error("Invalid value \"".concat(context, "\" for ").concat(unit.type));
    }

    if (maxValue < minValue) {
      throw new Error("Max range is less than min range in \"".concat(rangeStr, "\" for ").concat(unit.type));
    }

    return (0, _utils.range)(minValue, maxValue);
  } else {
    throw new Error("Invalid value \"".concat(rangeStr, "\" for ").concat(unit.type));
  }
}

function outOfRange(values, unit) {
  var first = values[0];
  var last = values[values.length - 1];

  if (first < unit.min) {
    return first;
  } else if (last > unit.max) {
    return last;
  }

  return;
}

function parseStep(step, unit) {
  if (typeof step !== 'undefined') {
    var parsedStep = (0, _utils.convertStringToNumber)(step);

    if (isNaN(parsedStep) || parsedStep < 1) {
      throw new Error("Invalid interval step value \"".concat(step, "\" for ").concat(unit.type));
    }

    return parsedStep;
  }
}

function applyInterval(values, step) {
  if (step) {
    var minVal = values[0];
    values = values.filter(function (value) {
      return value % step === minVal % step || value === minVal;
    });
  }

  return values;
}

function isFull(values, unit) {
  return values.length === unit.max - unit.min + 1;
}

function getStep(values) {
  if (values.length > 2) {
    var step = values[1] - values[0];

    if (step > 1) {
      return step;
    }
  }
}

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

function isFullInterval(values, unit, step) {
  var min = getMin(values);
  var max = getMax(values);
  var haveAllValues = values.length === (max - min) / step + 1;

  if (min === unit.min && max + step > unit.max && haveAllValues) {
    return true;
  }

  return false;
}

function getMin(values) {
  return values[0];
}

function getMax(values) {
  return values[values.length - 1];
}

function toRanges(values) {
  var retval = [];
  var startPart = null;
  values.forEach(function (value, index, self) {
    if (value !== self[index + 1] - 1) {
      if (startPart !== null) {
        retval.push([startPart, value]);
        startPart = null;
      } else {
        retval.push(value);
      }
    } else if (startPart === null) {
      startPart = value;
    }
  });
  return retval;
}