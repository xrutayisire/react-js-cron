/// <reference types="react" />
import { ButtonProps, SelectProps } from 'antd';
import { Dispatch, SetStateAction, MutableRefObject } from 'react';

interface CronProps {
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
interface Locale {
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
type SetValueFunction = (value: string, extra: SetValueFunctionExtra) => void;
interface SetValueFunctionExtra {
    selectedPeriod: PeriodType;
}
type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>;
type CronError = {
    type: 'invalid_cron';
    description: string;
} | undefined;
type OnErrorFunction = (error: CronError) => void;
type OnError = OnErrorFunction | Dispatch<SetStateAction<CronError>> | undefined;
interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {
}
type ClearButtonAction = 'empty' | 'fill-with-every';
type PeriodType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'reboot';
type AllowEmpty = 'always' | 'never' | 'for-default-value';
type CronType = 'period' | 'months' | 'month-days' | 'week-days' | 'hours' | 'minutes';
type LeadingZeroType = 'month-days' | 'hours' | 'minutes';
type LeadingZero = boolean | LeadingZeroType[];
type ClockFormat = '24-hour-clock' | '12-hour-clock';
type ShortcutsType = '@yearly' | '@annually' | '@monthly' | '@weekly' | '@daily' | '@midnight' | '@hourly' | '@reboot';
type Shortcuts = boolean | ShortcutsType[];
type Mode = 'multiple' | 'single';
type DropdownConfig = {
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
type DropdownsConfig = {
    'period'?: Pick<DropdownConfig, 'disabled' | 'readOnly' | 'allowClear'>;
    'months'?: Omit<DropdownConfig, 'leadingZero'>;
    'month-days'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>;
    'week-days'?: Omit<DropdownConfig, 'leadingZero'>;
    'hours'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>;
    'minutes'?: Omit<DropdownConfig, 'humanizeLabels' | 'humanizeValue'>;
};
interface FieldProps {
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
interface PeriodProps extends Omit<FieldProps, 'value' | 'setValue' | 'period' | 'periodicityOnDoubleClick' | 'mode' | 'filterOption'> {
    value: PeriodType;
    setValue: SetValuePeriod;
    shortcuts: Shortcuts;
    allowedPeriods: PeriodType[];
}
interface MonthsProps extends FieldProps {
    humanizeLabels: boolean;
}
interface MonthDaysProps extends FieldProps {
    weekDays?: number[];
    leadingZero: LeadingZero;
}
interface WeekDaysProps extends FieldProps {
    humanizeLabels: boolean;
    monthDays?: number[];
}
interface HoursProps extends FieldProps {
    leadingZero: LeadingZero;
    clockFormat?: ClockFormat;
}
interface MinutesProps extends FieldProps {
    leadingZero: LeadingZero;
    clockFormat?: ClockFormat;
}
interface CustomSelectProps extends Omit<SelectProps<any>, 'mode' | 'tokenSeparators' | 'virtual' | 'onClick' | 'onBlur' | 'tagRender' | 'dropdownRender' | 'showSearch' | 'suffixIcon' | 'onChange' | 'dropdownMatchSelectWidth' | 'options' | 'onSelect' | 'onDeselect' | 'filterOption'> {
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
type SetValueNumbersOrUndefined = Dispatch<SetStateAction<number[] | undefined>>;
type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>;
type SetInternalError = Dispatch<SetStateAction<boolean>>;
interface DefaultLocale {
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
interface Classes {
    [key: string]: boolean;
}
interface ShortcutsValues {
    name: ShortcutsType;
    value: string;
}
interface Unit {
    type: CronType;
    min: number;
    max: number;
    total: number;
    alt?: string[];
}
interface Clicks {
    time: number;
    value: number;
}
type FilterOption = ({ value, label, }: {
    value: string;
    label: string;
}) => boolean;

declare function Cron(props: CronProps): JSX.Element;

declare function setValuesFromCronString(cronString: string, setInternalError: SetInternalError, onError: OnError, allowEmpty: AllowEmpty, internalValueRef: MutableRefObject<string>, firstRender: boolean, locale: Locale, shortcuts: Shortcuts, setMinutes: SetValueNumbersOrUndefined, setHours: SetValueNumbersOrUndefined, setMonthDays: SetValueNumbersOrUndefined, setMonths: SetValueNumbersOrUndefined, setWeekDays: SetValueNumbersOrUndefined, setPeriod: SetValuePeriod): void;
declare function getCronStringFromValues(period: PeriodType, months: number[] | undefined, monthDays: number[] | undefined, weekDays: number[] | undefined, hours: number[] | undefined, minutes: number[] | undefined, humanizeValue: boolean | undefined, dropdownsConfig: DropdownsConfig | undefined): string;
declare function partToString(cronPart: number[], unit: Unit, humanize?: boolean, leadingZero?: LeadingZero, clockFormat?: ClockFormat): string;
declare function formatValue(value: number, unit: Unit, humanize?: boolean, leadingZero?: LeadingZero, clockFormat?: ClockFormat): string;
declare function parsePartArray(arr: number[], unit: Unit): number[];

declare const converter_d_setValuesFromCronString: typeof setValuesFromCronString;
declare const converter_d_getCronStringFromValues: typeof getCronStringFromValues;
declare const converter_d_partToString: typeof partToString;
declare const converter_d_formatValue: typeof formatValue;
declare const converter_d_parsePartArray: typeof parsePartArray;
declare namespace converter_d {
  export {
    converter_d_setValuesFromCronString as setValuesFromCronString,
    converter_d_getCronStringFromValues as getCronStringFromValues,
    converter_d_partToString as partToString,
    converter_d_formatValue as formatValue,
    converter_d_parsePartArray as parsePartArray,
  };
}

export { AllowEmpty, Classes, ClearButtonAction, ClearButtonProps, Clicks, ClockFormat, Cron, CronError, CronProps, CronType, CustomSelectProps, DefaultLocale, DropdownConfig, DropdownsConfig, FieldProps, FilterOption, HoursProps, LeadingZero, LeadingZeroType, Locale, MinutesProps, Mode, MonthDaysProps, MonthsProps, OnError, OnErrorFunction, PeriodProps, PeriodType, SetInternalError, SetValue, SetValueFunction, SetValueFunctionExtra, SetValueNumbersOrUndefined, SetValuePeriod, Shortcuts, ShortcutsType, ShortcutsValues, Unit, WeekDaysProps, converter_d as converter, Cron as default };
