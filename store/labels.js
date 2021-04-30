export const state = ()=> ({
  data:[]
})



export const mutations = {
  SET_LABELS(state, labels){
    state.data = labels
  }
}

export const actions = {
  async getLabels({commit}) {
    const {data} = await this.$axios.get('/labels ')
    commit("SET_LABELS",data)
  }
}


