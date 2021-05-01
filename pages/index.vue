<template>
 <div class="home-section">
   <div class="content-page">
     <div class="row">
       <div class="col-lg-12">
         <div class="iq-card iq-realease">
           <div class="iq-card-header">
             <div class="iq-header-title">
               <h4 class="card-title">New Releases</h4>
             </div>
           </div>
           <div class="iq-card-body iq-realeses-back">
             <div class="row">
               <div class="col-lg-5 iq-realese-box">
                 <div class="iq-music-img">
                   <div class="equalizer">
                     <span class="bar bar-1"></span>
                     <span class="bar bar-2"></span>
                     <span class="bar bar-3"></span>
                     <span class="bar bar-4"></span>
                     <span class="bar bar-5"></span>
                   </div>
                 </div>
                 <div class="player1 row">
                   <div class="details1 col-12">
                     <div class="track-art1"></div>
                     <div>
                       <div class="track-name1">{{ $store.state.player.song.song_name }}</div>
                       <div class="track-artist1">{{ $store.state.player.song.artists }}</div>
                     </div>
                   </div>
                   <div class="buttons1 col-12 ">
                     <div class="prev-track1" @click="prevSong">
                       <i class="fas fa-step-backward fa-2x"></i>
                     </div>
                     <div style="cursor: pointer">
                       <i class=" far fa-play-circle fa-3x text-white"
                          v-if="!$store.state.player.isPlaying"
                          @click="$store.dispatch('player/setPlayerState', !$store.state.player.isPlaying)"
                       ></i>
                       <i class="far fa-pause-circle fa-3x text-white"
                          @click="$store.dispatch('player/setPlayerState', !$store.state.player.isPlaying)"
                          v-else></i>
                     </div>
                     <div class="next-track1"  @click="nextSong">
                       <i class="fas fa-step-forward fa-2x"></i>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="col-lg-7 songs-item scrollbar" id="style-2">
                 <div class="player2" v-for="(single_song, index) in $store.state.player.songs" :key="single_song.id" >
                   <div class="align-items-center d-flex">
                     <div
                       class="iq-thumb-hotsong"
                       @click="$store.dispatch('player/setPlayerSong', {song:single_song, index:index});">
                       <div class="iq-music-overlay"></div>
                       <div>
                         <img src="/headphone-img-2.png" class="img-fluid avatar-60">
                       </div>
                       <div class="overlay-music-icon">
                         <i class="far fa-play-circle"></i>
                       </div>
                     </div>
                     <div class="ms-1" style="width: 200px">
                       <div class="track-name1">{{single_song.song_name}}</div>
                       <div class="track-artist1">{{single_song.artists}}</div>
                     </div>
                   </div>
                   <span class="mb-0 col-md-2 iq-m-time" style="width: 50px">{{ single_song.song_details.formated_duration }}</span>
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
         </div>
         <front-cat-trending-song/>
         <front-cat-featured-albums/>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "home-component",
  data(){
    return{
      songs: [],
    }
  },
  mounted() {
    this.getSongs();
},
  methods:{
     async getSongs(){
      const url = "all-songs";
      const {data} = await this.$axios.get(url);
      this.songs = data;
    },
    //*************************************************Prev Song *****************************************************//
    prevSong(){
      let value = this.$store.state.player.currentIndex
      const songs = this.$store.state.player.songs

      if(value === 0) return

      this.$store.dispatch(
        'player/setPlayerSong',
        {song:songs[value - 1], index:value-1}
      )
      this.$store.dispatch('player/setCurrentIndex', value-1)
    },
    //*************************************************Prev Song Close ***********************************************//
    //*************************************************Next Song *****************************************************//
    nextSong(){
      let value = this.$store.state.player.currentIndex
      const songs = this.$store.state.player.songs

      if((value + 1) === songs.length) return

      this.$store.dispatch(
        'player/setPlayerSong',
        {song:songs[value + 1], index:value+1}
      )
      this.$store.dispatch('player/setCurrentIndex', value+1)
    },
    //**************************************************Next Song Close **********************************************//
  },
}
</script>

<style scoped>
</style>


