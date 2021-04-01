<template>
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
                      @click="$store.dispatch('player/setPlayerSong', single_song, index);">
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
                  <span class="mb-0 col-md-2 iq-m-time" style="width: 50px">5:45</span>
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
        songs[value-1]
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
        songs[value+1]
      )
      this.$store.dispatch('player/setCurrentIndex', value+1)
    },
    //**************************************************Next Song Close **********************************************//
  },
}
</script>

<style scoped>
.content-page{
  padding: 20px 15px 20px;
  margin-bottom: 200px;
}

.col-lg-12{
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
.col-lg-12 .iq-card-body {
  padding: 20px;
}
.iq-card{
  background: var(--iq-light-card);
  border-radius: 15px;
  margin-bottom: 30px;
  border: none;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
}
.iq-card-header{
  padding: 20px;
}
.card-title{
  font-weight: 700;
}
.card img{
  border-top-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.card h5{
  font-weight: 600;
  margin: 0px;
  font-size: 1.400em;
  color: var(--iq-black);
}
.text-primary a{
  color: var(--iq-primary);
}
/*=====================================Music Player=======================*/
.iq-card-body{
  padding: 20px;
}
.iq-realeses-back {
  border-radius: 0px 30px;
  background: url("/realease-back.jpg") center center no-repeat;
  position: relative;
  background-size: cover;
}
.iq-realeses-back:after {
  border-radius: 0px 30px;
  position: absolute;
  content: "";
  top: 0;
  left: auto;
  bottom: 0;
  right: 0;
  width: 50%;
  background: linear-gradient(to right, rgba(83, 100, 141, 0) 0%, rgb(22 12 23) 44%);
}
.iq-card-body .col-lg-5{
  padding-left: 15px;
  padding-right: 15px;
}
.iq-music-img {
  height: 350px;
  position: relative;
  z-index: 9;
}
.equalizer{
  position: relative;
  height: 200px;
  width: 300px;
  margin: 0 auto;
  transform: translate(0%, 50%) scale(0.25);
}
.bar {
  width: 20%;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--iq-white);
  transition: height 0.4s ease;
  animation: bar 0.4s 0s both alternate ease infinite;
  border-radius: 15px;
}
.bar-1 { animation-delay: 0.2s; }
.bar-2 { left: 23%; animation-delay: 0.4s; }
.bar-3 { left: 46%; animation-delay: 0.6s; }
.bar-4 { left: 68%; animation-delay: 0.8s; }
.bar-5 { left: 91%; animation-delay: 1.0s; }
@keyframes bar {
  0% { height: 0; }
  100% { height: 100%; }
}
.player1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  position: relative;
  z-index: 1;
}
.details1 {
  display: flex;
  align-items: center;
  position: absolute;
  left: 5px;
  bottom: 360px;
  }

.track-art1 {
  margin-right: 5px;
  height: 40px;
  width: 40px;
  background-image: url('/headphone-img.png');
  background-size: cover;
  border-radius: 15%;
}
.track-name1 {
  font-size: 18px;
  line-height: 26px;
  color: var(--iq-white);
}
.track-artist1 {
  font-size: 14px;
  color: var(--iq-white);
}
.buttons1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ;
  padding: 0;
}
.prev-track1, .next-track1 {
  padding: 0 15px;
  cursor: pointer;
  color: var(--iq-white);
  transition: opacity .2s;
}


ul.iq-song-slide li p {
  color: var(--iq-white);
  line-height: normal;
}

ul.iq-song-slide li span {
  color: var(--iq-white)
}

ul.iq-song-slide li {
  padding: 10px;
  background: transparent;
  border-radius: var(--iq-border-radius);
  cursor: pointer;
  font-weight: 600;
}
/* ================================================Music img css ============================================*/
.iq-thumb-hotsong{
  position: relative;
  overflow: hidden;
}
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

.songs-item{
  position: relative;
  padding-top: 30px;
  height: 410px;
  z-index: 1;
}
.player2{
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 5px 0;
}
.player2 span{
  font-size: 20px;
  color: var(--iq-white);
}
.dropstart i{
  font-size: 20px;
  color: var(--iq-primary);
}
/*============================================Scroll css =======================================================*/
.scrollbar {
  overflow-y: scroll;
  margin-bottom: 25px;
  scrollbar-color: var(--iq-primary) white;
  scrollbar-width: thin;
}
#style-2::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}
#style-2::-webkit-scrollbar
{
  width: 12px;
  border-radius: 10px;
  -moz-border-radius: 10px;
}
#style-2::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: var(--iq-primary);
}
</style>
