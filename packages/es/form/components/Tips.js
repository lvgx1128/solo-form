import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
var _excluded = ["text"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
export default function Tips(_ref) {
  var text = _ref.text,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_Tooltip, _extends({
    title: text,
    placement: "bottom"
  }, restProps), restProps.children ? restProps.children : /*#__PURE__*/React.createElement("img", {
    width: 14,
    className: "solo-tips-icon",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA4hJREFUeF7tm+Fx3iAMhk0WazJG0xmaLpBck0sWaDpD0zHqLhZ6wob4swEh8wrju/pHfsT2B3oQL0LIZmhwPf/8fT28v19TU8aYT4sm3f+GYRjpj7X277I7D9++PGp3z2g1QEYba78Pw+CN3NWUtfaJXtSCAQWAMjpDaiQvQcKAAGhg+IYJeQYCRBWAIwxfkkBMj90AXl7f/tTO712iEHmpxhvEAOZRJ+O7u6wxNw9fP7sVpfQSAXj+8evRGEPK3u0l9YZiAGcw3o+KBEIRgDMZL4XAAjij8RIIWQBnNr4UQhKAktpPMb8xU3i7Umy/Z5j3C1Uh9EW8kFkdkgBeXt8sUOpHMlqyRM3eRxsnCIj7u9uordF/gl1/vL+7vdkLE9iXaD82AIAN0vYWEq+j+hQLlDQBVI382mNAofemTxcAUKSp86k5R/ec2FFyZMoXhERIbneHEuW1F1wAQAlfzvU5yLl3NbwgAOA6JhGx1OiXtpHa1Gh4QQAAopsVPoGHRfUDBYBykH5lWgKArPspFy4d/RDBRYIXIICgUQ6AtHO56ZByX6mHZX4HM1Az4H4BJGIIwTTiZMtNAwcA+KPJ5U/aRkxIkVPAL9UG6f4z8lRKShLTx0UQnJGiaaYBgHM99j5KSLmGqJ3uADCBEEQAl7mCrgDURJDcaCfuj0a6PO1siH2N2zlKRZRtcHqgDwCc8QpC7fk4ANB5VUg+PMYZr+2hhwI42ni3JdcmnPKIHow/VAMa7PtLZuNxIlibMyixjnvmsECoVaTXLYAeRn/ORT4Z9A6Lo+53YbHnWi/Jbgqgt8NnAkCe6AG0LHfRzveVjEHIXU4Zoammr2XZCyJnUGQoF4fAk6JVvWr4shdieFq8oQ01TW3T4o2nQTguX9QENCu+WsYh66MxdTHsIQhaxiGXh6MNxDB3aNpiY7YegM3xuHInskfmiokPpxcx79vWB+h6Qf8A5shQSwsOA5DSnlZFUmwKTNv9RUVS2tGhK3O/uhqpaqzFMpgrov5fKMmFU9quybVfc5/LO7qkaEkDZ4RQYnwxAKcJ4JPZEvB7nyk1XgTgLBAkxosBaK8Oe0fcv6f+ycyyg51Nid1VqUUimBoZguDc6LjviMRV6GtbqgD4HzvAG6oN932HAFiBgNX4RzwPZrgKgLVGgKYH3OhlP6EewGlFoP7xCf3F5/N0P3xCP+8ValcG7v1/rujhjyIhgjYAAAAASUVORK5CYII=",
    alt: ""
  }));
}