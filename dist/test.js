var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = Test;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _tamagui = require("tamagui");
var _jsxRuntime = require("react/jsx-runtime");
var _sheet = _reactNative.StyleSheet.create({
  0: {
    flexDirection: "column",
    minWidth: 0,
    minHeight: 0,
    position: "relative",
    flexBasis: "auto",
    display: "flex",
    flexShrink: 0,
    alignItems: "stretch",
  },
  1: {
    flexDirection: "column",
    minWidth: 0,
    minHeight: 0,
    position: "relative",
    flexBasis: "auto",
    display: "flex",
    flexShrink: 0,
    alignItems: "stretch",
  },
  2: { marginBottom: 0 },
  3: { marginBottom: 12 },
});
function Test() {
  var values = new Array(10).fill(0).map(function (_, i) {
    return i;
  });
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [_sheet["0"]],
    children: values.map(function (v, idx) {
      return (0,
      _jsxRuntime.jsx)(_reactNative.View, { style: [_sheet["1"], idx !== values.length - 1 ? _sheet["2"] : _sheet["3"]], children: (0, _jsxRuntime.jsx)(_tamagui.Text, { children: v }) }, idx);
    }),
  });
}
