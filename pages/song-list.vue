<template>
    <div class="content-page">
      <div class="iq-card p-md-3">
        <div class="col-lg-12">
           <div class="row">
             <h2 class="text-center trending-song">Song List</h2>
             <hr>
             <div class="col-lg-4 songs-item" v-for="i in 15" :key="i"  >
               <div class="player2">
                 <img src="/headphone-img-2.png" class="img-border-radius">
                 <div>
                   <div class="track-name1">Pop Smoke</div>
                   <div class="track-artist1">Cascada</div>
                 </div>
                 <span class="mb-0 col-md-2 iq-m-time" >5:45</span>
                 <span> <i class="far fa-star"></i></span>
                 <span>
                   <nuxt-link to="#" class="far fa-play-circle text-decoration-none text-dark">
                   </nuxt-link>
                 </span>
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
</template>

<script>

export default {
name: "trending-more-list",

}
</script>

<style scoped>
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
</style>
