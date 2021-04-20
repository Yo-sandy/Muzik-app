<template>
  <div>
    <PlayerComponent />
    <footer class="blog-footer">
      <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
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
