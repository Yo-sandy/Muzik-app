<template>
  <div class="player-volume">
    <div class="volume-box">
      <span class="volume-down"><i class="material-icons">remove</i></span>
      <input type="range" class="volume-range" step="1" value="80" min="0" max="100"
             oninput="song.volume = this.value/100">
      <span class="volume-up"><i class="material-icons">add</i></span>
    </div>
    <div class="btn-box">
      <i class="material-icons volume" @click="handleVolume">volume_up</i>
    </div>
  </div>
</template>

<script>
export default {
name: "volume-button"
}
</script>

<style scoped>
</style>
