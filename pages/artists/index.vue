<template>
  <div class="content-page">
    <div class="iq-card">
      <div class="iq-card-header">
        <div class="iq-header-title">
          <h4 class="card-title">Artist List</h4>
        </div>
        <hr>
      </div>
      <div class="iq-card-body">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-6 col-12 mb-2 iq-music-box artist-list"
               v-for="i in 24"
               :key="i"
               aria-hidden="false">
            <div class="card">
              <div class="iq-thumb-artist">
                <div class="iq-music-overlay"></div>
                <nuxt-link to="#" >
                  <img src="/01.png" alt="" class="card-img-top">
                </nuxt-link>
                <nuxt-link to="#" class=" play-btn">
                  <i class="far fa-play-circle"></i>
                </nuxt-link>
              </div>
              <div class="card-body text-center">
                <nuxt-link to="/song-list">
                  Get Sleepy
                </nuxt-link>
                <p>
                  Babu Maan
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav class="mt-md-4">
          <ul class="pagination">
            <li class="page-item">
              <nuxt-link class="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </nuxt-link>
            </li>
            <li class="page-item d-flex">
              <nuxt-link class="page-link" to="#" v-for="i in 10" :key="i">1</nuxt-link></li>
            <li class="page-item">
              <nuxt-link class="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "artist-list"
}
</script>
<style scoped>

.iq-card-header{
  padding: 20px;
}
.iq-card-body{
  padding: 20px;
}
.card-title{
  font-weight: 700;
  color: var(--iq-title-text);
}
.card-body p{
  color: var(--iq-body-text);
}
.card{
  margin-bottom: 10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 15px;
}
.card-body a{
  text-decoration: none;
  font-weight: 600;
  font-size: 1.400em;
  color: var(--iq-black);
}
.text-primary a{
  color: var(--iq-primary);
}


/*================================Artist List=============================*/
.artist-list .card{
  margin-bottom: 10px;
  border: none;
}
.card .iq-thumb-artist img{
  border-top-left-radius: 0;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
}
.iq-thumb-artist{
  position: relative;
  overflow: hidden;
}
.iq-thumb-artist .iq-music-overlay{
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
  border-radius: 0px 80px;
}
.iq-thumb-artist:hover .iq-music-overlay {
  opacity: 1;
}
.play-btn{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility:  hidden;
  font-size: 40px;
  color:var(--iq-light);
  transition: all 0.1s ease-in-out 0.1s;
}
.iq-thumb-artist:hover .play-btn{
  visibility: visible;
}
nav{
  padding: 20px;
}
</style>
