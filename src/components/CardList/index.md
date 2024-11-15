---
title: CardList 列表
nav:
  title: 组件
  path: /components
group:
  title: 基础
  order: 1
---

## 基础使用



Demo:
<code src="./demos/index.jsx" />
<!-- <API></API> -->

### API

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| listItem | 卡片渲染数据 | `object<{title,extra,brief,key,thumb,checkboxPos,...}>` |  |

### listItem展开

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| title | 左边内容-主要信息 | `string` | - |
| extra | 右边内容 | `{contont?: any[];other?: any;}` |  |
| brief    | 左边内容-次要信息   | ` array<{ labels: Array; }>`  | -       |
| key    | key值-避免报警告   | `string`  | -       |
| thumb    | 缩略图   | `string`  | -       |
| checkboxPos    | 勾选框-放置位置，不传不显示   | `string可选值left/right`  |  -   |
|  更多   | 其他可参考antd-mobile-List.item   | `any`  |`-`      |

### extra展开
contont可多行，按钮与图标可设一行（宽度有限不设多文本字段同行）
| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| contont | 次要信息展示 | ` array<{ text: string;thumb?:string;thumbStyle?:object; style?: React.CSSProperties }>` |  |
| contont.thumb | 缩略图 | ` string/React.Element	` | - |
| contont.thumbStyle | thumb为string下进行设置样式 | ` object<{xxx:xxx}>` | - |
| other | 更多属性绑定等传递 | ` object<{()=>onClick()}>` |  |


### brief展开-可多行

内容区一行可展示多个字段及设置不同样式
| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| labels | 次要信息展示 | ` Array<{ text: string; style?: React.CSSProperties }>` |  |


