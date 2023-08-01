function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
import React from 'react';
import classnames from 'classnames';
import { useStore, useAction } from './hooks/context';
import FieldItem from './FieldItem';
import { set } from 'lodash-es';
export default function FieldRender(_ref) {
  var _schema$properties, _schema$itemProps;
  var className = _ref.className;
  var _ref2 = useStore(),
    schema = _ref2.schema;
  var _ref3 = useAction(),
    setRules = _ref3.setRules;
  var flatten =
    (_schema$properties =
      schema === null || schema === void 0 ? void 0 : schema.properties) !==
      null && _schema$properties !== void 0
      ? _schema$properties
      : {};
  // 表单item上绑定的属性
  var itemProps =
    (_schema$itemProps =
      schema === null || schema === void 0 ? void 0 : schema.itemProps) !==
      null && _schema$itemProps !== void 0
      ? _schema$itemProps
      : {};
  var display =
    (itemProps === null || itemProps === void 0 ? void 0 : itemProps.display) ||
    'block';
  // 解析schema
  var formRules = {};
  var fieldList = Object.keys(flatten).reduce(function (prev, item) {
    var _rules$findIndex;
    var baseProps =
      (itemProps === null || itemProps === void 0 ? void 0 : itemProps.props) ||
      {};
    var fieldItem = _objectSpread(
      _objectSpread(_objectSpread({}, itemProps), flatten[item]),
      {},
      {
        fieldKey: item,
      },
    );
    if (fieldItem !== null && fieldItem !== void 0 && fieldItem.props) {
      fieldItem.props = _objectSpread(
        _objectSpread(
          {},
          fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.props,
        ),
        baseProps,
      );
    }
    var rules = fieldItem.rules;
    if (rules) set(formRules, fieldItem.fieldKey, rules);
    var index =
      (_rules$findIndex =
        rules === null || rules === void 0
          ? void 0
          : rules.findIndex(function (rule) {
              return rule === null || rule === void 0 ? void 0 : rule.required;
            })) !== null && _rules$findIndex !== void 0
        ? _rules$findIndex
        : -1;
    fieldItem.isRequired = index > -1;
    if (!fieldItem.hide) prev.push(fieldItem);
    return prev;
  }, []);
  setRules === null || setRules === void 0 ? void 0 : setRules(formRules);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classnames('solo-form-container', className),
    },
    fieldList.map(function (item) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          key: item.fieldKey,
          style: {
            width: item.width,
          },
          className: classnames(
            'solo-form-item-box',
            {
              'solo-form-item-textarea': item.format === 'textarea',
            },
            item.className,
            'solo-form-'.concat(
              (item === null || item === void 0 ? void 0 : item.display) ||
                display,
            ),
          ),
        },
        item &&
          /*#__PURE__*/ React.createElement(FieldItem, {
            fieldItem: item,
            key: item.fieldKey,
          }),
      );
    }),
  );
}
