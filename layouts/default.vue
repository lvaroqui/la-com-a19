<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from './../components/TheNavBar'
export default {
  components: { NavBar }
}
</script>

<style>
body {
  margin: 0;
  font-family: MainFont, serif;
}
</style>
