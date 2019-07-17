<template>
  <div class="navbar">
    <BaseNavBarElement v-for="item in items" :key="item.id" :text="item.text" :to="item.to" />
  </div>
</template>

<script>
import BaseNavBarElement from './BaseNavBarElement'
export default {
  name: 'TheNavBar',
  components: { BaseNavBarElement },
  data() {
    return {
      items: [
        { id: 0, text: 'Accueil', to: '/' },
        { id: 1, text: "L'asso", to: '/asso' },
        { id: 2, text: 'Synopsis', to: '/synopsis' },
        { id: 3, text: 'Billetterie', to: '/billetterie' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  background-color: $main-color;
}
</style>
