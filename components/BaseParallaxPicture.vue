<template>
  <div
    :style="
      `height: ${height};
        background-image: url('${src}');
        background-attachment: fixed;
        background-size: cover;
        background-position-y: top 30px;
        `
    "
  />
</template>

<script>
export default {
  name: 'BaseParallaxPicture',
  props: {
    src: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
