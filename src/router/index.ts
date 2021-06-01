import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ysRouter from './yuanshen/ysRouter'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/home.vue'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component:() => import('@/views/vuex.vue'),
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue'),
  },
  ...ysRouter,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// router.beforeEach((to,from,next)=> {
//   console.log('==============================================================================');
//   console.log(to);
//   console.log(from);
//   console.log(next);
//   console.log('==============================================================================');
// })
export default router;
