import React, { useMemo } from 'react';
import { ActionContext, StoreContext } from './hooks/context';
import FieldRender from './FieldRender';
import 'antd/dist/antd.css';
import './index.css';

interface IProp {
  watch?: Record<string, (val: any, key?: string) => any>;
  form: Record<string, any>;
}

export default function SoloForm({ form, watch }: IProp): JSX.Element {
  // useForm 中的方法绑定
  const {
    setData,
    getData,
    clearData,
    getDataByKey,
    getFieldRules,
    validateField,
    setRules,
    removeDataByKey,
  } = form;

  const action = useMemo(
    () => ({
      watch,
      setData,
      getData,
      getDataByKey,
      clearData,
      removeDataByKey,
      setRules,
      validateField,
      getFieldRules,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const { schema, formData, ruleResult } = form;
  const store = useMemo(
    () => ({
      formData,
      schema,
      ruleResult,
    }),
    [JSON.stringify(schema), JSON.stringify(formData), JSON.stringify(ruleResult)],
  );

  return (
    <ActionContext.Provider value={action}>
      <StoreContext.Provider value={store}>
        <FieldRender />
      </StoreContext.Provider>
    </ActionContext.Provider>
  );
}
