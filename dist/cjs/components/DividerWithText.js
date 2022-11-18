"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DividerWithText = function DividerWithText(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null), _react["default"].createElement("span", null, children), _react["default"].createElement("div", null));
};
var _default = DividerWithText;
exports["default"] = _default;