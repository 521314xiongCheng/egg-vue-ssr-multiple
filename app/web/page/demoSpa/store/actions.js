import axios from 'axios'
export default {
  set_ListData({ commit }) {
    return axios.get(`https://mock.marykay.com.cn/mock/272/staff/list`).then(res => {
    commit('setListData', res.data.list)
    })
  },
  set_ListItem({ commit }) {
    return axios.get(`https://mock.marykay.com.cn/mock/272/staff/detail`,).then(res => {
      commit('setListItem', res.data.student)
    })
  }
}