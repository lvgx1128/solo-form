import { defineConfig } from 'dumi';
const path = require('path');
import style from './resetDumiStyle';

export default defineConfig({
  title: 'solo-form',
  favicon: 'https://cdn.lvgx.cn/assets/solo-form.png',
  logo: 'https://cdn.lvgx.cn/assets/solo-form.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  alias: {
    //FIXME:@支持
    '@': path.resolve(process.cwd(), 'src'),
    'solo-from': path.resolve(process.cwd(), 'src/index.ts'),
  },
  history: { type: 'hash' },
  publicPath: './',
  locales: [['zh-CN', '中文']],
  ignoreMomentLocale: false,
  navs: [null, { title: 'GitHub', path: 'https://github.com/lvgx1128/solo-form' }],
  styles: [style],
});
