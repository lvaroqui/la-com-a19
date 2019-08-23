<template>
  <div>
    <base-scroll-arrow :show="showArrow"></base-scroll-arrow>
    <div class="scroll-snap-child horizontal-flex full-page">
      <h1>{{ pageY }}</h1>
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
import BaseScrollArrow from '../components/BaseScrollArrow'
export default {
  name: 'Index',
  components: { BaseScrollArrow },
  data() {
    return {
      showArrow: true,
      synopsis: false,
      pageY: 0
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.showArrow = event.pageY === 0
      this.synopsis = event.pageY > 10
      this.pageY = event.type
    }
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
