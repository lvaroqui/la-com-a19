<template>
  <div class="full-page billeterie">
    <h1 class="center-text title">La billeterie n'est pas encore ouverte !</h1>
    <p class="center-text disclaimer"></p>
  </div>
</template>

<script>
export default {
  name: 'Billetterie'
}
</script>

<style lang="scss" scoped>
.disclaimer {
}
.billeterie {
  background-color: $dark-grey-color;
}
.title {
  font-size: 2em;
  padding: 2em 0;
}
</style>
