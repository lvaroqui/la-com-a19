<template>
  <div class="full-page">
    <h1 class="center-text title">Contact</h1>
    <h3 class="center-text" style="padding: 0 1em;">
      N'hésitez pas à nous contacter pour tout renseignement par mail ou par
      courrier :
    </h3>
    <div class="flex h-center wrap">
      <div class="contact-way">
        <div class="flex v-center">
          <img src="~/assets/img/email.png" />
          <a href="mailto:comedmus@gmail.com">comedmus@gmail.com</a>
        </div>
        <div class="flex v-center">
          <img src="~/assets/img/facebook.png" />
          <a href="https://www.facebook.com/lacom.utc">Facebook</a>
        </div>
      </div>
      <div class="contact-way flex v-center">
        <div class="vertical-flex">
          <p>
            <strong>Comédie Musicale 2019</strong>
          </p>
          <p>BDE-UTC</p>
          <p>Rue Roger Couttolenc</p>
          <p>BP 60649</p>
          <p>60206 COMPIEGNE CEDEX</p>
        </div>
      </div>
    </div>
    <Parallax :src="ChantImage" height="300px" />
  </div>
</template>

<script>
import Parallax from '../components/BaseParallaxPicture'
import ChantImage from '~/assets/img/chant1.jpg'
export default {
  name: 'Contact',
  components: { Parallax },
  data() {
    return {
      ChantImage
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 1em 0 1em 0;
  font-size: 2.5em;
  @include md {
    margin: 2em 0 1em 0;
  }
}

.contact-way {
  margin: 2em 0.5em 0.5em;
  flex-wrap: wrap;
  @include md {
    margin: 2em 3em;
  }
}

img {
  width: 3em;
  filter: drop-shadow(2px 2px 2px black);
  margin: 0.5em;
}

a {
  font-size: 1.1em;
  color: rgb(69, 161, 248);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

p {
  margin: 0;
  text-indent: 0;
}
</style>
