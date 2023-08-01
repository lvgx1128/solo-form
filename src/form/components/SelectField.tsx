import React, { useState } from 'react';
import { Select } from 'antd';
import type { FieldItemProps } from '../../@types/index';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';
import 'antd/es/select/style';

type RawValue = string | number;
type LabeledValue = {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
};

export default function SelectField({
  ...fieldItem
}: FieldItemProps): JSX.Element {
  const { formData, ruleResult } = useStore();
  const {
    props,
    label,
    fieldKey,
    options = [],
    bordered,
    isRequired,
    labelTips,
  } = fieldItem;
  const { watch, setData, getFieldRules } = useAction();
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // 订阅field当前值
  const [val, setVal] = useState<
    RawValue | LabeledValue | RawValue[] | LabeledValue[]
  >(fieldData);
  // field的校验规则
  const fieldRules = getFieldRules?.(fieldKey);
  // useForm中 表单验证结果
  const fieldResult = ruleResult?.[fieldKey];
  // 表单校验结果
  const [validateResult, setValidateResult] = useState<{
    isError?: boolean;
    message?: string;
  }>({});

  useUpdateLayoutEffect(() => {
    setVal(fieldData);
  }, [fieldData]);

  useUpdateLayoutEffect(() => {
    setValidateResult(fieldResult);
  }, [fieldResult]);
  // change事件
  function changeHandle(value: any) {
    setVal(value);
    setData?.({ [fieldKey]: value });
    if (watch && watch[fieldKey]) watch[fieldKey](value);
    if (watch && watch['#']) watch['#'](value, fieldKey);
    // 在form表单中失去焦点触发 表单校验
    const result = validateRule(fieldRules || [], value);
    if (
      validateResult.isError !== result.isError ||
      validateResult.message !== result.message
    )
      setValidateResult(result);
  }
  const formItem = classnames(
    'solo-form-item',
    { 'solo-form-item-small': props?.size === 'small' },
    { 'solo-form-item-border': bordered },
    { 'solo-form-item-disabled': props?.disabled },
    { 'solo-form-item-error-border': validateResult?.isError && bordered },
  );
  return (
    <div className={formItem}>
      <div
        className={classnames('label-title', { required: isRequired })}
        style={{ width: fieldItem.labelWidth, textAlign: fieldItem.labelAlign }}
      >
        <span>{label}</span>
        {labelTips ? <Tips text={labelTips} /> : null}
      </div>
      {validateResult?.isError && bordered ? (
        <div className="error-message"> {validateResult?.message} </div>
      ) : null}
      <div
        className={classnames('flex-full', {
          'solo-form-item-error': validateResult?.isError && !bordered,
        })}
      >
        {validateResult?.isError && !bordered ? (
          <div className="error-message"> {validateResult?.message} </div>
        ) : null}
        <Select
          value={val}
          className={classnames('full-width', {
            'solo-border-error': validateResult?.isError,
          })}
          onChange={changeHandle}
          bordered={!bordered}
          options={options}
          {...props}
        />
      </div>
    </div>
  );
}
