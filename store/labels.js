export const state = ()=> ({
  data:[]
})

export const getters = {
  getLabelByID :(state) => (label_slug) =>{
    const  label =  state.data.data.filter(artist => artist.slug === label_slug)[0]
    return label;
  },
}


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


