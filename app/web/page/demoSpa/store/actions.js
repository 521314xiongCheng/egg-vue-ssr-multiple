import axios from 'axios'
export default {
  set_ListData({ commit }) {
    axios.get(`https://mock.marykay.com.cn/mock/272/staff/list`,).then(res => {
      commit('setListData', res.data.list)
    })
  },
  set_ListItem({ commit }) {
    axios.get(`https://mock.marykay.com.cn/mock/272/staff/detail`,).then(res => {
      commit('setListItem', res.data.student)
    })
  }
}