
const state = () => ({
  userToken: "",
  userName: "",
})
const getters = {
  userToken(state) {
    return state.userToken;
  },
  userName(state) {
    return state.userName;
  }
}
const mutations = {
  setToken(state, payload) {
    state.userToken = payload;
  },
  setUserName(state, payload) {
    state.userName = payload;
  }
}
const actions = {
  async register(context, payload) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.post('/api/employees', payload, config).then(res => {
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
          let _temp = sessionStorage.getItem("previousRoute");
          if (_temp) {
            this.$router.replace(_temp);
          } else {
            this.$router.replace("/dashboard");
          }
          context.dispatch("getUser");
        }
      })
  },
  getUser(context) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.get('/api/user', config).then(res => {
      if (res.status === 200 && res.data) {
        context.commit('setUserName', res.data.name);
      }
    })
  },
  logout(context) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.get('/api/logout', config).then(res => {
      if (res.status === 200 && res.data) {
        console.log(res.data)
        localStorage.removeItem('adminToken');
        this.$router.replace('/admin/login');
      }
    })
  }

}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
