// import globals from 'globals'
// import pluginJs from '@eslint/js'
// // import tseslint from "typescript-eslint";
// import eslintConfigPrettier from 'eslint-config-prettier'
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

// export default [
//   { files: ['**/*.{js,mjs,cjs,ts}'] },
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,
//   //...tseslint.configs.recommended,
//   eslintPluginPrettierRecommended,
//   eslintConfigPrettier,
// ]

import base from './eslint.config.base.mjs'

export default [
  {
    ignores: ['./apps/'],
  },
  ...base,
  {
    rules: {
      'no-unused-vars': 0,
    },
  },
]
//export default []
