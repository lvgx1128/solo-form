import React, { useState } from 'react';
import { Rate } from 'antd';
import type { FieldItemProps } from '@/@types/index';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';
import 'antd/es/rate/style'

export default function RateField({ ...fieldItem }: FieldItemProps): JSX.Element {
  const { formData } = useStore();
  const { props, fieldKey, label, bordered, labelTips } = fieldItem;
  const { setData, watch } = useAction();
  // useForm中 formData 中field数据
  const fieldData = formData?.[fieldKey];

  // 订阅field当前值
  const [val, setVal] = useState(fieldData);

  useUpdateLayoutEffect(() => {
    setVal(fieldData);
  }, [fieldData]);

  function changeHandle(value: number) {
    setVal(value);
    setData?.({ [fieldKey]: value });
    if (watch && watch[fieldKey]) watch[fieldKey](value);
    if (watch && watch['#']) watch['#'](value, fieldKey);
  }
  const formItem = classnames(
    'solo-form-item',
    { 'solo-form-item-small': props?.size === 'small' },
    { 'solo-form-item-border': bordered },
    { 'solo-form-item-disabled': props?.disabled },
  );
  return (
    <div className={formItem}>
      <div className="label-title" style={{ width: fieldItem.labelWidth }}>
        <span>{label}</span>
        {labelTips ? <Tips text={labelTips} /> : null}
      </div>
      <div className="flex-full">
        <Rate value={val} className="ml-10 full-width" onChange={changeHandle} {...props} />
      </div>
    </div>
  );
}
