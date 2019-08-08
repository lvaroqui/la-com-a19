<template>
  <nuxt-link
    tag="div"
    :to="to"
    class="navbar-element"
    @mouseenter.native="alight = true"
    @mouseleave.native="updateLamp"
  >
    <div class="navbar-element-text">
      {{ text }}
    </div>
    <BaseBulbIcon class="bulb-icon" :is-alight="alight" />
  </nuxt-link>
</template>

<script>
import BaseBulbIcon from './BaseBulbIcon'
export default {
  name: 'BaseNavBarElement',
  components: { BaseBulbIcon },
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      alight: false,
      current: false
    }
  },
  watch: {
    '$route.path'() {
      this.updateLamp()
    }
  },
  mounted() {
    this.updateLamp()
  },
  methods: {
    updateLamp() {
      this.alight = this.$route.path === this.to
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-element {
  font-size: 1.3em;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.navbar-element-text {
  color: white;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-right: 10px;
}

.bulb-icon {
  height: 80%;
  max-width: 22px;
}
</style>
