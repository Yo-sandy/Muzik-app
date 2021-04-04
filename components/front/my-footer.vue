<template>
<div class="iq-footer">
  <div class="row">
    <div class="col-sm col-12">
      <div class="player row ">
<!--=============================================Song Name And Artist Name===========================================-->
        <div class="details col-12 col-sm-6 col-md-4 col-lg-4 ">
          <div class="track-art"></div>
          <div>
            <div class="track-name">{{ $store.state.player.song.song_name }}</div>
            <div class="track-artist">{{ $store.state.player.song.artists }}</div>
          </div>
        </div>
<!--============================================Song Name And Artist Name Close =====================================-->

<!--============================================ Previous Song Play Song Next Song ==================================-->
        <div class="buttons col-12 col-sm-3 col-md-2 col-lg-2">
          <audio
            ref="audioElement"
            :src="$store.state.player.song.song_file"
            @timeupdate="updateCurrentTime">
          </audio>
          <div class="prev-track" @click="prevSong"><i class="fas fa-step-backward fa-2x"></i></div>
          <div style="cursor: pointer">
            <i class=" far fa-play-circle fa-3x text-white"
               v-if="!$store.state.player.isPlaying"
               @click="player"
            ></i>
            <i class="far fa-pause-circle fa-3x text-white"
               @click="player"
               v-else></i>
          </div>
          <div class="next-track"  @click="nextSong" ><i class="fas fa-step-forward fa-2x"></i></div>
        </div>
<!--======================================== Previous Song Play Song Next Song Close ================================-->

<!--======================================== Song Time And Duration =================================================-->
        <div class="slider_container slider_music col-12 col-sm-12 col-md-7 col-lg-5">
          <div class="current-time">{{calculateTime(currentTime)}}</div>
          <input
            type="range"
            min="0"
            :max="totalDurationSeconds"
            :value="currentTime"
            class="seek_slider"
            @change="seekTo"
          />
          <div class="total-duration">{{calculateTime(totalDurationSeconds)}}</div>
<!--======================================== Song Time And Duration Close ===========================================-->
<!--======================================== Audio Volume ===========================================================-->
          <div class="   col-sm-6 col-md-4 col-lg-4 d-flex align-items-center">
           <div class=" volume-icon">
             <i class="fa fa-volume-up" @click="showVolume = !showVolume"></i>
           </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              :value="$store.state.player.volume"
              class="volume_slider"
              v-show="showVolume"
              @input="volumeChange"

            />
          </div>
<!--======================================== Audio Volume Close =====================================================-->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "my-footer",
  data(){
    return{
      isPlaying:false,
      totalDuration:"00:00",
      totalDurationSeconds: 0,
      currentTime:0,
      showVolume:false,
    }
  },
  watch:{
    currentTime(seconds){
    }
  },
  mounted() {
    this.$store.dispatch('player/getSongs')
    this.$store.watch(state => {
        return this.$store.state.player.isPlaying;
     }, (newValue)=>{
       const audioPlayer = this.$refs.audioElement;
       if(newValue){
          audioPlayer.play()
       }else{
         audioPlayer.pause()
    }
     })
  },

  methods:{
    //************************************************************************************* Audio Play Pause
    player(){
      const audioPlayer = this.$refs.audioElement;
      if(audioPlayer.paused){
        this.$store.dispatch("player/setPlayerState", true)
        audioPlayer.play();
      }else{
        this.$store.dispatch("player/setPlayerState", false)
        audioPlayer.pause();
      }
      this.totalDurationSeconds = audioPlayer.duration;
      this.currentTime = audioPlayer.currentTime
    },
    //************************************************************************************* Audio Play Pause Close
    //************************************************************************************* Volume Change
    volumeChange(e){
      const audioPlayer = this.$refs.audioElement;
      const volume =parseFloat(e.target.value)
      audioPlayer.volume =volume ;// 0.5
      this.$store.dispatch("player/setPlayerVolume", volume)
    },
    //************************************************************************************* Volume Change Close
    //************************************************************************************* Song Time Slider
    calculateTime(secs){
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    },
    updateCurrentTime(){
      const audioPlayer = this.$refs.audioElement;
      this.currentTime = audioPlayer.currentTime
    },
    seekTo(e){
      const time = e.target.value;
      const audioPlayer = this.$refs.audioElement;
      audioPlayer.currentTime = time;
      this.currentTime = audioPlayer.currentTime
    },
    //************************************************************************************* Song Time Slider Close
    //************************************************************************************* Prev Song
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
    //************************************************************************************ Prev Song Close
    //************************************************************************************ Next Song
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
  //************************************************************************************** Next Song Close

  }
}
</script>

<style scoped>
.iq-footer {
  padding: 0 15px 0 30px;
  min-height: 73px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: inline-block;
  z-index: 99;
  background: rgba(1, 4, 27, 0.6);
  margin: 0;
  touch-action: pan-x;
}
.player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
.details {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .details{
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
}
.track-art {
  margin-right: 5px;
  height: 40px;
  width: 40px;
  background-image: url('/headphone-img.png');
  background-size: cover;
  border-radius: 15%;
}
.track-name {
  font-size: 18px;
  line-height: 26px;
  color: var(--iq-white);
}
.track-artist {
  font-size: 14px;
  color: var(--iq-white);
}
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}

.slider_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.current-time, .total-duration{
  padding: 10px;
  color: var(--iq-white);
}
input[type="range"] {
  background: var(--iq-primary);
}
 .seek_slider{
  width: 80%;
  appearance: none;
  height: 5px;
  border-radius: 10px;
 }
 /**********************************************volume control css****************************************/
 .volume-icon{
   position: relative;
   cursor: pointer;
 }
.volume_slider{
  width: 120px;
  appearance: none;
  height: 5px;
  border-radius: 10px;
}
@media screen and (max-width: 600px) {
  .volume_slider{
    position: fixed;
    transform: rotate(270deg);
    right:-25px;
    bottom: 100px;

  }
  .volume_slider:focus + *{
    position: fixed;
  }
}
/**********************************************volume control css close****************************************/
.prev-track{
  color: var(--iq-white);
  cursor: pointer;
  margin-right: 5px;
}
.next-track{
  color: var(--iq-white);
  cursor: pointer;
  margin-left: 5px;
}
i.fa-volume-up{
  padding: 10px;
  color: var(--iq-white);
}

/*============================================== Progress Bar===================================================*/

</style>
