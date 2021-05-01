export const state = ()=> ({
  data:[]
})

  export const getters = {
    getArtistByID :(state) => (artist_slug) =>{
      const  artist =  state.data.filter(artist => artist.slug === artist_slug)[0]
      console.log(artist)
     return artist;
    },
  }


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


