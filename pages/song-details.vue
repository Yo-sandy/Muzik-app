<template>
  <div class="content-page">
    <div class="row">
      <div class="col-lg-12">
        <!--========================================Song Details====================================================-->
        <div class="iq-card">
          <div class="iq-card-header">
            <h4 class="song-name">Pop Smoke</h4>
          </div>
          <div class="row">
            <div class="song-detail col-md-4">
              <img src="/justin%20bieber.png" alt="" class="img-fluid w-100">
            </div>
            <div class="col-md-8">
              <h4>Song Details</h4>
              <hr>
              <ul class="song-details p-0">
                <li class="list-group-item">Song Name:  {{ }}</li>
                <li class="list-group-item">Singer Name:<nuxt-link to="#" class="text-dark">{{ }}</nuxt-link></li>
                <li class="list-group-item">Writer: <nuxt-link  to="#" class="text-dark">Bholu Jasia</nuxt-link></li>
                <li class="list-group-item">Music: <nuxt-link  to="#" class="text-dark">Rj Records</nuxt-link></li>
                <li class="list-group-item">Label: <nuxt-link to="#" class="text-dark">Jugni Series Cassettes</nuxt-link></li>
                <li class="list-group-item">Remix By: <nuxt-link to="#" class="text-dark">Dj Yogesh Lad</nuxt-link></li>
                <li class="list-group-item">Total  Downloads  : 419</li>
                <li class="list-group-item">Lyrics:  Not Available</li>
              </ul>
              <button class="hvr-shutter-out-horizontal">Download Song</button>
            </div>
          </div>
        </div>

        <!--========================================Song Description================================================-->
        <div class="col-md-12 iq-card mt-5 p-3">
          <p>Uploading Request By :- Dj Yogesh Lad 8053622335 </p>
          <p> FB Page:- <a href="https://facebook.com/thependuraj" target="_blank" class="text-dark">Official Penduraj FB Page</a></p>
          <p>SONG :Ghunghat khol
            <br>
            SINGER : Renuka Panwar
            <br>
            LYRICS : Bholu Jasia
            <br>
            MUSIC : Rj Records
            <br>
            ARTIST : Renuka Panwar
            <br>
            DIRECTOR :
            <br>
            LABEL : Jugni Series
            <br>
            ----------------------------
            <br>
            Uploading Rights Of This song is Provided By Jugni Series cassettes ( Through Yogesh Lad ) </p>
        </div>

        <!--========================================More Popular Song===============================================-->
        <div class="col-sm-12 iq-card">
          <h3 class="text-center mb-md-4">More Popular Songs</h3>
          <ul class="list-group popular-song">
            <li class="list-group-item" v-for="i in 8" :key="i">Baba Ban Jyaga 2 Remix
              <button class="hvr-shutter-out-horizontal float-end">Download</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "song-details",

}
</script>

<style scoped>
.iq-card {
  background: var(--iq-light-card);
  border-radius: 15px;
  margin-bottom: 30px;
  border: none;
  padding:20px;
  box-shadow: 0px 4px 20px 0px rgba(44, 101, 144, 0.1);
}
.iq-card-header{
  padding: 20px;
  align-items: center!important;
  border-bottom: 1px solid var(--iq-border-light);
  text-align: center;
}
.iq-card-header .song-name{
  font-weight: 700;
  font-size: 30px;
  color: var(--iq-title-text);
}
.song-details{
  border-top-right-radius: 15px;
  border-bottom-left-radius:15px ;
}
.iq-card h3{
  font-weight: 700;
}
.popular-song{
  border-top-right-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:0px;
}


</style>
