<template>
  <Bulb class="bulb" :class="{ on: isAlight, off: !isAlight }" />
</template>

<script>
import Bulb from '~/assets/svg/bulb2.svg?inline'

export default {
  components: {
    Bulb
  },
  props: {
    isAlight: Boolean
  }
}
</script>

<style lang="scss">
.bulb {
  overflow: visible;
}

.bulb.on {
  .bulb-light-container {
    fill: rgba(255, 254, 60, 0.8);
    fill-opacity: 1;
    transition: all 0.2s;
    filter: url(#softGlow);
  }
}

.bulb.off {
  .bulb-light-container {
    transition: all 0.2s;
  }
}
</style>
