<template>
  <div class="label-section">
    <div class="col-lg-12">
      <div class="iq-card">
        <div class="iq-card-header">
          <div class="iq-header-title">
            <h4 class="card-title text-center">Label Music</h4>
          </div>
        </div>
        <div class="iq-card-body">
          <div class="row">
            <div class="col-lg-2 col-md-3 col-sm-6 col-12 mb-2 iq-music-box"
                 v-for="label in $store.state.labels.data.data"
                 v-if="label.name !== ''"
                 :key="label.id"
                 aria-hidden="false">
              <div class="card">
                <div>
                  <img src="/20-209506_sony-music-logo-hd-png-download.png"  class="card-img-top">
                </div>
              </div>
              <div class="card-body text-center">
                <nuxt-link
                  :to="{name:'label-slug', params:{slug:label.slug}}"
                >
                  {{label.name}}
                </nuxt-link>
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
  name: "labels",
  mounted() {
    this.$store.dispatch('labels/getLabels')
  },
}
</script>


<style scoped>

</style>
