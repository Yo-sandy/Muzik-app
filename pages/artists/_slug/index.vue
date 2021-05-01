<template>
  <div class="slug-section">
    <div class="content-page">
      <div class="iq-card p-md-3">
        <div class="col-lg-12">
          <div class="row" v-if="artist != undefined && Object.keys(artist).length > 0">
            <h2 class="text-center trending-song">{{artist.name}}</h2>
            <hr>
            <div class="col-lg-6 songs-item"
                 v-for="(single_song, index) in artist.songs.data"
                 :key="single_song.id"
            >
              <div class="player2" >
                <div class="align-items-center d-flex">
                  <div
                    class="iq-thumb-hotsong"
                    @click="playSong(single_song, index)">
                    <div class="iq-music-overlay"></div>
                    <div>
                      <img src="/headphone-img-2.png" class="img-fluid avatar-60">
                    </div>
                    <div class="overlay-music-icon">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                  <div class="ms-1 song-artist">
                    <div class="track-name1">{{single_song.song_name}}</div>
                    <div class="track-artist1">{{single_song.artists}}</div>
                  </div>
                </div>
                <span class="mb-0 col-md-2 iq-m-time" style="width: 50px">
                {{ single_song.song_details.formated_duration }}
              </span>
                <div class="dropstart">
                <span class="dropdown"  data-bs-toggle="dropdown" role="button">
                  <i class="fas fa-ellipsis-v"></i>
                </span>
                  <div class="dropdown-menu">
                    <nuxt-link to="/song-details" class="dropdown-item">
                      <i class="fas fa-eye text-dark me-md-2"></i>View
                    </nuxt-link>
                    <nuxt-link to="#" class="dropdown-item">
                      <i class="fas fa-file-download text-dark me-md-2"></i> Download
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="mt-md-4">
          <ul class="pagination">
            <li class="page-item">
              <nuxt-link class="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </nuxt-link>
            </li>
            <li class="page-item d-flex">
              <nuxt-link class="page-link" to="#" v-for="i in 5" :key="i">1</nuxt-link></li>
            <li class="page-item">
              <nuxt-link class="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slug",
  data(){
    return{
      artist:{}
    }
  },
  mounted() {
    this.loadData();
    this.$store.dispatch('artists/getArtists')
    if(process.client){

      window.focus();
      window.scroll(0, 1)
      window.scrollTo(0, 1)
    }
  },
  methods:{
    loadData(){
      this.$store.dispatch('artists/getArtists').then(res=>{
        this.artist = this.$store.getters['artists/getArtistByID'](this.$route.params.slug)
      })

    },

    playSong(single_song, index){
      this.$store.dispatch('player/setPlayerSong', {song:single_song, index:index});
      this.$store.dispatch('player/setSong', this.artist.data);
    },
  },


}
</script>

<style scoped>


</style>
