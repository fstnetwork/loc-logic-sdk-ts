/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 200],
  },
};
