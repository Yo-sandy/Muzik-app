<template>
 <div class="artists-section">
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
                 <nuxt-link
                   :to="{name:'artist-slug', params:{slug:artist.slug}}">
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

</style>
