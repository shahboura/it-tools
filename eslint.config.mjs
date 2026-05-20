import antfu from '@antfu/eslint-config';
import autoImportGlobals from './.eslintrc-auto-import.json' with { type: 'json' };

export default antfu(
  {
    vue: true,
    typescript: true,
    unocss: true,
  },
  {
    languageOptions: {
      globals: autoImportGlobals.globals,
    },
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'style/semi': ['error', 'always'],
      '@typescript-eslint/no-use-before-define': ['error', { allowNamedExports: true, functions: false }],
      'vue/no-empty-component-block': ['error'],
      'unused-imports/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],

      // regexp rules are too strict for complex ISO 8601 / Unicode patterns — these regexes were stable before @antfu/eslint-config v9
      'regexp/no-unused-capturing-group': 'off',
      'regexp/no-obscure-range': 'off',
      'regexp/no-dupe-characters-character-class': 'off',
      'regexp/no-useless-non-capturing-group': 'off',
      'regexp/no-useless-escape': 'off',
      'regexp/prefer-question-quantifier': 'off',
      'regexp/no-empty-alternative': 'off',
      'regexp/no-potentially-useless-backreference': 'off',

      // innerText is the correct semantic in Playwright e2e tests (returns visible text users see)
      'unicorn/prefer-dom-node-text-content': 'off',

      'no-restricted-imports': ['error', {
        paths: [{
          name: '@vueuse/core',
          importNames: ['useClipboard'],
          message: 'Please use local useCopy from src/composable/copy.ts instead of useClipboard.',
        }],
      }],
    },
  },
);
