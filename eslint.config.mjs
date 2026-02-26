import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      radix: 'error'
    }
  },
  {
    ignores: ['lib/', 'types/', 'test/', 'node_modules/']
  }
);
