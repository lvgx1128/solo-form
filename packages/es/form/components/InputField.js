function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/input/style";
import _Input from "antd/es/input";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import React, { useState } from 'react';
import classnames from 'classnames';
import { useAction, useStore } from "../hooks/context";
import { validateRule } from "../utils";
import Tips from "./Tips";
import { useUpdateLayoutEffect } from "../hooks/useUpdateLayoutEffect";
import { useDebounce } from "../hooks/useDebounce";
import 'antd/es/input/style';
var TextArea = _Input.TextArea;
export default function InputFiled(_ref) {
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
    format = fieldItem.format,
    bordered = fieldItem.bordered,
    isRequired = fieldItem.isRequired,
    labelTips = fieldItem.labelTips;
  // useForm中 formData 中field数据
  var fieldData = formData === null || formData === void 0 ? void 0 : formData[fieldKey];
  // useForm中 表单验证结果
  var fieldResult = ruleResult === null || ruleResult === void 0 ? void 0 : ruleResult[fieldKey];
  // input 的value值
  var _useState = useState(fieldData),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  // field的校验规则
  var fieldRules = getFieldRules === null || getFieldRules === void 0 ? void 0 : getFieldRules(fieldKey);
  useUpdateLayoutEffect(function () {
    setVal(fieldData);
  }, [fieldData]);
  // 表单校验结果
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    validateResult = _useState4[0],
    setValidateResult = _useState4[1];
  useUpdateLayoutEffect(function () {
    setValidateResult(fieldResult);
  }, [fieldResult]);
  // 更新useForm数据
  var updateFormData = useDebounce(function () {
    setData === null || setData === void 0 ? void 0 : setData(_defineProperty({}, fieldKey, val));
  }, 600);
  /**
   * input change事件
   */
  function changeHandle(value) {
    setVal(value);
    updateFormData();
    if (watch && watch[fieldKey]) watch[fieldKey](value);
    if (watch && watch['#']) watch['#'](value, fieldKey);
  }
  // 失去焦点时间
  function onBlur() {
    // 在form表单中失去焦点触发 表单校验
    var result = validateRule(fieldRules || [], val);
    if (validateResult.isError !== result.isError || validateResult.message !== result.message) setValidateResult(result);
    if (watch && watch[fieldKey]) watch[fieldKey](val);
    if (watch && watch['#']) watch['#'](val, fieldKey);
  }
  var formItemClass = classnames('solo-form-item', {
    'solo-form-item-small': (props === null || props === void 0 ? void 0 : props.size) === 'small'
  }, {
    'solo-form-item-border': bordered
  }, {
    'solo-form-item-disabled': props === null || props === void 0 ? void 0 : props.disabled
  }, {
    'solo-form-item-error-border': (validateResult === null || validateResult === void 0 ? void 0 : validateResult.isError) && bordered
  });
  return /*#__PURE__*/React.createElement("div", {
    className: formItemClass
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('label-title', {
      required: isRequired
    }),
    style: {
      width: fieldItem.labelWidth
    }
  }, /*#__PURE__*/React.createElement("span", null, label), labelTips ? /*#__PURE__*/React.createElement(Tips, {
    text: labelTips
  }) : null), validateResult !== null && validateResult !== void 0 && validateResult.isError && bordered ? /*#__PURE__*/React.createElement("div", {
    className: "error-message"
  }, " ", validateResult === null || validateResult === void 0 ? void 0 : validateResult.message, " ") : null, /*#__PURE__*/React.createElement("div", {
    className: classnames('flex-full', {
      'solo-form-item-error': (validateResult === null || validateResult === void 0 ? void 0 : validateResult.isError) && !bordered
    })
  }, validateResult !== null && validateResult !== void 0 && validateResult.isError && !bordered ? /*#__PURE__*/React.createElement("div", {
    className: "error-message"
  }, " ", validateResult === null || validateResult === void 0 ? void 0 : validateResult.message, " ") : null, format === 'textarea' ? /*#__PURE__*/React.createElement(TextArea, _extends({
    bordered: !bordered,
    className: classnames('full-width', {
      'solo-border-error': validateResult === null || validateResult === void 0 ? void 0 : validateResult.isError
    })
  }, props, {
    onChange: function onChange(evt) {
      var _evt$target$value$tri, _evt$target, _evt$target$value;
      return changeHandle((_evt$target$value$tri = evt === null || evt === void 0 ? void 0 : (_evt$target = evt.target) === null || _evt$target === void 0 ? void 0 : (_evt$target$value = _evt$target.value) === null || _evt$target$value === void 0 ? void 0 : _evt$target$value.trim()) !== null && _evt$target$value$tri !== void 0 ? _evt$target$value$tri : '');
    },
    value: val,
    onBlur: onBlur
  })) : /*#__PURE__*/React.createElement(_Input, _extends({
    className: classnames('full-width', {
      'solo-border-error': validateResult === null || validateResult === void 0 ? void 0 : validateResult.isError
    }),
    bordered: !bordered
  }, props, {
    value: val,
    onChange: function onChange(value) {
      return changeHandle(value.target.value);
    },
    onBlur: onBlur
  }))));
}