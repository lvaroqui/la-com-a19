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
  font-size: 20px;
  display: flex;
  float: left;
  padding: 7px 0 7px 10px;
  cursor: pointer;
  user-select: none;
  /*&:hover {
    background-color: lighten($main-color, 30%);
    /transition: all 0.5s;
  }*/
}

/*.nuxt-link-exact-active {
  background-color: lighten($main-color, 15%);
}*/

.navbar-element-text {
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.bulb-icon {
  width: 30px;
  height: 33px;
  padding: 3px 6px 0;
}
</style>
