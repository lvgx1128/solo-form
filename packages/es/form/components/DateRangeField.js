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
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import DatePicker from './DatePicker';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import { isArray } from 'lodash-es';
import Tips from './Tips';
var RangePicker = DatePicker.RangePicker;
export default function DateRangeField(_ref) {
  var _props$format, _props$format2;
  var fieldItem = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useStore = useStore(),
    formData = _useStore.formData,
    ruleResult = _useStore.ruleResult;
  // 获取相关 useForm中方法 执行相关操作
  var _useAction = useAction(),
    watch = _useAction.watch,
    setData = _useAction.setData,
    getFieldRules = _useAction.getFieldRules;
  // 输入框相关属性 schema中获取
  var label = fieldItem.label,
    fieldKey = fieldItem.fieldKey,
    props = fieldItem.props,
    bordered = fieldItem.bordered,
    isRequired = fieldItem.isRequired,
    _fieldItem$bind = fieldItem.bind,
    bind = _fieldItem$bind === void 0 ? ['start', 'end'] : _fieldItem$bind,
    labelTips = fieldItem.labelTips;
  var isHasHour =
    (props === null || props === void 0
      ? void 0
      : (_props$format = props.format) === null || _props$format === void 0
      ? void 0
      : _props$format.indexOf('H')) >= 0 ||
    (props === null || props === void 0
      ? void 0
      : (_props$format2 = props.format) === null || _props$format2 === void 0
      ? void 0
      : _props$format2.indexOf('h')) >= 0;
  // useForm中 formData 中field数据
  var fieldData =
    formData === null || formData === void 0 ? void 0 : formData[fieldKey];
  // input 的value值
  var _useState = useState(fieldData),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  // field的校验规则
  var fieldRules =
    getFieldRules === null || getFieldRules === void 0
      ? void 0
      : getFieldRules(fieldKey);
  // useForm中 表单验证结果
  var fieldResult =
    ruleResult === null || ruleResult === void 0
      ? void 0
      : ruleResult[fieldKey];
  var value = [];
  if (isArray(val))
    val === null || val === void 0
      ? void 0
      : val.forEach(function (item) {
          value.push(item);
        });
  useEffect(function () {
    if (
      !bind ||
      (bind === null || bind === void 0 ? void 0 : bind.length) < 2
    ) {
      console.error(
        'Warning: schema '.concat(
          label,
          '\u7EC4\u4EF6 bind \u503C\u6709\u8BEF',
        ),
      );
    }
  }, []);

  // 表单校验结果
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    validateResult = _useState4[0],
    setValidateResult = _useState4[1];
  useUpdateLayoutEffect(
    function () {
      // 时间处理
      var start = fieldData[bind[0]]
        ? !isHasHour
          ? ''.concat(fieldData[bind[0]], ' 00:00:00')
          : fieldData[bind[0]]
        : undefined;
      var end = fieldData[bind[1]]
        ? !isHasHour
          ? ''.concat(fieldData[bind[1]], ' 23:59:59')
          : fieldData[bind[1]]
        : undefined;
      var dateFormats = [start ? dayjs(start) : '', end ? dayjs(end) : ''];
      setVal(dateFormats);
    },
    [fieldData],
  );
  useUpdateLayoutEffect(
    function () {
      setValidateResult(fieldResult);
    },
    [fieldResult],
  );

  // change事件
  function changeHandle(date, dateStrings) {
    var _data;
    // 时间处理
    var start = dateStrings[0]
      ? !isHasHour
        ? ''.concat(dateStrings[0], ' 00:00:00')
        : dateStrings[0]
      : undefined;
    var end = dateStrings[1]
      ? !isHasHour
        ? ''.concat(dateStrings[1], ' 23:59:59')
        : dateStrings[1]
      : undefined;
    var dateFormats = [start ? dayjs(start) : '', end ? dayjs(end) : ''];
    setVal(dateFormats);
    var data =
      ((_data = {}),
      _defineProperty(
        _data,
        (bind === null || bind === void 0 ? void 0 : bind[0]) || 'start',
        start,
      ),
      _defineProperty(
        _data,
        (bind === null || bind === void 0 ? void 0 : bind[1]) || 'end',
        end,
      ),
      _data);
    setData === null || setData === void 0 ? void 0 : setData(data);
    if (watch && watch[fieldKey]) watch[fieldKey](data);
    if (watch && watch['#']) watch['#'](data, fieldKey);
    // 在form表单中失去change触发 表单校验
    var result = validateRule(fieldRules || [], dateFormats);
    if (
      validateResult.isError !== result.isError ||
      validateResult.message !== result.message
    )
      setValidateResult(result);
  }
  var formItemClass = classnames(
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
    {
      'solo-form-item-error-border':
        (validateResult === null || validateResult === void 0
          ? void 0
          : validateResult.isError) && bordered,
    },
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: formItemClass,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classnames('label-title', {
          required: isRequired,
        }),
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
    validateResult !== null &&
      validateResult !== void 0 &&
      validateResult.isError &&
      bordered
      ? /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'error-message',
          },
          ' ',
          validateResult === null || validateResult === void 0
            ? void 0
            : validateResult.message,
          ' ',
        )
      : null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classnames('flex-full', {
          'solo-form-item-error':
            (validateResult === null || validateResult === void 0
              ? void 0
              : validateResult.isError) && !bordered,
        }),
      },
      validateResult !== null &&
        validateResult !== void 0 &&
        validateResult.isError &&
        !bordered
        ? /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'error-message',
            },
            ' ',
            validateResult === null || validateResult === void 0
              ? void 0
              : validateResult.message,
            ' ',
          )
        : null,
      /*#__PURE__*/ React.createElement(
        RangePicker,
        _extends(
          {
            className: classnames('full-width', {
              'solo-border-error':
                validateResult === null || validateResult === void 0
                  ? void 0
                  : validateResult.isError,
            }),
            locale: zhCN,
            onChange: changeHandle,
            value: val,
            bordered: !bordered,
          },
          props,
        ),
      ),
    ),
  );
}
