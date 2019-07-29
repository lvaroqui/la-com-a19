<template>
  <div>
    <nav>
      <div class="nav-logo">
        <h4>La Com' A19</h4>
      </div>
      <ul class="nav-links" :class="{ 'nav-active': isActive }">
        <li v-for="item in items" :key="item.id" @click="toggleNav">
          <BaseNavBarElement :text="item.text" :to="item.to" />
        </li>
      </ul>
      <div
        class="nav-burger"
        :class="{ 'nav-active': isActive }"
        @click="toggleNav"
      >
        <div class="nav-burger-1" />
        <div class="nav-burger-2" />
        <div class="nav-burger-3" />
      </div>
    </nav>
    <ul class="nav-links-mobile" :class="{ 'nav-active': isActive }">
      <li v-for="item in items" :key="item.id" @click="toggleNav">
        <BaseNavBarElement :text="item.text" :to="item.to" />
      </li>
    </ul>
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
      ],
      isActive: false
    }
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
$nav-min-height: 8vh;

nav {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: $nav-min-height;
  background-color: $intermediate-color;
  z-index: 10;
}

.nav-logo {
  color: white;
  font-size: 22px;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 45%;

  @include screen-max-width(1250px) {
    width: 60%;
  }
}

.nav-links-mobile {
  justify-content: space-around;
  width: 45%;
}

.nav-links li,
.nav-links-mobile li {
  list-style: none;
}

.nav-burger {
  cursor: pointer;
  display: none;
  &.nav-active {
    $test: 8px;
    .nav-burger-1 {
      transform: translateY($test) rotate(45deg);
    }
    .nav-burger-2 {
      opacity: 0;
    }
    .nav-burger-3 {
      transform: translateY(-$test) rotate(-45deg);
    }
  }
}

.nav-burger div {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px;
  border: white 1px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

@include screen-max-width(768px) {
  .nav-burger {
    display: block;
  }

  .nav-links {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
}

$nav-mobile-menu-height: 40vh;
.nav-links-mobile {
  position: absolute;
  height: $nav-mobile-menu-height;
  top: $nav-min-height;
  background-color: darken($intermediate-color, 10);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  opacity: 0;
  transform: translateY(-$nav-mobile-menu-height);
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
  z-index: 3;
  @include screen-max-width(768px) {
    &.nav-active {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
