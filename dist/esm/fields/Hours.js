import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function Hours(props) {
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
    'react-js-cron-hours': true,
    [`${className}-field`]: !!className,
    [`${className}-hours`]: !!className
  }), [className]);
  return React.createElement("div", {
    className: internalClassName
  }, locale.prefixHours !== '' && React.createElement("span", null, locale.prefixHours || DEFAULT_LOCALE_EN.prefixHours), React.createElement(CustomSelect, {
    placeholder: locale.emptyHours || DEFAULT_LOCALE_EN.emptyHours,
    value: value,
    unit: UNITS[1],
    unitFilter: unitFilter,
    allowClear: allowClear,
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
  }));
}