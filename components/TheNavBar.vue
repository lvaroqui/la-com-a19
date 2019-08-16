<template>
  <div>
    <nav>
      <nuxt-link tag="div" to="/" class="nav-brand">
        <Logo class="nav-logo" />
        <h4>La Compagnie des Lampes</h4>
      </nuxt-link>
      <ul class="nav-links" :class="{ 'nav-active': isActive }">
        <li v-for="item in items" :key="item.id" class="nav-link">
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
      <li v-for="item in items" :key="item.id" class="" @click="toggleNav">
        <BaseNavBarElement :text="item.text" :to="item.to" />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseNavBarElement from './BaseNavBarElement'
import Logo from '~/assets/svg/logo.svg?inline'

export default {
  name: 'TheNavBar',
  components: { BaseNavBarElement, Logo },
  data() {
    return {
      items: [
        { id: 1, text: "L'asso", to: '/asso' },
        { id: 2, text: 'Partenaires', to: '/partenaires' },
        { id: 3, text: 'Billetterie', to: '/billetterie' },
        { id: 4, text: 'Archives', to: '/archives' }
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
$mobile-width-breakpoint: 1200px;
nav {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: $nav-height;
  background-color: $intermediate-color;
  z-index: 10;
}

.nav-brand {
  color: white;
  font-size: 1.5em;
  display: flex;
  align-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  @include screen-max-width(470px) {
    font-size: 16px;
  }
}

.nav-logo {
  height: 70px;
  width: 70px;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 45%;

  @include screen-max-width(1500px) {
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

.nav-link {
  height: 100%;
}

.nav-burger {
  cursor: pointer;
  display: none;
  padding: 0 10px;
  &.nav-active {
    $translate: 8px;
    .nav-burger-1 {
      transform: translateY($translate) rotate(45deg);
    }
    .nav-burger-2 {
      opacity: 0;
    }
    .nav-burger-3 {
      transform: translateY(-$translate) rotate(-45deg);
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

@include screen-max-width($mobile-width-breakpoint) {
  .nav-burger {
    display: block;
  }

  .nav-links {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
}

$nav-mobile-menu-height: 250px;
.nav-links-mobile {
  position: absolute;
  height: $nav-mobile-menu-height;
  top: $nav-height;
  background-color: darken($intermediate-color, 10);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  opacity: 0;
  transform: translateY(-$nav-mobile-menu-height);
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
  z-index: 3;
  @include screen-max-width($mobile-width-breakpoint) {
    &.nav-active {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
