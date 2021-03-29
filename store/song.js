
export const state = ()=> ({
  songs: []
})



export const mutations = {
  SET_SONGS(state, songs){
    state.songs = songs
  }
}

export const actions = {
  async getSongs({commit}) {
    const data = await this.$axios.$get('all-songs')
    commit("SET_SONGS",data)
  }
}


