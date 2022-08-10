import React, { useState } from 'react';
import { Radio } from 'antd';
import type { IFieldItem } from '@/@types/index';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';
import 'antd/es/radio/style'

const { Group } = Radio;

export default function RadioField({ ...fieldItem }: IFieldItem): JSX.Element {
  const { formData, ruleResult } = useStore();
  const { props, options = [], fieldKey, label, bordered, isRequired, labelTips } = fieldItem;
  const { setData, watch, getFieldRules } = useAction();
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // field的校验规则
  const fieldRules = getFieldRules?.(fieldKey);
  // 表单校验结果
  // 订阅field当前值
  const [val, setVal] = useState(fieldData);
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
  function changeHandle(evt: any) {
    const value = evt?.target?.value ?? '';
    setVal(value);
    setData?.({ [fieldKey]: value });
    if (watch && watch[fieldKey]) watch[fieldKey](value);
    if (watch && watch['#']) watch['#'](value, fieldKey);
    // 在form表单中失去change触发 表单校验
    const result = validateRule(fieldRules || [], value);
    if (validateResult.isError !== result.isError || validateResult.message !== result.message)
      setValidateResult(result);
  }
  const formItem = classnames(
    'solo-form-item',
    { 'solo-form-item-border': bordered },
    { 'solo-form-item-disabled': props?.disabled },
    { 'solo-form-item-error-border': validateResult?.isError && bordered },
  );
  return (
    <div className={formItem}>
      <div
        className={classnames('label-title', { required: isRequired })}
        style={{ width: fieldItem.labelWidth }}
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
        <Group
          value={val}
          className="ml-10 full-width"
          onChange={changeHandle}
          {...props}
          options={options}
        />
      </div>
    </div>
  );
}
