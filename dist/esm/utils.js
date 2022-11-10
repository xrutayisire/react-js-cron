import { useRef, useEffect } from 'react';
import { DEFAULT_LOCALE_EN } from './locale';
export function range(start, end) {
  const array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}
export function sort(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}
export function dedup(array) {
  const result = [];
  array.forEach(function (i) {
    if (result.indexOf(i) < 0) {
      result.push(i);
    }
  });
  return result;
}
export function classNames(classes) {
  return Object.entries(classes).filter(([key, value]) => key && value).map(([key]) => key).join(' ');
}
export function setError(onError, locale) {
  onError && onError({
    type: 'invalid_cron',
    description: locale.errorInvalidCron || DEFAULT_LOCALE_EN.errorInvalidCron
  });
}
export function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export function convertStringToNumber(str) {
  const parseIntValue = parseInt(str, 10);
  const numberValue = Number(str);
  return parseIntValue === numberValue ? numberValue : NaN;
}