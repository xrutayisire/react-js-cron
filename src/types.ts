import { ButtonProps, SelectProps } from 'antd'
import { Dispatch, SetStateAction } from 'react'

// External props

export interface CronProps {
  /**
   * Cron value, the component is by design a controlled component.
   * The first value will be the default value.
   *
   * required
   */
  value: string

  /**
   * Set the cron value, similar to onChange.
   * The naming tells you that you have to set the value by yourself.
   *
   * required
   */
  setValue: SetValue

  /**
   * Set the container className and used as a prefix for other selectors.
   * Available selectors: https://xrutayisire.github.io/react-js-cron/?path=/story/reactjs-cron--custom-style
   */
  className?: string

  /**
   * Humanize the labels in the cron component, SUN-SAT and JAN-DEC.
   *
   * Default: true
   */
  humanizeLabels?: boolean

  /**
   * Humanize the value, SUN-SAT and JAN-DEC.
   *
   * Default: false
   */
  humanizeValue?: boolean

  /**
   * Add a "0" before numbers lower than 10.
   *
   * Default: false
   */
  leadingZero?: LeadingZero

  /**
   * Define the default period when the default value is empty.
   *
   * Default: 'day'
   */
  defaultPeriod?: PeriodType

  /**
   * Disable the cron component.
   *
   * Default: false
   */
  disabled?: boolean

  /**
   * Make the cron component read-only.
   *
   * Default: false
   */
  readOnly?: boolean

  /**
   * Show clear button for each dropdown.
   *
   * Default: true
   */
  allowClear?: boolean

  /**
   * Define if empty should trigger an error.
   *
   * Default: 'for-default-value'
   */
  allowEmpty?: AllowEmpty

  /**
   * Support cron shortcuts.
   *
   * Default: ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly']
   */
  shortcuts?: Shortcuts

  /**
   * Define the clock format.
   *
   * Default: undefined
   */
  clockFormat?: ClockFormat

  /**
   * Display the clear button.
   *
   * Default: true
   */
  clearButton?: boolean

  /**
   * antd button props to customize the clear button.
   */
  clearButtonProps?: ClearButtonProps

  /**
   * Define the clear button action.
   *
   * Default: 'fill-with-every'
   */
  clearButtonAction?: ClearButtonAction

  /**
   * Display error style (red border and background).
   *
   * Display: true
   */
  displayError?: boolean

  /**
   * Triggered when the cron component detects an error with the value.
   */
  onError?: OnError

  /**
   * Define if a double click on a dropdown option should automatically
   * select / unselect a periodicity.
   *
   * Default: true
   */
  periodicityOnDoubleClick?: boolean

  /**
   * Define if it's possible to select only one or multiple values for each dropdowns.
   *
   * Even in single mode, if you want to disable the double click on a dropdown option that
   * automatically select / unselect a periodicity, set 'periodicityOnDoubleClick'
   * prop at false.
   *
   * When single mode is active and 'periodicityOnDoubleClick' is false,
   * each dropdown will automatically close after selecting a value
   *
   * Default: 'multiple'
   */
  mode?: Mode

  /**
   * Define which dropdowns need to be displayed.
   *
   * Default: ['period', 'months', 'month-days', 'week-days', 'hours', 'minutes']
   */
  allowedDropdowns?: CronType[]

  /**
   * Define the list of periods available.
   *
   * Default: ['year', 'month', 'week', 'day', 'hour', 'minute', 'reboot']
   */
  allowedPeriods?: PeriodType[]

  /**
   * Define specific configuration that is used for each dropdown specifically.
   * Configuring a dropdown will override any global configuration for the same property.
   *
   * Configuration available:
   *
   * // See global configuration
   * // For 'months' and 'week-days'
   * humanizeLabels?: boolean
   *
   * // See global configuration
   * // For 'months' and 'week-days'
   * humanizeValue?: boolean
   *
   * // See global configuration
   * // For 'month-days', 'hours' and 'minutes'
   * leadingZero?: boolean
   *
   * // See global configuration
   * For 'period', 'months', 'month-days', 'week-days', 'hours' and 'minutes'
   * disabled?: boolean
   *
   * // See global configuration
   * For 'period', 'months', 'month-days', 'week-days', 'hours' and 'minutes'
   * readOnly?: boolean
   *
   * // See global configuration
   * // For 'period', 'months', 'month-days', 'week-days', 'hours' and 'minutes'
   * allowClear?: boolean
   *
   * // See global configuration
   * // For 'months', 'month-days', 'week-days', 'hours' and 'minutes'
   * periodicityOnDoubleClick?: boolean
   *
   * // See global configuration
   * // For 'months', 'month-days', 'week-days', 'hours' and 'minutes'
   * mode?: Mode
   *
   * // The function will receive one argument, an object with value and label.
   * // If the function returns true, the option will be included in the filtered set.
   * // Otherwise, it will be excluded.
   * // For 'months', 'month-days', 'week-days', 'hours' and 'minutes'
   * filterOption?: FilterOption
   *
   * Default: undefined
   */
  dropdownsConfig?: DropdownsConfig

  /**
   * Change the component language.
   * Can also be used to remove prefix and suffix.
   *
   * When setting 'humanizeLabels' you can change the language of the
   * alternative labels with 'altWeekDays' and 'altMonths'.
   *
   * The order of the 'locale' properties 'weekDays', 'months', 'altMonths'
   * and 'altWeekDays' is important! The index will be used as value.
   *
   * Default './src/locale.ts'
   */
  locale?: Locale

  /*
   * Define the container for the dropdowns.
   * By default, the dropdowns will be rendered in the body.
   * This is useful when you want to render the dropdowns in a specific
   * container, for example, when using a modal or a specific layout.
  */
  getPopupContainer?: () => HTMLElement
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
  rebootOption?: string
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
  clearButtonText?: string
  weekDays?: string[]
  months?: string[]
  altWeekDays?: string[]
  altMonths?: string[]
}
export type SetValueFunction = (
  value: string,
  extra: SetValueFunctionExtra
) => void
export interface SetValueFunctionExtra {
  selectedPeriod: PeriodType
}
export type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>
export type CronError =
  | {
      type: 'invalid_cron'
      description: string
    }
  | undefined
export type OnErrorFunction = (error: CronError) => void
export type OnError =
  | OnErrorFunction
  | Dispatch<SetStateAction<CronError>>
  | undefined
export interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {}
export type ClearButtonAction = 'empty' | 'fill-with-every'
export type PeriodType =
  | 'year'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'reboot'
export type AllowEmpty = 'always' | 'never' | 'for-default-value'
export type CronType =
  | 'period'
  | 'months'
  | 'month-days'
  | 'week-days'
  | 'hours'
  | 'minutes'
export type LeadingZeroType = 'month-days' | 'hours' | 'minutes'
export type LeadingZero = boolean | LeadingZeroType[]
export type ClockFormat = '24-hour-clock' | '12-hour-clock'
export type ShortcutsType =
  | '@yearly'
  | '@annually'
  | '@monthly'
  | '@weekly'
  | '@daily'
  | '@midnight'
  | '@hourly'
  | '@reboot'
export type Shortcuts = boolean | ShortcutsType[]
export type Mode = 'multiple' | 'single'
export type DropdownConfig = {
  humanizeLabels?: boolean
  humanizeValue?: boolean
  leadingZero?: boolean
  disabled?: boolean
  readOnly?: boolean
  allowClear?: boolean
  periodicityOnDoubleClick?: boolean
  mode?: Mode
  filterOption?: FilterOption
}
export type DropdownsConfig = {
  'period'?: Pick<DropdownConfig, 'disabled' | 'readOnly' | 'allowClear'>
  'months'?: Omit<DropdownConfig, 'leadingZero'>
  'month-days'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>
  'week-days'?: Omit<DropdownConfig, 'leadingZero'>
  'hours'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>
  'minutes'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>
}

// Internal props

export interface FieldProps {
  value?: number[]
  setValue: SetValueNumbersOrUndefined
  locale: Locale
  className?: string
  disabled: boolean
  readOnly: boolean
  period: PeriodType
  periodicityOnDoubleClick: boolean
  mode: Mode
  allowClear?: boolean
  filterOption?: FilterOption,
  getPopupContainer?: () => HTMLElement
}
export interface PeriodProps
  extends Omit<
    FieldProps,
    | 'value'
    | 'setValue'
    | 'period'
    | 'periodicityOnDoubleClick'
    | 'mode'
    | 'filterOption'
  > {
  value: PeriodType
  setValue: SetValuePeriod
  shortcuts: Shortcuts
  allowedPeriods: PeriodType[]
  getPopupContainer?: () => HTMLElement
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
  monthDays?: number[]
}
export interface HoursProps extends FieldProps {
  leadingZero: LeadingZero
  clockFormat?: ClockFormat
}
export interface MinutesProps extends FieldProps {
  leadingZero: LeadingZero
  clockFormat?: ClockFormat
}
export interface CustomSelectProps
  extends Omit<
    SelectProps<any>,
    | 'mode'
    | 'tokenSeparators'
    | 'virtual'
    | 'onClick'
    | 'onBlur'
    | 'tagRender'
    | 'dropdownRender'
    | 'showSearch'
    | 'suffixIcon'
    | 'onChange'
    | 'dropdownMatchSelectWidth'
    | 'options'
    | 'onSelect'
    | 'onDeselect'
    | 'filterOption'
  > {
  grid?: boolean
  setValue: SetValueNumbersOrUndefined
  optionsList?: string[]
  locale: Locale
  value?: number[]
  humanizeLabels?: boolean
  disabled: boolean
  readOnly: boolean
  leadingZero?: LeadingZero
  clockFormat?: ClockFormat
  period: PeriodType
  unit: Unit
  periodicityOnDoubleClick: boolean
  mode: Mode
  filterOption?: FilterOption
  getPopupContainer?: () => HTMLElement
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
  rebootOption: string
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
  clearButtonText: string
  weekDays: string[]
  months: string[]
  altWeekDays: string[]
  altMonths: string[]
}
export interface Classes {
  [key: string]: boolean
}
export interface ShortcutsValues {
  name: ShortcutsType
  value: string
}
export interface Unit {
  type: CronType
  min: number
  max: number
  total: number
  alt?: string[]
}
export interface Clicks {
  time: number
  value: number
}

export type FilterOption = ({
  value,
  label,
}: {
  value: string
  label: string
}) => boolean
