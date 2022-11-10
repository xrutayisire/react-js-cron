import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function Minutes(props) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    periodicityOnDoubleClick,
    mode,
    unitFilter,
    allowClear
  } = props;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-minutes': true,
    [`${className}-field`]: !!className,
    [`${className}-minutes`]: !!className
  }), [className]);
  return React.createElement("div", {
    className: internalClassName
  }, period === 'hour' ? locale.prefixMinutesForHourPeriod !== '' && React.createElement("span", null, locale.prefixMinutesForHourPeriod || DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod) : locale.prefixMinutes !== '' && React.createElement("span", null, locale.prefixMinutes || DEFAULT_LOCALE_EN.prefixMinutes), React.createElement(CustomSelect, {
    placeholder: period === 'hour' ? locale.emptyMinutesForHourPeriod || DEFAULT_LOCALE_EN.emptyMinutesForHourPeriod : locale.emptyMinutes || DEFAULT_LOCALE_EN.emptyMinutes,
    value: value,
    unit: UNITS[0],
    allowClear: allowClear,
    unitFilter: unitFilter,
    setValue: setValue,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: period,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode
  }), period === 'hour' && locale.suffixMinutesForHourPeriod !== '' && React.createElement("span", null, locale.suffixMinutesForHourPeriod || DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod));
}