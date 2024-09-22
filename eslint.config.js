import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import autoJson from './.eslintrc-auto-import.json' with { type: 'json' }

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  /** 自定义配置全局变量 */
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...autoJson.globals },
    },
  },
  /** js推荐配置 */
  pluginJs.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...pluginVue.configs['flat/essential'],
  /** ts解析vue */
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  /** prettier  */
  eslintPluginPrettierRecommended,
  /** 自定义配置 */
  {
    rules: {
      'prettier/prettier': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/no-mutating-props': 'off',
    },
  },
]
