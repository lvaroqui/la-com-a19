<template>
  <div>
    <base-scroll-arrow :show="showArrow"></base-scroll-arrow>
    <div class="scroll-snap-child horizontal-flex full-page">
      <h1>La Compagnie des Lampes</h1>
    </div>
    <div
      id="synopsis"
      ref="synospis"
      class="scroll-snap-child horizontal-flex full-page"
      :class="{ show: synopsis }"
    >
      <div class="container">
        <h1>Synopsis</h1>
        <div>
          <p>Ceci est un super Synopsis détaillé mais pas trop de la Com'.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
import BaseScrollArrow from '../components/BaseScrollArrow'

export default {
  name: 'Index',
  components: { BaseScrollArrow },
  data() {
    return {
      showArrow: true,
      synopsis: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll, {
      passive: true
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll, {
      passive: true
    })
  },
  methods: {
    onScroll: throttle(function() {
      this.showArrow = window.scrollY === 0
      this.synopsis = window.scrollY > this.$refs.synospis.offsetTop / 2
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
#synopsis {
  background-color: $dark-grey-color;
  & > div {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s ease-in;
  }
  &.show {
    & > div {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
