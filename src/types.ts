import { SelectProps } from 'antd/lib/select'
import { Dispatch, SetStateAction } from 'react'
import { ButtonProps } from 'antd/lib/button'

// External props

export interface CronProps {
  value: string
  setValue: SetValue
  className?: string
  humanizeLabels?: boolean
  humanizeValue?: boolean
  leadingZero?: LeadingZero
  defaultPeriod?: PeriodType
  disabled?: boolean
  readOnly?: boolean
  allowEmpty?: AllowEmpty
  shortcuts?: boolean
  clockFormat?: ClockFormat
  clearButton?: boolean
  clearButtonProps?: ClearButtonProps
  displayError?: boolean
  setError?: SetError
  locale?: Locale
}
export interface Locale {
  everyText?: string
  emptyMonths?: string
  emptyMonthDays?: string
  emptyMonthDaysShort?: string
  emptyWeekDays?: string
  emptyWeekDaysShort?: string
  emptyHours?: string
  emptyMinutes?: string
  emptyMinutesForHourPeriod?: string
  yearOption?: string
  monthOption?: string
  weekOption?: string
  dayOption?: string
  hourOption?: string
  minuteOption?: string
  prefixPeriod?: string
  prefixMonths?: string
  prefixMonthDays?: string
  prefixWeekDays?: string
  prefixWeekDaysForMonthAndYearPeriod?: string
  prefixHours?: string
  prefixMinutes?: string
  prefixMinutesForHourPeriod?: string
  suffixMinutesForHourPeriod?: string
  errorInvalidCron?: string
  weekDays?: string[]
  months?: string[]
}
export type SetValueFunction = (value: string) => void
export type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>
export type CronError =
  | {
      type: 'invalid_cron'
      description: string
    }
  | undefined
export type SetErrorFunction = (error: CronError) => void
export type SetError =
  | SetErrorFunction
  | Dispatch<SetStateAction<CronError>>
  | undefined
export interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {}
export type PeriodType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute'
export type AllowEmpty = 'always' | 'never' | 'for-default-value'
export type CronType =
  | 'period'
  | 'months'
  | 'month-days'
  | 'week-days'
  | 'hours'
  | 'minutes'
export type LeadingZero =
  | 'never'
  | 'always'
  | Omit<CronType, 'period' | 'months' | 'week-days'>[]
export type ClockFormat = '24-hour-clock' | '12-hour-clock'

// Internal props

export interface FieldProps {
  value?: number[]
  setValue: SetValueNumbersOrUndefined
  locale: Locale
  className?: string
  disabled: boolean
  readOnly: boolean
}
export interface PeriodProps extends Omit<FieldProps, 'value' | 'setValue'> {
  value: PeriodType
  setValue: SetValuePeriod
}
export interface MonthsProps extends FieldProps {
  humanizeLabels: boolean
}
export interface MonthDaysProps extends FieldProps {
  weekDays?: number[]
  leadingZero: LeadingZero
}
export interface WeekDaysProps extends FieldProps {
  humanizeLabels: boolean
  period: PeriodType
  monthDays?: number[]
}
export interface HoursProps extends FieldProps {
  leadingZero: LeadingZero
  clockFormat?: ClockFormat
}
export interface MinutesProps extends FieldProps {
  period: PeriodType
  leadingZero: LeadingZero
  clockFormat?: ClockFormat
}
export interface CustomSelectProps
  extends Omit<
    SelectProps<any>,
    | 'mode'
    | 'tokenSeparators'
    | 'allowClear'
    | 'virtual'
    | 'onClick'
    | 'onBlur'
    | 'tagRender'
    | 'dropdownRender'
    | 'showSearch'
    | 'showArrow'
    | 'onChange'
    | 'dropdownMatchSelectWidth'
    | 'options'
    | 'onSelect'
    | 'onDeselect'
  > {
  nbOptions?: number
  grid?: boolean
  startAtZero?: boolean
  type: CronType
  setValue: SetValueNumbersOrUndefined
  optionsList?: string[]
  locale: Locale
  value?: number[]
  humanizeLabels?: boolean
  disabled: boolean
  readOnly: boolean
  leadingZero?: LeadingZero
  clockFormat?: ClockFormat
}
export type SetValueNumbersOrUndefined = Dispatch<
  SetStateAction<number[] | undefined>
>
export type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>
export type SetInternalError = Dispatch<SetStateAction<boolean>>
export interface DefaultLocale {
  everyText: string
  emptyMonths: string
  emptyMonthDays: string
  emptyMonthDaysShort: string
  emptyWeekDays: string
  emptyWeekDaysShort: string
  emptyHours: string
  emptyMinutes: string
  emptyMinutesForHourPeriod: string
  yearOption: string
  monthOption: string
  weekOption: string
  dayOption: string
  hourOption: string
  minuteOption: string
  prefixPeriod: string
  prefixMonths: string
  prefixMonthDays: string
  prefixWeekDays: string
  prefixWeekDaysForMonthAndYearPeriod: string
  prefixHours: string
  prefixMinutes: string
  prefixMinutesForHourPeriod: string
  suffixMinutesForHourPeriod: string
  errorInvalidCron: string
  weekDays: string[]
  months: string[]
}
export type CronValues = { [key in CronType]: number[] | string | undefined }
export interface Classes {
  [key: string]: boolean
}
