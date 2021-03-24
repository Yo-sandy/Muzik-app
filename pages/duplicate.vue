<template>
  <div class="content-page">
    <div class="row">
      <!--===============================================View Album========================================================-->
      <div class="col-lg-12">
        <div class="iq-card iq-realease">
          <div class="iq-card-body iq-realeses-back">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex">
                  <img src="/single-song-play.png" class="view-img w-100">
                  <div class="album-details text-white ms-2">
                    <h3>DJ Khaled Featuring</h3>
                    <span>Edyta Gorniak</span>
                    <p>389382k Views</p>
                    <p>Song · 45 Plays</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 iq-realese-box">
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
                  <div class="slider_container1 col-sm-5 col-lg-5">
                    <div class="current-time1">00:00</div>
                    <input type="range" min="1" max="100" value="0" class="seek_slider1"/>
                    <div class="total-duration1">00:00</div>
                  </div>
                  <div class="buttons1 col-6 col-sm-2 col-lg-3 ">
                    <div class="prev-track1"><i class="fas fa-step-backward fa-2x"></i></div>
                    <div class="playpause-track1" ><i class="fas fa-play-circle fa-3x"></i></div>
                    <div class="next-track1" ><i class="fas fa-step-forward fa-2x"></i></div>
                  </div>
                  <div class="slider_container1 col-sm-4 col-lg-4">
                    <i class="fa fa-volume-down"></i>
                    <input type="range" min="1" max="100" value="99" class="volume_slider1"  >
                    <i class="fa fa-volume-up"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--===============================================View Album Close==================================================-->

      <!--===============================================Album Song List===================================================-->
      <div class="content-page">
        <div class="iq-card p-md-3">
          <div class="col-lg-12">
            <div class="row">
              <h2 class="text-center trending-song">Song List</h2>
              <hr>
              <div class=" songs-item" v-for="i in 10" :key="i">
                <div class="player2">
                  <div class="align-items-center d-flex ">
                    <div>
                      <img src="/headphone-img-2.png" class="img-border-radius">
                    </div>
                    <div class="ms-2">
                      <div class="track-name1">Pop Smoke</div>
                      <div class="track-artist1">Cascada</div>
                    </div>
                  </div>
                  <span class="mb-0 col-md-2 iq-m-time" >5:45</span>
                  <span> <i class="far fa-star"></i></span>
                  <span><nuxt-link to="#" class="far fa-play-circle text-decoration-none text-dark"></nuxt-link></span>
                  <div class="dropstart">
                      <span class="dropdown"  data-bs-toggle="dropdown" role="button">
                        <i class="fas fa-ellipsis-v mt-md-3"></i>
                      </span>
                    <div class="dropdown-menu">
                      <nuxt-link to="/song-details" class="dropdown-item">
                        <i class="fas fa-eye text-dark me-md-2"></i>View
                      </nuxt-link>
                      <nuxt-link to="#" class="dropdown-item">
                        <i class="fas fa-file-download text-dark"></i> Download
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--===============================================Album Song List Close=============================================-->
    </div>
  </div>
</template>

<script>
export default {
  name: "home-component"
}
</script>

<style scoped>
.content-page{
  padding: 20px 15px 20px;
  margin-bottom: 150px;
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
  z-index: 1;}

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
.view-img{
  height: 448px;
  max-height: 100%;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
}
/* ============================================song list css==============================*/
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
.img-border-radius {
  border-radius: var(--iq-border-radius);
}

.player2{
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 5px 0;
}
.player2 span{
  font-size: 20px;
  color: var(--iq-title-text);
}
.dropstart i{
  font-size: 20px;
  color: var(--iq-primary);
}
/*=====================================Image Hover Album Details==============================*/

</style>
