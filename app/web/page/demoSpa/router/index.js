import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../view/list.vue'

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/demoSpa/',
    routes: [
      {
        path: '/list',
        component: List
      },
      {
        path: '/detail',
        component: () => import('../view/detail.vue')//ssr页面不能使用懒加载方式加载
      }
    ]
  });
}