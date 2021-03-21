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
                      <div class="details1 music-list col-6 col-sm-6 col-lg-6">
                        <div class="track-art1" style="background-image: url('/headphone-img.png')"></div>
                         <div>
                           <div class="track-name1">Pop Smoke</div>
                           <div class="track-artist1">Cascada</div>
                         </div>
                      </div>
                      <div class="buttons1 col-6 col-sm-2 col-lg-3">
                        <div class="prev-track1">
                          <i class="fas fa-step-backward fa-2x"></i>
                        </div>
                        <div class="playpause-track1" >
                          <i class="fas fa-play-circle fa-3x"></i>
                        </div>
                        <div class="next-track1" >
                          <i class="fas fa-step-forward fa-2x"></i>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-lg-7" style="padding-top: 20px">
                  <div class="player2" v-for="i in 5" :key="i">
                    <img src="/headphone-img-2.png" class="img-border-radius">
                    <div>
                      <div class="track-name1">Pop Smoke</div>
                      <div class="track-artist1">Cascada</div>
                    </div>
                    <span class="mb-0 col-md-2 iq-m-time" style="color: var(--iq-white)">5:45</span>
                      <p><i class="far fa-star"></i></p>
                      <p><i class="far fa-play-circle"></i></p>
                    <div class="dropstart">
                      <span class="dropdown"  data-bs-toggle="dropdown" role="button">
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div class="dropdown-menu">
                        <nuxt-link to="#" class="dropdown-item">
                          <i class="fas fa-eye text-dark me-md-2"></i>View
                        </nuxt-link>
                        <nuxt-link to="#" class="dropdown-item">
                          <i class="fas fa-trash-alt text-dark me-md-2"></i> Delete
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
        </div>
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
  bottom: auto;
  top: -321px;
  left: 5px; }
.details1.music-list {
  position: relative;
  top: 0;
  bottom: 0;
  left: 15px;
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
.img-border-radius {
  border-radius: var(--iq-border-radius);
}
 .player2{
   display: flex;
   align-items: center;
   justify-content:space-between;
   padding: 5px 0;
   position: relative;
   z-index: 1;
 }
.player2 p{
  font-size: 32px;
  color: var(--iq-white);
}
.dropstart i{
  color: var(--iq-primary);
}

</style>
