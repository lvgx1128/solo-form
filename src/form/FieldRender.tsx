import React from 'react';
import classnames from 'classnames';
import type { FieldItemProps, RuleProps, StoreProps } from '@/@types';
import { useStore, useAction } from './hooks/context';
import FieldItem from './FieldItem';
import { set } from 'lodash-es';
import { ActionProps } from '../@types/index';

interface IFieldItemProps extends FieldItemProps {
  isRequired?: boolean;
}

export default function FieldRender(): JSX.Element {
  const { schema } = useStore() as StoreProps;
  const { setRules } = useAction() as ActionProps;
  const flatten = schema?.properties ?? {};
  const formProps = schema?.formProps ?? { display: 'inline' };
  // 表单item上绑定的属性
  const itemProps = schema?.itemProps ?? {};
  // 解析schema
  const formRules: Record<string, RuleProps[]> = {};
  const fieldList = Object.keys(flatten).reduce((prev: IFieldItemProps[], item: string) => {
    const fieldItem: IFieldItemProps = { ...itemProps, ...flatten[item], fieldKey: item };
    const { rules } = fieldItem;
    if (rules) set(formRules, fieldItem.fieldKey, rules);
    const index: number = rules?.findIndex((rule: RuleProps) => rule?.required) ?? -1;
    fieldItem.isRequired = index > -1;
    if(!fieldItem.hide) prev.push(fieldItem);
    return prev;
  }, []);
  setRules?.(formRules);
  return (
    <div className="solo-form-container">
      {fieldList.map((item: IFieldItemProps) => {
        return (
          <div
            key={item.fieldKey}
            style={{ width: item.width }}
            className={classnames(
              'solo-form-item-box',
              { 'solo-form-item-textarea': item.format === 'textarea' },
              item.className,
              `solo-form-${formProps?.display}`,
            )}
          >
            {item && <FieldItem fieldItem={item} key={item.fieldKey} />}
          </div>
        );
      })}
    </div>
  );
}
