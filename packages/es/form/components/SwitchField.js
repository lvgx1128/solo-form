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
import 'antd/es/switch/style';
import _Switch from 'antd/es/switch';
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r))
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError('Cannot destructure ' + obj);
}
import React, { useState } from 'react';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';
import 'antd/es/switch/style';
export default function SwitchField(_ref) {
  var fieldItem = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useStore = useStore(),
    formData = _useStore.formData;
  var props = fieldItem.props,
    fieldKey = fieldItem.fieldKey,
    label = fieldItem.label,
    bordered = fieldItem.bordered,
    labelTips = fieldItem.labelTips;
  var _useAction = useAction(),
    setData = _useAction.setData,
    watch = _useAction.watch;
  // useForm中 formData 中field数据
  var fieldData =
    formData === null || formData === void 0 ? void 0 : formData[fieldKey];
  // 订阅field当前值
  var _useState = useState(fieldData),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  useUpdateLayoutEffect(
    function () {
      setVal(fieldData);
    },
    [fieldData],
  );
  function changeHandle(checked) {
    setVal(checked);
    setData === null || setData === void 0
      ? void 0
      : setData(_defineProperty({}, fieldKey, checked));
    if (watch && watch[fieldKey]) watch[fieldKey](checked);
    if (watch && watch['#']) watch['#'](checked, fieldKey);
  }
  var formItem = classnames(
    'solo-form-item',
    {
      'solo-form-item-small':
        (props === null || props === void 0 ? void 0 : props.size) === 'small',
    },
    {
      'solo-form-item-border': bordered,
    },
    {
      'solo-form-item-disabled':
        props === null || props === void 0 ? void 0 : props.disabled,
    },
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: formItem,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classnames('label-title'),
        style: {
          width: fieldItem.labelWidth,
        },
      },
      /*#__PURE__*/ React.createElement('span', null, label),
      labelTips
        ? /*#__PURE__*/ React.createElement(Tips, {
            text: labelTips,
          })
        : null,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classnames('flex-full'),
      },
      /*#__PURE__*/ React.createElement(
        _Switch,
        _extends(
          {
            checked: val,
            className: 'ml-10',
            onChange: changeHandle,
          },
          props,
        ),
      ),
    ),
  );
}
