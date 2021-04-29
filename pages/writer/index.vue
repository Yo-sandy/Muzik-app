<template>
  <div class="col-lg-12">
    <div class="iq-card">
      <div class="iq-card-header">
        <div class="iq-header-title">
          <h4 class="card-title text-center">Writer List</h4>
        </div>
      </div>
      <div class="iq-card-body">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-6 col-12 mb-2 iq-music-box"
               v-for="writer in $store.state.writers.data"
               :key="writer.id"
               aria-hidden="false">
            <div class="card">
              <div>
                <img src="/Jaani.jpg" alt="" class="card-img-top">
              </div>
              <div class="card-body text-center">
                <nuxt-link
                  to="#"
                  class="single-link">
                  {{writer.name}}
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
  <!--                  :to="{name:'writer-slug', params:{slug:writer.slug}}"-->
</template>

<script>
export default {
  name: "writer",


  mounted() {
    this.$store.dispatch('writers/getWriters')
  },
}
</script>


<style scoped>
.col-lg-12{
  padding: 15px;
  margin-bottom: 150px;
}
.col-lg-12 .iq-card-body {
  padding: 20px;
}
.iq-card{
  background: var(--iq-light-card);
  border-radius: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
}
.iq-card nav{
  padding: 20px;
}
.iq-card-header{
  padding: 20px;
  align-items: center!important;
  border-bottom: 1px solid var(--iq-border-light);
  justify-content: space-between !important;
  display: flex;
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
.card img{
  border-top-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.card .single-link{
  font-weight: 600;
  text-decoration: none;
  margin: 0px;
  font-size: 1.400em;
  color: var(--iq-black);
}
.text-primary a{
  color: var(--iq-primary);
}
/*=================================CARD BOX================================*/

</style>
