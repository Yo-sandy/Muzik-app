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
  SET_PLAYER_SONG(state, song, index=0){
    state.song = {
      song_name: song.song_name,
      category: song.category,
      song_file: BASE_URL_FOR_SONG+song.song_file,
      artists: song.artists
    }
    state.currentIndex = index
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
    commit("SET_SONGS",data)
    commit("SET_PLAYER_SONG", data[0])
  },
  setCurrentIndex({commit}, payload){
    commit("SET_CURRENT_INDEX", payload)
  }
}


