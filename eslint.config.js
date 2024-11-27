import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tslint from 'typescript-eslint'

export default tslint.config(
  { ignores: ['dist', "node_modules", ".vscode/**", "src/registerServiceWorker.*", "src/serviceWorkder.*", "react-app-env.d.ts"] },
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing if using React
      },
    },
    extends: [js.configs.recommended, ...tslint.configs.recommended, 'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript', 'plugin:prettier/recommended'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier
    },
    // Custom rules
    rules: {
      // General Code Quality
      'no-console': 'warn',                // Warn on `console` usage
      'no-debugger': 'error',              // Disallow `debugger`
      'no-unused-vars': 'off',             // Handled by TypeScript
      '@typescript-eslint/no-unused-vars': ['error'], // Enforce unused variable checks
      'no-shadow': 'off',                  // Disabled for compatibility with TS enums
      '@typescript-eslint/no-shadow': ['error'], // Re-enable shadowing check for TS
  
      // React-Specific Rules
      'react/react-in-jsx-scope': 'off',   // Not needed for modern React (17+)
      'react/prop-types': 'off',           // Disable prop-types as TS is used
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.jsx', '.tsx'] },  // Allow JSX in .jsx and .tsx files
      ],
      'react/jsx-props-no-spreading': 'off', // Allow prop spreading
  
      // Accessibility Rules
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'], // For Next.js or similar frameworks
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
  
      // Import Rules
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['**/*.test.js', '**/*.test.ts', '**/setupTests.ts'] },
      ],
      'import/prefer-default-export': 'off', // Allow named exports
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
  
      // TypeScript-Specific Rules
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow inferred return types
      '@typescript-eslint/no-explicit-any': 'warn',              // Discourage use of `any`
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-ignore': 'allow-with-description' }, // Allow `ts-ignore` with justification
      ],
  
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',        // Ensure hooks are used correctly
      'react-hooks/exhaustive-deps': 'warn',        // Warn on missing dependencies in hooks
  
      // Custom Style Preferences
      'arrow-body-style': ['error', 'as-needed'],   // Enforce concise arrow function syntax
      'prefer-arrow-callback': 'error',            // Prefer arrow functions for callbacks
      'no-use-before-define': 'off',               // Disabled in favor of TS version
      '@typescript-eslint/no-use-before-define': ['error'],
    },
    // Settings for resolving modules and React version
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',  // Automatically detect React version
      },
    },
  },
)
