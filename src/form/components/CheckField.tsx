import React, { useState } from 'react';
import { Checkbox } from 'antd';
import type { IFieldItem } from '@/@types/index';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import { isArray } from 'lodash-es';
import Tips from './Tips';
import 'antd/es/checkbox/style'

const { Group } = Checkbox;

export default function CheckField({ ...fieldItem }: IFieldItem): JSX.Element {
  const { formData, ruleResult } = useStore();
  const { props, options = [], fieldKey, label, bordered, isRequired, labelTips } = fieldItem;
  const { setData, watch, getFieldRules } = useAction();
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // 订阅field当前值 atomFamily
  const [val, setVal] = useState(isArray(fieldData) ? fieldData : [fieldData]);
  // 订阅field当前报错信息 atomFamily
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
    setVal(isArray(fieldData) ? fieldData : [fieldData]);
  }, [fieldData]);

  useUpdateLayoutEffect(() => {
    setValidateResult(fieldResult);
  }, [fieldResult]);

  function changeHandle(value: any) {
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
