function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { cloneDeep, get, isArray } from 'lodash-es';

// 格式化 scheme 数据 TODO
export function schemaFormat(schema, newValue) {
  var _newSchema$properties;
  var result;
  if (newValue.type === 'object') {
    result = cloneDeep(newValue);
    return result;
  }
  var properties = {};
  var newSchema = cloneDeep(schema) || {};
  properties = (_newSchema$properties = newSchema === null || newSchema === void 0 ? void 0 : newSchema.properties) !== null && _newSchema$properties !== void 0 ? _newSchema$properties : {};
  var keys = Object.keys(newValue);
  keys.forEach(function (item) {
    var propItem = get(properties, item);
    var newPropItem = get(newValue, item);
    var props = _objectSpread(_objectSpread({}, propItem === null || propItem === void 0 ? void 0 : propItem.props), newPropItem === null || newPropItem === void 0 ? void 0 : newPropItem.props);
    properties[item] = _objectSpread(_objectSpread(_objectSpread({}, propItem), newPropItem), {}, {
      props: props
    });
    if (item === 'itemProps') {
      var itemProps = get(newSchema, item);
      newSchema[item] = _objectSpread(_objectSpread({}, itemProps), newPropItem);
    }
  });
  newSchema.properties = properties;
  return newSchema;
}
export function validateRule(fieldRules, fieldData) {
  var result = {
    isError: false,
    message: ''
  };
  fieldRules === null || fieldRules === void 0 ? void 0 : fieldRules.forEach(function (item) {
    if (item.required && !result.isError) {
      result.isError = isArray(fieldData) ? fieldData.reduce(function (prev, _item) {
        // eslint-disable-next-line no-param-reassign
        if (prev) prev = !_item && _item !== 0;
        return prev;
      }, true) : !fieldData && fieldData !== 0;
      result.message = item.message;
    }
    if (item.pattern && !result.isError) {
      result.isError = !item.pattern.test(fieldData);
      result.message = item.message;
    }
    if (item.validator && !result.isError) {
      result.isError = !item.validator(fieldData);
      result.message = item.message;
    }
  });
  return result;
}