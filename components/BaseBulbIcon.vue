<template>
  <Bulb class="bulb" :class="{ on: isAlight, off: !isAlight }" />
</template>

<script>
import Bulb from '~/assets/svg/bulb.svg?inline'

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
    fill: $light-color;
    fill-opacity: 1;
    transition: all 0.2s;
    filter: url(#softGlow);
  }
}

.bulb.off {
  filter: drop-shadow(2px 2px 1px black);
  .bulb-light-container {
    transition: all 0.2s;
  }
}
</style>
