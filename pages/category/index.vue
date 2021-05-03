<template>
  <div class="category-section">
    <div class="col-lg-12">
      <div class="iq-card"
           v-for="(category, index) in $store.state.categories.data">
        <div class="iq-card-header">
          <div class="iq-header-title">
            <h4
              class="card-title"
              style="cursor:pointer;"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapseExample-${index}`"
              aria-expanded="false"
              aria-controls="collapseExample"
              @click="changeViewMoreVisiblity(index)"
            >{{category.name}}<i class="fas fa-chevron-down ps-2"></i></h4>
          </div>
          <div class="d-md-flex iq-view d-none"
               :id="`showViewMore-${index}`"
          >
            <b class="text-primary">
              <nuxt-link
                :to="{name:'category-slug', params:{slug:category.slug}}"
                class="text-decoration-none"
              >View More <i class="fas fa-angle-right"></i></nuxt-link>
            </b>
          </div>
        </div>
        <div class="iq-card-body collapse" :class="{ 'show': !isMobileScreen}" :id="`collapseExample-${index}`" >
          <div class="row">
            <div class="card-group col-lg-2 col-md-3 col-sm-6 col-12 mb-2 iq-music-box"
                 v-for="(single_song, index) in category.songs.data"
                 v-if="category.name !== ''"
                 :key="single_song.id"
                 aria-hidden="false"
            >
              <div class="card">
                <div class="iq-thumb"
                     @click="$store.dispatch('player/setPlayerSong', {song:single_song, index:index});
                      $store.dispatch('player/setSong', category.songs.data)"
                >
                  <div class="iq-music-overlay"></div>
                  <nuxt-link to="#" >
                    <img src="/06.png" alt="" class="card-img-top">
                  </nuxt-link>
                  <nuxt-link to="" class=" play-btn">
                    <i class="far fa-play-circle"></i>
                  </nuxt-link>
                </div>
                <div class="card-body text-center">
                  <nuxt-link to="/song-details" class="single-link">
                    {{single_song.song_name}}
                  </nuxt-link>
                  <p class="text-center">
                    {{single_song.artists}}
                  </p>
                </div>
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
  name: "category",
  data(){
    return{
      showViewMore:false
    }
  },
  computed:{
    isMobileScreen(){
      if(process.client){
        return window.innerWidth < 500
      }else{
        return false;
      }
    }
  },
  mounted() {
    this.$store.dispatch('categories/getCategories')
  },
  methods:{
    changeViewMoreVisiblity(index){
      if(process.client){
        const classList = document.querySelector(`#showViewMore-${index}`).classList;
        if(classList.contains('d-none')){
          classList.remove('d-none');
        }else{
          classList.add('d-none');
        }
      }
    }
  }
}
</script>


<style scoped>

</style>
