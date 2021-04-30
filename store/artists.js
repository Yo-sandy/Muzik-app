export const state = ()=> ({
  data:[]
})



export const mutations = {
  SET_ARTISTS(state, artists){
    state.data = artists
  }
}

export const actions = {
  async getArtists({commit}) {
    const {data} = await this.$axios.get('/artists ')
    commit("SET_ARTISTS",data)
  }
}


