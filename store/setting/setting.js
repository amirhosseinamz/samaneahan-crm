const state = () => ({
  categoryData: null,
  feedbacksData: null
})
const getters = {
  categoryData(state) {
    return state.categoryData;
  },
  feedbacksData(state) {
    return state.feedbacksData;
  }
}
const mutations = {
  setFeedback(state, payload) {
    state.categoryData = payload.categoriesNames;
    state.feedbacksData = payload.feedbacks;
  }
}
const actions = {
  async getFeedback(context) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.get('/api/crm/feedback', config).then(res => {
      console.log(res)
      if (res.status === 200 && res.data) {
        const categoriesNames = res.data.data.categories.map(item => {
          return {
            name: item.value,
            value: item.name,
          }
        })
        const feedbacks = res.data.data.feedbacks;
        context.commit('setFeedback', { categoriesNames, feedbacks });
      }
    });
  },
  setFeedback(context, payload) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.post('/api/crm/feedback',payload, config).then(res => {
      console.log(res)
      if (res.status === 201 && res.data) {
        context.dispatch('getFeedback');
      }
    });
  },
  deleteFeedback(context, id) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.delete(`/api/crm/feedback/${ id }`, config).then(res => {
      console.log(res)
      if (res.status === 200 && res.data) {
        context.dispatch('getFeedback');
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
