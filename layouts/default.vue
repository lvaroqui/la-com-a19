<template>
  <div class="root-container">
    <NavBar />
    <nuxt class="main-container" />
  </div>
</template>

<script>
import NavBar from './../components/TheNavBar'
export default {
  components: { NavBar }
}
</script>

<style lang="scss">
.root-container {
  overflow: hidden;
}

.main-container {
  color: white;
  width: 100%;
  height: calc(100vh - #{$nav-height});
  overflow-y: auto;
}
</style>
