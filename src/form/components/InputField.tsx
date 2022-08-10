import React, { useState } from 'react';
import { Input } from 'antd';
import type { IFieldItem } from '@/@types';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import Tips from './Tips';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import { useDebounce } from '../hooks/useDebounce';
import 'antd/es/input/style'

const { TextArea } = Input;

export default function InputFiled({ ...fieldItem }: IFieldItem): JSX.Element {
  const { formData, ruleResult } = useStore();
  // 获取相关 useForm中方法 执行相关操作
  const { watch, setData, getFieldRules } = useAction();
  // 输入框相关属性 schema中获取
  const { label, fieldKey, props, format, bordered, isRequired, labelTips } = fieldItem;
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // useForm中 表单验证结果
  const fieldResult = ruleResult?.[fieldKey];
  // input 的value值
  const [val, setVal] = useState(fieldData);
  // field的校验规则
  const fieldRules = getFieldRules?.(fieldKey);


  useUpdateLayoutEffect(() => {
    setVal(fieldData);
  }, [fieldData]);

  useUpdateLayoutEffect(() => {
    setValidateResult(fieldResult);
  }, [fieldResult]);
  /**
   * input change事件
   */
  function changeHandle(value: string) {
    setVal(value);
    updateFormData();
    if (watch && watch[fieldKey]) watch[fieldKey](value);
    if (watch && watch['#']) watch['#'](value, fieldKey);
  }
  // 更新useForm数据
  const updateFormData = useDebounce(() => {
    setData?.({ [fieldKey]: val });
  }, 600)
  // 表单校验结果
  const [validateResult, setValidateResult] = useState<{
    isError?: boolean;
    message?: string;
  }>({});
  // 失去焦点时间
  function onBlur() {
    // 在form表单中失去焦点触发 表单校验
    const result = validateRule(fieldRules || [], val);
    if (validateResult.isError !== result.isError || validateResult.message !== result.message)
      setValidateResult(result);
    if (watch && watch[fieldKey]) watch[fieldKey](val);
    if (watch && watch['#']) watch['#'](val, fieldKey);
  }
  const formItemClass = classnames(
    'solo-form-item',
    { 'solo-form-item-border': bordered },
    { 'solo-form-item-disabled': props?.disabled },
    { 'solo-form-item-error-border': validateResult?.isError && bordered },
  );
  return (
    <div className={formItemClass}>
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
        {format === 'textarea' ? (
          <TextArea
            bordered={!bordered}
            className={classnames('full-width', { 'solo-border-error': validateResult?.isError })}
            {...props}
            onChange={(evt: any) => changeHandle(evt?.target?.value?.trim() ?? '')}
            value={val}
            onBlur={onBlur}
          />
        ) : (
          <Input
            className={classnames('full-width', { 'solo-border-error': validateResult?.isError })}
            bordered={!bordered}
            {...props}
            value={val}
            onChange={(value) => changeHandle(value.target.value)}
            onBlur={onBlur}
          />
        )}
      </div>
    </div>
  );
}
