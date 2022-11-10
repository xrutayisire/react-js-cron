import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function MonthDays(props) {
  const {
    value,
    setValue,
    locale,
    className,
    weekDays,
    disabled,
    readOnly,
    leadingZero,
    period,
    periodicityOnDoubleClick,
    mode,
    unitFilter,
    allowClear
  } = props;
  const noWeekDays = !weekDays || weekDays.length === 0;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-month-days': true,
    'react-js-cron-month-days-placeholder': !noWeekDays,
    [`${className}-field`]: !!className,
    [`${className}-month-days`]: !!className
  }), [className, noWeekDays]);
  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(() => {
    if (noWeekDays) {
      return locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays;
    }

    return locale.emptyMonthDaysShort || DEFAULT_LOCALE_EN.emptyMonthDaysShort;
  }, [noWeekDays, localeJSON]);
  const displayMonthDays = !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!weekDays || weekDays.length === 0);
  return displayMonthDays ? React.createElement("div", {
    className: internalClassName
  }, locale.prefixMonthDays !== '' && React.createElement("span", null, locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays), React.createElement(CustomSelect, {
    placeholder: placeholder,
    value: value,
    setValue: setValue,
    unit: UNITS[2],
    unitFilter: unitFilter,
    allowClear: allowClear,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: period,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode
  })) : null;
}