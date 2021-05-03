<template>
  <div class="music-section">
    <div class="col-lg-12">
      <div class="iq-card">
        <div class="iq-card-header">
          <div class="iq-header-title">
            <h4 class="card-title text-center">Music List</h4>
          </div>
        </div>
        <div class="iq-card-body">
          <div class="row">
            <div class="card-group col-lg-2 col-md-3 col-sm-6 col-12 mb-2 iq-music-box"
                 v-for="music in $store.state.musics.data.data"
                 v-if="music.name !== ''"
                 :key="music.id"
                 aria-hidden="false">
              <div class="card">
                <div>
                  <img src="/music-producer.jpg" alt="" class="card-img-top">
                </div>
                <div class="card-body text-center">
                  <nuxt-link
                    :to="{name:'music-slug', params:{slug:music.slug}}">
                    {{music.name}}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <nuxt-link class="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </nuxt-link>
            </li>
            <li class="page-item d-flex">
              <nuxt-link class="page-link" to="#" v-for="i in 7" :key="i">1</nuxt-link></li>
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
  name: "writer",

  mounted() {
    this.$store.dispatch('musics/getMusics')
  },
}
</script>


<style scoped>

</style>
