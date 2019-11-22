<template> 
  <div>
    <el-button @click="handle">点击</el-button>
    <el-table
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
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    lists(){
      return this.$store.state.list
    }
  },
  methods: {
    fetchApi(store) {
      return store.dispatch('set_ListData');
    },
    handle(){
      this.$router.push('/detail')
      // window.location = '/staff/detail'
    },
  },
  beforeMount() {
    if (!(this.lists &&this.lists.length>0) ){
      // this.fetchApi(this.$store)
    }
  },
}
</script>

<style>

</style>