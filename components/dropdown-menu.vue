<template>
  <div class="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-md-1">
    <div class="dropdown show">
      <span class="dropdown text-primary"   data-toggle="dropdown" aria-expanded="true" role="button">
         <i class="fas fa-ellipsis-v"></i>
      </span>
      <div class="dropdown-menu dropdown-menu-right show"
           aria-labelledby="dropdownMenuButton8"
           style="position: absolute;
           transform: translate3d(-138px, 26px, 0px);
           top: 0px;
           left: 0px;
           will-change: transform;"
           x-placement="bottom-end">
        <nuxt-link to="#" class="dropdown-item" tabindex="0"><i class="fas fa-eye text-dark me-md-2"></i> View</nuxt-link>
        <nuxt-link to="#" class="dropdown-item" tabindex="0"> <i class="fas fa-trash-alt text-dark me-md-2"></i>Delete</nuxt-link>
        <nuxt-link to="#" class="dropdown-item" tabindex="0"> <i class="fas fa-file-download text-dark me-md-2"></i> Download</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "dropdown-menu"
}
</script>

<style scoped>

</style>
