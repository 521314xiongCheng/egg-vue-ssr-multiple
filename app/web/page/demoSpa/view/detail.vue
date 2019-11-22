<template>
  <div style="width:50%;margin:0 auto;">
    <el-button @click="handle">返回</el-button>
    <el-row>
      <el-col :span="12"><span class="key">学员姓名：</span><span class="value">{{student.name}}</span></el-col>
      <el-col :span="12"><span class="key">学员手机号：</span><span class="value">{{student.phone}}</span></el-col>
      <el-col :span="12"><span class="key">证件类型：</span><span class="value">{{student.type}}</span></el-col>
      <el-col :span="12"><span class="key">证件  号：</span><span class="value">{{student.certificate}}</span></el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    student() {
      return this.$store.state.student?this.$store.state.student:{}
    }
  },
  methods:{
    fetchApi(store) {
      return store.dispatch('set_ListItem');
    },
    handle(){
      this.$router.push('/list')
      // window.location = '/staff/list'
    }
  },
  beforeMount(){
    if (!this.student.name) {
      // this.fetchApi(this.$store)
    }
  }
}
</script>

<style>

</style>