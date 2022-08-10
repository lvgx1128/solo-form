import React from 'react';
import classnames from 'classnames';
import type { IFieldItem, IRule, IStore } from '@/@types';
import { useStore, useAction } from './hooks/context';
import FieldItem from './FieldItem';
import { set } from 'lodash-es';
import { IAction } from '../@types/index';

interface IIFieldItem extends IFieldItem {
  isRequired?: boolean;
}

export default function FieldRender(): JSX.Element {
  const { schema } = useStore() as IStore;
  const { setRules } = useAction() as IAction;
  const flatten = schema?.properties ?? {};
  const formProps = schema?.formProps ?? { display: 'inline' };
  // 表单item上绑定的属性
  const itemProps = schema?.itemProps ?? {};
  // 解析schema
  const formRules: Record<string, IRule[]> = {};
  const fieldList = Object.keys(flatten).reduce((prev: IIFieldItem[], item: string) => {
    const fieldItem: IIFieldItem = { ...itemProps, ...flatten[item], fieldKey: item };
    const { rules } = fieldItem;
    if (rules) set(formRules, fieldItem.fieldKey, rules);
    const index: number = rules?.findIndex((rule: IRule) => rule?.required) ?? -1;
    fieldItem.isRequired = index > -1;
    if(!fieldItem.hide) prev.push(fieldItem);
    return prev;
  }, []);
  setRules?.(formRules);
  return (
    <div className="solo-form-container">
      {fieldList.map((item: IIFieldItem) => {
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
