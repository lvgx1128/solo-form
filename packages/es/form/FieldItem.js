import React, { memo } from 'react';
import * as Component from './components';
var ComponentMap = {
  input: Component.InputField,
  textarea: Component.InputField,
  select: Component.SelectField,
  radio: Component.RadioField,
  checkbox: Component.CheckField,
  datePicker: Component.DatePickerField,
  switch: Component.SwitchField,
  dateRange: Component.DateRangeField,
  rate: Component.RateField,
  custom: Component.CustomField,
};
export default /*#__PURE__*/ memo(
  function FieldItem(_ref) {
    var fieldItem = _ref.fieldItem;
    var format = fieldItem.format;
    var FieldComponent = ComponentMap[format];
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      FieldComponent
        ? /*#__PURE__*/ React.createElement(FieldComponent, fieldItem)
        : null,
    );
  },
  function (prevProps, nextProps) {
    return prevProps === nextProps;
  },
);
