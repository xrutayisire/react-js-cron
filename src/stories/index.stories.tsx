/* eslint-disable */
import { InfoCircleOutlined } from '@ant-design/icons'
import {
  Input as AntdInput,
  Button,
  ConfigProvider,
  Divider,
  Form,
  Radio,
  Select,
  Switch,
  Table,
  theme,
} from 'antd'
import { ThemeConfig } from 'antd/es/config-provider/context'
import React, { useMemo, useState } from 'react'

import Cron, { AllowEmpty, ClockFormat, CronError, PeriodType } from '../index'
import '../styles.css'
import { ClearButtonAction, CronType, Mode } from '../types'
import {
  ENGLISH_VARIANT_LOCALE,
  FRENCH_LOCALE,
  NO_PREFIX_SUFFIX_LOCALE,
} from './constants.stories'
import './styles.stories.css'
import { useCronReducer } from './utils.stories'

export default {
  title: 'ReactJS Cron',
  component: Demo,
}

export function Demo() {
  const defaultValue = '30 5 * * 1,6'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
        onPressEnter={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
  const [changeValueOnBlur, setChangeValueOnBlur] = useState<boolean>(true)
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
  const [allowEmpty, setAllowEmpty] = useState<AllowEmpty>('for-default-value')
  const [clockFormat, setClockFormat] = useState<ClockFormat | ''>('')
  const [locale, setLocale] = useState<
    'english' | 'french' | 'english-variant'
  >('english')
  const [defaultPeriod, setDefaultPeriod] = useState<PeriodType>('day')
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('day')
  const [defaultValue, setDefaultValue] = useState('@daily')
  const [leadingZero, setLeadingZero] = useState<boolean>(false)
  const [periodicityOnDoubleClick, setPeriodicityOnDoubleClick] =
    useState<boolean>(true)
  const [mode, setMode] = useState<Mode>('multiple')
  const [key, setKey] = useState('render')
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()
  const [clearButtonAction, setClearButtonAction] =
    useState<ClearButtonAction>('fill-with-every')
  const defaultAllowedDropdowns: CronType[] = [
    'period',
    'months',
    'month-days',
    'week-days',
    'hours',
    'minutes',
  ]
  const [allowedDropdowns, setAllowedDropdowns] = useState<CronType[]>(
    defaultAllowedDropdowns
  )
  const defaultAllowedPeriods: PeriodType[] = [
    'year',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'reboot',
  ]
  const [allowedPeriods, setAllowedPeriods] = useState<PeriodType[]>(
    defaultAllowedPeriods
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

  return (
    <div>
      <Form layout='inline' className='demo-dynamic-settings'>
        <Form.Item label='Display input'>
          <Switch
            checked={displayInput}
            onChange={() => setDisplayInput((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Change input value on blur'>
          <Switch
            checked={changeValueOnBlur}
            onChange={() => setChangeValueOnBlur((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Change input value on enter'>
          <Switch
            checked={changeValueOnEnter}
            onChange={() => setChangeValueOnEnter((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Read-Only input'>
          <Switch
            checked={readOnlyInput}
            onChange={() => setReadOnlyInput((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Disabled'>
          <Switch
            checked={disabled}
            onChange={() => setDisabled((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Read-Only'>
          <Switch
            checked={readOnly}
            onChange={() => setReadOnly((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Humainze labels'>
          <Switch
            checked={humanizeLabels}
            onChange={() => setHumanizeLabels((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Humanize value'>
          <Switch
            checked={humanizeValue}
            onChange={() => setHumanizeValue((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Display error text'>
          <Switch
            checked={displayErrorText}
            onChange={() => setDisplayErrorText((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Display error style'>
          <Switch
            checked={displayErrorStyle}
            onChange={() => setDisplayErrorStyle((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Display clear button'>
          <Switch
            checked={displayClearButton}
            onChange={() => setDisplayClearButton((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Support shortcuts'>
          <Switch
            checked={supportShortcuts}
            onChange={() => setSupportShortcuts((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Remove prefix/suffix'>
          <Switch
            checked={removePrefixSuffix}
            onChange={() => setRemovePrefixSuffix((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Set custom style'>
          <Switch
            checked={customStyle}
            onChange={() => setCustomStyle((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Leading zero'>
          <Switch
            checked={leadingZero}
            onChange={() => setLeadingZero((prevValue) => !prevValue)}
          />
        </Form.Item>
        <Form.Item label='Periodicity on double click'>
          <Switch
            checked={periodicityOnDoubleClick}
            onChange={() =>
              setPeriodicityOnDoubleClick((prevValue) => !prevValue)
            }
          />
        </Form.Item>
        <Form.Item label='Clock format'>
          <Radio.Group
            value={clockFormat}
            onChange={(e) => setClockFormat(e.target.value)}
          >
            <Radio.Button value=''>None</Radio.Button>
            <Radio.Button value='12-hour-clock'>12-hour clock</Radio.Button>
            <Radio.Button value='24-hour-clock'>24-hour-clock</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Mode'>
          <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
            <Radio.Button value='single'>Single</Radio.Button>
            <Radio.Button value='multiple'>Multiple</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Allowed dropdowns'>
          <Select
            mode='multiple'
            value={allowedDropdowns}
            onChange={(value) => {
              setAllowedDropdowns(value)
            }}
            style={{ minWidth: 535 }}
          >
            {defaultAllowedDropdowns.map((allowedDropdown) => {
              return (
                <Select.Option key={allowedDropdown}>
                  {allowedDropdown}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item label='Allowed periods'>
          <Select
            mode='multiple'
            value={allowedPeriods}
            onChange={(value) => {
              setAllowedPeriods(value)
            }}
            style={{ minWidth: 485 }}
          >
            {defaultAllowedPeriods.map((allowedPeriod) => {
              return (
                <Select.Option key={allowedPeriod}>
                  {allowedPeriod}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item label='Locale'>
          <Radio.Group
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
          >
            <Radio.Button value='english'>English</Radio.Button>
            <Radio.Button value='french'>French</Radio.Button>
            <Radio.Button value='english-variant'>English variant</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Clear button action'>
          <Radio.Group
            value={clearButtonAction}
            onChange={(e) => setClearButtonAction(e.target.value)}
          >
            <Radio.Button value='empty'>Empty</Radio.Button>
            <Radio.Button value='fill-with-every'>Fill with every</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Empty value management *'>
          <Radio.Group
            value={allowEmpty}
            onChange={(e) => setAllowEmpty(e.target.value)}
          >
            <Radio.Button value='for-default-value'>
              For default value
            </Radio.Button>
            <Radio.Button value='always'>Always</Radio.Button>
            <Radio.Button value='never'>Never</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Default value *'>
          <AntdInput
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
          />
        </Form.Item>
        <Form.Item label='Default period **'>
          <Radio.Group
            value={defaultPeriod}
            onChange={(e) => setDefaultPeriod(e.target.value)}
          >
            <Radio.Button value='year'>Year</Radio.Button>
            <Radio.Button value='month'>Month</Radio.Button>
            <Radio.Button value='week'>Week</Radio.Button>
            <Radio.Button value='day'>Day</Radio.Button>
            <Radio.Button value='hour'>Hour</Radio.Button>
            <Radio.Button value='minute'>Minute</Radio.Button>
            <Radio.Button value='reboot'>Reboot</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <p>(*) Need to reset the component to see the changes</p>
        <p>
          (**) Need to reset the component and to have an empty default value to
          see the changes
        </p>
      </Form>

      <div>
        <p>Value: {values.cronValue}</p>

        <Button
          type='primary'
          onClick={() => {
            dispatchValues({
              type: 'set_values',
              value: defaultValue,
            })
            setKey(Math.random().toString(36).substring(7))
            setSelectedPeriod(defaultPeriod)
          }}
        >
          Reset cron component
        </Button>
      </div>

      {displayInput && (
        <>
          <AntdInput
            readOnly={readOnlyInput || mode === 'single'}
            value={values.inputValue}
            onChange={(event) => {
              dispatchValues({
                type: 'set_input_value',
                value: event.target.value,
              })
            }}
            onBlur={() => {
              changeValueOnBlur &&
                dispatchValues({
                  type: 'set_cron_value',
                  value: values.inputValue,
                })
            }}
            onPressEnter={() => {
              changeValueOnEnter &&
                dispatchValues({
                  type: 'set_cron_value',
                  value: values.inputValue,
                })
            }}
          />

          <Divider>OR</Divider>
        </>
      )}

      <Cron
        key={key}
        value={values.cronValue}
        setValue={(newValue: string, { selectedPeriod }) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
          setSelectedPeriod(selectedPeriod)
        }}
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
        periodicityOnDoubleClick={periodicityOnDoubleClick}
        mode={mode}
        allowedDropdowns={allowedDropdowns}
        allowedPeriods={allowedPeriods}
        locale={transformedLocale}
        clearButtonProps={
          customStyle
            ? {
                type: 'default',
              }
            : undefined
        }
      />

      <p style={{ marginTop: 20 }}>Selected period: {selectedPeriod}</p>
      {displayErrorText && (
        <p style={{ marginTop: 20 }}>
          Error: {error ? error.description : 'undefined'}
        </p>
      )}
    </div>
  )
}

export function Input() {
  const defaultValue = ''
  const [values, dispatchValues] = useCronReducer(defaultValue)

  return (
    <div>
      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;onBlur&quot; event must be used instead of
          &quot;onChange&quot; to prevent a value change from the cron component
        </span>
      </div>

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
      />
    </div>
  )
}

export function InputWithOnEnter() {
  const defaultValue = '0 10 * * 1,3,5'
  const [values, dispatchValues] = useCronReducer(defaultValue)

  return (
    <div>
      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
        onPressEnter={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />
      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can also add &quot;onEnter&quot; support to set the value
        </span>
      </div>
      <Divider>OR</Divider>
      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
      />{' '}
    </div>
  )
}

export function ReadOnlyInput() {
  const defaultValue = '0 10 * * 1,3,5'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <AntdInput readOnly value={value} />

      <Divider>OR</Divider>

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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;defaultPeriod&quot; prop only work for empty default value
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;readOnly&quot; is false
        </span>
      </div>
    </div>
  )
}

export function HumanizeLabels() {
  const defaultValue = '* * * * MON-WED,sat'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Humanize labels: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;humanizeLabels&quot; is true
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Humanizes the labels in the cron component
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Works only for week days and months
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
  const defaultValue = '* * * * MON-WED,sat'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Humanize labels: false</p>
      <p>Humanize value: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        humanizeLabels={false}
        humanizeValue
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;humanizeValue&quot; is false
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The prop &quot;humanizeValue&quot; cannot be used to prohibit used of
          valid string value like &quot;MON,WED&quot;
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If the prop &quot;humanizeValue&quot; is true, the component will
          automatically convert a valid number value to string
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If the prop &quot;humanizeValue&quot; is false, the component will
          automatically convert a valid string value to number
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          A valid string value can be in lowercase or uppercase
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Works only for week days and months
        </span>
      </div>
    </div>
  )
}

export function HumanizeLabelsAndValue() {
  const defaultValue = '* * * * MON-WED,sat'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Humanize labels: true</p>
      <p>Humanize value: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        humanizeValue
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Humanizes in the cron component both the labels and the value
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Works only for week days and months
        </span>
      </div>
    </div>
  )
}

export function LeadingZero() {
  const defaultValue = '5 3 2-3,8 * *'
  const [values, dispatchValues] = useCronReducer(defaultValue)

  return (
    <div>
      <p>Leading zero: &quot;always&quot;</p>
      <p>Value: {values.cronValue}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        leadingZero={true}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can set the prop to a boolean or an array [&quot;minutes&quot;,
          &quot;hours&quot;, &quot;month-days&quot;]
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;leadingZero&quot; is &quot;never&quot;
        </span>
      </div>
    </div>
  )
}

export function TrackError() {
  const defaultValue = ''
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Write a bad cron expression to trigger an error after the
          &quot;onBlur&quot; event
        </span>
      </div>

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Use prop &quot;onError&quot; to be able to know when the value is
          invalid
        </span>
      </div>
    </div>
  )
}

export function DisableErrorStyle() {
  const defaultValue = ''
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Display error: false</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;clearButtonAction&quot; prop allow you to empty the field or
          fill it with &quot;* * * * *&quot;
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
  const defaultValue = ''
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Allow empty: &quot;never&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        allowEmpty='never'
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;allowEmpty&quot; is
          &quot;for-default-value&quot;
        </span>
      </div>
    </div>
  )
}

export function EmptyAlwaysAllowed() {
  const defaultValue = ''
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Allow empty: &quot;always&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        allowEmpty='always'
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;allowEmpty&quot; is
          &quot;for-default-value&quot;
        </span>
      </div>
    </div>
  )
}

export function Shortcuts() {
  const defaultValue = '@monthly'
  const [values, dispatchValues] = useCronReducer(defaultValue)
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
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        shortcuts
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If not set, the prop &quot;Shortcuts&quot; is [&quot;@yearly&quot;,
          &quot;@annually&quot;, &quot;@monthly&quot;, &quot;@weekly&quot;,
          &quot;@daily&quot;, &quot;@midnight&quot;, &quot;@hourly&quot;]
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Just pass true to activate all shortcuts including &quot;@reboot&quot;
        </span>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        showHeader={false}
        bordered
        pagination={false}
        style={{ marginTop: 20 }}
        title={() => <h3>Supported shortcuts</h3>}
      />
    </div>
  )
}

export function TwelveHourClock() {
  const defaultValue = '2 5,7,18 * * SUN'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Clock format: &quot;12-hour-clock&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        clockFormat='12-hour-clock'
      />
    </div>
  )
}

export function TwentyFourHourClock() {
  const defaultValue = '2 5,7,18 * * SUN'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>Clock format: &quot;24-hour-clock&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {values.cronValue}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        clockFormat='24-hour-clock'
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          This prop override the prop &quot;leadingZero&quot; for
          &quot;hours&quot; and &quot;minutes&quot;
        </span>
      </div>
    </div>
  )
}

export function NoPeriodicityOnDoubleClick() {
  const defaultValue = '30 5 * * 1,6'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>periodicityOnDoubleClick: false</p>

      <Cron
        value={value}
        setValue={setValue}
        periodicityOnDoubleClick={false}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can disable the double click on a dropdown option that
          automatically select / unselect a periodicity
        </span>
      </div>
    </div>
  )
}

export function SingleSelectionMode() {
  const defaultValue = '30 3 4 4 1'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>mode: &quot;single&quot;</p>

      <Cron value={value} setValue={setValue} mode='single' />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If you want to disable the double click on a dropdown option that
          automatically select / unselect a periodicity, set
          &quot;periodicityOnDoubleClick&quot; prop at false
        </span>
      </div>
    </div>
  )
}

export function SingleSelectionModeAutoClose() {
  const defaultValue = '30 3 4 4 1'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>mode: &quot;single&quot;</p>
      <p>periodicityOnDoubleClick: false</p>

      <Cron
        value={value}
        setValue={setValue}
        mode='single'
        periodicityOnDoubleClick={false}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          When single mode is active and &quot;periodicityOnDoubleClick&quot; is
          false, each dropdown will automatically close after selecting a value
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If you want to disable the double click on a dropdown option that
          automatically select / unselect a periodicity, set
          &quot;periodicityOnDoubleClick&quot; prop at false
        </span>
      </div>
    </div>
  )
}

export function RestrictPeriodAndSelection() {
  const defaultValue = '* * 4 * 1'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>
        allowedDropdowns: [&quot;period&quot;, &quot;months&quot;,
        &quot;month-days&quot;, &quot;week-days&quot;]
      </p>
      <p>
        allowedPeriods: [&quot;year&quot;, &quot;month&quot;, &quot;week&quot;,
        &quot;minute&quot;]
      </p>

      <Cron
        value={value}
        setValue={setValue}
        allowedDropdowns={['period', 'months', 'month-days', 'week-days']}
        allowedPeriods={['year', 'month', 'week', 'minute']}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          E.g.: Hide hours and minutes by removing them from
          &quot;allowedDropdowns&quot; prop.
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          E.g.: Also hide &quot;day&quot; and &quot;hour&quot; periods with
          &quot;allowedPeriods&quot; because hours and minutes cannot be
          changed.
        </span>
      </div>
    </div>
  )
}

export function TrackSelectedPeriod() {
  const defaultValue = ''
  const defaultPeriod = 'month'
  const [value, setValue] = useState(defaultValue)
  const [selectedPeriod, setSelectedPeriod] =
    useState<PeriodType>(defaultPeriod)

  return (
    <div>
      <p>Value: {value}</p>
      <p>Selected period: {selectedPeriod}</p>

      <Cron
        value={value}
        defaultPeriod={defaultPeriod}
        setValue={(value, { selectedPeriod }) => {
          setValue(value)
          setSelectedPeriod(selectedPeriod)
        }}
      />
    </div>
  )
}

export function FrenchLocale() {
  const defaultValue = '* * 1-2 2,8 1,3,6'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>locale: FRENCH_LOCALE</p>
      <p>humanizeLabels: true (by default)</p>
      <p>Erreur: {error ? error.description : 'undefined'}</p>
      <p>Value: {values.cronValue}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OU</Divider>

      <Cron
        locale={FRENCH_LOCALE}
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The order of the &quot;locale&quot; properties &quot;weekDays&quot;,
          &quot;months&quot;, &quot;altMonths&quot; and &quot;altWeekDays&quot;
          is important! The index will be used as value
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Using empty string &apos;&apos; for a prefix / suffix translation will
          remove the text
        </span>
      </div>
    </div>
  )
}

export function DropdownsConfig() {
  const defaultValue = '8 5 2,3 6 1,6'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>&quot;period&quot; allowClear: false</p>
      <p>&quot;months&quot; periodicityOnDoubleClick: false</p>
      <p>&quot;months&quot; mode: &quot;single&quot;</p>
      <p>&quot;month-days&quot; disabled: true</p>
      <p>&quot;week-days&quot; humanizeLabels: false</p>
      <p>&quot;week-days&quot; humanizeValue: true</p>
      <p>&quot;hours&quot; readOnly: true</p>
      <p>&quot;minutes&quot; leadingZero: true</p>
      <p>&quot;minutes&quot; filterOption: 0, 1, 2, 3, 4, 5, 6, 6, 8, 9</p>

      <Cron
        value={value}
        setValue={setValue}
        dropdownsConfig={{
          'period': {
            allowClear: false,
          },
          'months': {
            periodicityOnDoubleClick: false,
            mode: 'single',
          },
          'month-days': {
            disabled: true,
          },
          'week-days': {
            humanizeLabels: false,
            humanizeValue: true,
          },
          'hours': {
            readOnly: true,
          },
          'minutes': {
            leadingZero: true,
            filterOption: ({ value }) => Number(value) < 10,
          },
        }}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can configure each dropdown individually
        </span>
      </div>
    </div>
  )
}

export function CustomStyle() {
  const defaultValue = '30 14 22 * *'
  const [values, dispatchValues] = useCronReducer(defaultValue)
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <p>className: my-project-cron</p>
      <p>clearButtonProps: &#123; type: &quot;default&quot; &#125;</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
        className='my-project-cron'
        clearButtonProps={{
          type: 'default',
        }}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
        <InfoCircleOutlined style={{ marginRight: 5 }} />
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
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Don&apos;t forget to import antd default style
        </span>
      </div>
    </div>
  )
}

export function ChangeTheme() {
  const options = useMemo<Record<string, ThemeConfig>>(
    () => ({
      default: { algorithm: [theme.defaultAlgorithm] },
      dark: { algorithm: [theme.darkAlgorithm] },
    }),
    []
  )

  const [values, dispatchValues] = useCronReducer('30 14 22 * *')
  const [currentTheme, setCurrentTheme] = useState<string>('default')

  return (
    <div>
      <p>Choose theme algorithm:</p>
      <Select<string> value={currentTheme} onChange={setCurrentTheme}>
        {Object.entries(options).map(([label]) => (
          <Select.Option key={label} value={label}>
            {label}
          </Select.Option>
        ))}
      </Select>

      <Divider />

      <ConfigProvider theme={options[currentTheme]}>
        <Cron
          value={values.cronValue}
          setValue={(newValue: string) => {
            dispatchValues({
              type: 'set_values',
              value: newValue,
            })
          }}
        />
      </ConfigProvider>
    </div>
  )
}
