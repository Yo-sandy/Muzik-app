<template>
  <div>
    <PlayerComponent />
      <footer class="blog-footer text-center pt-2 pb-1">
        <h5>Pendu Raj</h5>
        <p>We Provide All latest song and 100% best sound quality</p>
        <p>© 2019-20 <a href="https://penduraj.com" class="text-dark">PenduRaj</a></p>
        <a href="https://penduraj.com" class="text-dark"></a>
        <div class="p-2">
          <a href="https://penduraj.com" class="text-dark"></a>
          <a href="https://www.facebook.com/thependuraj" target="_blank">
            <i class="fab fa-facebook fa-2x text-primary"></i>
          </a>
          <a href="https://www.instagram.com/thependurajmusic" target="_blank">
            <i class="fab fa-instagram fa-2x text-danger ml-2"></i></a>
          <a href="https://m.me/thependuraj" target="_blank">
            <i class="fab fa-facebook-messenger text-primary fa-2x ml-2"></i>
          </a>
        </div>
        <div class="p-2">
          <a href="tel:+919350436011" target="_blank" class="text-dark">
            <i class="fas fa-phone fa-rotate-90 fa-2x text-dark ml-2"></i>
            +919350436011
          </a>
        </div>
        <div class="p-2">
          <a href="https://wa.me/+16067666698" target="_blank" class="text-dark">
            <i class="fab fa-whatsapp text-success fa-2x  ml-2"></i>
            +16067666698
          </a>
          <a href="mailto:support@penduraj.com?Subject=PenduRaj%20Query" target="_blank" class="text-dark">
            <i class="fas fa-envelope fa-2x text-info ml-2"></i>
            support@penduraj.com
          </a>
        </div>
        <img src="https://smallseotools.com/counterDisplay?code=e1600c9ecc43349b3b90ba7d1fbedfaf&amp;style=0012&amp;pad=5&amp;type=ip&amp;initCount=30000"
             title="Visitor Hit Counter"
             alt="Visitor Hit Counter"
             border="0">
      </footer>
  </div>
</template>

<script>
export default {
  name: "my-footer",

}
</script>

<style scoped>
.blog-footer{
  margin-bottom: 100px;
}

@media all and (max-width:1000px ){
.blog-footer{
  margin-bottom: 170px!important;
}
}
</style>
