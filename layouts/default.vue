<template>
  <div>
    <NavBar />
    <nuxt style="color: white" />
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
</style>
