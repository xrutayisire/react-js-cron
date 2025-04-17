import { render } from '@testing-library/react'

import Hours from '../fields/Hours'
import Minutes from '../fields/Minutes'
import MonthDays from '../fields/MonthDays'
import Months from '../fields/Months'
import Period from '../fields/Period'
import WeekDays from '../fields/WeekDays'
import { DEFAULT_LOCALE_EN } from '../locale'

describe('Fields', () => {
  it('<Hours /> matches the original snapshot', () => {
    const { asFragment } = render(
      <Hours
        setValue={(value) => value}
        locale={DEFAULT_LOCALE_EN}
        mode='multiple'
        period='month'
        disabled={false}
        readOnly={false}
        periodicityOnDoubleClick
        leadingZero
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('<Minutes /> matches the original snapshot', () => {
    const { asFragment } = render(
      <Minutes
        setValue={(value) => value}
        locale={DEFAULT_LOCALE_EN}
        mode='multiple'
        period='month'
        disabled={false}
        readOnly={false}
        periodicityOnDoubleClick
        leadingZero
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('<MonthDays /> matches the original snapshot', () => {
    const { asFragment } = render(
      <MonthDays
        setValue={(value) => value}
        locale={DEFAULT_LOCALE_EN}
        mode='multiple'
        period='month'
        disabled={false}
        readOnly={false}
        periodicityOnDoubleClick
        leadingZero
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('<Months /> matches the original snapshot', () => {
    const { asFragment } = render(
      <Months
        setValue={(value) => value}
        locale={DEFAULT_LOCALE_EN}
        mode='multiple'
        period='year'
        disabled={false}
        readOnly={false}
        periodicityOnDoubleClick
        humanizeLabels
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('<Period /> matches the original snapshot', () => {
    const { asFragment } = render(
      <Period
        setValue={(value) => value}
        locale={DEFAULT_LOCALE_EN}
        disabled={false}
        readOnly={false}
        value='year'
        allowedPeriods={[
          'minute',
          'hour',
          'day',
          'week',
          'month',
          'year',
          'reboot',
        ]}
        shortcuts
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('<WeekDays /> matches the original snapshot', () => {
    const { asFragment } = render(
      <WeekDays
        setValue={(value) => value}
        locale={DEFAULT_LOCALE_EN}
        disabled={false}
        readOnly={false}
        mode='multiple'
        period='week'
        humanizeLabels
        periodicityOnDoubleClick
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
