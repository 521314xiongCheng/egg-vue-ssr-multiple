<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
  </div>
</template>
<style lang="css">
  body {
    margin: 0 0px;
  }

  a {
    text-decoration: none;
  }

  @import "../../../asset/css/global.css";
</style>
<script type="text/babel">
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  Vue.use(ElementUI)
  export default{
    components: {
      LayoutHeader,
      LayoutContent
    }
  }
</script>
