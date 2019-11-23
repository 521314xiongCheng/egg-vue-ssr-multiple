<template> 
  <div>
    <el-button @click="handle">点击</el-button>
    <!-- element el-table ssr有问题，只渲染了结构，内容没有显示 -->
    <!-- <el-table
      :data="lists"
      :stripe="true"
      border
      style="width:100%"
    >
      <slot name="between"></slot>
      <el-table-column
        prop="id"
        label="Domain"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="IntouchAccount"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="url"
        label="Name"
        align="center"
      >
      </el-table-column>
    </el-table> -->
    <el-row>
      <div v-for="item in lists" :key="item.id">
        <el-col :span="8">{{item.id}}</el-col>
        <el-col :span="8">{{item.title}}</el-col>
        <el-col :span="8">{{item.url}}</el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    fetchApi(store) {
      return store.dispatch('set_ListData');
    },
    handle(){
      this.$router.push('/detail')
    },
  },
  beforeMount() {
    if (!(this.lists &&this.lists.length>0) ){
      this.fetchApi(this.$store)
    }
  },
  computed: {
    lists(){
      return this.$store.state.list
    }
  },
}
</script>

<style>

</style>