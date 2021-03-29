<template>
  <div class="player">
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
.player .volume-box {
  display: none;
  position: absolute;
  left: 50%;
  top: 295px;
  transform: translateX(-50%);
  z-index: 1;
  padding: 0 20px;
}
.player .volume-box .volume-down {
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #72646f;
}
.player .volume-box .volume-up {
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #72646f;
}
.player .volume-box .volume-up::selection {
  background-color: unset;
}
.player .volume-box input[type="range"] {
  height: 5px;
  width: 150px;
  margin: 0 0 15px 0;
}
.player .volume-box.active {
  display: block;
}
</style>
