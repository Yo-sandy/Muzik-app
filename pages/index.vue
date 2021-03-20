<template>
      <div class="container-fluid">
         <div class="row">
           <home/>
           <latest/>
           <albums/>
         </div>
      </div>
</template>

<script>
import Latest from "@/pages/navbar-pages/latest";
import Albums from "@/pages/navbar-pages/albums";
export default {
  components: {Albums, Latest},
  layout:"default"
}
</script>

<style>
.container-fluid{
  overflow: hidden;
}
</style>
