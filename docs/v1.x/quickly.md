---
order: 1
title: 快速开始
toc: false

group:
  title: v1.x
  path: /
  order: 1

nav:
  title: v1.x
  path: /v1.x
  order:

filePath: null
---

## SoloForm

`solo-form`一个简单实用的通过 `JSONSchema` 配置，依赖 `ant design` 实现 `React` 中后台 **表单解决方案**。

>

它上手简单容易操作，但是可以满足我们各种复杂的表单场景需求，包含输入框，下拉选择框等多个内置组件，并且支持自定义组件接入。同时可以通过配置支持[表单联动](/watch)，[表单校验](/rule)等复杂功能。

**`安装`**

```sh
npm install solo-form
```

或

```sh
yarn add solo-form
```

或

```sh
pnpm install solo-form
```

### 简单的 demo

```tsx
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: '简单的 demo',
  description: '简单的 demo',
  itemProps: {
    bordered: false,
    width: '500px',
  },
  properties: {
    name: {
      label: '姓名',
      format: 'input',
      props: {
        placeholder: '请输入姓名',
        type: 'string',
      },
    },
    age: {
      label: '年龄',
      format: 'input',
      props: {
        placeholder: '请输入年龄',
        type: 'number',
      },
    },
  },
};

export default function BasicDemo(): JSX.Element {
  const form = useForm({ schema });
  const [isShow, setIsShow] = React.useState(false);
  function onSubmit() {
    setIsShow(true);
    console.log(form.getData());
  }
  return (
    <>
      <SoloForm form={form} />
      <div style={{ width: 300, textAlign: 'center' }}>
        <button onClick={() => onSubmit()}>提交数据</button>
        {isShow && <div style={{ color: '#999', marginTop: 10 }}>请在console查看数据</div>}
      </div>
    </>
  );
}
```

### 组件 **API**

| 参数 | 描述 | 类型 | 是否必填 | 默认值 |
| --- | --- | --- | --- | --- |
| form | 使用 useForm 创建的表单实例，与 SoloForm 一对一绑定 详见 [useForm](/use-form) | `FormInstanceProps` | `是` | `--` |
| watch | 时间选择器字段描述 区分样式 详见 [表单联动](/watch) | `object` | `否` | `--` |
