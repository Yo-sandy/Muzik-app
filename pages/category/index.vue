<template>
  <div class="col-lg-12">
    <div class="iq-card"
         v-for="(category, index) in $store.state.categories.data"
    >
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
  watch:{
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
.col-lg-12{
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 170px;
}
.col-lg-12 .iq-card {
  padding: 20px;
}
.iq-card{
  background: var(--iq-light-card);
  border-radius: 15px;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
}
.iq-card-header{
  align-items: center!important;
  border-bottom: 1px solid var(--iq-border-light);
  justify-content: space-between !important;
  display: flex;
  margin-bottom: 10px;
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
.iq-thumb{
  position: relative;
}
.iq-music-overlay {
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
  border-radius: 0px 15px; }
.iq-thumb:hover .iq-music-overlay {
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
.iq-thumb:hover .play-btn{
  visibility: visible;
}
</style>
