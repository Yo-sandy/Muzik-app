<template>
  <div class="content-page">
    <div class="iq-card p-md-3">
      <div class="col-lg-12">
        <div class="row" v-if="writer != undefined && Object.keys(writer).length > 0">
          <h2 class="text-center trending-song">{{writer.name}}</h2>
          <hr>
          <div class="col-lg-6 songs-item"
               v-for="(single_song, index) in writer.songs.data"
               :key="single_song.id"
          >
            <div class="player2">
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
                  <div class="track-name1">{{single_song.title}}</div>
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
</template>

<script>
export default {
  name: "slug",
  data(){
    return{
      writer:{}
    }
  },
  mounted() {
    this.loadData();
    if(process.client){

      window.focus();
      window.scroll(0, 1)
      window.scrollTo(0, 1)
    }
  },
  methods:{
    loadData(){
      this.$store.dispatch('writers.js/getWriter').then(res=>{
        this.writer = this.$store.getters['writers/getWriterByID'](this.$route.params.slug)
      })
    },

    playSong(single_song, index){
      this.$store.dispatch('player/setPlayerSong', {song:single_song, index:index});
      this.$store.dispatch('player/setSong', this.writer.songs.data);
    },
  },
}
</script>

<style scoped>

.trending-song{
  font-weight: 600;
}
.track-name1 {
  font-size: 18px;
  line-height: 26px;
  color: var(--iq-title-text);
}
.track-artist1 {
  font-size: 14px;
  color: var(--iq-title-text);
}
/* ================================================Music img css ============================================*/

.mini-music-list a{
  transition: all 0.5s ease-out 0s;
}
.overlay-music-icon{
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
}
.overlay-music-icon i{
  color: var(--iq-white);
  cursor: pointer;
  font-size: 30px;
}
.iq-thumb-hotsong{
  position: relative;
  overflow: hidden;
}
.iq-thumb-hotsong .iq-music-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 0px 20px 0px 20px;
}
.iq-thumb-hotsong:hover .iq-music-overlay {
  opacity: 1;
}
.iq-thumb-hotsong .overlay-music-icon a {
  display: inline-block;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  line-height: 34px;
  font-size: 30px;
  color: var(--iq-white);
}
.iq-thumb-hotsong:hover .overlay-music-icon {
  top: 50%;
  left: 50%;
  opacity: 1;
}
.iq-thumb-hotsong img {
  border-radius: 0px 20px 0px 20px;
  opacity: 1;
}
.avatar-60 {
  height: 60px;
  width: 60px;
  line-height: 60px;
}
/*=================================================Music img css close=======================================*/

.player2{
  display: flex;
  border-bottom: 1px solid var(--iq-border-light);
  justify-content:space-between;
  padding: 5px 0;
}
.song-artist{
  width: 300px;
}
.player2 span{
  font-size: 20px;
  color: var(--iq-title-text);
}
.dropstart i{
  font-size: 20px;
  color: var(--iq-primary);
}
@media only screen and (max-width: 600px){
  .player2 .song-artist{
    max-width: 200px!important;

  }
  .song-artist .track-name1 {
    text-overflow: ellipsis !important;
    white-space: nowrap;
    overflow: hidden!important;
  }
  .song-artist .track-artist1 {
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis!important;
  }

}
</style>
