---
title: 内置组件
order: 3

group:
  path: /
  order: 1

nav:
  path: /v1.x
  order:

filePath: null
---

## 内置组件

组件与 format 的规则如下：

#### 输入类

`输入框 input `

`多行输入框 textarea`

#### 日期类

`日期组件 datePicker`

`日期范围 dateRange`

#### 选择类

`复选框 checkbox`

`下拉框 select`

`单选框 radio`

`开关 switch`

`评分 rate`

#### 自定义组件

`自定义组件 custom`

### 自定义组件参数

**注意** `自定义组件 用value绑定当前值 变更时触发onChange 第一参数value的值， 第二个参数label value的对象或对象的数组`

> 如果自定义组件不符合 api（例如 antd 的 upload 组件） 需要简单封装一下

| 参数     | 描述               | 类型                   |
| -------- | ------------------ | ---------------------- |
| value    | 当前值             | --                     |
| onChange | 数据变更时触发事件 | `(value: any) => void` |

### 内置组件复杂 demo

```tsx
import React from 'react';
import dayjs from 'dayjs';
import { SoloForm, useForm } from 'solo-form';
import { Image } from 'antd';

const schema = {
  type: 'object',
  title: ' 内置组件复杂 demo',
  description: ' 内置组件复杂 demo',
  formProps: {
    display: 'block',
  },
  itemProps: {
    width: 500,
  },
  properties: {
    input: {
      label: '输入框',
      labelTips: '输入框labelTips文本',
      format: 'input',
      rules: [{ required: true, message: '请输入内容' }],
      props: {
        placeholder: '请输入订单编号',
        type: 'string',
      },
    },
    rate: {
      label: '满意度',
      format: 'rate',
      labelTips: '满意度 > 1 需要输入评价内容',
    },
    textarea: {
      label: '文本输入框',
      format: 'textarea',
      hide: true,
      rules: [
        { required: true, message: '请输入内容' },
        { validator: (val) => val.length > 10, message: '输入内容长度大于10' },
      ],
      props: {
        placeholder: '请输入订单编号',
        type: 'string',
        rows: 5,
      },
    },
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
    datePicker: {
      label: '日期',
      format: 'datePicker',
      rules: [{ required: true, message: '请选择日期' }],
      props: {
        placeholder: '选择日期',
        disabledDate: (date) => {
          const now = Date.now();
          const current = dayjs(date).valueOf();
          return now > current;
        },
      },
    },
    dateRange: {
      label: '日期范围',
      format: 'dateRange',
      rules: [{ required: true, message: '请选择日期' }],
      props: {
        placeholder: ['开始日期', '结束日期'],
        separator: '至',
      },
    },
    switch: {
      label: '添加标签',
      format: 'switch',
    },
    tags: {
      label: '标签',
      format: 'checkbox',
      hide: true,
      rules: [{ required: true, message: '请选择标签' }],
      options: [
        { label: '标签1', value: 1 },
        { label: '标签2', value: 2 },
        { label: '标签3', value: 3 },
        { label: '标签4', value: 4 },
        { label: '标签5', value: 5 },
      ],
    },
    width: {
      label: '表单宽度',
      format: 'radio',
      bordered: false,
      options: [
        { label: '500', value: 500 },
        { label: '600', value: 600 },
      ],
    },
    upload: {
      label: '自定义组件',
      format: 'custom',
      widget: Image,
      props: {
        preview: false,
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        width: 100,
      },
    },
  },
};

export default function WatchFormDataDemo(): JSX.Element {
  const form = useForm({ schema, data: { width: 500 } });
  const watch = {
    rate: (val) => {
      form.setSchema({
        textarea: {
          hide: val <= 1,
        },
      });
    },
    switch: (val) => {
      form.setSchema({
        tags: {
          hide: !val,
        },
      });
      form.setData({ tags: [2] });
    },
    width: (val) => {
      form.setSchema({
        itemProps: {
          width: val,
        },
      });
    },
  };
  return <SoloForm form={form} watch={watch} />;
}
```
