<template>
  <div class="full-page scroll-snap-child">
    <h1 class="center-text title">Contactez-nous !</h1>
    <div class="contact-container">
      <a
        href="https://www.facebook.com/lacom.utc"
        style="display:block;"
        class="contact-way vertical-flex"
      >
        <div class="vertical-flex">
          <h1 class="center-text">Par Facebook</h1>
          <img src="~/assets/img/facebook.png" />
        </div>
      </a>
      <a
        href="mailto:comedmus@gmail.com"
        style="display:block;"
        class="contact-way"
      >
        <div class="vertical-flex">
          <h1 class="center-text">Par Email</h1>
          <img src="~/assets/img/email.png" />
        </div>
      </a>
      <div class="address contact-way vertical-flex">
        <h1 class="center-text">Par Courrier</h1>
        <div class="illustration vertical-flex">
          <p class="center-text">Comédie Musicale 2019</p>
          <p class="center-text">BDE-UTC</p>
          <p class="center-text">Rue Roger Couttolenc</p>
          <p class="center-text">BP 60649</p>
          <p class="center-text">60206 COMPIEGNE CEDEX</p>
        </div>
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
.contact-container {
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
}

img {
  width: 200px;
  filter: drop-shadow(2px 2px 2px black);
  margin: 1em;
}
.illustration {
  height: 200px;
  margin: 1em 0;
}

.title {
  margin: 1em 0;
  font-size: 2.5em;
}

a {
  color: white;
  text-decoration: none;
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
