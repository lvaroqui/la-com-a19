<template>
  <div class="arrow" :class="{ show: showArrow }">
    <div class="arrow-1"></div>
    <div class="arrow-2"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseScrollArrow',
  props: {
    show: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      isReady: false
    }
  },
  timers: {
    ready: { time: 1, autostart: true }
  },
  computed: {
    showArrow() {
      return this.show && this.isReady
    }
  },
  methods: {
    ready() {
      this.isReady = true
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes pulsate {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-50%) translateY(-10px);
  }
}

.arrow {
  animation: pulsate 1s cubic-bezier(0.6, 0, 0.4, 1) alternate infinite;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease-in;
  &.show {
    opacity: 1;
    transition: opacity 0.2s 3s ease-in;
  }
}

.arrow div {
  position: fixed;
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px;
  border: white 1px;
  border-radius: 3px;
  left: 50%;
}

.arrow-1 {
  transform: translateX(-50%) translateX(-10px) rotate(45deg);
}
.arrow-2 {
  transform: translateX(-50%) translateX(10px) rotate(-45deg);
}
</style>
