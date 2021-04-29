
export const state = ()=> ({
  data: []
})

// export const getters = {
//   getWriterByID :(state) => (writer_slug) =>{
//     const writer =  state.data.filter(writer => writer.slug === writer_slug)[0]
//     return writer;
//   },
// }


export const mutations = {
  SET_WRITERS(state, writers){
    state.data = writers
  }
}

export const actions = {
  async getWriters({commit}) {
    const {data} = await this.$axios.get('/writers')
    console.log(data)
    commit("SET_WRITERS",data)
  }
}


