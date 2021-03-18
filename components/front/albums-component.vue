<template>
    <div class="content-page">
      <div class="row">
        <div class="col-lg-7">
          <div class="iq-card iq-card-transparent iq-song-back">
            <div class="iq-card-body">
              <div class="iq-music-img1">
                <div class="equalizer1">
                  <span class="bar1 bar-1"></span>
                  <span class="bar1 bar-2"></span>
                  <span class="bar1 bar-3"></span>
                  <span class="bar1 bar-4"></span>
                  <span class="bar1 bar-5"></span>
                </div>
              </div>
              <div class="player1 row">
                <div class="details1 music-list col-6 col-sm-6 col-lg-6">
                  <div class="track-art1" style="background-image: url('/headphone-img.png')"></div>
                  <div>
                    <div class="track-name1">Pop Smoke</div>
                    <div class="track-artist1">Cascada</div>
                  </div>
                </div>
                <div class="slider_container1 col-sm-5 col-lg-5">
                  <div class="current-time1">00:00</div>
                  <input type="range" min="1" max="100" value="0" class="seek_slider1"/>
                  <div class="total-duration1">00:00</div>
                </div>
                <div class="buttons1 col-6 col-sm-2 col-lg-3">
                  <div class="prev-track1"><i class="fas fa-step-backward fa-2x"></i></div>
                  <div class="playpause-track1" ><i class="fas fa-play-circle fa-3x"></i></div>
                  <div class="next-track1" ><i class="fas fa-step-forward fa-2x"></i></div>
                </div>
                <div class="slider_container1 col-sm-4 col-lg-4">
                  <i class="fa fa-volume-down"></i>
                  <input type="range" min="1" max="100" value="99" class="volume_slider1" onchange="setVolume1()">
                  <i class="fa fa-volume-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <ul class="list-unstyled row">
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
            <li class="col-lg-6 col-md-6">
              <div class="mini-music-list">
                <div class="p-0">
                   <div class="media">
                     <div class="iq-thumb-hotsong">
                       <div class="iq-music-overlay"></div>
                       <nuxt-link to="#">
                         <img src="/better%20now.png" class="img-fluid avatar-60">
                       </nuxt-link>
                       <div class="overlay-music-icon">
                          <nuxt-link to="#">
                            <i class="far fa-play-circle"></i>
                          </nuxt-link>
                       </div>
                     </div>
                     <div class="media-body">
                       <h6 class="mb-0">Better Now</h6>
                       <small>Beyonce</small>
                     </div>
                   </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <front-cat-top-songs/>
      </div>
    </div>
</template>

<script>
export default {
name: "albums-component"
}
</script>

<style scoped>
.content-page{
  padding: 20px 15px 20px;
}
.col-lg-7{
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
}
.iq-card {
  background: var(--iq-light-card);
  border-radius: 15px;
  margin-bottom: 30px;
  border: none;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
}

.iq-song-back {
  background: url('/realease-back.jpg') center center no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 0px 30px;
}
.iq-song-back:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  background: #01041b;
  background: -moz-linear-gradient(top, #01041b 0%, #0a0d23 50%, #555766 100%);
  background: -webkit-linear-gradient(top, #01041b 0%, #0a0d23 50%, #555766 100%);
  background: linear-gradient(to bottom, #01041b 0%, #0a0d23 50%, #555766 100%);
  opacity: 0.9;
  border-radius: 0px 30px;
}
.iq-card-body{
  padding: 20px;
}
.iq-music-img1{
  height: 350px;
  position: relative;
  z-index: 9;
}
.equalizer1{
  position: relative;
  height: 200px;
  width: 300px;
  margin: 0 auto;
  transform: translate(0%, 50%) scale(0.25);
}
.bar1{
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
  z-index: 1;}
.details1 {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: auto;
  top: -355px;
  left: 5px;
}
.track-art1 {
  margin-right: 25px;
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
.slider_container1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.current-time1, .total-duration1 {
  padding: 10px;
  color: var(--iq-white);
}
input[type="range"] {
  background: var(--iq-primary);
}
.seek_slider1{
  width: 80%;
  appearance: none;
  height: 5px;
  transition: opacity .2s;
  border-radius: 10px;
}
.volume_slider1{
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
.buttons1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}
.playpause-track1, .prev-track1, .next-track1 {
  padding: 0 15px;
  color: var(--iq-white);
  transition: opacity .2s;
}
.mini-music-list{
  border-radius: 15px;
  border: none;
  margin-bottom: 30px;
  background: transparent;
  box-shadow: none;
}
.mini-music-list .media{
  align-items: center!important;
  display: flex;
}
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
  font-size: 24px;
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
  border-radius: 0px 30px 30px 30px;
}
.iq-thumb-hotsong:hover .iq-music-overlay {
  opacity: 1;
}
.iq-thumb-hotsong .overlay-music-icon a {
  display: inline-block;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  line-height: 34px;
  font-size: 20px;
  color: var(--iq-white);
}
.iq-thumb-hotsong:hover .overlay-music-icon {
  top: 50%;
  left: 50%;
  opacity: 1;
}
.iq-thumb-hotsong img {
  border-radius: 0px 30px 30px 30px;
  opacity: 1;
}
.avatar-60 {
  height: 60px;
  width: 60px;
  line-height: 60px;
}
.media .media-body{
  margin-left: 1rem;
}
.media .media-body h6{
  font-size: 1.0em;
  line-height: 1.5;
  color: var(--iq-title-text);
  font-weight: 600;
}
</style>
