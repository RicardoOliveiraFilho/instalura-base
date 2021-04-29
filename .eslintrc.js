module.exports ={
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
    'jest/globals': true
  },
  extends: [
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js']
      }
    ],
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'func-names': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'react/destructuring-assignment': 'off',
    'cypress/no-unnecessary-waiting': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off'
  },
  overrides: [
    {
      files: [
        '**/*.test.js'
      ],
      plugins: ['jest'],
      env: {
        jest: true
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended
    }
  ]
}
