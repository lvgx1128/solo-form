import React, { useState } from 'react';
import { set, isArray } from 'lodash-es';
import type { FieldItemProps } from '@/@types/index';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';

export default function CustomField({ ...fieldItem }: FieldItemProps): JSX.Element {
  const { formData, ruleResult } = useStore();
  const {
    props,
    fieldKey,
    label,
    bordered,
    isRequired,
    bind = ['start', 'end'],
    labelTips,
  } = fieldItem;
  const { setData, watch, getFieldRules } = useAction();
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // 订阅field当前值 atomFamily
  const [val, setVal] = useState(fieldData);

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
    const data: Record<string, any> = isArray(bind)
      ? value.reduce((prev: Record<string, any>, item: any, index: number) => {
          const key = bind[index];
          if (key) set(prev, key, item);
          return prev;
        }, {})
      : { [fieldKey]: value };

    setData?.(data);
    if (watch && watch[fieldKey]) watch[fieldKey](value);
    if (watch && watch['#']) watch['#'](value, fieldKey);
    // 在form表单中失去change触发 表单校验
    const result = validateRule(fieldRules || [], value);
    if (validateResult.isError !== result.isError || validateResult.message !== result.message)
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
        <fieldItem.widget
          value={val}
          className="ml-10 full-width"
          onChange={changeHandle}
          {...props}
        />
      </div>
    </div>
  );
}
