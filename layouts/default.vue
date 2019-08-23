<template>
  <div class="main-container">
    <TheNavBar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from './../components/TheNavBar'
import TheFooter from './../components/TheFooter'
export default {
  components: { TheNavBar, TheFooter }
}
</script>

<style lang="scss">
.main-container {
  color: white;
  width: 100%;
  margin-top: $nav-height;
}
</style>
