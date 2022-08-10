export type ISchemaBase = {
  label: string;
  format:
    | 'input'
    | 'textarea'
    | 'datePicker'
    | 'dateRange'
    | 'checkbox'
    | 'select'
    | 'radio'
    | 'switch'
    | 'rate'
    | 'custom';
  className?: string;
  rules?: IRule[];
  options?: { label: string | number; value: string | number }[];
  bind?: string[];
  width?: string | number;
  labelWidth?: string | number;
  labelAlign?: 'left' | 'right' | 'center';
  widget?: any;
  props?: Record<string, any>;
  display?: string;
  bordered?: boolean;
  labelTips?: string;
};
export type IUpdateSchemaBase = Partial<ISchemaBase>;
export type ISchema = {
  type: 'object';
  title?: string;
  description?: string;
  formProps?: { display: 'block' | 'inline' };
  itemProps?: ISchemaBase;
  properties: Record<string, ISchemaBase>;
};
export type IFieldItem = {
  // form 中 每一个item的唯一表示
  fieldKey: string;
  label: string;
  format:
    | 'input'
    | 'textarea'
    | 'datePicker'
    | 'dateRange'
    | 'checkbox'
    | 'select'
    | 'radio'
    | 'switch'
    | 'rate'
    | 'custom';
  isRequired?: boolean;
  rules?: IRule[];
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

export type IAction = {
  setSchema?: (param: Record<string, IUpdateSchemaBase> | ISchema) => void;
  setData?: (param: Record<string, any>) => void;
  getData?: () => Record<string, any>;
  getDataByKey?: (param: string) => any;
  getFieldRules?: (param: string) => IRule[];
  watch?: Record<string, (value: any, key?: string) => any>;
  validateField?: (key: string, data: any) => void;
  setRules?: (param: Record<string, IRule[]>) => void;
  clearData?: () => void;
};

export type IStore = {
  schema?: ISchema;
  formData?: Record<string, any>;
  ruleResult?: Record<string, any>;
};

export type IFormInstance = {
  setSchema: (param: Record<string, IUpdateSchemaBase> | ISchema) => void;
  removeSchemaByKey: (param: string) => void;
  setData: (param: Record<string, any>) => void;
  setDataByKey: (key: string, param: Record<string, any>) => void;
  getData: () => Record<string, any>;
  getDataByKey: (key: string) => void;
  getFieldRules?: (param: string) => IRule[];
  clearData: () => void;
  setRules: (param: Record<string, IRule[]>) => void;
  validateFields: (keys: string[]) => Promise<{ validate: boolean; data: Record<string, any> }>;
  schema?: ISchema;
  formData?: Record<string, any>;
  ruleResult?: Record<string, any>;
};

export type IFormInstancePartial = Partial<IFormInstance>;

export type ISearchField = {
  searchName: string;
  searchField: string;
  [k: string]: any;
};

export type IRule = {
  required?: boolean;
  pattern?: RegExp;
  validator?: (val: Record<string, any>) => boolean;
  message: string;
};
