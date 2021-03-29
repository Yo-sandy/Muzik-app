<template>

  <!-- the audio player code starts here -->
  <div class="player" id="player">
    <div class="container">
      <div class="player-contents-wrap">
        <div class="album-art">
          <img :src="currentSong.cover_art_url" class="img" />
        </div>
        <div class="main-controls ">
          <div class="controls">
            <div class="skip-backward">
              <i class="icon ion-ios-skip-backward" @click="skip('backward')"></i>
            </div>
            <div class="play">
              <i class="icon ion-ios-play" v-if="!isPlaying" @click="playCurrentSong"></i>
              <i class="icon ion-ios-pause" v-else @click="pause"></i>
            </div>
            <div class="play">
              <i class="icon ion-ios-volume-mute" @click="mute()"></i>
            </div>
            <div class="skip-forward">
              <i class="icon ion-ios-skip-forward" @click="skip('forward')"></i>
            </div>
          </div>
          <div class="seek">
            <div class="title-and-time">
              <div class="title">
                {{currentSong.title}}: {{currentSong.artist}}
              </div>
              <div class="time">
                {{currentPlayedTime}} / {{duration}}
              </div>
            </div>
            <div class="progress-container">
              <div class="progress" id="progress-wrap">
                <div class="progress-handle" :style="{left:progressPercentageValue}"></div>
                <div class="transparent-seeker-layer" @click="seek"></div>
                <div class="bar" :style="{width:progressPercentageValue}">
                </div>
              </div>
            </div>
            <div class="extra-controls">
              <div class="playlist-icon" @click="toggleShowPlaylist">
                <i class="icon ion-md-list"></i>
              </div>
              <div class="repeat">
                <div class="repeat-info" v-if="onRepeat">
                  {{loop.value}}
                </div>
                <i class="icon ion-ios-repeat" @click="repeat"></i>
              </div>
              <div class="shuffle-icon">
                <i class="icon ion-ios-shuffle" @click="shuffleToggle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- the audio player code ends here -->
</template>

<script>
export default {
name: "duplicate"
}
</script>

<style scoped>

</style>
