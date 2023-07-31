type SchemaFormatProps =  | 'input'
| 'textarea'
| 'datePicker'
| 'dateRange'
| 'checkbox'
| 'select'
| 'radio'
| 'switch'
| 'rate'
| 'custom';

interface ItemProps {
  className?: string;
  rules?: RuleProps[];
  options?: { label: string | number; value: string | number }[];
  bind?: string[];
  width?: string | number;
  labelWidth?: string | number;
  labelAlign?: 'left' | 'right' | 'center';
  widget?: any;
  props?: Record<string, any>;
  display?: 'block' | 'inline';
  bordered?: boolean; 
  labelTips?: string;
}

export interface SchemaBaseProps extends ItemProps {
  label: string;
  format: SchemaFormatProps;
};

export type UpdateSchemaBaseProps = Partial<SchemaBaseProps>;

export type SchemaProps = {
  type: string;
  title?: string;
  description?: string;
  itemProps?: ItemProps;
  properties: Record<string, SchemaBaseProps>;
};

export type FieldItemProps = {
  // form 中 每一个item的唯一表示
  fieldKey: string;
  label: string;
  format: SchemaFormatProps;
  isRequired?: boolean;
  rules?: RuleProps[];
  options?: { label: string | number; value: string | number }[];
  className?: string;
  width?: string | number;
  labelWidth?: string | number;
  labelAlign?: 'left' | 'right' | 'center';
  bordered?: boolean;
  bind?: string[];
  props?: Record<string, any>;
  widget?: any;
  display?: string;
  labelTips?: string;
  hide?: boolean;
};

export type ActionProps = {
  setSchema?: (param: Record<string, UpdateSchemaBaseProps> | SchemaProps) => void;
  setData?: (param: Record<string, any>) => void;
  getData?: () => Record<string, any>;
  getDataByKey?: (param: string) => any;
  getFieldRules?: (param: string) => RuleProps[];
  watch?: Record<string, (value: any, key?: string) => any>;
  validateField?: (key: string, data: any) => void;
  setRules?: (param: Record<string, RuleProps[]>) => void;
  clearData?: () => void;
};

export type StoreProps = {
  schema?: SchemaProps;
  formData?: Record<string, any>;
  ruleResult?: Record<string, any>;
};

export type FormInstanceProps = {
  setSchema: (param: Record<string, UpdateSchemaBaseProps> | SchemaProps) => void;
  removeSchemaByKey: (param: string) => void;
  setData: (param: Record<string, any>) => void;
  setDataByKey: (key: string, param: Record<string, any>) => void;
  getData: () => Record<string, any>;
  getDataByKey: (key: string) => void;
  getFieldRules?: (param: string) => RuleProps[];
  clearData: () => void;
  setRules: (param: Record<string, RuleProps[]>) => void;
  validateFields: (keys: string[]) => Promise<{ validate: boolean; data: Record<string, any> }>;
  schema?: SchemaProps;
  formData?: Record<string, any>;
  ruleResult?: Record<string, any>;
};

export type FormInstancePropsPartial = Partial<FormInstanceProps>;

export type RuleProps = {
  required?: boolean;
  pattern?: RegExp;
  validator?: (val: Record<string, any>) => boolean;
  message: string;
};
