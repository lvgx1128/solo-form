import { RuleProps, SchemaProps, SchemaBaseProps, UpdateSchemaBaseProps } from '../../@types';
import { cloneDeep, get, isArray } from 'lodash-es';

// 格式化 scheme 数据 TODO
export function schemaFormat(
  schema: SchemaProps,
  newValue: SchemaProps | Record<string, UpdateSchemaBaseProps>,
): SchemaProps {
  let result: any;
  if (newValue.type === 'object') {
    result = cloneDeep(newValue);
    return result;
  }
  let properties: Record<string, SchemaBaseProps> = {};
  const newSchema = cloneDeep(schema) || {};
  properties = newSchema?.properties ?? {};
  const keys = Object.keys(newValue);
  keys.forEach((item: string) => {
    const propItem = get(properties, item);
    const newPropItem = get(newValue, item);
    const props = { ...propItem?.props, ...newPropItem?.props };
    properties[item] = { ...propItem, ...newPropItem, props };
    if (item === 'itemProps') {
      const itemProps = get(newSchema, item);
      newSchema[item] = { ...itemProps, ...newPropItem };
    }
  });
  newSchema.properties = properties;
  return newSchema;
}

export function validateRule(
  fieldRules: RuleProps[],
  fieldData: any,
): {
  isError: boolean;
  message: string;
} {
  const result = { isError: false, message: '' };
  fieldRules?.forEach((item: RuleProps) => {
    if (item.required && !result.isError) {
      result.isError = isArray(fieldData)
        ? fieldData.reduce((prev: boolean, _item: any) => {
            // eslint-disable-next-line no-param-reassign
            if (prev) prev = !_item && _item !== 0;
            return prev;
          }, true)
        : !fieldData && fieldData !== 0;
      result.message = item.message;
    }
    if (item.pattern && !result.isError) {
      result.isError = !item.pattern.test(fieldData);
      result.message = item.message;
    }
    if (item.validator && !result.isError) {
      result.isError = !item.validator(fieldData);
      result.message = item.message;
    }
  });
  return result;
}
