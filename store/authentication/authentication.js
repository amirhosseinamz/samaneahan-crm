
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
    const URL = `${ process.env.BASE_URL }/api/login`
    debugger;
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: payload.userName,
        password: payload.password,
      })
    })
    const responseData = await response.json();
    console.log(responseData);
    if (response.ok) {
      localStorage.setItem('userToken', responseData.data);
      await this.$router.replace('/dashboard');
    } else {

    }
    // if (!response.ok) {
    //   throw new Error(responseData.message || 'عملیات با موفقیت انجام نشد')
    // }

  },
  async register(context, payload) {
    const URL = `${ process.env.BASE_URL }/api/admin/register`
    // const response = await this.$axios.$post('api/admin/login', {
    //   userName: payload.userName,
    //   password: payload.password,
    // })
    console.log(JSON.stringify(payload))
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
     })
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.data) {
      // localStorage.setItem('userToken', responseData.data);
      // await this.$router.replace('/dashboard');
    } else {

    }
    // if (!response.ok) {
    //   throw new Error(responseData.message || 'عملیات با موفقیت انجام نشد')
    // }

  },
  async adminLogin(context, payload) {
    const URL = `${ process.env.BASE_URL }/api/admin/login`
    debugger
    this.$axios.get('/sanctum/csrf-cookie').then(response => {
      // Login...
      //console.log(response);
      //console.log('cookie', document.cookie)
      this.$axios.post('/api/admin/login', payload).then(res => {
        console.log(res);
      })
    });
    //console.log(JSON.stringify(payload))
    // const response = await fetch(URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload)
    //  })
    // const responseData = await response.json();
    // console.log(responseData);
    // if (responseData.data) {
    //   // localStorage.setItem('userToken', responseData.data);
    //   // await this.$router.replace('/dashboard');
    // } else {
    //
    // }
    // if (!response.ok) {
    //   throw new Error(responseData.message || 'عملیات با موفقیت انجام نشد')
    // }

  },

}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
