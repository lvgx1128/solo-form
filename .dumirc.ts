import { defineConfig } from 'dumi'
import style from './resetDumiStyle'
const path = require('path');

export default defineConfig({
  themeConfig: {
    name: 'solo-form',
    logo: 'https://cdn.lvgx.cn/assets/solo-form.png',
    rtl: true,
    nav: {
      mode: "append",
      value: [{ title: 'GitHub', link: 'https://github.com/lvgx1128/solo-form' }]
    },
    footer: 'Copyright © 2023 solo-form'
  },
  favicons: [
    // 完整地址
    'https://cdn.lvgx.cn/assets/solo-form.png',
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/solo-form.png'
  ],
  title: 'solo-form',
  outputPath: 'docs-dist',
  hash: true,
  styles: [style],
  alias: {
    //FIXME:@支持
    '@': path.resolve(process.cwd(), 'src'),
    'solo-from': path.resolve(process.cwd(), 'src/index.ts'),
  },
});
