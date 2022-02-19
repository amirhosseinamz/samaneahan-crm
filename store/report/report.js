const state = () => ({
  finalAnswers: null,
  feedbackAnswers: null,
  reportsData: null,
})
const getters = {
  finalAnswers(state) {
    return state.finalAnswers;
  },
  feedbackAnswers(state) {
    return state.feedbackAnswers;
  },
  reportsData(state) {
    return state.reportsData;
  }
}
const mutations = {
  setAnswers(state, payload) {
    state.finalAnswers = payload.finalAnswers;
    state.feedbackAnswers = payload.feedbackAnswers;
  },
  setReports(state, payload) {
    state.reportsData = payload;
  }
}
const actions = {
  async sendReport(context, payload) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    debugger;
    this.$axios.post('/api/crm/performance',payload , config).then(res => {
      console.log(res)
      if (res.status === 201 && res.data) {
        this.$router.replace('/dashboard/report');
      }
    });
  },
  getFeedbacks(context) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.get('/api/crm/performance/feedback', config).then(res => {
      console.log(res)
      if (res.status === 200 && res.data) {
        const feedbackAnswers = res.data.data.feedback_answers.map(item => {
          return {
            name: item.answer,
            value: item.category,
          }
        });
        const finalAnswers = res.data.data.final_answers.map(item => {
          return {
            name: item.answer,
            value: item.category,
          }
        });

        // const feedbacks = res.data.data.feedbacks;
        context.commit('setAnswers', { feedbackAnswers, finalAnswers });
      }
    });
  },
  getReports(context) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
      }
    }
    this.$axios.get('/api/crm/performance', config).then(res => {
      console.log(res)
      if (res.status === 200 && res.data) {
        context.commit('setReports', res.data.data);
      }
    });
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
