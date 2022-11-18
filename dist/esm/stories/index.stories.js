function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { TextField, Table, Radio, Switch, Button, FormControlLabel, RadioGroup, FormGroup, Input, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DividerWithText from '../components/DividerWithText';
import Cron from '../index';
import { FRENCH_LOCALE, ENGLISH_VARIANT_LOCALE, NO_PREFIX_SUFFIX_LOCALE } from './constants.stories';
import './styles.stories.css';
export default {
  title: 'ReactJS Cron',
  component: Demo
};
export function Demo() {
  const inputRef = useRef();
  const defaultValue = '30 5 * * 1,6';
  const [value, setValue] = useState(defaultValue);
  const [textValue, setTextValue] = useState('');
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    setTextValue(newValue);
  }, [setTextValue]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement(TextField, {
    value: textValue,
    inputRef: inputRef,
    onBlur: event => {
      setValue(event.target.value);
    }
    ,
    onChange: event => {
      customSetValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const [changeValueonChange, setChangeValueonChange] = useState(true);
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
  const [defaultValue, setDefaultValue] = useState('@daily');
  const [leadingZero, setLeadingZero] = useState(false);
  const [key, setKey] = useState('render');
  const inputRef = useRef();
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  const [clearButtonAction, setClearButtonAction] = useState('fill-with-every');
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
  useEffect(() => {
    if (displayInput && value !== null) {
    }
  },
  [displayInput]);
  return React.createElement("div", null, React.createElement(FormGroup, {
    row: true,
    className: "demo-dynamic-settings"
  }, React.createElement(FormControlLabel, {
    label: "Display input",
    control: React.createElement(Switch, {
      checked: displayInput,
      onChange: () => setDisplayInput(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Change input value on blur",
    control: React.createElement(Switch, {
      checked: changeValueonChange,
      onChange: () => setChangeValueonChange(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Change input value on enter",
    control: React.createElement(Switch, {
      checked: changeValueOnEnter,
      onChange: () => setChangeValueOnEnter(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Read-Only input",
    control: React.createElement(Switch, {
      checked: readOnlyInput,
      onChange: () => setReadOnlyInput(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Disabled",
    control: React.createElement(Switch, {
      checked: disabled,
      onChange: () => setDisabled(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Read-Only",
    control: React.createElement(Switch, {
      checked: readOnly,
      onChange: () => setReadOnly(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Humainze labels",
    control: React.createElement(Switch, {
      checked: humanizeLabels,
      onChange: () => setHumanizeLabels(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Humanize value",
    control: React.createElement(Switch, {
      checked: humanizeValue,
      onChange: () => setHumanizeValue(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Display error text",
    control: React.createElement(Switch, {
      checked: displayErrorText,
      onChange: () => setDisplayErrorText(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Display error style",
    control: React.createElement(Switch, {
      checked: displayErrorStyle,
      onChange: () => setDisplayErrorStyle(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Display clear button",
    control: React.createElement(Switch, {
      checked: displayClearButton,
      onChange: () => setDisplayClearButton(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Support shortcuts",
    control: React.createElement(Switch, {
      checked: supportShortcuts,
      onChange: () => setSupportShortcuts(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Remove prefix/suffix",
    control: React.createElement(Switch, {
      checked: removePrefixSuffix,
      onChange: () => setRemovePrefixSuffix(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Set custom style",
    control: React.createElement(Switch, {
      checked: customStyle,
      onChange: () => setCustomStyle(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Leading zero",
    control: React.createElement(Switch, {
      checked: leadingZero,
      onChange: () => setLeadingZero(prevValue => !prevValue)
    })
  }), React.createElement(FormControlLabel, {
    label: "Clock format",
    control: React.createElement(RadioGroup, {
      value: clockFormat,
      onChange: e => setClockFormat(e.target.value)
    }, React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "",
      label: "None"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "12-hour-clock",
      label: "12-hour clock"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "24-hour-clock",
      label: "24-hour-clock"
    }))
  }), React.createElement(FormControlLabel, {
    label: "Locale",
    control: React.createElement(RadioGroup, {
      value: locale,
      onChange: e => setLocale(e.target.value)
    }, React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "english",
      label: "English"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "french",
      label: "French"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "english-variant",
      label: "English variant"
    }))
  }), React.createElement(FormControlLabel, {
    label: "Clear button action",
    control: React.createElement(RadioGroup, {
      value: clearButtonAction,
      onChange: e => setClearButtonAction(e.target.value)
    }, React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "empty",
      label: "Empty"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "fill-with-every",
      label: "Fill with every"
    }))
  }), React.createElement(FormControlLabel, {
    label: "Empty value management *",
    control: React.createElement(RadioGroup, {
      value: allowEmpty,
      onChange: e => setAllowEmpty(e.target.value)
    }, React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "for-default-value",
      label: "For default value"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "always",
      label: "Always"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "never",
      label: "Never"
    }))
  }), React.createElement(FormControlLabel, {
    label: "Default value *",
    control: React.createElement(Input, {
      value: defaultValue,
      onChange: e => setDefaultValue(e.target.value)
    })
  }), React.createElement(FormControlLabel, {
    label: "Default period **",
    control: React.createElement(RadioGroup, {
      value: defaultPeriod,
      onChange: e => setDefaultPeriod(e.target.value)
    }, React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "year",
      label: "Year"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "month",
      label: "Month"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "week",
      label: "Week"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "day",
      label: "Day"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "hour",
      label: "Hour"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "minute",
      label: "Minute"
    }), React.createElement(FormControlLabel, {
      control: React.createElement(Radio, null),
      value: "reboot",
      label: "Reboot"
    }))
  }), React.createElement("p", null, "(*) Need to reset the component to see the changes"), React.createElement("p", null, "(**) Need to reset the component and to have an empty default value to see the changes")), React.createElement("div", null, React.createElement("p", null, "Value: ", value), React.createElement(Button, {
    variant: "contained",
    onClick: () => {
      customSetValue(defaultValue);
      setKey(Math.random().toString(36).substring(7));
    }
  }, "Reset cron component")), displayInput && React.createElement(React.Fragment, null, React.createElement(Input, {
    readOnly: readOnlyInput,
    onChange: event => {
      changeValueonChange && setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR")), React.createElement(Cron, {
    key: key,
    value: value,
    setValue: customSetValue,
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
    locale: transformedLocale
  }), displayErrorText && React.createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Error: ", error ? error.description : 'undefined'));
}
export function LocalInput() {
  const inputRef = useRef();
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return React.createElement("div", null, React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"onChange\" event must be used instead of \"onChange\" to prevent a value change from the cron component")), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Don't directly set the value of the Input with the prop \"value\", you will not be able to edit it")), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue
  }));
}
export function InputWithOnEnter() {
  const inputRef = useRef();
  const defaultValue = '0 10 * * 1,3,5';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return React.createElement("div", null, React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can also add \"onEnter\" support to set the value")), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue
  }));
}
export function ReadOnlyInput() {
  const defaultValue = '0 10 * * 1,3,5';
  const [value, setValue] = useState(defaultValue);
  return React.createElement("div", null, React.createElement(Input, {
    readOnly: true,
    value: value
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"defaultPeriod\" prop only work for empty default value")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '* * * * MON-WED,sat';
  const [value, setValue] = useState(defaultValue);
  const [error, onError] = useState();
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return React.createElement("div", null, React.createElement("p", null, "Humanize labels: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeLabels\" is true")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes the labels in the cron component")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Works only for week days and months")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '* * * * MON-WED,sat';
  const [value, setValue] = useState(defaultValue);
  const [error, onError] = useState();
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return React.createElement("div", null, React.createElement("p", null, "Humanize labels: false"), React.createElement("p", null, "Humanize value: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    humanizeLabels: false,
    humanizeValue: true
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"humanizeValue\" is false")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The prop \"humanizeValue\" cannot be used to prohibit used of valid string value like \"MON,WED\"")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is true, the component will automatically convert a valid number value to string")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If the prop \"humanizeValue\" is false, the component will automatically convert a valid string value to number")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "A valid string value can be in lowercase or uppercase")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '* * * * MON-WED,sat';
  const [value, setValue] = useState(defaultValue);
  const [error, onError] = useState();
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return React.createElement("div", null, React.createElement("p", null, "Humanize labels: true"), React.createElement("p", null, "Humanize value: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    humanizeValue: true
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Humanizes in the cron component both the labels and the value")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '5 3 2-3,8 * *';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  return React.createElement("div", null, React.createElement("p", null, "Leading zero: \"always\""), React.createElement("p", null, "Value: ", value), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    leadingZero: true
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "You can set the prop to a boolean or an array [\"minutes\", \"hours\", \"month-days\"]")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Write a bad cron expression to trigger an error after the \"onChange\" event")), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Display error: false"), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The \"clearButtonAction\" prop allow you to empty the field or fill it with \"* * * * *\"")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Allow empty: \"never\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    allowEmpty: "never"
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Allow empty: \"always\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    allowEmpty: "always"
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '@monthly';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
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
  return React.createElement("div", null, React.createElement("p", null, "Shortcuts: true"), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    shortcuts: true
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "If not set, the prop \"Shortcuts\" is [\"@yearly\", \"@annually\", \"@monthly\", \"@weekly\", \"@daily\", \"@midnight\", \"@hourly\"]")), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Just pass true to activate all shortcuts including \"@reboot\"")), React.createElement(Typography, {
    variant: "h6",
    id: "tableTitle",
    component: "div"
  }, "Supported shortcuts"), React.createElement(Table, {
    style: {
      marginTop: 20
    }
  }, React.createElement(TableHead, null, React.createElement(TableRow, null, columns.map(obj => {
    return React.createElement(TableCell, {
      key: obj.key
    }, obj.dataIndex);
  }))), React.createElement(TableBody, null, data.map(({
    key,
    name,
    description,
    value
  }) => {
    return React.createElement(TableRow, {
      key: key
    }, React.createElement(TableCell, null, name), React.createElement(TableCell, null, description), React.createElement(TableCell, null, value));
  }))));
}
export function TwelveHourClock() {
  const inputRef = useRef();
  const defaultValue = '2 5,7,18 * * SUN';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Clock format: \"12-hour-clock\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    clockFormat: "12-hour-clock"
  }));
}
export function TwentyFourHourClock() {
  const inputRef = useRef();
  const defaultValue = '2 5,7,18 * * SUN';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "Clock format: \"24-hour-clock\""), React.createElement("p", null, "Default value: ", defaultValue), React.createElement("p", null, "Value: ", value), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    clockFormat: "24-hour-clock"
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "This prop override the prop \"leadingZero\" for \"hours\" and \"minutes\"")));
}
export function FrenchLocale() {
  const inputRef = useRef();
  const defaultValue = '* * 1-2 2,8 1,3,6';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "locale: FRENCH_LOCALE"), React.createElement("p", null, "humanizeLabels: true (by default)"), React.createElement("p", null, "Erreur: ", error ? error.description : 'undefined'), React.createElement("p", null, "Value: ", value), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OU"), React.createElement(Cron, {
    locale: FRENCH_LOCALE,
    value: value,
    setValue: customSetValue,
    onError: onError
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "The order of the \"locale\" properties \"weekDays\", \"months\", \"altMonths\" and \"altWeekDays\" is important! The index will be used as value")), React.createElement("div", null, React.createElement(InfoIcon, {
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  }), React.createElement("div", null, React.createElement(InfoIcon, {
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
  const inputRef = useRef();
  const defaultValue = '30 14 22 * *';
  const [value, setValue] = useState(defaultValue);
  const customSetValue = useCallback(newValue => {
    setValue(newValue);
    inputRef.current = newValue;
  }, [inputRef]);
  const [error, onError] = useState();
  return React.createElement("div", null, React.createElement("p", null, "className: my-project-cron"), React.createElement("p", null, "clearButtonProps: { type: \"default\" }"), React.createElement("p", null, "Error: ", error ? error.description : 'undefined'), React.createElement(Input, {
    onChange: event => {
      setValue(event.target.value);
    }
  }), React.createElement(DividerWithText, null, "OR"), React.createElement(Cron, {
    value: value,
    setValue: customSetValue,
    onError: onError,
    className: "my-project-cron",
    clearButtonProps: {
      type: 'button'
    }
  }), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Custom CSS example (See file \"styles.stories.css\"):"), React.createElement("ul", null, React.createElement("li", null, "Bold prefix and suffix"), React.createElement("li", null, "Red prefix and suffix on error"), React.createElement("li", null, "Bigger border radius for selects and clear button"), React.createElement("li", null, "Gray backgroud for selected options"), React.createElement("li", null, "Clear button type changed to \"default\""))), React.createElement("div", null, React.createElement(InfoIcon, {
    style: {
      marginRight: 5
    }
  }), React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Available classes when using the prop \"className\":"), React.createElement("ul", null, React.createElement("li", null, ".my-project-cron"), React.createElement("li", null, ".my-project-cron-error"), React.createElement("li", null, ".my-project-cron-disabled"), React.createElement("li", null, ".my-project-cron-read-only"), React.createElement("li", null, ".my-project-cron-clear-button"), React.createElement("li", null, ".my-project-cron-field"), React.createElement("li", null, ".my-project-cron-period"), React.createElement("li", null, ".my-project-cron-minutes"), React.createElement("li", null, ".my-project-cron-hours"), React.createElement("li", null, ".my-project-cron-months"), React.createElement("li", null, ".my-project-cron-month-days"), React.createElement("li", null, ".my-project-cron-week-days"), React.createElement("li", null, ".my-project-cron-select"), React.createElement("li", null, ".my-project-cron-select-dropdown"), React.createElement("li", null, ".my-project-cron-select-dropdown-period"), React.createElement("li", null, ".my-project-cron-select-dropdown-minutes"), React.createElement("li", null, ".my-project-cron-select-dropdown-hours"), React.createElement("li", null, ".my-project-cron-select-dropdown-months"), React.createElement("li", null, ".my-project-cron-select-dropdown-month-days"), React.createElement("li", null, ".my-project-cron-select-dropdown-week-days"))));
}