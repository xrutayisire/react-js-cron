"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNITS = exports.SUPPORTED_SHORTCUTS = void 0;
var SUPPORTED_SHORTCUTS = [{
  name: '@yearly',
  value: '0 0 1 1 *'
}, {
  name: '@annually',
  value: '0 0 1 1 *'
}, {
  name: '@monthly',
  value: '0 0 1 * *'
}, {
  name: '@weekly',
  value: '0 0 * * 0'
}, {
  name: '@daily',
  value: '0 0 * * *'
}, {
  name: '@midnight',
  value: '0 0 * * *'
}, {
  name: '@hourly',
  value: '0 * * * *'
}];
exports.SUPPORTED_SHORTCUTS = SUPPORTED_SHORTCUTS;
var UNITS = [{
  type: 'minutes',
  min: 0,
  max: 59,
  total: 60
}, {
  type: 'hours',
  min: 0,
  max: 23,
  total: 24
}, {
  type: 'month-days',
  min: 1,
  max: 31,
  total: 31
}, {
  type: 'months',
  min: 1,
  max: 12,
  total: 12,
  alt: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
}, {
  type: 'week-days',
  min: 0,
  max: 6,
  total: 7,
  alt: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
}];
exports.UNITS = UNITS;