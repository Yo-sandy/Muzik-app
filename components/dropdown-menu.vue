<template>
    <div class="dropstart" style="position: relative">
      <span class="dropdown-toggle text-primary" data-bs-toggle="dropdown" aria-expanded="true" role="button">
         <i class="fas fa-ellipsis-v"></i>
      </span>
      <div class="dropdown-menu" style="position: absolute;
      transform: translate3d(-138px, 26px, 0px);
      top: 0px;
      left: 0px;
      will-change:transform">
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
.dropdown-menu {
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: .25rem
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  line-height: normal;
}

</style>
