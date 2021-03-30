<template>
<div class="iq-footer">
  <div class="row">
    <div class="col-sm col-12">
      <div class="player row">
<!--=============================================Song Name And Artist Name===========================================-->
        <div class="details col-6 col-sm-4 col-md-4 col-lg-4">
          <div class="track-art"></div>
          <div>
            <div class="track-name">{{ $store.state.player.song.song_name }}</div>
            <div class="track-artist">{{ $store.state.player.song.artists }}</div>
          </div>
        </div>
<!--============================================Song Name And Artist Name Close =====================================-->

<!--============================================ Previous Song Play Song Next Song ==================================-->
        <div class="buttons col-5 col-sm-3 col-md-2 col-lg-2">
          <audio
            ref="audioElement"
            :src="$store.state.player.song.song_file"
            @timeupdate="updateCurrentTime"
          ></audio>
          <div class="prev-track" @click="prevTrack"><i class="fas fa-step-backward fa-2x"></i></div>
          <div>
            <i class=" far fa-play-circle fa-3x text-white"
               v-if="!$store.state.player.isPlaying"
               @click="player"
            ></i>
            <i class="far fa-pause-circle fa-3x text-white"
               @click="player"
               v-else></i>
          </div>
          <div class="next-track"  @click="nextTrack" ><i class="fas fa-step-forward fa-2x"></i></div>
        </div>
<!--======================================== Previous Song Play Song Next Song Close ================================-->

<!--======================================== Song Time And Duration =================================================-->
        <div class="slider_container slider_music col-sm-6 col-md-4 col-lg-4">
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
        </div>
<!--======================================== Song Time And Duration Close ===========================================-->

<!--======================================== Audio Volume ===========================================================-->
        <div class="slider_container col-sm-6 col-md-2 col-lg-2">
          <i class="fa fa-volume-down"></i>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            :value="$store.state.player.volume"
            class="volume_slider"
            @change="volumeChange"
          />
          <i class="fa fa-volume-up"></i>
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
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    }
  },
  watch:{
    currentTime(seconds){
    }
  },

  methods:{
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
    volumeChange(e){
      const audioPlayer = this.$refs.audioElement;
      const volume =parseFloat(e.target.value)
      audioPlayer.volume =volume ;// 0.5
      this.$store.dispatch("player/setPlayerVolume", volume)
      console.log(audioPlayer.duration)
    },
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
    //=====================================================Prev Song =================================================//
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.track.length - 1;
      }
      this.currentTrack = this.track[this.currentTrackIndex];
      this.resetPlayer();
    },
    //=================================================Prev Song Close ===============================================//
    //=================================================Nuxt Song =====================================================//
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.track.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.track[this.currentTrackIndex];
      this.resetPlayer();
    },
  //  ==============================================Nuxt Song Close ==================================================//
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
  transition: all 0.45s ease 0s;
}
.player {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}
.details {
  display: flex;
  align-items: center;
}
.track-art {
  margin-right: 25px;
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
  transition: opacity .2s;
  border-radius: 10px;
 }
.volume_slider{
  width: 60%;
  appearance: none;
  height: 5px;
  transition: opacity .2s;
  border-radius: 10px;
}
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
i.fa-volume-down{
  padding: 10px;
  color: var(--iq-white);
}
/*============================================== Progress Bar===================================================*/

</style>
