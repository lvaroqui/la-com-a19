<template>
  <Bulb @click="anim" />
</template>

<script>
import TweenMax from 'gsap/TweenMax'
import Bulb from '~/assets/svg/bulb.svg?inline'

export default {
  components: {
    Bulb
  },
  props: {
    alight: Boolean
  },
  methods: {
    anim() {
      const test = document.getElementsByClassName('bulb-glass')[0]
      console.log(test)
      TweenMax.to(test, 10, {
        fill: 'rgba(200,100,100,0.3)'
      })
    }
  }
}
</script>
