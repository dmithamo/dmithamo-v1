module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app'],

  rules: {
    'react/jsx-filename-extension': [0],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-undef': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': 'off',
    'global-require': 'off',
    'operator-linebreak': 'off',
  },
};
