const BASE_URL_FOR_SONG = "https://penduraj.com/api/stream/"


export const state = ()=> ({
  song: {
    song_name: "O Sanwre",
    category: "devotional",
    song_file: BASE_URL_FOR_SONG+"O Sanwre (PenduRaj.CoM)_1556729433.mp3",
    artists: "Vikash Bagri Haryana"
  },
  isPlaying:false,
  volume:0.5
})



export const mutations = {
  SET_PLAYER_SONG(state, song){
    state.song = {
      song_name: song.song_name,
      category: song.category,
      song_file: BASE_URL_FOR_SONG+song.song_file,
      artists: song.artists
    }
  },
  SET_PLAYER_STATE(state, isPlaying){
    state.isPlaying = isPlaying
  },
  SET_PLAYER_VOLUME(state, volume){
    state.volume = volume
  },
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
  }
}


