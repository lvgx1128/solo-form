import React, { useState } from 'react';
import { Switch } from 'antd';
import type { FieldItemProps } from '../../@types/index';
import classnames from 'classnames';
import { useAction, useStore } from '../hooks/context';
import { useUpdateLayoutEffect } from '../hooks/useUpdateLayoutEffect';
import Tips from './Tips';
import 'antd/es/switch/style';

export default function SwitchField({
  ...fieldItem
}: FieldItemProps): JSX.Element {
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
  function changeHandle(checked: boolean) {
    setVal(checked);
    setData?.({ [fieldKey]: checked });
    if (watch && watch[fieldKey]) watch[fieldKey](checked);
    if (watch && watch['#']) watch['#'](checked, fieldKey);
  }
  const formItem = classnames(
    'solo-form-item',
    { 'solo-form-item-small': props?.size === 'small' },
    { 'solo-form-item-border': bordered },
    { 'solo-form-item-disabled': props?.disabled },
  );
  return (
    <div className={formItem}>
      <div
        className={classnames('label-title')}
        style={{ width: fieldItem.labelWidth }}
      >
        <span>{label}</span>
        {labelTips ? <Tips text={labelTips} /> : null}
      </div>
      <div className={classnames('flex-full')}>
        <Switch
          checked={val}
          className="ml-10"
          onChange={changeHandle}
          {...props}
        />
      </div>
    </div>
  );
}
