---
title: useForm
order: 4

group:
  path: /
  order: 1

nav:
  path: /v1.x
  order:

filePath: null
---

`useForm` 用于创建表单实例，使用时需要创建实例，并传入与其对应的表单上，与 `SoloForm` 一对一绑定。

### 组件 **API**

| 参数 | 描述 | 类型 | 是否必填 | 默认值 |
| --- | --- | --- | --- | --- |
| schema | 描述表单的 schema，详见 [schema 规范](/schema) | `SchemaProps` | `是` | `--` |
| data | 表单初始化的值 | `Record<string, any>` | `否` | `--` |

### useForm 实例返回值

| 参数 | 描述 | 类型 |
| --- | --- | --- |
| setSchema | 更新 schema 字段 更新 form 组件结构 | ` (param: SchemaProps ｜ Record<string, UpdateSchemaBaseProps>) => void` |
| setData | 外部手动修改 formData，用于已填写的表单的数据回填 | `(param: Record<string, any>) => void` |
| setDataByKey | 外部通过 key 修改指定单个 field 的数据 | `(key: string, param: any) => void` |
| getData | 获取表单内部维护的数据 formData 所有字段 | `() => Record<string, any>` |
| getDataByKey | 通过 key 获取表单内指定单个 field 的字段 | `(key: string) => Record<string, any>` |
| clearData | 清空表单内部维护的数据 formData 所有字段 | `() => void` |
| validateFields | 触发表单检验 keys 需要校验的字段，不传则校验全部字段 | ` (keys: string[]) => Promise<{ validate: boolean; data: Record<string, any> }>` |

### setSchema

```tsx
/**
 * title: 通过from实例setSchema方法修改输入框label
 */
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: 'setSchema 示例',
  description: 'setSchema 示例 ',
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
  function updateSchema() {
    form.setSchema({
      name: { label: '更新姓名' },
      age: {
        label: '年龄',
        format: 'select',
        options: [
          { label: '21', value: 21 },
          { label: '22', value: 22 },
          { label: '23', value: 23 },
          { label: '24', value: 24 },
        ],
        props: {
          placeholder: '请输选年纪',
        },
      },
    });
  }
  return (
    <>
      <SoloForm form={form} />
      <div style={{ width: 300, textAlign: 'center' }}>
        <button onClick={() => updateSchema()}>更新schema</button>
      </div>
    </>
  );
}
```

### setData

```tsx
/**
 * title: 通过from实例setData方法修改data 姓名为Turbo, 年纪为30
 */
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: 'setData 示例',
  description: 'setData 示例',
  itemProps: {
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
  function onSubmit() {
    form.setData({ name: 'Turbo', age: 30 });
  }
  return (
    <>
      <SoloForm form={form} />
      <div style={{ width: 300, textAlign: 'center' }}>
        <button onClick={() => onSubmit()}>更新数据</button>
      </div>
    </>
  );
}
```

### setDataByKey

```tsx
/**
 * title: 通过from实例setDataByKey方法修改姓名为Turbo
 */
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: 'setData 示例',
  description: 'setData 示例',
  itemProps: {
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
  function onSubmit() {
    form.setDataByKey('name', 'Turbo');
  }
  return (
    <>
      <SoloForm form={form} />
      <div style={{ width: 300, textAlign: 'center' }}>
        <button onClick={() => onSubmit()}>更新姓名</button>
      </div>
    </>
  );
}
```

### getData

```tsx
/**
 * title: 通过from实例getData方法 获取表单数据
 */
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: '采购订单查询',
  description: '采购订单查询',
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
        <button onClick={() => onSubmit()}>获取数据</button>
        {isShow && <div style={{ color: '#999', marginTop: 10 }}>请在console查看数据</div>}
      </div>
    </>
  );
}
```

### getDataByKey

```tsx
/**
 * title: 通过from实例getDataByKey方法 获取姓名数据
 */
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: '采购订单查询',
  description: '采购订单查询',
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
    console.log(form.getDataByKey('name'));
  }
  return (
    <>
      <SoloForm form={form} />
      <div style={{ width: 300, textAlign: 'center' }}>
        <button onClick={() => onSubmit()}>获取姓名</button>
        {isShow && <div style={{ color: '#999', marginTop: 10 }}>请在console查看数据</div>}
      </div>
    </>
  );
}
```

### clearData

```tsx
/**
 * title: 通过from实例clearData 方法清除表单数据
 */
import React from 'react';
import SoloForm, { useForm } from 'solo-form';

const schema = {
  type: 'object',
  title: 'setData 示例',
  description: 'setData 示例',
  itemProps: {
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
  const form = useForm({ schema, data: { name: 'Turbo', age: 30 } });
  function onSubmit() {
    form.clearData();
  }
  return (
    <>
      <SoloForm form={form} />
      <div style={{ width: 300, textAlign: 'center' }}>
        <button onClick={() => onSubmit()}>清除数据</button>
      </div>
    </>
  );
}
```
