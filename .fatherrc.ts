import { defineConfig } from 'father';

export default defineConfig({
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  extraBabelPlugins: [[
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
  ]],
  cjs: {
    transformer: 'babel',
    output: 'packages/dist',
  },
  esm: {
    output: 'packages/es',
  },
});