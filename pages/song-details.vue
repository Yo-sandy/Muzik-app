<template>
  <div class="content-page">
    <div class="row">
      <div class="col-lg-12">
        <div class="iq-card">
          <div class="iq-card-header">
              <h4 class="song-name">Pop Smoke</h4>
          </div>
          <div class="song-detail">
             <div class="text-center">
                <h3>Song Details</h3>
               <div class="song-details text-center">
                <ul class="col col-md-6">
                  <li class="list-group-item bharat-color">Song Name: Ghunghat Khol</li>
                  <li class="list-group-item bharat-color">Singer Name:<nuxt-link to="#" class="text-dark">Renuka Panwar</nuxt-link></li>
                  <li class="list-group-item bharat-color">Writer: <nuxt-link  to="#" class="text-dark">Bholu Jasia</nuxt-link></li>
                  <li class="list-group-item bharat-color">Music: <nuxt-link  to="#" class="text-dark">Rj Records</nuxt-link></li>
                  <li class="list-group-item bharat-color">Label: <nuxt-link to="#" class="text-dark">Jugni Series Cassettes</nuxt-link></li>
                  <li class="list-group-item bharat-color">Remix By: <nuxt-link to="#" class="text-dark">Dj Yogesh Lad</nuxt-link></li>
                  <li class="list-group-item bharat-color">Total  Downloads  : 419</li>
                  <li class="list-group-item bharat-color">Lyrics:  Not Available</li>
                </ul>
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
  name: "song=details"
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
.iq-card-header{
  padding: 20px;
  align-items: center!important;
  border-bottom: 1px solid var(--iq-border-light);
  text-align: center;
}
.iq-card-header .song-name{
  font-weight: 700;
  font-size: 30px;
  color: var(--iq-title-text);
}
.song-detail{
  padding: 20px;
}
</style>
