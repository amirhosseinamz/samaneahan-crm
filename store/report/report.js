const state = () => ({

})
const getters = {

}
const mutations = {

}
const actions = {
  async sendReport(context, payload) {
    const URL = `${ process.env.BASE_URL }/api/crm/performance-report`
    debugger;
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.data)
    })
    const responseData = await response.json();
    console.log(responseData);
    if (response.ok) {

    } else {

    }
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
