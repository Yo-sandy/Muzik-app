<template>
    <div class="dropstart">
      <span class="dropdown text-primary" data-bs-toggle="dropdown" aria-expanded="true" role="button">
         <i class="fas fa-ellipsis-v"></i>
      </span>
      <div class="dropdown-menu">
        <nuxt-link to="#" class="dropdown-item" >
          <i class="fas fa-eye text-dark me-md-2"></i> View
        </nuxt-link>
        <nuxt-link to="#" class="dropdown-item"  >
          <i class="fas fa-trash-alt text-dark me-md-2"></i>Delete
        </nuxt-link>

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
