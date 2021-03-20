<template>
    <div class="content-page">
      <div class="row">
        <div class="col-lg-12">
          <div class="iq-card">
            <div class="iq-card-body">
              <div class="row">
                <div class="col-lg-4">
                  <img src="/single-song-play.png" alt="" class="img-fluid w-100">
                </div>
                <div class="col-lg-8">
                  <div class="iq-music-play-details">
                    <div>
                      <h3>DJ Khaled Featuring</h3>
                      <span>Edyta Gorniak</span>
                      <p>389382k Views</p>
                      <p>Song · 45 Plays</p>
                      <div class="">
                        <button class="hvr-shutter-out-horizontal">Play Music</button>
                      </div>
                    </div>
                    <div class="music-right">
                      <div class="d-flex align-items-center">
                         <div class="iq-circle me-2 shere">
                            <nuxt-link to="#">
                              <i class="fas fa-share-alt"></i>
                            </nuxt-link>
                         </div>
                         <div class="iq-circle me-2 shere">
                            <nuxt-link to="#">
                              <i class="fas fa-heart"></i>
                            </nuxt-link>
                         </div>
                         <div class="iq-circle me-2 shere">
                            <nuxt-link to="#">
                              <i class="fas fa-arrow-down"></i>
                            </nuxt-link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "single-song"
}
</script>

<style scoped>
.content-page{
  overflow: hidden;
  padding: 20px 15px 73px;
  min-height: 100vh;
}
.iq-card {
  background: var(--iq-light-card);
  border-radius: 15px;
  margin-bottom: 30px;
  border: none;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
}
.iq-card-body{
  padding: 20px;
}
.iq-music-play-details{
  justify-content: space-between;
  display: flex;
}
.iq-music-play-details h3{
  font-weight: 600;
  line-height: 1.5;
  color: var(--iq-title-text);
}
.iq-music-play-details p{
  font-weight: 600;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0;
  color: var(--iq-title-text);
}
.iq-circle {
  height: 40px;
  width: 40px;
  line-height: 40px;
  background: var(--iq-white);
  font-size: 20px;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
  border-radius: 50%;
  text-align: center;
}
.shere i{
  color: var(--iq-primary);
}
</style>
