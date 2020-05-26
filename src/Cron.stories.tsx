import React, { useState, useCallback, useRef } from 'react'
import { Input as AntdInput, Divider } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

import Cron, { CronError } from './index'

import './styles.stories.css'

export default {
  title: 'ReactJS Cron',
  component: Example,
}

export function Example() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '30 5 * * */6'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
        onPressEnter={() => {
          setValue(inputRef.current?.input.value || '')
        }}
      />

      <Divider>OR</Divider>

      <Cron value={value} setValue={customSetValue} setError={setError} />

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

export function Input() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )

  return (
    <div>
      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The &quot;onBlur&quot; event must be used instead of
          &quot;onChange&quot; to prevent a value change from the cron component
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Don&apos;t directly set the value of the Input with the prop
          &quot;value&quot;, you will not be able to edit it
        </span>
      </div>

      <Divider>OR</Divider>

      <Cron value={value} setValue={customSetValue} />
    </div>
  )
}

export function InputWithOnEnter() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '0 10 * * 1,3,5'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )

  return (
    <div>
      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
        onPressEnter={() => {
          setValue(inputRef.current?.input.value || '')
        }}
      />

      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          You can also add &quot;onEnter&quot; support to set the value
        </span>
      </div>

      <Divider>OR</Divider>

      <Cron value={value} setValue={customSetValue} />
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
          If not set, the prop &quot;defaultPeriod&quot; is &quot;month&quot;
        </span>
      </div>
    </div>
  )
}

export function OnlyHumanizeLabels() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '* * * * MON-WED,sat'
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState<CronError>()
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )

  return (
    <div>
      <p>Humanize labels: true</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron value={value} setValue={customSetValue} setError={setError} />

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
    </div>
  )
}

export function OnlyHumanizeValue() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '* * * * MON-WED,sat'
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState<CronError>()
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
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

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={value}
        setValue={customSetValue}
        setError={setError}
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
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '* * * * MON-WED,sat'
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState<CronError>()
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
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

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={value}
        setValue={customSetValue}
        setError={setError}
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

export function TrackError() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
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

      <Cron value={value} setValue={customSetValue} setError={setError} />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Use prop &quot;setError&quot; to be able to know when the value is
          invalid
        </span>
      </div>
    </div>
  )
}

export function DisableErrorStyle() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Display error: false</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={value}
        setValue={customSetValue}
        setError={setError}
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

export function InvalidDefaultValue() {
  const defaultValue = '*/2 */2 */2 1-6 */6 * *'
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Cron value={value} setValue={setValue} setError={setError} />
    </div>
  )
}

export function EmptyNeverAllowed() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Allow empty: &quot;never&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={value}
        setValue={customSetValue}
        setError={setError}
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
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Allow empty: &quot;always&quot;</p>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={value}
        setValue={customSetValue}
        setError={setError}
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

export function FrenchLocale() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '30 14 22 * *'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Erreur: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OU</Divider>

      <Cron
        locale={{
          everyText: 'chaque',
          emptyMonths: 'chaque mois',
          emptyMonthDays: 'chaque jour du mois',
          emptyMonthDaysShort: 'jour du mois',
          emptyWeekDays: 'chaque jour de la semaine',
          emptyWeekDaysShort: 'jour de la semaine',
          emptyHours: 'chaque heure',
          emptyMinutes: 'chaque minute',
          emptyMinutesForHourPeriod: 'chaque',
          yearOption: 'année',
          monthOption: 'mois',
          weekOption: 'semaine',
          dayOption: 'jour',
          hourOption: 'heure',
          minuteOption: 'minute',
          prefixPeriod: 'Chaque',
          prefixMonths: 'en',
          prefixMonthDays: 'le',
          prefixWeekDays: 'le',
          prefixWeekDaysForMonthAndYearPeriod: 'et',
          prefixHours: 'à',
          prefixMinutes: ':',
          prefixMinutesForHourPeriod: 'à',
          suffixMinutesForHourPeriod: 'minute(s)',
          errorInvalidCron: 'Expression cron invalide',
          months: [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre',
          ],
          weekDays: [
            'dimanche',
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi',
          ],
        }}
        value={value}
        setValue={customSetValue}
        setError={setError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The order of the &quot;locale&quot; properties &quot;weekDays&quot;
          and &quot;months&quot; is important! The index will be used as value
        </span>
      </div>
      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Sunday must always be the first value of &quot;weekDays&quot; property
          because it&apos;s &quot;0&quot;
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
      <p>Value: {value}</p>

      <Cron
        locale={{
          everyText: 'all',
          emptyHours: 'all hours',
          emptyWeekDays: 'all days of the week',
          emptyMonthDays: 'all days of the month',
          emptyMonths: 'all months',
          emptyMinutes: 'all minutes',
          emptyMinutesForHourPeriod: 'all',
          yearOption: 'years',
          monthOption: 'months',
          weekOption: 'weeks',
          dayOption: 'days',
          hourOption: 'hours',
          minuteOption: 'minutes',
          prefixPeriod: 'All',
        }}
        value={value}
        setValue={setValue}
      />

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
      <p>Value: {value}</p>

      <Cron
        locale={{
          prefixPeriod: '',
          prefixMonths: '',
          prefixMonthDays: '',
          prefixWeekDays: '',
          prefixWeekDaysForMonthAndYearPeriod: '',
          prefixHours: '',
          prefixMinutes: '',
          prefixMinutesForHourPeriod: '',
          suffixMinutesForHourPeriod: '',
        }}
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

export function CustomStyle() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '30 14 22 * *'
  const [value, setValue] = useState(defaultValue)
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue)
      inputRef.current?.setValue(newValue)
    },
    [inputRef]
  )
  const [error, setError] = useState<CronError>()

  return (
    <div>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <AntdInput
        ref={inputRef}
        onBlur={(event) => {
          setValue(event.target.value)
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={value}
        setValue={customSetValue}
        setError={setError}
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
          <li>.my-project-cron-clear-button</li>
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
