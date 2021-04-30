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
          <div class="card-group col-lg-2 col-md-3 col-sm-6 col-12 mb-2 iq-music-box artist-list"
               v-for="artist in $store.state.artists.data.data"
               :key="artist.id"
               aria-hidden="false">
            <div class="card">
              <div>
                <img src="/01.png" alt="" class="card-img-top">
              </div>
              <div class="card-body text-center">
                <nuxt-link to="/song-list">
                  {{artist.name}}
                </nuxt-link>
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
              <nuxt-link class="page-link" to="#" v-for="i in 5" :key="i">1</nuxt-link></li>
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
  name: "artist-list",
  mounted() {
    this.$store.dispatch('artists/getArtists')
  },
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
.card  img{
  border-top-left-radius: 0;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
}

nav{
  padding: 20px;
}
</style>
