
export const state = ()=> ({
  data: []
})



export const mutations = {
  SET_CATEGORIES(state, categories){
    state.data = categories
  }
}

export const actions = {
  async getCategories({commit}) {
    const {data} = await this.$axios.get('/categories')
    commit("SET_CATEGORIES",data)
  }
}


