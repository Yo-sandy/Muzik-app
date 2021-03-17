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
import Latest from "@/pages/latest";
import Albums from "@/pages/albums";
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
