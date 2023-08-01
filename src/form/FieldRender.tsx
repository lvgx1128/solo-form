import React from 'react';
import classnames from 'classnames';
import type { FieldItemProps, RuleProps, StoreProps } from '../@types';
import { useStore, useAction } from './hooks/context';
import FieldItem from './FieldItem';
import { set } from 'lodash-es';
import { ActionProps } from '../@types/index';

interface IFieldItemProps extends FieldItemProps {
  isRequired?: boolean;
}

export default function FieldRender({
  className,
}: {
  className?: string;
}): JSX.Element {
  const { schema } = useStore() as StoreProps;
  const { setRules } = useAction() as ActionProps;
  const flatten = schema?.properties ?? {};
  // 表单item上绑定的属性
  const itemProps = schema?.itemProps ?? {};
  const display = itemProps?.display || 'block';
  // 解析schema
  const formRules: Record<string, RuleProps[]> = {};
  const fieldList = Object.keys(flatten).reduce(
    (prev: IFieldItemProps[], item: string) => {
      const baseProps = itemProps?.props || {};
      const fieldItem: IFieldItemProps = {
        ...itemProps,
        ...flatten[item],
        fieldKey: item,
      };
      if (fieldItem?.props) {
        fieldItem.props = { ...fieldItem?.props, ...baseProps };
      }
      const { rules } = fieldItem;
      if (rules) set(formRules, fieldItem.fieldKey, rules);
      const index: number =
        rules?.findIndex((rule: RuleProps) => rule?.required) ?? -1;
      fieldItem.isRequired = index > -1;
      if (!fieldItem.hide) prev.push(fieldItem);
      return prev;
    },
    [],
  );
  setRules?.(formRules);
  return (
    <div className={classnames('solo-form-container', className)}>
      {fieldList.map((item: IFieldItemProps) => {
        return (
          <div
            key={item.fieldKey}
            style={{ width: item.width }}
            className={classnames(
              'solo-form-item-box',
              { 'solo-form-item-textarea': item.format === 'textarea' },
              item.className,
              `solo-form-${item?.display || display}`,
            )}
          >
            {item && <FieldItem fieldItem={item} key={item.fieldKey} />}
          </div>
        );
      })}
    </div>
  );
}
