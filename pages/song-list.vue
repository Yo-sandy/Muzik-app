<template>
    <div class="content-page">
       <div class="iq-card p-md-3">
         <div class="col-lg-12">
         <div class="row">
           <h2 class="text-center trending-song">Trending Songs</h2>
           <hr>
           <div class="col-lg-4" v-for="i in 15" :key="i"  >
             <div class="player2">
               <img src="/headphone-img-2.png" class="img-border-radius">
               <div>
                 <div class="track-name1">Pop Smoke</div>
                 <div class="track-artist1">Cascada</div>
               </div>
               <span class="mb-0 col-md-2 iq-m-time" >5:45</span>
               <p> <i class="far fa-star"></i></p>
               <p><i class="far fa-play-circle"></i></p>
               <div class="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-md-1">
                 <div class="dropdown show">
                   <span class="dropdown-toggle"  data-toggle="dropdown" aria-expanded="true" role="button">
                     <i class="ri-more-2-fill text-primary"></i>
                   </span>
                   <div class="dropdown-menu dropdown-menu-right show" aria-labelledby="dropdownMenuButton8" style="position: absolute; transform: translate3d(-138px, 26px, 0px); top: 0px; left: 0px; will-change: transform;" x-placement="bottom-end">
                     <a class="dropdown-item" href="#" tabindex="0"><i class="ri-eye-fill mr-2"></i>View</a>
                     <a class="dropdown-item" href="#" tabindex="0"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                     <a class="dropdown-item" href="#" tabindex="0"><i class="ri-file-download-fill mr-2"></i>Download</a>
                   </div>
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
name: "trending-more-list"
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
  position: relative;
  z-index: 0;
}
.player2 p{
  font-size: 32px;
  color: var(--iq-title-text);
}
.player2 .primary-color{
  color: var(--iq-primary);
}
.player2 span{
  font-size: 30px;
}
</style>
