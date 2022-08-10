---
title: schema
order: 2

group:
  path: /
  order: 1

nav:
  path: /v1.x
  order: 1

filePath: null
---

### Schema 规范

**`schema`字段 是 useForm 的必传参数 遵循[JSON Schema](https://json-schema.apifox.cn/) 规范**

schema 是表单的基本结构展示和校验的必要信息

### `schema字段解析`

| 字段 | 描述 | 是否必填 | 类型 |
| --- | --- | --- | --- |
| type | schema 类型 目前只支持 object 类型 | `是` | 'object' |
| title | schema 标题 用于标记 没有实际作用 | `否` | `string` |
| description | schema 描述 用于标记 没有实际作用 | `否` | `string` |
| formProps | form 表单属性 | `否` | `Record<string, any>` |
| itemProps | 表单每个 item 的公共属性 会被的 item 上字段值覆盖 | `否` | `ISchemaBase` |
| properties | 表单每个 item 的公共属性 会被的 item 上字段值覆盖 | `否` | `Record<string, ISchemaBase>` |

### `ISchemaBase字段解析`

| 字段 | 描述 | 是否必填 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 表单中每个 item 的 label | `是` | `string` | `--` |
| labelWidth | 表单中每个 item 的 label 的宽度 | `否` | `string｜number` | `100` |
| labelTips | 表单中每个 item 的 label 的注释 | `否` | `string` | `--` |
| labelAlign | 表单中每个 item 的 label 等对其方式 | `否` | `left｜right｜center` | `right` |
| format | 表单中每个 item 的组件类型 | `是` | `'input｜textarea｜datePicker｜dateRange｜checkbox｜select｜radio｜switch｜rate｜custom'` | `--` |
| className | 表单中每个 item 的 自定义 class 复写样式使用 | `否` | `string` | `--` |
| options | item 组件需要的枚举值展示字段，select radio checkbook 等组件需要此字段 | `否` | `{ label: string｜number; value: string｜number }[]` | `--` |
| bind | dateRange 组件需要多个值 通过 bind 字段实现 | `否` | `string[]` | `['start', 'end']` |
| bordered | item 组件是否有边框 | `否` | `boolean` | `true` |
| width | item 组件自定义宽度 | `否` | `string｜number` | `100px ｜ 100%` |
| props | item 组件的内置属性 支持 antd 组件的所有属性，如果和上述属性冲突会覆盖 | `否` | `Record<string, any>` | `--` |
| rules | item 组件的表单校验规则 | `否` | `IRule[]` | `--` |
| widget | item 自定义组件 | `否` | `React.FC` | `--` |

### `IRule字段解析`

| 字段 | 描述 | 是否必填 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| required | 该字段是否为必填字段 | `否` | `boolean` | `--` |
| pattern | 该字段校验的正则表达式 | `否` | `RegExp` | `--` |
| validator | 该字段校验的方法入参是该组件的值，返回一个 boolean 值 | `否` | `(val: Record<string, any>) => boolean` | `--` |
| message | 该字段校验失败的提示信息 | `是` | `string` | `--` |

### `Schema示例`

```js
const schema = {
  type: 'object',
  title: '表单实力schema',
  description: '表单实力schema',
  formProps: {
    display: 'block',
  },
  itemProps: {
    bordered: false,
    width: '300px',
  },
  properties: {
    select: {
      label: '下拉框',
      format: 'select',
      options: [
        { label: '下拉框1', value: 1 },
        { label: '下拉框2', value: 2 },
        { label: '下拉框3', value: 3 },
        { label: '下拉框4', value: 4 },
      ],
      width: '300px',
      labelWidth: '100px',
      rules: [{ required: true, message: '请选择下拉框' }],
      props: {
        placeholder: '请输选下拉框',
        allowClear: false,
      },
    },
    input: {
      label: '输入框',
      format: 'input',
      labelWidth: '120px',
      labelAlign: 'right',
      labelTips: '输入框提示信息',
      rules: [{ required: true, message: '输入框信息不可以为空' }],
      props: {
        placeholder: '请输入',
      },
    },
    checkbox: {
      label: '复选框',
      format: 'checkbox',
      options: [
        { label: '复选框1', value: 1 },
        { label: '复选框2', value: 2 },
      ],
    },
    datePicker: {
      label: '日期',
      format: 'datePicker',
      rules: [{ required: true, message: '请选择日期' }],
      props: {
        placeholder: '选择日期',
      },
    },
    dateRange: {
      label: '日期',
      format: 'dateRange',
      bind: ['startDate', 'endDate']
      props: {
        placeholder: '选择日期',
      },
    },
  },
};
```
