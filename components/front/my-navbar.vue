<template>
   <div class="my-navbar">
     <div class="container-fluid">
       <div class="row">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div class="container-fluid">
             <nuxt-link to="#" class="me-md-3"><img src="/logo.png" alt="" width="55px" height="45px"></nuxt-link>
             <button class="navbar-toggler" type="button"
                     data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                   <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/category" class="nav-link">Category</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/artist" class="nav-link">Artist</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/writer" class="nav-link">Writer</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/label" class="nav-link">Label</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/music" class="nav-link">Music</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/aboutUs" class="nav-link">About Us</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/contactUs" class="nav-link">Contact Us</nuxt-link>
                 </li>
                 <li class="nav-item">
                   <nuxt-link to="/disclaimer" class="nav-link">Disclaimer</nuxt-link>
                 </li>
               </ul>
               <form class="search-box">
                 <input class="me-md-5 search-input" type="search" placeholder="Search" aria-label="Search">
                 <nuxt-link to="#" class="search-link"><i class="fas fa-search"></i></nuxt-link>
                 <nuxt-link to="#" class="search-audio"><i class="fas fa-microphone"></i></nuxt-link>
               </form>
             </div>
           </div>
         </nav>
       </div>
     </div>
   </div>
</template>

<script>
export default {
name: "my-navbar"
}
</script>

<style scoped>

</style>
