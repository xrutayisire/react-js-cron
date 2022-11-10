import { UNITS, SUPPORTED_SHORTCUTS } from './constants';
import { range, sort, dedup, setError, convertStringToNumber } from './utils';
export function setValuesFromCronString(cronString, setInternalError, onError, allowEmpty, internalValueRef, firstRender, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod) {
  onError && onError(undefined);
  setInternalError(false);
  let error = false;

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

      const shortcutObject = SUPPORTED_SHORTCUTS.find(supportedShortcut => supportedShortcut.name === cronString);

      if (shortcutObject) {
        cronString = shortcutObject.value;
      }
    }

    try {
      const cronParts = parseCronString(cronString);
      const period = getPeriodFromCronParts(cronParts);
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
    setError(onError, locale);
  }
}
export function getCronStringFromValues(period, months, monthDays, weekDays, hours, minutes, humanizeValue) {
  if (period === 'reboot') {
    return '@reboot';
  }

  const newMonths = period === 'year' && months ? months : [];
  const newMonthDays = (period === 'year' || period === 'month') && monthDays ? monthDays : [];
  const newWeekDays = (period === 'year' || period === 'month' || period === 'week') && weekDays ? weekDays : [];
  const newHours = period !== 'minute' && period !== 'hour' && hours ? hours : [];
  const newMinutes = period !== 'minute' && minutes ? minutes : [];
  const parsedArray = parseCronArray([newMinutes, newHours, newMonthDays, newMonths, newWeekDays], humanizeValue);
  return cronToString(parsedArray);
}
export function partToString(cronPart, unit, humanize, leadingZero, clockFormat) {
  let retval = '';

  if (isFull(cronPart, unit) || cronPart.length === 0) {
    retval = '*';
  } else {
    const step = getStep(cronPart);

    if (step && isInterval(cronPart, step)) {
      if (isFullInterval(cronPart, unit, step)) {
        retval = `*/${step}`;
      } else {
        retval = `${formatValue(getMin(cronPart), unit, humanize, leadingZero, clockFormat)}-${formatValue(getMax(cronPart), unit, humanize, leadingZero, clockFormat)}/${step}`;
      }
    } else {
      retval = toRanges(cronPart).map(range => {
        if (Array.isArray(range)) {
          return `${formatValue(range[0], unit, humanize, leadingZero, clockFormat)}-${formatValue(range[1], unit, humanize, leadingZero, clockFormat)}`;
        }

        return formatValue(range, unit, humanize, leadingZero, clockFormat);
      }).join(',');
    }
  }

  return retval;
}
export function formatValue(value, unit, humanize, leadingZero, clockFormat) {
  let cronPartString = value.toString();
  const {
    type,
    alt,
    min
  } = unit;
  const needLeadingZero = leadingZero && (leadingZero === true || leadingZero.includes(type));
  const need24HourClock = clockFormat === '24-hour-clock' && (type === 'hours' || type === 'minutes');

  if (humanize && type === 'week-days' || humanize && type === 'months') {
    cronPartString = alt[value - min];
  } else if (value < 10 && (needLeadingZero || need24HourClock)) {
    cronPartString = cronPartString.padStart(2, '0');
  }

  if (type === 'hours' && clockFormat === '12-hour-clock') {
    const suffix = value >= 12 ? 'PM' : 'AM';
    let hour = value % 12 || 12;

    if (hour < 10 && needLeadingZero) {
      hour = hour.toString().padStart(2, '0');
    }

    cronPartString = `${hour}${suffix}`;
  }

  return cronPartString;
}
export function parsePartArray(arr, unit) {
  const values = sort(dedup(fixSunday(arr, unit)));

  if (values.length === 0) {
    return values;
  }

  const value = outOfRange(values, unit);

  if (typeof value !== 'undefined') {
    throw new Error(`Value "${value}" out of range for ${unit.type}`);
  }

  return values;
}

function parseCronArray(cronArr, humanizeValue) {
  return cronArr.map((partArr, idx) => {
    const unit = UNITS[idx];
    const parsedArray = parsePartArray(partArr, unit);
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

  const parts = str.replace(/\s+/g, ' ').trim().split(' ');

  if (parts.length === 5) {
    return parts.map((partStr, idx) => {
      return parsePartString(partStr, UNITS[idx]);
    });
  }

  throw new Error('Invalid cron string format');
}

function parsePartString(str, unit) {
  if (str === '*' || str === '*/1') {
    return [];
  }

  const values = sort(dedup(fixSunday(replaceAlternatives(str, unit.min, unit.alt).split(',').map(value => {
    const valueParts = value.split('/');

    if (valueParts.length > 2) {
      throw new Error(`Invalid value "${str} for "${unit.type}"`);
    }

    let parsedValues;
    const left = valueParts[0];
    const right = valueParts[1];

    if (left === '*') {
      parsedValues = range(unit.min, unit.max);
    } else {
      parsedValues = parseRange(left, str, unit);
    }

    const step = parseStep(right, unit);
    const intervalValues = applyInterval(parsedValues, step);
    return intervalValues;
  }).flat(), unit)));
  const value = outOfRange(values, unit);

  if (typeof value !== 'undefined') {
    throw new Error(`Value "${value}" out of range for ${unit.type}`);
  }

  if (values.length === unit.total) {
    return [];
  }

  return values;
}

function replaceAlternatives(str, min, alt) {
  if (alt) {
    str = str.toUpperCase();

    for (let i = 0; i < alt.length; i++) {
      str = str.replace(alt[i], `${i + min}`);
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
  const subparts = rangeStr.split('-');

  if (subparts.length === 1) {
    const value = convertStringToNumber(subparts[0]);

    if (isNaN(value)) {
      throw new Error(`Invalid value "${context}" for ${unit.type}`);
    }

    return [value];
  } else if (subparts.length === 2) {
    const minValue = convertStringToNumber(subparts[0]);
    const maxValue = convertStringToNumber(subparts[1]);

    if (isNaN(minValue) || isNaN(maxValue)) {
      throw new Error(`Invalid value "${context}" for ${unit.type}`);
    }

    if (maxValue < minValue) {
      throw new Error(`Max range is less than min range in "${rangeStr}" for ${unit.type}`);
    }

    return range(minValue, maxValue);
  } else {
    throw new Error(`Invalid value "${rangeStr}" for ${unit.type}`);
  }
}

function outOfRange(values, unit) {
  const first = values[0];
  const last = values[values.length - 1];

  if (first < unit.min) {
    return first;
  } else if (last > unit.max) {
    return last;
  }

  return;
}

function parseStep(step, unit) {
  if (typeof step !== 'undefined') {
    const parsedStep = convertStringToNumber(step);

    if (isNaN(parsedStep) || parsedStep < 1) {
      throw new Error(`Invalid interval step value "${step}" for ${unit.type}`);
    }

    return parsedStep;
  }
}

function applyInterval(values, step) {
  if (step) {
    const minVal = values[0];
    values = values.filter(value => {
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
    const step = values[1] - values[0];

    if (step > 1) {
      return step;
    }
  }
}

function isInterval(values, step) {
  for (let i = 1; i < values.length; i++) {
    const prev = values[i - 1];
    const value = values[i];

    if (value - prev !== step) {
      return false;
    }
  }

  return true;
}

function isFullInterval(values, unit, step) {
  const min = getMin(values);
  const max = getMax(values);
  const haveAllValues = values.length === (max - min) / step + 1;

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
  const retval = [];
  let startPart = null;
  values.forEach((value, index, self) => {
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