import React, { useMemo } from 'react';
import { ActionContext, StoreContext } from "./hooks/context";
import FieldRender from "./FieldRender";
// import 'antd/dist/antd.css';
import "./index.css";
export default function SoloForm(_ref) {
  var form = _ref.form,
    watch = _ref.watch,
    className = _ref.className;
  // useForm 中的方法绑定
  var setData = form.setData,
    getData = form.getData,
    clearData = form.clearData,
    getDataByKey = form.getDataByKey,
    getFieldRules = form.getFieldRules,
    validateField = form.validateField,
    setRules = form.setRules,
    removeDataByKey = form.removeDataByKey;
  var action = useMemo(function () {
    return {
      watch: watch,
      setData: setData,
      getData: getData,
      getDataByKey: getDataByKey,
      clearData: clearData,
      removeDataByKey: removeDataByKey,
      setRules: setRules,
      validateField: validateField,
      getFieldRules: getFieldRules
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var schema = form.schema,
    formData = form.formData,
    ruleResult = form.ruleResult;
  var store = useMemo(function () {
    return {
      formData: formData,
      schema: schema,
      ruleResult: ruleResult
    };
  }, [JSON.stringify(schema), JSON.stringify(formData), JSON.stringify(ruleResult)]);
  return /*#__PURE__*/React.createElement(ActionContext.Provider, {
    value: action
  }, /*#__PURE__*/React.createElement(StoreContext.Provider, {
    value: store
  }, /*#__PURE__*/React.createElement(FieldRender, {
    className: className
  })));
}