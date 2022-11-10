import { Dispatch } from 'react';
export declare function useCronReducer(defaultValue: string): [
    {
        inputValue: string;
        cronValue: string;
    },
    Dispatch<{
        type: 'set_cron_value' | 'set_input_value' | 'set_values';
        value: string;
    }>
];
