import { SelectProps } from 'antd/lib/select'
import { Dispatch, SetStateAction } from 'react'
import { ButtonProps } from 'antd/lib/button'

// External props

export interface CronProps {
  value: string
  setValue: SetValue
  className?: string
  clearButton?: boolean
  displayError?: boolean
  setError?: SetError
  clearButtonProps?: ClearButtonProps
  locale?: Locale
}
export interface Locale {
  everyText?: string
  emptyHours?: string
  emptyWeekDays?: string
  emptyMonthDays?: string
  emptyMonths?: string
  emptyMinutes?: string
  emptyMinutesWhenHoursPeriod?: string
  minuteOption?: string
  hourOption?: string
  dayOption?: string
  weekOption?: string
  monthOption?: string
  yearOption?: string
  prefixPeriod?: string
  prefixHours?: string
  prefixWeekDays?: string
  prefixMonthDays?: string
  prefixMonths?: string
  prefixMinutes?: string
  prefixMinutesWhenHoursPeriod?: string
  suffixMinutesWhenHoursPeriod?: string
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

// Internal props

export interface FieldProps {
  value?: number[]
  setValue: SetValueNumbersOrUndefined
  locale: Locale
  className?: string
}

export interface PeriodProps extends Omit<FieldProps, 'value' | 'setValue'> {
  value?: PeriodType
  setValue: SetValuePeriod
}
export interface MinutesProps extends FieldProps {
  period: PeriodType
}
export type PeriodType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute'
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
}
export type CronType =
  | 'period'
  | 'months'
  | 'month-days'
  | 'week-days'
  | 'hours'
  | 'minutes'
export type SetValueNumbersOrUndefined = Dispatch<
  SetStateAction<number[] | undefined>
>
export type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>
export type SetInternalError = Dispatch<SetStateAction<boolean>>
export interface DefaultLocale {
  everyText: string
  emptyHours: string
  emptyWeekDays: string
  emptyMonthDays: string
  emptyMonths: string
  emptyMinutes: string
  emptyMinutesWhenHoursPeriod: string
  minuteOption: string
  hourOption: string
  dayOption: string
  weekOption: string
  monthOption: string
  yearOption: string
  prefixPeriod: string
  prefixHours: string
  prefixWeekDays: string
  prefixMonthDays: string
  prefixMonths: string
  prefixMinutes: string
  prefixMinutesWhenHoursPeriod: string
  suffixMinutesWhenHoursPeriod: string
  errorInvalidCron: string
  weekDays: string[]
  months: string[]
}
export type CronValues = { [key in CronType]: number[] | string | undefined }
export interface Classes {
  [key: string]: boolean
}
