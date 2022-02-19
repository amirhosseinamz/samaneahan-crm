
const state = () => ({
  userToken: "",
})
const getters = {
  userToken(state) {
    return state.userToken;
  }
}
const mutations = {
  setToken(state, payload) {
    state.userToken = payload;
  },
}
const actions = {
  async login(context, payload) {


  },
  async register(context, payload) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.post('/api/register', payload, config).then(res => {
      console.log(res);
      if (res.status === 201 && res.data) {
        this.$router.replace('/dashboard/employees');
      }
    });
  },
  async adminLogin(context, payload) {
      this.$axios.post('/api/login', payload).then(res => {
        console.log(res);
        if (res.status === 200 && res.data.data) {
          localStorage.setItem('adminToken', res.data.data);
          this.$router.push('/dashboard');
        }
      })
  },

}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
