import { MutableRefObject } from 'react'

import { getCronStringFromValues, setValuesFromCronString } from './converter'
import { AllowEmpty, PeriodType, Shortcuts } from './types'

describe('converter setValuesFromCronString function test suite', () => {
  const testCases: {
    cronString: string
    allowEmpty: AllowEmpty
    firstRender: boolean
    shortcuts: Shortcuts
    error: boolean
    expectedNbCallsSetMinutes: number
    expectedParamSetMinutes: number[] | undefined
    expectedNbCallsSetHours: number
    expectedParamSetHours: number[] | undefined
    expectedNbCallsSetMonthDays: number
    expectedParamSetMonthDays: number[] | undefined
    expectedNbCallsSetMonths: number
    expectedParamSetMonths: number[] | undefined
    expectedNbCallsSetWeekDays: number
    expectedParamSetWeekDays: number[] | undefined
    expectedNbCallsSetPeriod: number
    expectedParamSetPeriod: PeriodType | undefined
  }[] = [
    {
      cronString: '40 * * * *',
      allowEmpty: 'for-default-value',
      firstRender: false,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 1,
      expectedParamSetMinutes: [40],
      expectedNbCallsSetHours: 1,
      expectedParamSetHours: [],
      expectedNbCallsSetMonthDays: 1,
      expectedParamSetMonthDays: [],
      expectedNbCallsSetMonths: 1,
      expectedParamSetMonths: [],
      expectedNbCallsSetWeekDays: 1,
      expectedParamSetWeekDays: [],
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'hour',
    },
    {
      cronString: '2,5,8,40 * * * *',
      allowEmpty: 'for-default-value',
      firstRender: false,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 1,
      expectedParamSetMinutes: [2, 5, 8, 40],
      expectedNbCallsSetHours: 1,
      expectedParamSetHours: [],
      expectedNbCallsSetMonthDays: 1,
      expectedParamSetMonthDays: [],
      expectedNbCallsSetMonths: 1,
      expectedParamSetMonths: [],
      expectedNbCallsSetWeekDays: 1,
      expectedParamSetWeekDays: [],
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'hour',
    },
    {
      cronString: '3 2 * * *',
      allowEmpty: 'for-default-value',
      firstRender: false,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 1,
      expectedParamSetMinutes: [3],
      expectedNbCallsSetHours: 1,
      expectedParamSetHours: [2],
      expectedNbCallsSetMonthDays: 1,
      expectedParamSetMonthDays: [],
      expectedNbCallsSetMonths: 1,
      expectedParamSetMonths: [],
      expectedNbCallsSetWeekDays: 1,
      expectedParamSetWeekDays: [],
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'day',
    },
    {
      cronString: '',
      allowEmpty: 'always',
      firstRender: true,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '',
      allowEmpty: 'for-default-value',
      firstRender: true,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '',
      allowEmpty: 'for-default-value',
      firstRender: false,
      shortcuts: false,
      error: true,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '',
      allowEmpty: 'never',
      firstRender: true,
      shortcuts: false,
      error: true,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: 'wrong value',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: false,
      error: true,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '1 2 3 4 5',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: false,
      error: false,
      expectedNbCallsSetMinutes: 1,
      expectedParamSetMinutes: [1],
      expectedNbCallsSetHours: 1,
      expectedParamSetHours: [2],
      expectedNbCallsSetMonthDays: 1,
      expectedParamSetMonthDays: [3],
      expectedNbCallsSetMonths: 1,
      expectedParamSetMonths: [4],
      expectedNbCallsSetWeekDays: 1,
      expectedParamSetWeekDays: [5],
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'year',
    },
    {
      cronString: '@reboot',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: true,
      error: false,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'reboot',
    },
    {
      cronString: '@reboot',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: false,
      error: true,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '@monthly',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: true,
      error: false,
      expectedNbCallsSetMinutes: 1,
      expectedParamSetMinutes: [0],
      expectedNbCallsSetHours: 1,
      expectedParamSetHours: [0],
      expectedNbCallsSetMonthDays: 1,
      expectedParamSetMonthDays: [1],
      expectedNbCallsSetMonths: 1,
      expectedParamSetMonths: [],
      expectedNbCallsSetWeekDays: 1,
      expectedParamSetWeekDays: [],
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'month',
    },
    {
      cronString: '@monthly',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: ['@reboot'],
      error: true,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
    {
      cronString: '@monthly',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: ['@monthly'],
      error: false,
      expectedNbCallsSetMinutes: 1,
      expectedParamSetMinutes: [0],
      expectedNbCallsSetHours: 1,
      expectedParamSetHours: [0],
      expectedNbCallsSetMonthDays: 1,
      expectedParamSetMonthDays: [1],
      expectedNbCallsSetMonths: 1,
      expectedParamSetMonths: [],
      expectedNbCallsSetWeekDays: 1,
      expectedParamSetWeekDays: [],
      expectedNbCallsSetPeriod: 1,
      expectedParamSetPeriod: 'month',
    },
    {
      cronString: '@wrongShortcut',
      allowEmpty: 'always',
      firstRender: false,
      shortcuts: ['@wrongShortcut'] as unknown as Shortcuts,
      error: true,
      expectedNbCallsSetMinutes: 0,
      expectedParamSetMinutes: undefined,
      expectedNbCallsSetHours: 0,
      expectedParamSetHours: undefined,
      expectedNbCallsSetMonthDays: 0,
      expectedParamSetMonthDays: undefined,
      expectedNbCallsSetMonths: 0,
      expectedParamSetMonths: undefined,
      expectedNbCallsSetWeekDays: 0,
      expectedParamSetWeekDays: undefined,
      expectedNbCallsSetPeriod: 0,
      expectedParamSetPeriod: undefined,
    },
  ]

  testCases.forEach(
    ({
      cronString,
      allowEmpty,
      firstRender,
      shortcuts,
      error,
      expectedParamSetMinutes,
      expectedParamSetHours,
      expectedParamSetMonthDays,
      expectedParamSetMonths,
      expectedParamSetWeekDays,
      expectedParamSetPeriod,
      expectedNbCallsSetHours,
      expectedNbCallsSetMinutes,
      expectedNbCallsSetMonthDays,
      expectedNbCallsSetMonths,
      expectedNbCallsSetPeriod,
      expectedNbCallsSetWeekDays,
    }) => {
      it(`should check values from cron string "${cronString}" with allowEmpty ${allowEmpty} ${
        firstRender ? 'and first render' : ''
      }`, () => {
        const setInternalError = jest.fn()
        const onError = jest.fn()
        const internalValueRef: MutableRefObject<string> = {
          current: '',
        }
        const locale = {}
        const setMinutes = jest.fn()
        const setHours = jest.fn()
        const setMonthDays = jest.fn()
        const setMonths = jest.fn()
        const setWeekDays = jest.fn()
        const setPeriod = jest.fn()

        setValuesFromCronString(
          cronString,
          setInternalError,
          onError,
          allowEmpty,
          internalValueRef,
          firstRender,
          locale,
          shortcuts,
          setMinutes,
          setHours,
          setMonthDays,
          setMonths,
          setWeekDays,
          setPeriod
        )

        //
        // Error check

        expect(onError).toHaveBeenCalledTimes(error ? 2 : 1)
        expect(onError).toHaveBeenCalledWith(
          error
            ? {
                type: 'invalid_cron',
                description: 'Invalid cron expression',
              }
            : undefined
        )

        expect(setInternalError).toHaveBeenCalledTimes(error ? 2 : 1)
        expect(setInternalError).toHaveBeenCalledWith(error)

        //
        // Values setter check

        expect(setMinutes).toHaveBeenCalledTimes(expectedNbCallsSetMinutes)
        if (expectedParamSetMinutes) {
          expect(setMinutes).toHaveBeenCalledWith(expectedParamSetMinutes)
        }

        expect(setHours).toHaveBeenCalledTimes(expectedNbCallsSetHours)
        if (expectedParamSetHours) {
          expect(setHours).toHaveBeenCalledWith(expectedParamSetHours)
        }

        expect(setMonthDays).toHaveBeenCalledTimes(expectedNbCallsSetMonthDays)
        if (expectedParamSetMonthDays) {
          expect(setMonthDays).toHaveBeenCalledWith(expectedParamSetMonthDays)
        }

        expect(setMonths).toHaveBeenCalledTimes(expectedNbCallsSetMonths)
        if (expectedParamSetMonths) {
          expect(setMonths).toHaveBeenCalledWith(expectedParamSetMonths)
        }

        expect(setWeekDays).toHaveBeenCalledTimes(expectedNbCallsSetWeekDays)
        if (expectedParamSetWeekDays) {
          expect(setWeekDays).toHaveBeenCalledWith(expectedParamSetWeekDays)
        }

        expect(setPeriod).toHaveBeenCalledTimes(expectedNbCallsSetPeriod)
        if (expectedParamSetPeriod) {
          expect(setPeriod).toHaveBeenCalledWith(expectedParamSetPeriod)
        }
      })
    }
  )
})

describe('converter getCronStringFromValues function test suite', () => {
  const testCases: {
    period: PeriodType
    months: number[] | undefined
    monthDays: number[] | undefined
    weekDays: number[] | undefined
    hours: number[] | undefined
    minutes: number[] | undefined
    humanizeValue: boolean
    expectedValue: string
  }[] = [
    {
      period: 'year',
      minutes: [1],
      hours: [2],
      monthDays: [3],
      months: [4],
      weekDays: [5],
      humanizeValue: false,
      expectedValue: '1 2 3 4 5',
    },
    {
      period: 'day',
      minutes: [1],
      hours: [2],
      monthDays: [3],
      months: [4],
      weekDays: [5],
      humanizeValue: false,
      expectedValue: '1 2 * * *',
    },
    {
      period: 'day',
      minutes: [1],
      hours: [],
      monthDays: [],
      months: [],
      weekDays: [],
      humanizeValue: false,
      expectedValue: '1 * * * *',
    },
    {
      period: 'year',
      minutes: [1],
      hours: [2],
      monthDays: [3],
      months: [7, 3, 10],
      weekDays: [5],
      humanizeValue: false,
      expectedValue: '1 2 3 3,7,10 5',
    },
    {
      period: 'year',
      minutes: [1],
      hours: [2],
      monthDays: [3],
      months: [7, 3, 10],
      weekDays: [5],
      humanizeValue: true,
      expectedValue: '1 2 3 MAR,JUL,OCT FRI',
    },
    {
      period: 'reboot',
      minutes: [],
      hours: [],
      monthDays: [],
      months: [],
      weekDays: [],
      humanizeValue: false,
      expectedValue: '@reboot',
    },
    {
      period: 'month',
      minutes: undefined,
      hours: undefined,
      monthDays: [3],
      months: [7, 3, 10],
      weekDays: [5],
      humanizeValue: false,
      expectedValue: '* * 3 * 5',
    },
    {
      period: 'year',
      minutes: undefined,
      hours: undefined,
      monthDays: undefined,
      months: undefined,
      weekDays: undefined,
      humanizeValue: false,
      expectedValue: '* * * * *',
    },
    {
      period: 'year',
      minutes: [0],
      hours: [1],
      monthDays: [1],
      months: [5],
      weekDays: [0, 2, 4, 6],
      humanizeValue: false,
      expectedValue: '0 1 1 5 */2',
    },
  ]

  testCases.forEach(
    (
      {
        period,
        hours,
        humanizeValue,
        minutes,
        monthDays,
        months,
        weekDays,
        expectedValue,
      },
      index
    ) => {
      it(`should check cron string from values ${index}`, () => {
        expect(
          getCronStringFromValues(
            period,
            months,
            monthDays,
            weekDays,
            hours,
            minutes,
            humanizeValue
          )
        ).toEqual(expectedValue)
      })
    }
  )
})
