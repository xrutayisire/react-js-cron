function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState, useMemo } from 'react';
import { Input as AntdInput, Divider, Table, Form, Radio, Switch, Button, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import Cron from '../index';
import { FRENCH_LOCALE, ENGLISH_VARIANT_LOCALE, NO_PREFIX_SUFFIX_LOCALE } from './constants.stories';
import { useCronReducer } from './utils.stories';
import '../styles.css';
import './styles.stories.css';
export default {
  title: 'ReactJS Cron',
  component: Demo
};
export function Demo() {
  const defaultValue = '30 5 * * 1,6';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    },
    onPressEnter: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Double click on a dropdown option to automatically select / unselect a periodicity")), React.createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Error: ", error ? error.description : 'undefined'));
}
export function DynamicSettings() {
  const [displayInput, setDisplayInput] = useState(true);
  const [changeValueOnBlur, setChangeValueOnBlur] = useState(true);
  const [changeValueOnEnter, setChangeValueOnEnter] = useState(true);
  const [readOnlyInput, setReadOnlyInput] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [humanizeLabels, setHumanizeLabels] = useState(true);
  const [humanizeValue, setHumanizeValue] = useState(false);
  const [displayErrorText, setDisplayErrorText] = useState(true);
  const [displayErrorStyle, setDisplayErrorStyle] = useState(true);
  const [displayClearButton, setDisplayClearButton] = useState(true);
  const [supportShortcuts, setSupportShortcuts] = useState(true);
  const [removePrefixSuffix, setRemovePrefixSuffix] = useState(false);
  const [customStyle, setCustomStyle] = useState(false);
  const [allowEmpty, setAllowEmpty] = useState('for-default-value');
  const [clockFormat, setClockFormat] = useState('');
  const [locale, setLocale] = useState('english');
  const [defaultPeriod, setDefaultPeriod] = useState('day');
  const [selectedPeriod, setSelectedPeriod] = useState('day');
  const [defaultValue, setDefaultValue] = useState('@daily');
  const [leadingZero, setLeadingZero] = useState(false);
  const [periodicityOnDoubleClick, setPeriodicityOnDoubleClick] = useState(true);
  const [mode, setMode] = useState('multiple');
  const [key, setKey] = useState('render');
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  const [clearButtonAction, setClearButtonAction] = useState('fill-with-every');
  const defaultAllowedDropdowns = ['period', 'months', 'month-days', 'week-days', 'hours', 'minutes'];
  const [allowedDropdowns, setAllowedDropdowns] = useState(defaultAllowedDropdowns);
  const defaultAllowedPeriods = ['year', 'month', 'week', 'day', 'hour', 'minute', 'reboot'];
  const [allowedPeriods, setAllowedPeriods] = useState(defaultAllowedPeriods);
  const transformedLocale = useMemo(() => {
    let newLocale;

    switch (locale) {
      case 'french':
        newLocale = FRENCH_LOCALE;
        break;

      case 'english-variant':
        newLocale = ENGLISH_VARIANT_LOCALE;
        break;

      default:
        newLocale = {};
        break;
    }

    if (removePrefixSuffix) {
      newLocale = _objectSpread(_objectSpread({}, newLocale), NO_PREFIX_SUFFIX_LOCALE);
    }

    return newLocale;
  }, [locale, removePrefixSuffix]);
  return React.createElement("div", null, React.createElement(Form, {
    layout: "inline",
    className: "demo-dynamic-settings"
  }, React.createElement(Form.Item, {
    label: "Display input"
  }, React.createElement(Switch, {
    checked: displayInput,
    onChange: () => setDisplayInput(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Change input value on blur"
  }, React.createElement(Switch, {
    checked: changeValueOnBlur,
    onChange: () => setChangeValueOnBlur(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Change input value on enter"
  }, React.createElement(Switch, {
    checked: changeValueOnEnter,
    onChange: () => setChangeValueOnEnter(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Read-Only input"
  }, React.createElement(Switch, {
    checked: readOnlyInput,
    onChange: () => setReadOnlyInput(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Disabled"
  }, React.createElement(Switch, {
    checked: disabled,
    onChange: () => setDisabled(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Read-Only"
  }, React.createElement(Switch, {
    checked: readOnly,
    onChange: () => setReadOnly(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Humainze labels"
  }, React.createElement(Switch, {
    checked: humanizeLabels,
    onChange: () => setHumanizeLabels(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Humanize value"
  }, React.createElement(Switch, {
    checked: humanizeValue,
    onChange: () => setHumanizeValue(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Display error text"
  }, React.createElement(Switch, {
    checked: displayErrorText,
    onChange: () => setDisplayErrorText(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Display error style"
  }, React.createElement(Switch, {
    checked: displayErrorStyle,
    onChange: () => setDisplayErrorStyle(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Display clear button"
  }, React.createElement(Switch, {
    checked: displayClearButton,
    onChange: () => setDisplayClearButton(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Support shortcuts"
  }, React.createElement(Switch, {
    checked: supportShortcuts,
    onChange: () => setSupportShortcuts(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Remove prefix/suffix"
  }, React.createElement(Switch, {
    checked: removePrefixSuffix,
    onChange: () => setRemovePrefixSuffix(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Set custom style"
  }, React.createElement(Switch, {
    checked: customStyle,
    onChange: () => setCustomStyle(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Leading zero"
  }, React.createElement(Switch, {
    checked: leadingZero,
    onChange: () => setLeadingZero(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Periodicity on double click"
  }, React.createElement(Switch, {
    checked: periodicityOnDoubleClick,
    onChange: () => setPeriodicityOnDoubleClick(prevValue => !prevValue)
  })), React.createElement(Form.Item, {
    label: "Clock format"
  }, React.createElement(Radio.Group, {
    value: clockFormat,
    onChange: e => setClockFormat(e.target.value)
  }, React.createElement(Radio.Button, {
    value: ""
  }, "None"), React.createElement(Radio.Button, {
    value: "12-hour-clock"
  }, "12-hour clock"), React.createElement(Radio.Button, {
    value: "24-hour-clock"
  }, "24-hour-clock"))), React.createElement(Form.Item, {
    label: "Mode"
  }, React.createElement(Radio.Group, {
    value: mode,
    onChange: e => setMode(e.target.value)
  }, React.createElement(Radio.Button, {
    value: "single"
  }, "Single"), React.createElement(Radio.Button, {
    value: "multiple"
  }, "Multiple"))), React.createElement(Form.Item, {
    label: "Allowed dropdowns"
  }, React.createElement(Select, {
    mode: "multiple",
    value: allowedDropdowns,
    onChange: value => {
      setAllowedDropdowns(value);
    },
    style: {
      minWidth: 535
    }
  }, defaultAllowedDropdowns.map(allowedDropdown => {
    return React.createElement(Select.Option, {
      key: allowedDropdown
    }, allowedDropdown);
  }))), React.createElement(Form.Item, {
    label: "Allowed periods"
  }, React.createElement(Select, {
    mode: "multiple",
    value: allowedPeriods,
    onChange: value => {
      setAllowedPeriods(value);
    },
    style: {
      minWidth: 485
    }
  }, defaultAllowedPeriods.map(allowedPeriod => {
    return React.createElement(Select.Option, {
      key: allowedPeriod
    }, allowedPeriod);
  }))), React.createElement(Form.Item, {
    label: "Locale"
  }, React.createElement(Radio.Group, {
    value: locale,
    onChange: e => setLocale(e.target.value)
  }, React.createElement(Radio.Button, {
    value: "english"
  }, "English"), React.createElement(Radio.Button, {
    value: "french"
  }, "French"), React.createElement(Radio.Button, {
    value: "english-variant"
  }, "English variant"))), React.createElement(Form.Item, {
    label: "Clear button action"
  }, React.createElement(Radio.Group, {
    value: clearButtonAction,
    onChange: e => setClearButtonAction(e.target.value)
  }, React.createElement(Radio.Button, {
    value: "empty"
  }, "Empty"), React.createElement(Radio.Button, {
    value: "fill-with-every"
  }, "Fill with every"))), React.createElement(Form.Item, {
    label: "Empty value management *"
  }, React.createElement(Radio.Group, {
    value: allowEmpty,
    onChange: e => setAllowEmpty(e.target.value)
  }, React.createElement(Radio.Button, {
    value: "for-default-value"
  }, "For default value"), React.createElement(Radio.Button, {
    value: "always"
  }, "Always"), React.createElement(Radio.Button, {
    value: "never"
  }, "Never"))), React.createElement(Form.Item, {
    label: "Default value *"
  }, React.createElement(AntdInput, {
    value: defaultValue,
    onChange: e => setDefaultValue(e.target.value)
  })), React.createElement(Form.Item, {
    label: "Default period **"
  }, React.createElement(Radio.Group, {
    value: defaultPeriod,
    onChange: e => setDefaultPeriod(e.target.value)
  }, React.createElement(Radio.Button, {
    value: "year"
  }, "Year"), React.createElement(Radio.Button, {
    value: "month"
  }, "Month"), React.createElement(Radio.Button, {
    value: "week"
  }, "Week"), React.createElement(Radio.Button, {
    value: "day"
  }, "Day"), React.createElement(Radio.Button, {
    value: "hour"
  }, "Hour"), React.createElement(Radio.Button, {
    value: "minute"
  }, "Minute"), React.createElement(Radio.Button, {
    value: "reboot"
  }, "Reboot"))), React.createElement("p", null, "(*) Need to reset the component to see the changes"), React.createElement("p", null, "(**) Need to reset the component and to have an empty default value to see the changes")), React.createElement("div", null, React.createElement("p", null, "Value: ", values.cronValue), React.createElement(Button, {
    type: "primary",
    onClick: () => {
      dispatchValues({
        type: 'set_values',
        value: defaultValue
      });
      setKey(Math.random().toString(36).substring(7));
      setSelectedPeriod(defaultPeriod);
    }
  }, "Reset cron component")), displayInput && React.createElement(React.Fragment, null, React.createElement(AntdInput, {
    readOnly: readOnlyInput || mode === 'single',
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      changeValueOnBlur && dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    },
    onPressEnter: () => {
      changeValueOnEnter && dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR")), React.createElement(Cron, {
    key: key,
    value: values.cronValue,
    setValue: (newValue, {
      selectedPeriod
    }) => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
      setSelectedPeriod(selectedPeriod);
    },
    onError: onError,
    disabled: disabled,
    readOnly: readOnly,
    humanizeLabels: humanizeLabels,
    humanizeValue: humanizeValue,
    displayError: displayErrorStyle,
    clearButton: displayClearButton,
    clearButtonAction: clearButtonAction,
    shortcuts: supportShortcuts,
    allowEmpty: allowEmpty,
    clockFormat: clockFormat === '' ? undefined : clockFormat,
    defaultPeriod: defaultPeriod,
    leadingZero: leadingZero,
    className: customStyle ? 'my-project-cron' : undefined,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode,
    allowedDropdowns: allowedDropdowns,
    allowedPeriods: allowedPeriods,
    locale: transformedLocale,
    clearButtonProps: customStyle ? {
      type: 'default'
    } : undefined
  }), React.createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Selected period: ", selectedPeriod), displayErrorText && React.createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Error: ", error ? error.description : 'undefined'));
}
export function Input() {
  const defaultValue = '';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  return React.createElement("div", null, React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"onBlur\" event must be used instead of \"onChange\" to prevent a value change from the cron component")), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    }
  }));
}
export function InputWithOnEnter() {
  const defaultValue = '0 10 * * 1,3,5';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  return React.createElement("div", null, React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    },
    onPressEnter: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can also add \"onEnter\" support to set the value")), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    }
  }), ' ');
}
export function ReadOnlyInput() {
  const defaultValue = '0 10 * * 1,3,5';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement(AntdInput, {
    readOnly: true,
    value: value
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: setValue
  }));
}
export function DefaultValue() {
  const defaultValue = '*/7 */2 */3 * *';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    value: value,
    setValue: setValue
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The first value will always be used as default value")));
}
export function DefaultPeriod() {
  const defaultValue = '';
  const defaultPeriod = 'year';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Default period: ", defaultPeriod), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    defaultPeriod: defaultPeriod
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"defaultPeriod\" prop only work for empty default value")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"defaultPeriod\" is \"day\"")));
}
export function Disabled() {
  const defaultValue = '30 5 * * 1,6';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Disabled: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    disabled: true
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"disabled\" is false")));
}
export function ReadOnly() {
  const defaultValue = '30 5 * * 1,6';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Read only: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    readOnly: true
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"readOnly\" is false")));
}
export function HumanizeLabels() {
  const defaultValue = '* * * * MON-WED,sat';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Humanize labels: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeLabels\" is true")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes the labels in the cron component")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Can be used with \"locale\" prop and \"altMonths\" / \"altWeekDays\" properties in order to display translated labels")));
}
export function HumanizeValue() {
  const defaultValue = '* * * * MON-WED,sat';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Humanize labels: false"), React.createElement("p", null, "Humanize value: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    humanizeLabels: false,
    humanizeValue: true
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeValue\" is false")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The prop \"humanizeValue\" cannot be used to prohibit used of valid string value like \"MON,WED\"")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is true, the component will automatically convert a valid number value to string")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is false, the component will automatically convert a valid string value to number")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "A valid string value can be in lowercase or uppercase")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")));
}
export function HumanizeLabelsAndValue() {
  const defaultValue = '* * * * MON-WED,sat';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Humanize labels: true"), React.createElement("p", null, "Humanize value: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    humanizeValue: true
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes in the cron component both the labels and the value")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")));
}
export function LeadingZero() {
  const defaultValue = '5 3 2-3,8 * *';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Leading zero: \"always\""), React.createElement("p", null, "Value: ", values.cronValue), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    leadingZero: true
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can set the prop to a boolean or an array [\"minutes\", \"hours\", \"month-days\"]")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"leadingZero\" is \"never\"")));
}
export function TrackError() {
  const defaultValue = '';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Write a bad cron expression to trigger an error after the \"onBlur\" event")), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Use prop \"onError\" to be able to know when the value is invalid")));
}
export function DisableErrorStyle() {
  const defaultValue = '';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Display error: false"), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    displayError: false
  }));
}
export function NoClearButton() {
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Clear button: false"), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    clearButton: false,
    value: value,
    setValue: setValue
  }));
}
export function ClearButtonEmptyValue() {
  const clearButtonAction = 'empty';
  const defaultValue = '0 10 * * 1,3,5';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Clear button action: ", clearButtonAction), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    clearButtonAction: clearButtonAction
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"clearButtonAction\" prop allow you to empty the field or fill it with \"* * * * *\"")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"clearButtonAction\" is \"fill-with-every\"")));
}
export function InvalidDefaultValue() {
  const defaultValue = '*/2 */2 */2 1-6 */6 * *';
  const [value, setValue] = useState(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    onError: onError
  }));
}
export function EmptyNeverAllowed() {
  const defaultValue = '';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Allow empty: \"never\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    allowEmpty: "never"
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"allowEmpty\" is \"for-default-value\"")));
}
export function EmptyAlwaysAllowed() {
  const defaultValue = '';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Allow empty: \"always\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    allowEmpty: "always"
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"allowEmpty\" is \"for-default-value\"")));
}
export function Shortcuts() {
  const defaultValue = '@monthly';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  const columns = [{
    dataIndex: 'name',
    key: 'name'
  }, {
    dataIndex: 'description',
    key: 'description'
  }, {
    dataIndex: 'value',
    key: 'value'
  }];
  const data = [{
    key: '1',
    name: '@yearly (or @annually)',
    description: 'Run once a year at midnight of 1 January',
    value: '0 0 1 1 *'
  }, {
    key: '2',
    name: '@monthly',
    description: 'Run once a month at midnight of the first day of the month',
    value: '0 0 1 * *'
  }, {
    key: '3',
    name: '@weekly',
    description: 'Run once a week at midnight on Sunday morning',
    value: '0 0 * * 0'
  }, {
    key: '4',
    name: '@daily (or @midnight)',
    description: 'Run once a day at midnight',
    value: '0 0 * * *'
  }, {
    key: '5',
    name: '@hourly',
    description: 'Run once an hour at the beginning of the hour',
    value: '0 * * * *'
  }, {
    key: '6',
    name: '@reboot',
    description: 'Run at startup',
    value: '@reboot'
  }];
  return React.createElement("div", null, React.createElement("p", null, "Shortcuts: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    shortcuts: true
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"Shortcuts\" is [\"@yearly\", \"@annually\", \"@monthly\", \"@weekly\", \"@daily\", \"@midnight\", \"@hourly\"]")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Just pass true to activate all shortcuts including \"@reboot\"")), React.createElement(Table, {
    columns: columns,
    dataSource: data,
    showHeader: false,
    bordered: true,
    pagination: false,
    style: {
      marginTop: 20
    },
    title: () => React.createElement("h3", null, "Supported shortcuts")
  }));
}
export function TwelveHourClock() {
  const defaultValue = '2 5,7,18 * * SUN';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Clock format: \"12-hour-clock\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    clockFormat: "12-hour-clock"
  }));
}
export function TwentyFourHourClock() {
  const defaultValue = '2 5,7,18 * * SUN';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Clock format: \"24-hour-clock\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", values.cronValue), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    clockFormat: "24-hour-clock"
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "This prop override the prop \"leadingZero\" for \"hours\" and \"minutes\"")));
}
export function NoPeriodicityOnDoubleClick() {
  const defaultValue = '30 5 * * 1,6';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "periodicityOnDoubleClick: false"), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    periodicityOnDoubleClick: false
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can disable the double click on a dropdown option that automatically select / unselect a periodicity")));
}
export function SingleSelectionMode() {
  const defaultValue = '30 3 4 4 1';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "mode: \"single\""), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    mode: "single"
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If you want to disable the double click on a dropdown option that automatically select / unselect a periodicity, set \"periodicityOnDoubleClick\" prop at false")));
}
export function SingleSelectionModeAutoClose() {
  const defaultValue = '30 3 4 4 1';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "mode: \"single\""), React.createElement("p", null, "periodicityOnDoubleClick: false"), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    mode: "single",
    periodicityOnDoubleClick: false
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "When single mode is active and \"periodicityOnDoubleClick\" is false, each dropdown will automatically close after selecting a value")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If you want to disable the double click on a dropdown option that automatically select / unselect a periodicity, set \"periodicityOnDoubleClick\" prop at false")));
}
export function RestrictPeriodAndSelection() {
  const defaultValue = '* * 4 * 1';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "allowedDropdowns: [\"period\", \"months\", \"month-days\", \"week-days\"]"), React.createElement("p", null, "allowedPeriods: [\"year\", \"month\", \"week\", \"minute\"]"), React.createElement(Cron, {
    value: value,
    setValue: setValue,
    allowedDropdowns: ['period', 'months', 'month-days', 'week-days'],
    allowedPeriods: ['year', 'month', 'week', 'minute']
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "E.g.: Hide hours and minutes by removing them from \"allowedDropdowns\" prop.")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "E.g.: Also hide \"day\" and \"hour\" periods with \"allowedPeriods\" because hours and minutes cannot be changed.")));
}
export function TrackSelectedPeriod() {
  const defaultValue = '';
  const defaultPeriod = 'month';
  const [value, setValue] = useState(defaultValue);
  const [selectedPeriod, setSelectedPeriod] = useState(defaultPeriod);
  return React.createElement("div", null, React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Selected period: ", selectedPeriod), React.createElement(Cron, {
    value: value,
    defaultPeriod: defaultPeriod,
    setValue: (value, {
      selectedPeriod
    }) => {
      setValue(value);
      setSelectedPeriod(selectedPeriod);
    }
  }));
}
export function FrenchLocale() {
  const defaultValue = '* * 1-2 2,8 1,3,6';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "locale: FRENCH_LOCALE"), React.createElement("p", null, "humanizeLabels: true (by default)"), React.createElement("p", null, "Erreur: ", error ? error.description : 'undefined'), React.createElement("p", null, "Value: ", values.cronValue), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OU"), React.createElement(Cron, {
    locale: FRENCH_LOCALE,
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The order of the \"locale\" properties \"weekDays\", \"months\", \"altMonths\" and \"altWeekDays\" is important! The index will be used as value")), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Sunday must always be the first value of \"weekDays\" and \"altWeekDays\" property because it's \"0\"")));
}
export function CustomENLocale() {
  const defaultValue = '30 14 22 * *';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "locale: ENGLISH_VARIANT_LOCALE"), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    locale: ENGLISH_VARIANT_LOCALE,
    value: value,
    setValue: setValue
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Not all translations need to be changed when using the prop \"locale\"")));
}
export function NoPrefixAndSuffix() {
  const defaultValue = '30 14 22 * *';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement("p", null, "locale: NO_PREFIX_SUFFIX_LOCALE"), React.createElement("p", null, "Value: ", value), React.createElement(Cron, {
    locale: NO_PREFIX_SUFFIX_LOCALE,
    value: value,
    setValue: setValue
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Using empty string '' for a prefix / suffix translation will remove the text")));
}
export function CustomStyle() {
  const defaultValue = '30 14 22 * *';
  const [values, dispatchValues] = useCronReducer(defaultValue);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "className: my-project-cron"), React.createElement("p", null, "clearButtonProps: { type: \"default\" }"), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(AntdInput, {
    value: values.inputValue,
    onChange: event => {
      dispatchValues({
        type: 'set_input_value',
        value: event.target.value
      });
    },
    onBlur: () => {
      dispatchValues({
        type: 'set_cron_value',
        value: values.inputValue
      });
    }
  }), React.createElement(Divider, null, "OR"), React.createElement(Cron, {
    value: values.cronValue,
    setValue: newValue => {
      dispatchValues({
        type: 'set_values',
        value: newValue
      });
    },
    onError: onError,
    className: "my-project-cron",
    clearButtonProps: {
      type: 'default'
    }
  }), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Custom CSS example (See file \"styles.stories.css\"):"), React.createElement("ul", null, React.createElement("li", null, "Bold prefix and suffix"), React.createElement("li", null, "Red prefix and suffix on error"), React.createElement("li", null, "Bigger border radius for selects and clear button"), React.createElement("li", null, "Gray backgroud for selected options"), React.createElement("li", null, "Clear button type changed to \"default\""))), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Available classes when using the prop \"className\":"), React.createElement("ul", null, React.createElement("li", null, ".my-project-cron"), React.createElement("li", null, ".my-project-cron-error"), React.createElement("li", null, ".my-project-cron-disabled"), React.createElement("li", null, ".my-project-cron-read-only"), React.createElement("li", null, ".my-project-cron-clear-button"), React.createElement("li", null, ".my-project-cron-field"), React.createElement("li", null, ".my-project-cron-period"), React.createElement("li", null, ".my-project-cron-minutes"), React.createElement("li", null, ".my-project-cron-hours"), React.createElement("li", null, ".my-project-cron-months"), React.createElement("li", null, ".my-project-cron-month-days"), React.createElement("li", null, ".my-project-cron-week-days"), React.createElement("li", null, ".my-project-cron-select"), React.createElement("li", null, ".my-project-cron-select-dropdown"), React.createElement("li", null, ".my-project-cron-select-dropdown-period"), React.createElement("li", null, ".my-project-cron-select-dropdown-minutes"), React.createElement("li", null, ".my-project-cron-select-dropdown-hours"), React.createElement("li", null, ".my-project-cron-select-dropdown-months"), React.createElement("li", null, ".my-project-cron-select-dropdown-month-days"), React.createElement("li", null, ".my-project-cron-select-dropdown-week-days"))), React.createElement("div", null, React.createElement(InfoCircleOutlined, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Don't forget to import antd default style")));
}