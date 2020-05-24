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
  const defaultValue = '*/2 */2 1-4,7 * *'
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
      />

      <Divider>OR</Divider>

      <Cron value={value} setValue={customSetValue} setError={setError} />
      <p>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Double click on a dropdown option to automatically select / unselect a
          periodicity
        </span>
      </p>

      <p>Error: &quot;{error ? error.description : 'undefined'}&quot;</p>
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

export function ReadOnlyInput() {
  const defaultValue = ''
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

      <p>Error: &quot;{error ? error.description : 'undefined'}&quot;</p>
      <div style={{ marginTop: 10 }}>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Use prop &quot;setError&quot; to know when the value is not valid
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

      <p>Error: &quot;{error ? error.description : 'undefined'}&quot;</p>
    </div>
  )
}

export function NoClearButton() {
  const [value, setValue] = useState('')

  return (
    <div>
      <p>Value: {value}</p>

      <Cron clearButton={false} value={value} setValue={setValue} />
    </div>
  )
}

export function InvalidDefaultValue() {
  const defaultValue = '*/2 */2 */2 */2 */2'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>

      <Cron value={value} setValue={setValue} />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          If the default value is not valid, the cron component will use &quot;*
          * * * *&quot;
        </span>
      </div>
    </div>
  )
}

export function FrenchLocale() {
  const inputRef = useRef<AntdInput>(null)
  const defaultValue = '*/2 */2 */2 * *'
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
      />

      <Divider>OU</Divider>

      <Cron
        locale={{
          everyText: 'chaque',
          emptyHours: 'chaque heure',
          emptyWeekDays: 'chaque jour de la semaine',
          emptyMonthDays: 'chaque jour du mois',
          emptyMonths: 'chaque mois',
          emptyMinutes: 'chaque minute',
          emptyMinutesWhenHoursPeriod: 'chaque',
          minuteOption: 'minute',
          hourOption: 'heure',
          dayOption: 'jour',
          weekOption: 'semaine',
          monthOption: 'mois',
          yearOption: 'année',
          prefixPeriod: 'Chaque',
          prefixHours: 'à',
          prefixWeekDays: 'le',
          prefixMonthDays: 'le',
          prefixMonths: 'de',
          prefixMinutes: ':',
          prefixMinutesWhenHoursPeriod: 'à',
          suffixMinutesWhenHoursPeriod: 'minute(s)',
          errorInvalidCron: 'Expression cron invalide',
          weekDays: [
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi',
            'dimanche',
          ],
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
        }}
        value={value}
        setValue={customSetValue}
        setError={setError}
      />

      <p>Erreur: &quot;{error ? error.description : 'undefined'}&quot;</p>
    </div>
  )
}

export function CustomENLocale() {
  const defaultValue = ''
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
          emptyMinutesWhenHoursPeriod: 'all',
          minuteOption: 'minutes',
          hourOption: 'hours',
          dayOption: 'days',
          weekOption: 'weeks',
          monthOption: 'months',
          yearOption: 'years',
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
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Value: {value}</p>

      <Cron
        locale={{
          prefixHours: '',
          prefixMinutes: '',
          prefixMinutesWhenHoursPeriod: '',
          prefixMonthDays: '',
          prefixMonths: '',
          prefixPeriod: '',
          prefixWeekDays: '',
          suffixMinutesWhenHoursPeriod: '',
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
  const defaultValue = '*/7 */2 1-12 * *'
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

      <p>Error: &quot;{error ? error.description : 'undefined'}&quot;</p>

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
    </div>
  )
}
