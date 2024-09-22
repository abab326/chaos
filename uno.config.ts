import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  theme: {
    // ...
    colors: {
      // ...
      primary: 'var(--el-color-primary)',
      secondary: 'var(--el-color-primary)',
      success: 'var(--el-color-success)',
      info: 'var(--el-color-info)',
      warning: 'var(--el-color-warning)',
      danger: 'var(--el-color-danger)',
      light: 'var(--el-color-primary)',
      dark: 'var(--el-color-primary)',
      bg: 'var(--el-bg-color)',
      bgp: 'var(--el-bg-color-page)',
      bgo: 'var(--el-bg-color-overlay)',
      bor: 'var(--el-border-color)',
      t: 'var(--el-text-color-primary)',
      tr: 'var(--el-text-color-regular)',
      ts: 'var(--el-text-color-secondary)',
      tp: 'var(--el-text-color-placeholder)',
      fill: 'var(--el-fill-color)',
      // ...
    },
  },
  shortcuts: [
    { 'base-border': 'border border-solid' },
    // 正则匹配(l,t,r,b) 中一个

    [
      /^base-border-([ltrb])$/,
      ([, c]) => {
        console.log(c)
        return `border-${c} border-${c}-solid border-${c}-bor`
      },
    ],
  ],
  presets: [
    presetUno({
      important: '#app',
    }),
    presetAttributify(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
