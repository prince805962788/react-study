import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '表单',
      path: '/form',
      component: './Form',
    },
    {
      name: 'Formily表单',
      path: '/formily',
      component: './Formily',
    },
    {
      name: 'Redux状态管理',
      path: '/redux',
      component: './Redux',
    },
  ],
  npmClient: 'pnpm',
});

