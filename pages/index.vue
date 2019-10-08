<template>
  <div id="wrapper">
    <div id="affiche">
      <div class="stars small"></div>
      <div class="stars medium"></div>
      <div class="stars large"></div>
      <div id="central-elements">
        <div id="central-elements-wrapper">
          <img id="titre" src="~/assets/img/affiche/titre.png" />
          <Lampadaire id="lampadaire" />
        </div>
      </div>
      <img id="nuage_gauche" src="~/assets/img/affiche/nuage_gauche.png" />
      <img id="nuage_droite" src="~/assets/img/affiche/nuage_droite.png" />
    </div>
    <base-scroll-arrow :show="showArrow"></base-scroll-arrow>
    <div id="synopsis" ref="synospis" class="horizontal-flex full-page">
      <div id="synopsis-child">
        <div class="container">
          <h1>Synopsis</h1>
          <div class="text-font">
            <p>
              Raphaëll divague dans les rues du centre prospère d'une
              ville-monde. Les Périphériques fuient le smog qui les rend
              malades. Mohéa, elle, tente d'alerter médias et pouvoirs publics
              en criant la vérité d'une périphérie qui meurt sous ce brouillard
              toxique. Amenant avec elle les plus malades, elle croise la route
              de Raphaëll, Suzanne et Arsène. Tandis que les questions
              s'accumulent, le Smog se resserre autour du centre-ville.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
import BaseScrollArrow from '../components/BaseScrollArrow'
import Lampadaire from '~/assets/img/affiche/lampadaire.svg?inline'
// import Affiche from '~/assets/svg/affiche.svg?inline'

export default {
  name: 'Index',
  components: { BaseScrollArrow, Lampadaire },
  data() {
    return {
      showArrow: true
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll, {
      passive: true
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll, {
      passive: true
    })
  },
  methods: {
    onScroll: throttle(function() {
      this.showArrow = window.scrollY === 0
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
$top-offset: 0px;

#wrapper {
  overflow: hidden;
}
#synopsis {
  width: 120%;
  margin-left: -10%;
  box-shadow: 0 -60px 40px $dark-grey-color;
  background-color: $dark-grey-color;
  transform: translateY(0);
  opacity: 1;
}

#synopsis-child {
  width: 80vw;
}

#affiche {
  height: calc(100vh + #{$top-offset});
  padding-top: $top-offset;
  position: relative;
  background: radial-gradient(
    ellipse at bottom,
    rgb(9, 45, 66) 0%,
    rgb(0, 22, 34) 100%
  );
}

#central-elements {
  position: absolute;
  @mixin styling($width) {
    width: $width;
    margin: -$top-offset auto 0 auto;
    left: calc(50% - #{$width} / 2);
  }
  @include styling(700px);

  @include screen-max-width(730px) {
    @include styling(100%);
  }
}

#central-elements-wrapper {
  position: relative;
}

#titre {
  max-width: 100%;
  max-height: 50vh;
  display: block;
  margin: 0 auto;
}

#lampadaire {
  width: 70%;
  margin: 0 auto;
  display: block;
  @include screen-max-width(500px) {
    width: 315px;
    position: absolute;
    top: 310px;
    left: calc(50% - 315px / 2);
  }
}

#nuage_gauche {
  position: absolute;
  top: 10%;
  right: 60%;
  @include screen-max-width(800px) {
    right: 35%;
  }
}

#nuage_droite {
  position: absolute;
  top: 10%;
  left: 60%;
}

@function box-shadow($stars) {
  $bxshadow: ();
  @for $i from 1 to $stars {
    $bxshadow: append(
      $bxshadow,
      (random(2000) - 0px) (random(2000) - 100px) #fff,
      comma
    );
  }
  @return unquote($bxshadow);
}

$bxshadow-large: box-shadow(300);
$bxshadow-medium: box-shadow(500);
$bxshadow-small: box-shadow(800);

.stars.large {
  height: 3px;
  width: 3px;
  background: transparent;
  box-shadow: $bxshadow-large;
  animation: blink-large 7s infinite;
}
.stars.medium {
  height: 2px;
  width: 2px;
  background: transparent;
  box-shadow: $bxshadow-medium;
  animation: blink-medium 5s infinite;
}
.stars.small {
  height: 1px;
  width: 1px;
  background: transparent;
  box-shadow: $bxshadow-small;
  animation: blink-small 3s infinite;
}

@keyframes blink-large {
  0% {
    box-shadow: $bxshadow-large;
  }
  70% {
    $colors: '#fff', 'transparent';
    $stars: $bxshadow-large;
    @for $i from 1 to length($stars) {
      $star: set-nth(
        nth($stars, $i),
        3,
        unquote(nth($colors, random(length($colors))))
      );
      $stars: set-nth($stars, $i, $star);
    }
    box-shadow: $stars;
  }
  100% {
    box-shadow: $bxshadow-large;
  }
}
@keyframes blink-medium {
  0% {
    box-shadow: $bxshadow-medium;
  }
  70% {
    $colors: '#fff', 'transparent';
    $stars: $bxshadow-medium;
    @for $i from 1 to length($stars) {
      $star: set-nth(
        nth($stars, $i),
        3,
        unquote(nth($colors, random(length($colors))))
      );
      $stars: set-nth($stars, $i, $star);
    }
    box-shadow: $stars;
  }
  100% {
    box-shadow: $bxshadow-medium;
  }
}
@keyframes blink-small {
  0% {
    box-shadow: $bxshadow-small;
  }
  70% {
    $colors: '#fff', 'transparent';
    $stars: $bxshadow-small;
    @for $i from 1 to length($stars) {
      $star: set-nth(
        nth($stars, $i),
        3,
        unquote(nth($colors, random(length($colors))))
      );
      $stars: set-nth($stars, $i, $star);
    }
    box-shadow: $stars;
  }
  100% {
    box-shadow: $bxshadow-small;
  }
}
</style>
