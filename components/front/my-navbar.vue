<template>
    <div class="container-fluid">
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <nuxt-link to="#" class="me-md-3"><img src="/logo.png" alt="" width="55px" height="45px"></nuxt-link>
            <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/category" class="nav-link">Category</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/artists" class="nav-link">Artists</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/writer" class="nav-link">Writer</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/label" class="nav-link">Label</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/about-us" class="nav-link">About</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/contact-us" class="nav-link">Contact Us</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/disclaimer" class="nav-link">Disclaimer</nuxt-link>
                </li>
              </ul>
              <form class="search-box">
                <input class="me-md-5 search-input" type="search" placeholder="Search" aria-label="Search">
                <nuxt-link to="#" class="search-link"><i class="fas fa-search"></i></nuxt-link>
                <nuxt-link to="#" class="search-audio"><i class="fas fa-microphone"></i></nuxt-link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
name: "my-navbar"
}
</script>

<style scoped>
.container-fluid{
  overflow: hidden;
}
.navbar{
  padding: 18px 0px;
}
.nav-link{
  font-weight: 700;
  font-size: 17px;
}
.nav-link:hover{
  font-weight: 700;
  font-size: 17px;
  color: var(--iq-primary) !important;
}
.search-input {
  width: 100%;
  height: 40px;
  padding: 5px 15px 5px 40px;
  border: 1px solid var(--iq-border-light);
  border-radius: 0px 14px;
  opacity: 0.7;
}
.search-box{
  width: 400px;
  position: relative;
}
.search-link{
  position: absolute;
  left: 15px;
  top: 6px;
  font-size: 16px;
  color: var(--iq-black);
}
.search-audio{
  position: absolute;
  right: 15px;
  top: 6px;
  font-size: 16px;
  color: var(--iq-black);
}

</style>
