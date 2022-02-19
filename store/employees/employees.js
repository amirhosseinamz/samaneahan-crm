
const state = () => ({
  employeesData: null,
})
const getters = {
  employeesData(state) {
    return state.employeesData;
  }
}
const mutations = {
  setEmployees(state, payload) {
    state.employeesData = payload;
  }
}
const actions = {
  async getEmployees(context) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.get('/api/admin', config).then(res => {
      if (res.status === 200 && res.data) {
        context.commit('setEmployees', res.data.data);
      }
    });
  },
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
