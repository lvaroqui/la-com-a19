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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: MainFont, serif;
  overflow: hidden;
  z-index: 0;
  background-color: $dark-color;
}

.root-container {
  overflow: hidden;
}

.main-container {
  color: white;
  width: 100%;
  height: calc(100vh - #{$nav-height});
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > div {
    scroll-snap-align: start;
  }
}
</style>
