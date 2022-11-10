const _excluded = ["value", "grid", "optionsList", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "leadingZero", "clockFormat", "period", "unit", "unitFilter", "periodicityOnDoubleClick", "mode", "allowClear"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo, useCallback, useRef } from 'react';
import { Select } from 'antd';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames, sort } from '../utils';
import { parsePartArray, partToString, formatValue } from '../converter';
export default function CustomSelect(props) {
  const {
    value,
    grid = true,
    optionsList,
    setValue,
    locale,
    className,
    humanizeLabels,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    unit,
    unitFilter = _ => true,
    periodicityOnDoubleClick,
    mode,
    allowClear = true
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded);

  const stringValue = useMemo(() => {
    if (value && Array.isArray(value)) {
      return value.map(value => value.toString());
    }
  }, [value]);
  const options = useMemo(() => {
    if (optionsList) {
      return optionsList.map((option, index) => {
        const number = unit.min === 0 ? index : index + 1;
        return {
          value: number.toString(),
          label: option
        };
      });
    }

    return [...Array(unit.total)].map((e, index) => {
      const number = unit.min === 0 ? index : index + 1;
      return {
        value: number.toString(),
        label: formatValue(number, unit, humanizeLabels, leadingZero, clockFormat)
      };
    }).filter(unitFilter);
  }, [optionsList, leadingZero, humanizeLabels, clockFormat]);
  const localeJSON = JSON.stringify(locale);
  const renderTag = useCallback(props => {
    const {
      value: itemValue
    } = props;

    if (!value || value[0] !== Number(itemValue)) {
      return React.createElement(React.Fragment, null);
    }

    const parsedArray = parsePartArray(value, unit);
    const cronValue = partToString(parsedArray, unit, humanizeLabels, leadingZero, clockFormat);
    const testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
    return React.createElement("div", null, testEveryValue[1] ? `${locale.everyText || DEFAULT_LOCALE_EN.everyText} ${testEveryValue[1]}` : cronValue);
  }, [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
  const simpleClick = useCallback(newValueOption => {
    const newValueOptions = Array.isArray(newValueOption) ? sort(newValueOption) : [newValueOption];
    let newValue = newValueOptions;

    if (value) {
      newValue = mode === 'single' ? [] : [...value];
      newValueOptions.forEach(o => {
        const newValueOptionNumber = Number(o);

        if (value.some(v => v === newValueOptionNumber)) {
          newValue = newValue.filter(v => v !== newValueOptionNumber);
        } else {
          newValue = sort([...newValue, newValueOptionNumber]);
        }
      });
    }

    if (newValue.length === unit.total) {
      setValue([]);
    } else {
      setValue(newValue);
    }
  }, [setValue, value]);
  const doubleClick = useCallback(newValueOption => {
    if (newValueOption !== 0 && newValueOption !== 1) {
      const limit = unit.total + unit.min;
      const newValue = [];

      for (let i = unit.min; i < limit; i++) {
        if (i % newValueOption === 0) {
          newValue.push(i);
        }
      }

      const oldValueEqualNewValue = value && newValue && value.length === newValue.length && value.every((v, i) => v === newValue[i]);
      const allValuesSelected = newValue.length === options.length;

      if (allValuesSelected) {
        setValue([]);
      } else if (oldValueEqualNewValue) {
        setValue([]);
      } else {
        setValue(newValue);
      }
    } else {
      setValue([]);
    }
  }, [value, options, setValue]);
  const clicksRef = useRef([]);
  const onOptionClick = useCallback(newValueOption => {
    if (!readOnly) {
      const doubleClickTimeout = 300;
      const clicks = clicksRef.current;
      clicks.push({
        time: new Date().getTime(),
        value: Number(newValueOption)
      });
      const id = window.setTimeout(() => {
        if (periodicityOnDoubleClick && clicks.length > 1 && clicks[clicks.length - 1].time - clicks[clicks.length - 2].time < doubleClickTimeout) {
          if (clicks[clicks.length - 1].value === clicks[clicks.length - 2].value) {
            doubleClick(Number(newValueOption));
          } else {
            simpleClick([clicks[clicks.length - 2].value, clicks[clicks.length - 1].value]);
          }
        } else {
          simpleClick(Number(newValueOption));
        }

        clicksRef.current = [];
      }, doubleClickTimeout);
      return () => {
        window.clearTimeout(id);
      };
    }
  }, [clicksRef, simpleClick, doubleClick, readOnly, periodicityOnDoubleClick]);
  const onClear = useCallback(() => {
    if (!readOnly) {
      setValue([]);
    }
  }, [setValue, readOnly]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-select': true,
    'react-js-cron-custom-select': true,
    [`${className}-select`]: !!className
  }), [className]);
  const dropdownClassNames = useMemo(() => classNames({
    'react-js-cron-select-dropdown': true,
    [`react-js-cron-select-dropdown-${unit.type}`]: true,
    'react-js-cron-custom-select-dropdown': true,
    [`react-js-cron-custom-select-dropdown-${unit.type}`]: true,
    [`react-js-cron-custom-select-dropdown-minutes-large`]: unit.type === 'minutes' && period !== 'hour' && period !== 'day',
    [`react-js-cron-custom-select-dropdown-minutes-medium`]: unit.type === 'minutes' && (period === 'day' || period === 'hour'),
    'react-js-cron-custom-select-dropdown-hours-twelve-hour-clock': unit.type === 'hours' && clockFormat === '12-hour-clock',
    'react-js-cron-custom-select-dropdown-grid': !!grid,
    [`${className}-select-dropdown`]: !!className,
    [`${className}-select-dropdown-${unit.type}`]: !!className
  }), [className, grid, clockFormat, period]);
  return React.createElement(Select, _extends({
    mode: mode === 'single' && !periodicityOnDoubleClick ? undefined : 'multiple',
    allowClear: allowClear && !readOnly,
    virtual: false,
    open: readOnly ? false : undefined,
    value: stringValue,
    onClear: onClear,
    tagRender: renderTag,
    className: internalClassName,
    dropdownClassName: dropdownClassNames,
    options: options,
    showSearch: false,
    showArrow: !readOnly,
    menuItemSelectedIcon: null,
    dropdownMatchSelectWidth: false,
    onSelect: onOptionClick,
    onDeselect: onOptionClick,
    disabled: disabled,
    dropdownAlign: (unit.type === 'minutes' || unit.type === 'hours') && period !== 'day' && period !== 'hour' ? {
      points: ['tr', 'br']
    } : undefined
  }, otherProps));
}