import { ShortcutsValues } from './types'

export const HUMANIZED_WEEK_DAYS_LABELS = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
  'SUN',
]
export const HUMANIZED_MONTHS_LABELS = [
  '',
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]
export const SUPPORTED_SHORTCUTS: ShortcutsValues[] = [
  {
    name: '@yearly',
    value: '0 0 1 1 *',
  },
  {
    name: '@annually',
    value: '0 0 1 1 *',
  },
  {
    name: '@monthly',
    value: '0 0 1 * *',
  },
  {
    name: '@weekly',
    value: '0 0 * * 0',
  },
  {
    name: '@daily',
    value: '0 0 * * *',
  },
  {
    name: '@midnight',
    value: '0 0 * * *',
  },
  {
    name: '@hourly',
    value: '0 * * * *',
  },
]
