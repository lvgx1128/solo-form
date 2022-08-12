import React, { useState } from 'react';
import type { FieldItemProps, ActionProps } from '@/@types/index';
import dayjs from 'dayjs';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import DatePicker from './DatePicker';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';

export default function DatePickerField({ ...fieldItem }: FieldItemProps): JSX.Element {
  const { formData, ruleResult } = useStore();
  // 获取相关 useForm中方法 执行相关操作
  const { watch, setData, getFieldRules } = useAction();
  // 输入框相关属性 schema中获取
  const { label, fieldKey, props, bordered, isRequired, labelTips } = fieldItem;
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // input 的value值
  const [val, setVal] = useState(fieldData);
  // field的校验规则
  const fieldRules = getFieldRules?.(fieldKey);
  // useForm中 表单验证结果
  const fieldResult = ruleResult?.[fieldKey];

  const value = val ? dayjs(val) : undefined;

  // 表单校验结果
  const [validateResult, setValidateResult] = useState<{
    isError?: boolean;
    message?: string;
  }>({});

  useUpdateLayoutEffect(() => {
    setVal(fieldData ? dayjs(fieldData) : undefined);
  }, [fieldData]);

  useUpdateLayoutEffect(() => {
    setValidateResult(fieldResult);
  }, [fieldResult]);

  // change事件
  function changeHandle(date: any, dateString: any) {
    setVal(dateString ? dayjs(dateString) : null);
    setData?.({ [fieldKey]: dateString });
    if (watch && watch[fieldKey]) watch[fieldKey](dateString);
    if (watch && watch['#']) watch['#'](dateString, fieldKey);
    // 在form表单中失去change触发 表单校验
    const result = validateRule(fieldRules || [], dateString);
    if (validateResult.isError !== result.isError || validateResult.message !== result.message)
      setValidateResult(result);
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
        <DatePicker
          className={classnames('full-width', { 'solo-border-error': validateResult?.isError })}
          locale={zhCN}
          onChange={changeHandle}
          value={value}
          bordered={!bordered}
          {...props}
        />
      </div>
    </div>
  );
}
