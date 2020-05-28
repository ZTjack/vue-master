/*
 * @Author: Jack
 * @Date: 2020-05-28 15:46:58
 * @LastEditors: Jack
 * @LastEditTime: 2020-05-28 16:02:30
 * @Description:
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
