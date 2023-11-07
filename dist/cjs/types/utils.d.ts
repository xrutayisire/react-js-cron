import { Classes, Locale, OnError } from './types';
export declare function range(start: number, end: number): number[];
export declare function sort(array: number[]): number[];
export declare function dedup(array: number[]): number[];
export declare function classNames(classes: Classes): string;
export declare function setError(onError: OnError, locale: Locale): void;
export declare function usePrevious(value: any): any;
export declare function convertStringToNumber(str: string): number;
