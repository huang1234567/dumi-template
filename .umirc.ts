import { defineConfig } from 'dumi';

const repo = 'dumi-template';

export default defineConfig({
  title: repo,
  locales: [['zh-CN', '中文']],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/huang1234567/dumi-template',
    },
  ],
  // more config: https://d.umijs.org/config
  // 为组件文档项目按需引入 antd ，在 demo 和调试组件中使用。
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // extraBabelPlugins: [
  //   ['import', { libraryName: 'antd-mobile', style: true }],
  //   // 其他可能需要的插件
  // ],
});
