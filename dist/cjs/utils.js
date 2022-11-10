"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNames = classNames;
exports.convertStringToNumber = convertStringToNumber;
exports.dedup = dedup;
exports.range = range;
exports.setError = setError;
exports.sort = sort;
exports.usePrevious = usePrevious;

var _react = require("react");

var _locale = require("./locale");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function range(start, end) {
  var array = [];

  for (var i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

function sort(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

function dedup(array) {
  var result = [];
  array.forEach(function (i) {
    if (result.indexOf(i) < 0) {
      result.push(i);
    }
  });
  return result;
}

function classNames(classes) {
  return Object.entries(classes).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return key && value;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        key = _ref4[0];

    return key;
  }).join(' ');
}

function setError(onError, locale) {
  onError && onError({
    type: 'invalid_cron',
    description: locale.errorInvalidCron || _locale.DEFAULT_LOCALE_EN.errorInvalidCron
  });
}

function usePrevious(value) {
  var ref = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function convertStringToNumber(str) {
  var parseIntValue = parseInt(str, 10);
  var numberValue = Number(str);
  return parseIntValue === numberValue ? numberValue : NaN;
}