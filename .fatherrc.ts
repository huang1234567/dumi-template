export default {
  // esm: 'rollup',
  // cjs: 'rollup',
  esm: { output: 'dist' }, //输出路径
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
};
