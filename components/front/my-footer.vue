<template>
<div class="iq-footer">
  <div class="row">
    <div class="col-sm col-12">
      <div class="player row">
        <div class="details col-6 col-sm-4 col-md-4 col-lg-4">
          <div class="track-art"></div>
          <div>
            <div class="track-name">Pop Smoke</div>
            <div class="track-artist">Cascada</div>
          </div>
        </div>
        <div class="slider_container slider_music col-sm-5 col-md-4 col-lg-4">
          <div class="current-time">00:00</div>
          <input type="range" min="1" max="100" value="0" class="seek_slider"/>
          <div class="total-duration">00:00</div>
        </div>
        <div class="buttons col-6 col-sm-3 col-md-2 col-lg-2">
          <div class="prev-track"><i class="fas fa-step-backward fa-2x"></i></div>
          <div class="playpause-track"><i class="fas fa-play-circle fa-3x"></i></div>
          <div class="next-track" ><i class="fas fa-step-forward fa-2x"></i></div>
        </div>
        <div class="slider_container col-sm-6 col-md-2 col-lg-2">
          <i class="fa fa-volume-down"></i>
          <input type="range" min="1" max="100" value="99" class="volume_slider">
          <i class="fa fa-volume-up"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "my-footer"
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
.playpause-track, .prev-track, .next-track {
  padding: 0 15px;
  color: var(--iq-white);
  transition: opacity .2s;
}
.playpause-track:hover, .prev-track:hover, .next-track:hover {
  opacity: 1.0;
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
i.fa-volume-up{
  padding: 10px;
  color: var(--iq-white);
}
i.fa-volume-down{
  padding: 10px;
  color: var(--iq-white);
}
</style>
