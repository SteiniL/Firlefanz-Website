/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, node: true, es2021: true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // Parses the <script> blocks inside .vue files
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2022,      // use a NUMBER here to avoid "Invalid ecmaVersion"
    sourceType: 'module',   // fixes "ImportDeclaration should appear..."
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['vue'],

  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineSlots: 'readonly'
  },

  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
  ],
};
