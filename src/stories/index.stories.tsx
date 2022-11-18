import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import {
  TextField,
  Table,
  Radio,
  Switch,
  Button,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  Input,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TextFieldProps
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import DividerWithText from '../components/DividerWithText'

import Cron, { CronError, AllowEmpty, ClockFormat, PeriodType } from '../index'
import {
  FRENCH_LOCALE,
  ENGLISH_VARIANT_LOCALE,
  NO_PREFIX_SUFFIX_LOCALE,
} from './constants.stories'
import { ClearButtonAction } from '../types'

import './styles.stories.css'

export default {
  title: 'ReactJS Cron',
  component: Demo,
}

export function Demo() {
  // const textFieldType = typeof TextField;
  const inputRef = useRef<TextFieldProps>()
  const defaultValue = '30 5 * * 1,6'
  const [value, setValue] = useState(defaultValue)
  const [textValue, setTextValue] = useState('');
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      setTextValue(newValue);
    },
    [setTextValue]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <TextField
        value={textValue}
        inputRef={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
        // 
        onChange={(event: any) => {
          customSetValue(event.target.value)
        }}
      // on
      // onPressEnter={() => {
      //   setValue(inputRef.current?.input.value || '')
      // }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={customSetValue} onError={onError} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Double click on a dropdown option to automatically select / unselect a
          periodicity
        </span>
      </div>

      <p style={{ marginTop: 20 }}>
        Error: {error ? error.description : 'undefined'}
      </p>
    </div>
  )
}

export function DynamicSettings() {
  const [displayInput, setDisplayInput] = useState<boolean>(true)
  const [changeValueonChange, setChangeValueonChange] = useState<boolean>(true)
  const [changeValueOnEnter, setChangeValueOnEnter] = useState<boolean>(true)
  const [readOnlyInput, setReadOnlyInput] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [readOnly, setReadOnly] = useState<boolean>(false)
  const [humanizeLabels, setHumanizeLabels] = useState<boolean>(true)
  const [humanizeValue, setHumanizeValue] = useState<boolean>(false)
  const [displayErrorText, setDisplayErrorText] = useState<boolean>(true)
  const [displayErrorStyle, setDisplayErrorStyle] = useState<boolean>(true)
  const [displayClearButton, setDisplayClearButton] = useState<boolean>(true)
  const [supportShortcuts, setSupportShortcuts] = useState<boolean>(true)
  const [removePrefixSuffix, setRemovePrefixSuffix] = useState<boolean>(false)
  const [customStyle, setCustomStyle] = useState<boolean>(false)
  const [allowEmpty, setAllowEmpty] = useState<AllowEmpty | string>('for-default-value')
  const [clockFormat, setClockFormat] = useState<ClockFormat | '' | string>('')
  const [locale, setLocale] = useState<
    'english' | 'french' | 'english-variant' | string
  >('english')
  const [defaultPeriod, setDefaultPeriod] = useState<PeriodType | string>('day')
  const [defaultValue, setDefaultValue] = useState('@daily')
  const [leadingZero, setLeadingZero] = useState<boolean>(false)
  const [key, setKey] = useState('render')
  const inputRef = useRef<string>()
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      inputRef.current = newValue

    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()
  const [clearButtonAction, setClearButtonAction] = useState<ClearButtonAction | string>(
    'fill-with-every'
  )

  const transformedLocale = useMemo(() => {
    let newLocale

    switch (locale) {
      case 'french':
        newLocale = FRENCH_LOCALE
        break
      case 'english-variant':
        newLocale = ENGLISH_VARIANT_LOCALE
        break

      default:
        newLocale = {}
        break
    }

    if (removePrefixSuffix) {
      newLocale = {
        ...newLocale,
        ...NO_PREFIX_SUFFIX_LOCALE,
      }
    }

    return newLocale
  }, [locale, removePrefixSuffix])

  useEffect(
    () => {
      if (displayInput && value !== null) {
        //  inputRef.current = value;

      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [displayInput]
  )

  return (
    <div>
      <FormGroup row className='demo-dynamic-settings'>
        <FormControlLabel label='Display input' control={
          <Switch
            checked={displayInput}
            onChange={() => setDisplayInput((prevValue) => !prevValue)}
          />
        } />

        <FormControlLabel label='Change input value on blur' control={
          <Switch
            checked={changeValueonChange}
            onChange={() => setChangeValueonChange((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Change input value on enter' control={
          <Switch
            checked={changeValueOnEnter}
            onChange={() => setChangeValueOnEnter((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Read-Only input' control={
          <Switch
            checked={readOnlyInput}
            onChange={() => setReadOnlyInput((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Disabled' control={
          <Switch
            checked={disabled}
            onChange={() => setDisabled((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Read-Only' control={
          <Switch
            checked={readOnly}
            onChange={() => setReadOnly((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Humainze labels' control={
          <Switch
            checked={humanizeLabels}
            onChange={() => setHumanizeLabels((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Humanize value' control={
          <Switch
            checked={humanizeValue}
            onChange={() => setHumanizeValue((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Display error text' control={
          <Switch
            checked={displayErrorText}
            onChange={() => setDisplayErrorText((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Display error style' control={
          <Switch
            checked={displayErrorStyle}
            onChange={() => setDisplayErrorStyle((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Display clear button' control={
          <Switch
            checked={displayClearButton}
            onChange={() => setDisplayClearButton((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Support shortcuts' control={
          <Switch
            checked={supportShortcuts}
            onChange={() => setSupportShortcuts((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Remove prefix/suffix' control={
          <Switch
            checked={removePrefixSuffix}
            onChange={() => setRemovePrefixSuffix((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Set custom style' control={
          <Switch
            checked={customStyle}
            onChange={() => setCustomStyle((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Leading zero' control={
          <Switch
            checked={leadingZero}
            onChange={() => setLeadingZero((prevValue) => !prevValue)}
          />
        } />
        <FormControlLabel label='Clock format' control={
          <RadioGroup
            value={clockFormat}
            onChange={(e) => setClockFormat(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='' label='None' />
            <FormControlLabel control={<Radio />} value='12-hour-clock' label='12-hour clock' />
            <FormControlLabel control={<Radio />} value='24-hour-clock' label='24-hour-clock' />
          </RadioGroup>
        } />
        <FormControlLabel label='Locale' control={
          <RadioGroup
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='english' label='English' />
            <FormControlLabel control={<Radio />} value='french' label='French' />
            <FormControlLabel control={<Radio />} value='english-variant' label='English variant' />
          </RadioGroup>
        } />
        <FormControlLabel label='Clear button action' control={
          <RadioGroup
            value={clearButtonAction}
            onChange={(e) => setClearButtonAction(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='empty' label='Empty' />
            <FormControlLabel control={<Radio />} value='fill-with-every' label='Fill with every' />
          </RadioGroup>
        } />
        <FormControlLabel label='Empty value management *' control={
          <RadioGroup
            value={allowEmpty}
            onChange={(e) => setAllowEmpty(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='for-default-value' label='For default value'></FormControlLabel>
            <FormControlLabel control={<Radio />} value='always' label='Always' />
            <FormControlLabel control={<Radio />} value='never' label='Never' />
          </RadioGroup>
        } />
        <FormControlLabel label='Default value *' control={
          <Input

            value={defaultValue}
            onChange={(e: any) => setDefaultValue(e.target.value)}
          />
        } />
        <FormControlLabel label='Default period **' control={
          <RadioGroup
            value={defaultPeriod}
            onChange={(e) => setDefaultPeriod(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='year' label='Year' />
            <FormControlLabel control={<Radio />} value='month' label='Month' />
            <FormControlLabel control={<Radio />} value='week' label='Week' />
            <FormControlLabel control={<Radio />} value='day' label='Day' />
            <FormControlLabel control={<Radio />} value='hour' label='Hour' />
            <FormControlLabel control={<Radio />} value='minute' label='Minute' />
            <FormControlLabel control={<Radio />} value='reboot' label='Reboot' />
          </RadioGroup>
        } />
        <p>(*) Need to reset the component to see the changes</p>
        <p>
          (**) Need to reset the component and to have an empty default value to
          see the changes
        </p>
      </FormGroup>

      <div>
        <p>Value: {value}</p>

        <Button
          variant='contained'
          onClick={() => {
            customSetValue(defaultValue)
            setKey(Math.random().toString(36).substring(7))
          }}
        >
          Reset cron component
        </Button>
      </div>

      {displayInput && (
        <>
          <Input

            readOnly={readOnlyInput}
            onChange={(event: any) => {
              changeValueonChange && setValue(event.target.value)
            }} />

          <DividerWithText>OR</DividerWithText>
        </>
      )}

      <Cron
        key={key}
        value={value}
        setValue={customSetValue}
        onError={onError}
        disabled={disabled}
        readOnly={readOnly}
        humanizeLabels={humanizeLabels}
        humanizeValue={humanizeValue}
        displayError={displayErrorStyle}
        clearButton={displayClearButton}
        clearButtonAction={clearButtonAction}
        shortcuts={supportShortcuts}
        allowEmpty={allowEmpty}
        clockFormat={clockFormat === '' ? undefined : clockFormat}
        defaultPeriod={defaultPeriod}
        leadingZero={leadingZero}
        className={customStyle ? 'my-project-cron' : undefined}
        locale={transformedLocale}

      />

      {displayErrorText && (
        <p style={{ marginTop: 20 }}>
          Error: {error ? error.description : 'undefined'}
        </p>
      )}
    </div>
  )
}

export function LocalInput() {
  const inputRef = useRef<string>()
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )

  return (
    <div>
      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <div style={{ marginTop: 10 }}>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;onChange&quot; event must be used instead of
          &quot;onChange&quot; to prevent a value change from the cron component
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Don&apos;t directly set the value of the Input with the prop
          &quot;value&quot;, you will not be able to edit it
        </span>
      </div>

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={customSetValue} />
    </div>
  )
}

export function InputWithOnEnter() {
  const inputRef = useRef<string>()
  const defaultValue = '0 10 * * 1,3,5'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )

  return (
    <div>
      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}


      />

      <div style={{ marginTop: 10 }}>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can also add &quot;onEnter&quot; support to set the value
        </span>
      </div>

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={customSetValue} />
    </div>
  )
}

export function ReadOnlyInput() {
  const defaultValue = '0 10 * * 1,3,5'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <Input readOnly value={value} />

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={setValue} />
    </div>
  )
}

export function DefaultValue() {
  const defaultValue = '*/7 */2 */3 * *'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>

      <Cron value={value} setValue={setValue} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The first value will always be used as default value
        </span>
      </div>
    </div>
  )
}

export function DefaultPeriod() {
  const defaultValue = ''
  const defaultPeriod = 'year'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default period: {defaultPeriod}</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>

      <Cron value={value} setValue={setValue} defaultPeriod={defaultPeriod} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;defaultPeriod&quot; prop only work for empty default value
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;defaultPeriod&quot; is &quot;day&quot;
        </span>
      </div>
    </div>
  )
}

export function Disabled() {
  const defaultValue = '30 5 * * 1,6'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Disabled: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>

      <Cron value={value} setValue={setValue} disabled />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;disabled&quot; is false
        </span>
      </div>
    </div>
  )
}

export function ReadOnly() {
  const defaultValue = '30 5 * * 1,6'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Read only: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>

      <Cron value={value} setValue={setValue} readOnly />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;readOnly&quot; is false
        </span>
      </div>
    </div>
  )
}

export function HumanizeLabels() {
  const inputRef = useRef<string>()
  const defaultValue = '* * * * MON-WED,sat'
  const [value, setValue] = useState(defaultValue)
  const [error, onError] = useState<CronError>()
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )

  return (
    <div>
      <p>Humanize labels: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={customSetValue} onError={onError} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;humanizeLabels&quot; is true
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Humanizes the labels in the cron component
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Works only for week days and months
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Can be used with &quot;locale&quot; prop and &quot;altMonths&quot; /
          &quot;altWeekDays&quot; properties in order to display translated
          labels
        </span>
      </div>
    </div>
  )
}

export function HumanizeValue() {
  const inputRef = useRef<string>()
  const defaultValue = '* * * * MON-WED,sat'
  const [value, setValue] = useState(defaultValue)
  const [error, onError] = useState<CronError>()
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )

  return (
    <div>
      <p>Humanize labels: false</p>
      <p>Humanize value: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        humanizeLabels={false}
        humanizeValue
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;humanizeValue&quot; is false
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The prop &quot;humanizeValue&quot; cannot be used to prohibit used of
          valid string value like &quot;MON,WED&quot;
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If the prop &quot;humanizeValue&quot; is true, the component will
          automatically convert a valid number value to string
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If the prop &quot;humanizeValue&quot; is false, the component will
          automatically convert a valid string value to number
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          A valid string value can be in lowercase or uppercase
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Works only for week days and months
        </span>
      </div>
    </div>
  )
}

export function HumanizeLabelsAndValue() {
  const inputRef = useRef<string>()
  const defaultValue = '* * * * MON-WED,sat'
  const [value, setValue] = useState(defaultValue)
  const [error, onError] = useState<CronError>()
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )

  return (
    <div>
      <p>Humanize labels: true</p>
      <p>Humanize value: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        humanizeValue
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Humanizes in the cron component both the labels and the value
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Works only for week days and months
        </span>
      </div>
    </div>
  )
}

export function LeadingZero() {
  const inputRef = useRef<string>()
  const defaultValue = '5 3 2-3,8 * *'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )

  return (
    <div>
      <p>Leading zero: &quot;always&quot;</p>
      <p>Value: {value}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={customSetValue} leadingZero={true} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can set the prop to a boolean or an array [&quot;minutes&quot;,
          &quot;hours&quot;, &quot;month-days&quot;]
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;leadingZero&quot; is &quot;never&quot;
        </span>
      </div>
    </div>
  )
}

export function TrackError() {
  const inputRef = useRef<string>()
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <div style={{ marginTop: 10 }}>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Write a bad cron expression to trigger an error after the
          &quot;onChange&quot; event
        </span>
      </div>

      <DividerWithText>OR</DividerWithText>

      <Cron value={value} setValue={customSetValue} onError={onError} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Use prop &quot;onError&quot; to be able to know when the value is
          invalid
        </span>
      </div>
    </div>
  )
}

export function DisableErrorStyle() {
  const inputRef = useRef<string>()
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Display error: false</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        displayError={false}
      />
    </div>
  )
}

export function NoClearButton() {
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Clear button: false</p>
      <p>Value: {value}</p>

      <Cron clearButton={false} value={value} setValue={setValue} />
    </div>
  )
}

export function ClearButtonEmptyValue() {
  const clearButtonAction = 'empty'
  const defaultValue = '0 10 * * 1,3,5'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Clear button action: {clearButtonAction}</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>

      <Cron
        value={value}
        setValue={setValue}
        clearButtonAction={clearButtonAction}
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;clearButtonAction&quot; prop allow you to empty the field or
          fill it with &quot;* * * * *&quot;
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;clearButtonAction&quot; is
          &quot;fill-with-every&quot;
        </span>
      </div>
    </div>
  )
}

export function InvalidDefaultValue() {
  const defaultValue = '*/2 */2 */2 1-6 */6 * *'
  const [value, setValue] = useState(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Cron value={value} setValue={setValue} onError={onError} />
    </div>
  )
}

export function EmptyNeverAllowed() {
  const inputRef = useRef<string>()
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Allow empty: &quot;never&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        allowEmpty='never'
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;allowEmpty&quot; is
          &quot;for-default-value&quot;
        </span>
      </div>
    </div>
  )
}

export function EmptyAlwaysAllowed() {
  const inputRef = useRef<string>()
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Allow empty: &quot;always&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        allowEmpty='always'
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;allowEmpty&quot; is
          &quot;for-default-value&quot;
        </span>
      </div>
    </div>
  )
}

export function Shortcuts() {
  const inputRef = useRef<string>()
  const defaultValue = '@monthly'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
    },
    {
      dataIndex: 'description',
      key: 'description',
    },
    {
      dataIndex: 'value',
      key: 'value',
    },
  ]

  const data = [
    {
      key: '1',
      name: '@yearly (or @annually)',
      description: 'Run once a year at midnight of 1 January',
      value: '0 0 1 1 *',
    },
    {
      key: '2',
      name: '@monthly',
      description: 'Run once a month at midnight of the first day of the month',
      value: '0 0 1 * *',
    },
    {
      key: '3',
      name: '@weekly',
      description: 'Run once a week at midnight on Sunday morning',
      value: '0 0 * * 0',
    },
    {
      key: '4',
      name: '@daily (or @midnight)',
      description: 'Run once a day at midnight',
      value: '0 0 * * *',
    },
    {
      key: '5',
      name: '@hourly',
      description: 'Run once an hour at the beginning of the hour',
      value: '0 * * * *',
    },
    {
      key: '6',
      name: '@reboot',
      description: 'Run at startup',
      value: '@reboot',
    },
  ]

  return (
    <div>
      <p>Shortcuts: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        shortcuts
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;Shortcuts&quot; is [&quot;@yearly&quot;,
          &quot;@annually&quot;, &quot;@monthly&quot;, &quot;@weekly&quot;,
          &quot;@daily&quot;, &quot;@midnight&quot;, &quot;@hourly&quot;]
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Just pass true to activate all shortcuts including &quot;@reboot&quot;
        </span>
      </div>


      <Typography variant="h6" id="tableTitle" component="div">
        Supported shortcuts
        </Typography>
      <Table

        style={{ marginTop: 20 }}
      >
        <TableHead>
          <TableRow>
            {columns.map((obj) => {
              return (<TableCell key={obj.key}>{obj.dataIndex}</TableCell>)
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ key, name, description, value }) => {
            return (<TableRow key={key}>
              <TableCell>{name}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export function TwelveHourClock() {
  const inputRef = useRef<string>()
  const defaultValue = '2 5,7,18 * * SUN'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Clock format: &quot;12-hour-clock&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        clockFormat='12-hour-clock'
      />
    </div>
  )
}

export function TwentyFourHourClock() {
  const inputRef = useRef<string>()
  const defaultValue = '2 5,7,18 * * SUN'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Clock format: &quot;24-hour-clock&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        clockFormat='24-hour-clock'
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          This prop override the prop &quot;leadingZero&quot; for
          &quot;hours&quot; and &quot;minutes&quot;
        </span>
      </div>
    </div>
  )
}

export function FrenchLocale() {
  const inputRef = useRef<string>()
  const defaultValue = '* * 1-2 2,8 1,3,6'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>locale: FRENCH_LOCALE</p>
      <p>humanizeLabels: true (by default)</p>
      <p>Erreur: {error ? error.description : 'undefined'}</p>
      <p>Value: {value}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OU</DividerWithText>

      <Cron
        locale={FRENCH_LOCALE}
        value={value}
        setValue={customSetValue}
        onError={onError}
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The order of the &quot;locale&quot; properties &quot;weekDays&quot;,
          &quot;months&quot;, &quot;altMonths&quot; and &quot;altWeekDays&quot;
          is important! The index will be used as value
        </span>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Sunday must always be the first value of &quot;weekDays&quot; and
          &quot;altWeekDays&quot; property because it&apos;s &quot;0&quot;
        </span>
      </div>
    </div>
  )
}

export function CustomENLocale() {
  const defaultValue = '30 14 22 * *'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>locale: ENGLISH_VARIANT_LOCALE</p>
      <p>Value: {value}</p>

      <Cron locale={ENGLISH_VARIANT_LOCALE} value={value} setValue={setValue} />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Not all translations need to be changed when using the prop
          &quot;locale&quot;
        </span>
      </div>
    </div>
  )
}

export function NoPrefixAndSuffix() {
  const defaultValue = '30 14 22 * *'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>locale: NO_PREFIX_SUFFIX_LOCALE</p>
      <p>Value: {value}</p>

      <Cron
        locale={NO_PREFIX_SUFFIX_LOCALE}
        value={value}
        setValue={setValue}
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Using empty string &apos;&apos; for a prefix / suffix translation will
          remove the text
        </span>
      </div>
    </div>
  )
}

export function CustomStyle() {
  const inputRef = useRef<string>()
  const defaultValue = '30 14 22 * *'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current = newValue
    },
    [inputRef]
  )
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>className: my-project-cron</p>
      <p>clearButtonProps: &#123; type: &quot;default&quot; &#125;</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Input

        onChange={(event: any) => {
          setValue(event.target.value)
        }}
      />

      <DividerWithText>OR</DividerWithText>

      <Cron
        value={value}
        setValue={customSetValue}
        onError={onError}
        className='my-project-cron'
        clearButtonProps={{
          type: 'button',
        }}
      />

      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Custom CSS example (See file &quot;styles.stories.css&quot;):
        </span>
        <ul>
          <li>Bold prefix and suffix</li>
          <li>Red prefix and suffix on error</li>
          <li>Bigger border radius for selects and clear button</li>
          <li>Gray backgroud for selected options</li>
          <li>Clear button type changed to &quot;default&quot;</li>
        </ul>
      </div>
      <div>
        <InfoIcon style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Available classes when using the prop &quot;className&quot;:
        </span>
        <ul>
          <li>.my-project-cron</li>
          <li>.my-project-cron-error</li>
          <li>.my-project-cron-disabled</li>
          <li>.my-project-cron-read-only</li>
          <li>.my-project-cron-clear-button</li>
          <li>.my-project-cron-field</li>
          <li>.my-project-cron-period</li>
          <li>.my-project-cron-minutes</li>
          <li>.my-project-cron-hours</li>
          <li>.my-project-cron-months</li>
          <li>.my-project-cron-month-days</li>
          <li>.my-project-cron-week-days</li>
          <li>.my-project-cron-select</li>
          <li>.my-project-cron-select-dropdown</li>
          <li>.my-project-cron-select-dropdown-period</li>
          <li>.my-project-cron-select-dropdown-minutes</li>
          <li>.my-project-cron-select-dropdown-hours</li>
          <li>.my-project-cron-select-dropdown-months</li>
          <li>.my-project-cron-select-dropdown-month-days</li>
          <li>.my-project-cron-select-dropdown-week-days</li>
        </ul>
      </div>
    </div>
  )
}
