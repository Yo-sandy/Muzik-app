
export const state = ()=> ({
  data:[]
})

  export const getters = {
    getMusicByID :(state) => (music_slug) =>{
      const music =  state.data.data.filter(music => music.slug === music_slug)[0]
      return music;
   },
  }


export const mutations = {
  SET_MUSICS(state, music){
    state.data = music
  }
}

export const actions = {
  async getMusics({commit}) {
    const {data} = await this.$axios.get('/music')
    commit("SET_MUSICS",data)
  }
}


