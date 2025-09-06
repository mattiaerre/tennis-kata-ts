// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore junk + the config file itself
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', 'eslint.config.js'],
  },

  // Lint plain JS files (e.g., build/config scripts) with Espree
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },

  // TypeScript (no type info) – applies to all TS files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // Type-aware rules – only where we have a tsconfig (src/)
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.rules,
      ...tseslint.configs.stylisticTypeChecked.rules,
      'no-console': 'warn',
    },
  },

  // Jest rules for tests
  {
    files: ['**/*.test.ts'],
    plugins: { jest },
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
    languageOptions: {
      globals: {
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
  },

  // Disable formatting-related lint rules (play nice with Prettier)
  prettier,
];
