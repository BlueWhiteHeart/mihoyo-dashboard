import {  RouteRecordRaw } from 'vue-router';
const ysRouter: Array<RouteRecordRaw> = [
  {
    path: '/ys/home',
    name: 'YsHome',
    component:() => import('../../views/yuanshen/YsHome.vue'),
  },
];
export default ysRouter
