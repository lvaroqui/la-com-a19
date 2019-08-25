<template>
  <div class="full-page scroll-snap-child">
    <h1 class="center-text title">Contactez-nous</h1>
    <div class="horizontal-flex">
      <div class="contact-way">
        <h1 class="center-text">
          Par
          <a href="https://www.facebook.com/lacom.utc">Facebook</a>
        </h1>
      </div>
      <div class="contact-way">
        <h1 class="center-text">
          Par
          <a href="mailto:comedmus@gmail.com">Email</a>
        </h1>
      </div>
      <div class="address contact-way">
        <h1 class="center-text">Par courrier</h1>
        <p class="center-text">Comédie Musicale 2019</p>
        <p class="center-text">BDE-UTC</p>
        <p class="center-text">Rue Roger Couttolenc</p>
        <p class="center-text">BP 60649</p>
        <p class="center-text">60206 COMPIEGNE CEDEX</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 1em;
}

a {
  color: white;
}

.contact-way {
  margin: 1em 0;
  width: 33%;
  @include screen-max-width(705px) {
    width: 100ch;
  }
}

.address p {
  margin: 0;
  text-indent: 0;
}
</style>
