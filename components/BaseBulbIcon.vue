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
  width: 30px;
  height: 25px;
}

.bulb.on {
  .bulb-glass {
    fill: rgba(255, 254, 60, 0.8);
    fill-opacity: 1;
    transition: all 0.2s;
  }
}

.bulb.off {
  .bulb-glass {
    transition: all 0.2s;
  }
}
</style>
