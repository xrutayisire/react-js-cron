import { SelectProps } from 'antd/lib/select';
import { Dispatch, SetStateAction } from 'react';
import { ButtonProps } from 'antd/lib/button';
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
    locale?: Locale;
    componentProps?: {
        year?: {
            mode?: Mode;
            allowClear?: boolean;
            unitFilter: UnitFilter;
        };
        month?: {
            mode?: Mode;
            allowClear?: boolean;
            unitFilter: UnitFilter;
        };
        week?: {
            mode?: Mode;
            allowClear?: boolean;
            unitFilter?: UnitFilter;
        };
        day?: {
            mode?: Mode;
            allowClear?: boolean;
            unitFilter?: UnitFilter;
        };
        hour?: {
            mode?: Mode;
            allowClear?: boolean;
            unitFilter?: UnitFilter;
        };
        minute?: {
            mode?: Mode;
            allowClear?: boolean;
            unitFilter?: UnitFilter;
        };
    };
}
export declare type UnitFilter = ({ value, label, }: {
    value: string;
    label: string;
}) => boolean;
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
export declare type SetValueFunction = (value: string, extra: SetValueFunctionExtra) => void;
export interface SetValueFunctionExtra {
    selectedPeriod: PeriodType;
}
export declare type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>;
export declare type CronError = {
    type: 'invalid_cron';
    description: string;
} | undefined;
export declare type OnErrorFunction = (error: CronError) => void;
export declare type OnError = OnErrorFunction | Dispatch<SetStateAction<CronError>> | undefined;
export interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {
}
export declare type ClearButtonAction = 'empty' | 'fill-with-every';
export declare type PeriodType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'reboot';
export declare type AllowEmpty = 'always' | 'never' | 'for-default-value';
export declare type CronType = 'period' | 'months' | 'month-days' | 'week-days' | 'hours' | 'minutes';
export declare type LeadingZeroType = 'month-days' | 'hours' | 'minutes';
export declare type LeadingZero = boolean | LeadingZeroType[];
export declare type ClockFormat = '24-hour-clock' | '12-hour-clock';
export declare type ShortcutsType = '@yearly' | '@annually' | '@monthly' | '@weekly' | '@daily' | '@midnight' | '@hourly' | '@reboot';
export declare type Shortcuts = boolean | ShortcutsType[];
export declare type Mode = 'multiple' | 'single';
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
    unitFilter?: UnitFilter;
}
export interface PeriodProps extends Omit<FieldProps, 'value' | 'setValue' | 'period' | 'periodicityOnDoubleClick' | 'mode'> {
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
export interface CustomSelectProps extends Omit<SelectProps<any>, 'mode' | 'tokenSeparators' | 'virtual' | 'onClick' | 'onBlur' | 'tagRender' | 'dropdownRender' | 'showSearch' | 'showArrow' | 'onChange' | 'dropdownMatchSelectWidth' | 'options' | 'onSelect' | 'onDeselect'> {
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
    unitFilter?: UnitFilter;
    periodicityOnDoubleClick: boolean;
    mode: Mode;
}
export declare type SetValueNumbersOrUndefined = Dispatch<SetStateAction<number[] | undefined>>;
export declare type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>;
export declare type SetInternalError = Dispatch<SetStateAction<boolean>>;
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
