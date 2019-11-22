<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
<script type="text/babel">
import Vue from 'vue';
import Layout from 'component/layout/demoSpa'
import createRouter from './router'
import createStore from './store'
const router = createRouter()
const store = createStore()
export default {
  router,
  store,
  components: {
    Layout,
  },
  mounted() {
  },
};
</script>
