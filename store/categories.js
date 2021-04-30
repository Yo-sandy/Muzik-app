
export const state = ()=> ({
  data: []
})

export const getters = {
  getCategoryByID :(state) => (category_slug) =>{
    const category =  state.data.filter(category => category.slug === category_slug)[0]
    return category;
  },
}


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


