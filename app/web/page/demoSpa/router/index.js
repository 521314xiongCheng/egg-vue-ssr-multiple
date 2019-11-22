import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/demoSpa/',
    routes: [
      {
        path: '/list',
        component: () => import('../view/list.vue')
      },
      {
        path: '/detail',
        component: () => import('../view/detail.vue')
      }
    ]
  });
}