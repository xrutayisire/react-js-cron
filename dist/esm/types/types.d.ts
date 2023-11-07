import { ButtonProps, SelectProps } from 'antd';
import { Dispatch, SetStateAction } from 'react';
export interface CronProps {
    value: string;
    setValue: SetValue;
    className?: string;
    humanizeLabels?: boolean;
    humanizeValue?: boolean;
    leadingZero?: LeadingZero;
    defaultPeriod?: PeriodType;
    disabled?: boolean;
    readOnly?: boolean;
    allowClear?: boolean;
    allowEmpty?: AllowEmpty;
    shortcuts?: Shortcuts;
    clockFormat?: ClockFormat;
    clearButton?: boolean;
    clearButtonProps?: ClearButtonProps;
    clearButtonAction?: ClearButtonAction;
    displayError?: boolean;
    onError?: OnError;
    periodicityOnDoubleClick?: boolean;
    mode?: Mode;
    allowedDropdowns?: CronType[];
    allowedPeriods?: PeriodType[];
    dropdownsConfig?: DropdownsConfig;
    locale?: Locale;
}
export interface Locale {
    everyText?: string;
    emptyMonths?: string;
    emptyMonthDays?: string;
    emptyMonthDaysShort?: string;
    emptyWeekDays?: string;
    emptyWeekDaysShort?: string;
    emptyHours?: string;
    emptyMinutes?: string;
    emptyMinutesForHourPeriod?: string;
    yearOption?: string;
    monthOption?: string;
    weekOption?: string;
    dayOption?: string;
    hourOption?: string;
    minuteOption?: string;
    rebootOption?: string;
    prefixPeriod?: string;
    prefixMonths?: string;
    prefixMonthDays?: string;
    prefixWeekDays?: string;
    prefixWeekDaysForMonthAndYearPeriod?: string;
    prefixHours?: string;
    prefixMinutes?: string;
    prefixMinutesForHourPeriod?: string;
    suffixMinutesForHourPeriod?: string;
    errorInvalidCron?: string;
    clearButtonText?: string;
    weekDays?: string[];
    months?: string[];
    altWeekDays?: string[];
    altMonths?: string[];
}
export type SetValueFunction = (value: string, extra: SetValueFunctionExtra) => void;
export interface SetValueFunctionExtra {
    selectedPeriod: PeriodType;
}
export type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>;
export type CronError = {
    type: 'invalid_cron';
    description: string;
} | undefined;
export type OnErrorFunction = (error: CronError) => void;
export type OnError = OnErrorFunction | Dispatch<SetStateAction<CronError>> | undefined;
export interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {
}
export type ClearButtonAction = 'empty' | 'fill-with-every';
export type PeriodType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'reboot';
export type AllowEmpty = 'always' | 'never' | 'for-default-value';
export type CronType = 'period' | 'months' | 'month-days' | 'week-days' | 'hours' | 'minutes';
export type LeadingZeroType = 'month-days' | 'hours' | 'minutes';
export type LeadingZero = boolean | LeadingZeroType[];
export type ClockFormat = '24-hour-clock' | '12-hour-clock';
export type ShortcutsType = '@yearly' | '@annually' | '@monthly' | '@weekly' | '@daily' | '@midnight' | '@hourly' | '@reboot';
export type Shortcuts = boolean | ShortcutsType[];
export type Mode = 'multiple' | 'single';
export type DropdownConfig = {
    humanizeLabels?: boolean;
    humanizeValue?: boolean;
    leadingZero?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    allowClear?: boolean;
    periodicityOnDoubleClick?: boolean;
    mode?: Mode;
    filterOption?: FilterOption;
};
export type DropdownsConfig = {
    'period'?: Pick<DropdownConfig, 'disabled' | 'readOnly' | 'allowClear'>;
    'months'?: Omit<DropdownConfig, 'leadingZero'>;
    'month-days'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>;
    'week-days'?: Omit<DropdownConfig, 'leadingZero'>;
    'hours'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>;
    'minutes'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>;
};
export interface FieldProps {
    value?: number[];
    setValue: SetValueNumbersOrUndefined;
    locale: Locale;
    className?: string;
    disabled: boolean;
    readOnly: boolean;
    period: PeriodType;
    periodicityOnDoubleClick: boolean;
    mode: Mode;
    allowClear?: boolean;
    filterOption?: FilterOption;
}
export interface PeriodProps extends Omit<FieldProps, 'value' | 'setValue' | 'period' | 'periodicityOnDoubleClick' | 'mode' | 'filterOption'> {
    value: PeriodType;
    setValue: SetValuePeriod;
    shortcuts: Shortcuts;
    allowedPeriods: PeriodType[];
}
export interface MonthsProps extends FieldProps {
    humanizeLabels: boolean;
}
export interface MonthDaysProps extends FieldProps {
    weekDays?: number[];
    leadingZero: LeadingZero;
}
export interface WeekDaysProps extends FieldProps {
    humanizeLabels: boolean;
    monthDays?: number[];
}
export interface HoursProps extends FieldProps {
    leadingZero: LeadingZero;
    clockFormat?: ClockFormat;
}
export interface MinutesProps extends FieldProps {
    leadingZero: LeadingZero;
    clockFormat?: ClockFormat;
}
export interface CustomSelectProps extends Omit<SelectProps<any>, 'mode' | 'tokenSeparators' | 'virtual' | 'onClick' | 'onBlur' | 'tagRender' | 'dropdownRender' | 'showSearch' | 'suffixIcon' | 'onChange' | 'dropdownMatchSelectWidth' | 'options' | 'onSelect' | 'onDeselect' | 'filterOption'> {
    grid?: boolean;
    setValue: SetValueNumbersOrUndefined;
    optionsList?: string[];
    locale: Locale;
    value?: number[];
    humanizeLabels?: boolean;
    disabled: boolean;
    readOnly: boolean;
    leadingZero?: LeadingZero;
    clockFormat?: ClockFormat;
    period: PeriodType;
    unit: Unit;
    periodicityOnDoubleClick: boolean;
    mode: Mode;
    filterOption?: FilterOption;
}
export type SetValueNumbersOrUndefined = Dispatch<SetStateAction<number[] | undefined>>;
export type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>;
export type SetInternalError = Dispatch<SetStateAction<boolean>>;
export interface DefaultLocale {
    everyText: string;
    emptyMonths: string;
    emptyMonthDays: string;
    emptyMonthDaysShort: string;
    emptyWeekDays: string;
    emptyWeekDaysShort: string;
    emptyHours: string;
    emptyMinutes: string;
    emptyMinutesForHourPeriod: string;
    yearOption: string;
    monthOption: string;
    weekOption: string;
    dayOption: string;
    hourOption: string;
    minuteOption: string;
    rebootOption: string;
    prefixPeriod: string;
    prefixMonths: string;
    prefixMonthDays: string;
    prefixWeekDays: string;
    prefixWeekDaysForMonthAndYearPeriod: string;
    prefixHours: string;
    prefixMinutes: string;
    prefixMinutesForHourPeriod: string;
    suffixMinutesForHourPeriod: string;
    errorInvalidCron: string;
    clearButtonText: string;
    weekDays: string[];
    months: string[];
    altWeekDays: string[];
    altMonths: string[];
}
export interface Classes {
    [key: string]: boolean;
}
export interface ShortcutsValues {
    name: ShortcutsType;
    value: string;
}
export interface Unit {
    type: CronType;
    min: number;
    max: number;
    total: number;
    alt?: string[];
}
export interface Clicks {
    time: number;
    value: number;
}
export type FilterOption = ({ value, label, }: {
    value: string;
    label: string;
}) => boolean;
