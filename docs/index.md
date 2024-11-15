---
title: dfyh-react-h5
order: 10
hero:
  title: dfyh-react-h5
  desc:  Just component, not UI
  actions:
    - text: 快速上手
      link: /components/foo
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 安装引入后即可使用，提供详细的组件使用文档。
  - icon: https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg
    title: Ant Design
    desc: 基于antd-mobile ，在其之上做简朴的逻辑封装，保留了 Ant Design 组件所有功能。
  - icon: https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg
    title: TypeScript
    desc: 使用 TypeScript 开发，提供完整的类型定义文件。 
# footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self
---

## 快速上手

### 安装依赖

```
npm i -S dfyh-react-h5
```

### 使用

```jsx | pure
import { CountdownButton } from 'dfyh-react-h5';

export default const Demo = () => {
  return (
    <div>
      <CountdownButton onClick={()=>5566}>{'获取验证码'}</CountdownButton>
    </div>
  );
};
```