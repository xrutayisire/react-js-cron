import { render, screen } from '@testing-library/react'

import Cron from '../Cron'
import {
  AllowEmpty,
  ClockFormat,
  CronError,
  CronType,
  LeadingZero,
  PeriodType,
  Shortcuts,
} from '../types'

describe('Cron defaultValue test suite', () => {
  const defaultError: CronError = {
    description: 'Invalid cron expression',
    type: 'invalid_cron',
  }

  const cases: {
    title: string
    defaultValue: string
    expectedValue?: string
    expectedPeriod?: PeriodType
    shortcuts?: Shortcuts
    allowEmpty?: AllowEmpty
    humanizeLabels?: boolean
    humanizeValue?: boolean
    leadingZero?: LeadingZero
    clockFormat?: ClockFormat
    allowedDropdowns?: CronType[]
    defaultPeriod?: PeriodType
    periodSelect: PeriodType | undefined
    monthsSelect: string | undefined
    monthDaysSelect: string | undefined
    weekDaysSelect: string | undefined
    hoursSelect: string | undefined
    minutesSelect: string | undefined
    error?: CronError
  }[] = [
    {
      title: 'every minutes',
      defaultValue: '* * * * *',
      periodSelect: 'minute',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: undefined,
      minutesSelect: undefined,
    },
    {
      title: 'each monday',
      defaultValue: '* * * * 1',
      periodSelect: 'week',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: 'MON',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'every 2 hours',
      defaultValue: '* */2 * * *',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every 2',
      minutesSelect: 'every minute',
    },
    {
      title: 'valid cron values with simple range definition',
      defaultValue: '0 1 3-5 5 */2',
      periodSelect: 'year',
      monthsSelect: 'MAY',
      monthDaysSelect: '3-5',
      weekDaysSelect: 'every 2',
      hoursSelect: '1',
      minutesSelect: '0',
    },
    {
      title: 'multiple minutes',
      defaultValue: '2,5,9,13,22 * * * *',
      periodSelect: 'hour',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: undefined,
      minutesSelect: '2,5,9,13,22',
    },
    {
      title: 'a minute and an hour',
      defaultValue: '2 7 * * *',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: '7',
      minutesSelect: '2',
    },
    {
      title: 'humanized value is allowed by default',
      defaultValue: '* * * MAY SUN',
      expectedValue: '* * * 5 0',
      periodSelect: 'year',
      monthsSelect: 'MAY',
      monthDaysSelect: 'day of the month',
      weekDaysSelect: 'SUN',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'humanizeValue at false convert humanized value in cron',
      defaultValue: '* * * * MON-WED,sat',
      expectedValue: '* * * * 1-3,6',
      humanizeValue: false,
      periodSelect: 'week',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: 'MON-WED,SAT',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'humanizeValue at true keep humanized value in cron',
      defaultValue: '* * * * MON-WED,sat',
      expectedValue: '* * * * MON-WED,SAT',
      humanizeValue: true,
      periodSelect: 'week',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: 'MON-WED,SAT',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'humanized labels is allowed',
      defaultValue: '* * * * MON-WED,sat',
      expectedValue: '* * * * 1-3,6',
      humanizeLabels: true,
      periodSelect: 'week',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: 'MON-WED,SAT',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'humanized labels is not allowed',
      defaultValue: '* * * * MON-WED,sat',
      expectedValue: '* * * * 1-3,6',
      humanizeLabels: false,
      periodSelect: 'week',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: '1-3,6',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'leading zero is added when props is true',
      defaultValue: '1 3,18 6,23 * *',
      leadingZero: true,
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '06,23',
      weekDaysSelect: 'day of the week',
      hoursSelect: '03,18',
      minutesSelect: '01',
    },
    {
      title: 'leading zero is added only for hours',
      defaultValue: '1 3,18 6,23 * *',
      leadingZero: ['hours'],
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '6,23',
      weekDaysSelect: 'day of the week',
      hoursSelect: '03,18',
      minutesSelect: '1',
    },
    {
      title:
        'leading zero is added for hours and minutes with clock format 24 hours',
      defaultValue: '1 3,18 6,23 * *',
      clockFormat: '24-hour-clock',
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '6,23',
      weekDaysSelect: 'day of the week',
      hoursSelect: '03,18',
      minutesSelect: '01',
    },
    {
      title: 'AM and PM displayed with clock format 12 hours',
      defaultValue: '1 3,18 6,23 * *',
      clockFormat: '12-hour-clock',
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '6,23',
      weekDaysSelect: 'day of the week',
      hoursSelect: '3AM,6PM',
      minutesSelect: '1',
    },
    {
      title: 'leading zero with AM and PM displayed with clock format 12 hours',
      defaultValue: '1 3,18 6,23 * *',
      leadingZero: true,
      clockFormat: '12-hour-clock',
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '06,23',
      weekDaysSelect: 'day of the week',
      hoursSelect: '03AM,06PM',
      minutesSelect: '01',
    },
    {
      title: 'that default period can be override when default value is empty',
      defaultValue: '',
      defaultPeriod: 'year',
      periodSelect: 'year',
      monthsSelect: 'every month',
      monthDaysSelect: 'every day of the month',
      weekDaysSelect: 'every day of the week',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'that default period is ignored when default value is not empty',
      defaultValue: '* * * * *',
      defaultPeriod: 'year',
      periodSelect: 'minute',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: undefined,
      minutesSelect: undefined,
    },
    {
      title:
        'that undefined for default value is considered like an empty string',
      defaultValue: undefined as unknown as string,
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title:
        'that an empty string is allowed for default value with allowEmpty always',
      defaultValue: '',
      allowEmpty: 'always',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title:
        'that en empty string is allowed for default value with allowEmpty for-default-value',
      defaultValue: '',
      allowEmpty: 'for-default-value',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title:
        'that an empty string is not allowed for default value with allowEmpty never',
      defaultValue: '',
      allowEmpty: 'never',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'wrong string value',
      defaultValue: 'wrong value',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'wrong number value',
      defaultValue: 200 as unknown as string,
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'all units values filled set year period',
      defaultValue: '1 2 3 4 5',
      periodSelect: 'year',
      monthsSelect: 'APR',
      monthDaysSelect: '3',
      weekDaysSelect: 'FRI',
      hoursSelect: '2',
      minutesSelect: '1',
    },
    {
      title: 'month days filled set month period',
      defaultValue: '* * 1 * *',
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '1',
      weekDaysSelect: 'day of the week',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'that a range is allowed when valid',
      defaultValue: '1 2 3-9/3 4 5',
      periodSelect: 'year',
      monthsSelect: 'APR',
      monthDaysSelect: '3-9/3',
      weekDaysSelect: 'FRI',
      hoursSelect: '2',
      minutesSelect: '1',
    },
    {
      title: 'that reboot shortcut is allowed when shortcuts is true',
      defaultValue: '@reboot',
      shortcuts: true,
      periodSelect: 'reboot',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: undefined,
      minutesSelect: undefined,
    },
    {
      title: 'that reboot shortcut is not allowed when shortcuts is false',
      defaultValue: '@reboot',
      shortcuts: false,
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'that monthly shortcut is allowed when shortcuts is true',
      defaultValue: '@monthly',
      expectedValue: '0 0 1 * *',
      shortcuts: true,
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '1',
      weekDaysSelect: 'day of the week',
      hoursSelect: '0',
      minutesSelect: '0',
    },
    {
      title:
        'that monthly shortcut is not allowed when shortcuts only accept reboot',
      defaultValue: '@monthly',
      shortcuts: ['@reboot'],
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'that monthly shortcut is allowed when shortcuts accept @monthly',
      defaultValue: '@monthly',
      expectedValue: '0 0 1 * *',
      shortcuts: ['@monthly'],
      periodSelect: 'month',
      monthsSelect: undefined,
      monthDaysSelect: '1',
      weekDaysSelect: 'day of the week',
      hoursSelect: '0',
      minutesSelect: '0',
    },
    {
      title: 'that a wrong shortcut is not allowed',
      defaultValue: '@wrongShortcut',
      shortcuts: ['@wrongShortcut'] as unknown as Shortcuts,
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: '7 for sunday converted to sunday',
      defaultValue: '* * * * 7',
      expectedValue: '* * * * 0',
      periodSelect: 'week',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: 'SUN',
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
    },
    {
      title: 'wrong range with double "/" throw an error',
      defaultValue: '2/2/2 * * * *',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'full week days definition set every',
      defaultValue: '* * * * 0,1,2,3,4,5,6',
      expectedValue: '* * * * *',
      periodSelect: 'minute',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: undefined,
      minutesSelect: undefined,
    },
    {
      title: 'that an out of range value too low is not allowed',
      defaultValue: '* * * * -1',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'that an out of range value too big is not allowed',
      defaultValue: '* * * * 200',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title:
        'that an out of range value too low for range first part is not allowed',
      defaultValue: '* * 0-3/4 * *',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title:
        'that a range first value greater than second value is not allowed',
      defaultValue: '* * * * 5-2',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'wrong range with more than one separator not allowed',
      defaultValue: '* * * * 5-2-2',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'wrong range first part not allowed',
      defaultValue: '* * * * error/2',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'wrong range second part not allowed',
      defaultValue: '* * * * 2/error',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: 'every hour',
      minutesSelect: 'every minute',
      error: defaultError,
    },
    {
      title: 'that dropdowns are not visible if not allowed',
      defaultValue: '1 1 1 1 1',
      expectedPeriod: 'year',
      allowedDropdowns: [],
      periodSelect: undefined,
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: undefined,
      minutesSelect: undefined,
    },
    {
      title: 'custom multiple ranges with one interval',
      defaultValue: '* 2-10,19-23/2 * * *',
      expectedValue: '* 2-10,19,21,23 * * *',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: '2-10,19,21,23',
      minutesSelect: 'every minute',
    },
    {
      title: 'custom multiple ranges with two intervals',
      defaultValue: '* 2-6/2,19-23/2 * * *',
      expectedValue: '* 2,4,6,19,21,23 * * *',
      periodSelect: 'day',
      monthsSelect: undefined,
      monthDaysSelect: undefined,
      weekDaysSelect: undefined,
      hoursSelect: '2,4,6,19,21,23',
      minutesSelect: 'every minute',
    },
  ]

  test.each(cases)(
    'should check $title',
    ({
      defaultValue,
      expectedValue,
      expectedPeriod,
      allowEmpty,
      shortcuts,
      humanizeLabels,
      humanizeValue,
      leadingZero,
      clockFormat,
      allowedDropdowns,
      defaultPeriod,
      periodSelect,
      monthsSelect,
      monthDaysSelect,
      weekDaysSelect,
      hoursSelect,
      minutesSelect,
      error,
    }) => {
      const setValue = jest.fn()
      const onError = jest.fn()

      render(
        <Cron
          value={defaultValue}
          setValue={setValue}
          onError={onError}
          allowEmpty={allowEmpty}
          shortcuts={shortcuts}
          humanizeLabels={humanizeLabels}
          humanizeValue={humanizeValue}
          leadingZero={leadingZero}
          clockFormat={clockFormat}
          allowedDropdowns={allowedDropdowns}
          defaultPeriod={defaultPeriod}
        />
      )

      //
      // Check error management

      if (error) {
        expect(onError).toHaveBeenLastCalledWith(error)
      } else {
        expect(onError).toHaveBeenLastCalledWith(undefined)
      }

      //
      // Check value after Cron component validation

      if (defaultValue && !error) {
        const valueToCheck = expectedValue || defaultValue
        const selectedPeriodToCheck = expectedPeriod || periodSelect

        expect(setValue).toHaveBeenLastCalledWith(valueToCheck, {
          selectedPeriod: selectedPeriodToCheck,
        })
      }

      //
      // Check period dropdown

      if (periodSelect) {
        expect(screen.getByTestId('select-period')).toBeVisible()
        expect(screen.getByTestId('select-period').textContent).toContain(
          periodSelect
        )
      } else {
        expect(screen.queryByTestId(/select-period/i)).toBeNull()
      }

      //
      // Check months dropdown

      if (monthsSelect) {
        expect(screen.queryByTestId('custom-select-months')).toBeVisible()
        expect(
          screen.getByTestId('custom-select-months').textContent
        ).toContain(monthsSelect)
      } else {
        expect(screen.queryByTestId(/custom-select-months/i)).toBeNull()
      }

      //
      // Check month days dropdown

      if (monthDaysSelect) {
        expect(screen.queryByTestId('custom-select-month-days')).toBeVisible()
        expect(
          screen.getByTestId('custom-select-month-days').textContent
        ).toContain(monthDaysSelect)
      } else {
        expect(screen.queryByTestId(/custom-select-month-days/i)).toBeNull()
      }

      //
      // Check week days dropdown

      if (weekDaysSelect) {
        expect(screen.queryByTestId('custom-select-week-days')).toBeVisible()
        expect(
          screen.getByTestId('custom-select-week-days').textContent
        ).toContain(weekDaysSelect)
      } else {
        expect(screen.queryByTestId(/custom-select-week-days/i)).toBeNull()
      }

      //
      // Check hours dropdown

      if (hoursSelect) {
        expect(screen.queryByTestId('custom-select-hours')).toBeVisible()
        expect(screen.getByTestId('custom-select-hours').textContent).toContain(
          hoursSelect
        )
      } else {
        expect(screen.queryByTestId(/custom-select-hours/i)).toBeNull()
      }

      //
      // Check minutes dropdown

      if (minutesSelect) {
        expect(screen.queryByTestId('custom-select-minutes')).toBeVisible()
        expect(
          screen.getByTestId('custom-select-minutes').textContent
        ).toContain(minutesSelect)
      } else {
        expect(screen.queryByTestId(/custom-select-minutes/i)).toBeNull()
      }
    }
  )
})
