const BASE_URL_FOR_SONG = "https://penduraj.com/api/stream/"


export const state = ()=> ({
  songs:[],
  song: {},
  currentIndex:0,
  isPlaying:false,
  volume:1.0,
})



export const mutations = {
  SET_SONGS(state, songs){
    state.songs = songs
  },
  SET_PLAYER_SONG(state, payload){
    state.song = {
      song_name: payload.song.song_name,
      category: payload.song.category,
      song_file: BASE_URL_FOR_SONG+payload.song.song_file,
      artists: payload.song.artists
    }
    state.currentIndex = payload.index
  },
  SET_PLAYER_STATE(state, isPlaying){
    state.isPlaying = isPlaying
  },
  SET_PLAYER_VOLUME(state, volume){
    state.volume = volume
  },
  SET_CURRENT_INDEX(state, index){
    state.currentIndex = index
  }
}

export const actions = {
  async setPlayerSong({commit, dispatch, state}, payload) {
    dispatch("setPlayerState", false)
    commit("SET_PLAYER_SONG",payload)
  },

  async setPlayerState({commit}, payload){
    commit("SET_PLAYER_STATE", payload)
  },
  async setPlayerVolume({commit}, payload){
    commit("SET_PLAYER_VOLUME", payload)
  },
  async getSongs({commit}) {
    const {data} = await this.$axios.$get('all-songs')
    const payload = {
      song:data[0],
      index:0
    }
    commit("SET_SONGS",data)
    commit("SET_PLAYER_SONG", payload)
  },
  async setSong({commit}, payload){
      commit("SET_SONGS",payload)
  },
  setCurrentIndex({commit}, payload){
    commit("SET_CURRENT_INDEX", payload)
  }
}
