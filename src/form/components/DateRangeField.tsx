import React, { useState, useEffect } from 'react';
import type { IFieldItem } from '@/@types/index';
import dayjs from 'dayjs';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import DatePicker from './DatePicker';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { validateRule } from '../utils';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import { isArray } from 'lodash-es';
import Tips from './Tips';

const { RangePicker } = DatePicker;

export default function DateRangeField({ ...fieldItem }: IFieldItem): JSX.Element {
  const { formData, ruleResult } = useStore();
  // 获取相关 useForm中方法 执行相关操作
  const { watch, setData, getFieldRules } = useAction();
  // 输入框相关属性 schema中获取
  const {
    label,
    fieldKey,
    props,
    bordered,
    isRequired,
    bind = ['start', 'end'],
    labelTips,
  } = fieldItem;
  const isHasHour = props?.format?.indexOf('H') >= 0 || props?.format?.indexOf('h') >= 0;
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];
  // input 的value值
  const [val, setVal] = useState(fieldData);
  // field的校验规则
  const fieldRules = getFieldRules?.(fieldKey);
  // useForm中 表单验证结果
  const fieldResult = ruleResult?.[fieldKey];

  const value: any = [];
  if (isArray(val))
    val?.forEach((item: any) => {
      value.push(item);
    });
  useEffect(() => {
    if (!bind || bind?.length < 2) {
      console.error(`Warning: schema ${label}组件 bind 值有误`);
    }
  }, []);

  // 表单校验结果
  const [validateResult, setValidateResult] = useState<{
    isError?: boolean;
    message?: string;
  }>({});

  useUpdateLayoutEffect(() => {
    // 时间处理
    const start = fieldData[bind[0]]
      ? !isHasHour
        ? `${fieldData[bind[0]]} 00:00:00`
        : fieldData[bind[0]]
      : undefined;
    const end = fieldData[bind[1]]
      ? !isHasHour
        ? `${fieldData[bind[1]]} 23:59:59`
        : fieldData[bind[1]]
      : undefined;
    const dateFormats = [start ? dayjs(start) : '', end ? dayjs(end) : ''];
    setVal(dateFormats);
  }, [fieldData]);

  useUpdateLayoutEffect(() => {
    setValidateResult(fieldResult);
  }, [fieldResult]);

  // change事件
  function changeHandle(date: any, dateStrings: [string, string]) {
    // 时间处理
    const start = dateStrings[0]
      ? !isHasHour
        ? `${dateStrings[0]} 00:00:00`
        : dateStrings[0]
      : undefined;
    const end = dateStrings[1]
      ? !isHasHour
        ? `${dateStrings[1]} 23:59:59`
        : dateStrings[1]
      : undefined;
    const dateFormats = [start ? dayjs(start) : '', end ? dayjs(end) : ''];
    setVal(dateFormats);

    const data: Record<string, any> = {
      [bind?.[0] || 'start']: start,
      [bind?.[1] || 'end']: end,
    };
    setData?.(data);
    if (watch && watch[fieldKey]) watch[fieldKey](data);
    if (watch && watch['#']) watch['#'](data, fieldKey);
    // 在form表单中失去change触发 表单校验
    const result = validateRule(fieldRules || [], dateFormats);
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
        <RangePicker
          className={classnames('full-width', { 'solo-border-error': validateResult?.isError })}
          locale={zhCN}
          onChange={changeHandle}
          value={val}
          bordered={!bordered}
          {...props}
        />
      </div>
    </div>
  );
}
