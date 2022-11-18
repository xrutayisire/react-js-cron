const _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "disabled", "readOnly", "leadingZero", "clockFormat", "optionsList", "unit"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useMemo, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames, sort } from '../utils';
import { parsePartArray, partToString, formatValue } from '../converter';
export default function CustomSelect(props) {
  const {
      value,
      setValue,
      locale,
      className,
      humanizeLabels,
      disabled,
      readOnly,
      leadingZero,
      clockFormat,
      optionsList,
      unit
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const stringValue = useMemo(() => {
    if (value && Array.isArray(value)) {
      return value.map(value => value.toString());
    }
    return [];
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
    });
  },
  [optionsList, leadingZero, humanizeLabels, clockFormat]);
  const localeJSON = JSON.stringify(locale);
  const renderTag = useCallback(props => {
    const value = props;
    if (!value) {
      return React.createElement(React.Fragment, null);
    }
    const parsedArray = parsePartArray(value, unit);
    const cronValue = partToString(parsedArray, unit, humanizeLabels, leadingZero, clockFormat);
    const testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
    return React.createElement("div", null, testEveryValue[1] ? `${locale.everyText || DEFAULT_LOCALE_EN.everyText} 
            ${testEveryValue[1]}` : cronValue);
  },
  [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
  const simpleClick = useCallback(event => {
    let newValueOption = event.target.value;
    if (newValueOption.length == 0) {
      newValueOption.push(0);
    }
    newValueOption = Array.isArray(newValueOption) ? sort(newValueOption) : [newValueOption];
    const newValue = newValueOption;
    if (newValue.length === unit.total) {
      setValue([]);
    } else {
      setValue(newValue);
    }
  },
  [setValue, value]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-select': true,
    'react-js-cron-custom-select': true,
    [`${className}-select`]: !!className
  }), [className]);
  return React.createElement(Select, _extends({
    multiple: true,
    open: readOnly ? false : undefined,
    value: stringValue,
    onChange: simpleClick,
    renderValue: renderTag,
    className: internalClassName,
    autoWidth: false,
    disabled: disabled
  }, selectProps), options.map(obj => React.createElement(MenuItem, {
    key: obj.value,
    value: obj.value
  }, obj.label)));
}