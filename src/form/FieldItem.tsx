import React, { memo } from 'react';
import type { FieldItemProps } from '../@types/index';

import * as Component from './components';

const ComponentMap = {
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

interface IProps {
  fieldItem: FieldItemProps;
}

export default memo(
  function FieldItem({ fieldItem }: IProps) {
    const { format } = fieldItem;
    const FieldComponent = ComponentMap[format];

    return <>{FieldComponent ? <FieldComponent {...fieldItem} /> : null}</>;
  },
  (prevProps: IProps, nextProps: IProps) => {
    return prevProps === nextProps;
  },
);
