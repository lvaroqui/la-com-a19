<template>
  <div id="wrapper">
    <div id="affiche" class="full-page" style="position: relative;">
      <div class="stars small"></div>
      <div class="stars medium"></div>
      <div class="stars large"></div>
      <img id="sol" src="~/assets/img/affiche/sol.png" />
      <img id="lampadaire" src="~/assets/img/affiche/lampadaire.png" />
      <img id="titre" src="~/assets/img/affiche/titre.png" />
      <img id="maison_gauche" src="~/assets/img/affiche/maison_gauche.png" />
      <img id="nuage_gauche" src="~/assets/img/affiche/nuage_gauche.png" />
      <img id="maison_droite" src="~/assets/img/affiche/maison_droite.png" />
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
// import Affiche from '~/assets/svg/affiche.svg?inline'

export default {
  name: 'Index',
  components: { BaseScrollArrow },
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

#wrapper {
  overflow: hidden;
}
#synopsis {
  width: 120%;
  margin-left: -10%;
  box-shadow: 0 -50px 50px $dark-grey-color;
  background-color: $dark-grey-color;
  transform: translateY(0);
  opacity: 1;
}

#synopsis-child {
  width: 80vw;
}

#affiche {
  padding-top: 100px;
  background: radial-gradient(
    ellipse at bottom,
    rgb(9, 45, 66) 0%,
    rgb(0, 22, 34) 100%
  );
}

#titre {
  $width: 35%;
  position: absolute;
  width: $width;
  margin: -100px auto 0 auto;
  left: calc(50% - #{$width} / 2);
}

#maison_gauche {
  position: absolute;
  height: 70%;
  bottom: 12%;
  left: 8%;
}

#nuage_gauche {
  position: absolute;
  height: 100%;
  top: 20%;
  left: -20%;
}

#maison_droite {
  position: absolute;
  height: 70%;
  bottom: 12%;
  right: 6%;
}

#nuage_droite {
  position: absolute;
  height: 100%;
  top: 27%;
  right: -20%;
}

#sol {
  $width: 80%;
  width: $width;
  position: absolute;
  bottom: -25%;
  left: calc(50% - #{$width} / 2);
}

#lampadaire {
  $width: 10%;
  width: $width;
  position: absolute;
  bottom: 10px;
  left: calc(50% - #{$width} / 2);
}

@media screen and (max-width: 1500px) {
  #nuage_gauche {
    left: -30%;
  }

  #nuage_droite {
    right: -28%;
  }
}

@media screen and (max-width: 1330px) {
  #maison_gauche {
    left: -5%;
  }

  #maison_droite {
    right: -5%;
  }
  #nuage_gauche {
    left: -50%;
  }

  #nuage_droite {
    right: -50%;
  }

  #sol {
    $width: 100%;
    width: $width;
    bottom: -25%;
    left: calc(50% - #{$width} / 2);
  }

  #lampadaire {
    $width: 15%;
    width: $width;
    bottom: 0;
    left: calc(50% - #{$width} / 2);
  }
}

@media screen and (max-width: 1050px) {
  #titre {
    $width: 55%;
    top: 5%;
    position: absolute;
    width: $width;
    margin: 0 auto;
    left: calc(50% - #{$width} / 2);
  }

  #maison_gauche {
    display: none;
  }

  #maison_droite {
    display: none;
  }
  #nuage_gauche {
    display: none;
  }

  #nuage_droite {
    display: none;
  }

  #sol {
    $width: 100%;
    width: $width;
    bottom: -50px;
    left: calc(50% - #{$width} / 2);
  }

  #lampadaire {
    $width: 15%;
    width: $width;
    padding-bottom: 15%;
    bottom: -50px;
    left: calc(50% - #{$width} / 2);
  }
}

@media screen and (max-width: 700px) {
  #titre {
    $width: 90%;
    top: 5%;
    position: absolute;
    width: $width;
    margin: 0 auto;
    left: calc(50% - #{$width} / 2);
  }

  #sol {
    $width: 100%;
    width: $width;
    bottom: 0px;
    left: calc(50% - #{$width} / 2);
  }

  #lampadaire {
    $width: 15%;
    width: $width;
    padding-bottom: 15%;
    bottom: 0;
    left: calc(50% - #{$width} / 2);
  }
}

@media screen and (max-width: 500px) {
  #sol {
    $width: 150%;
    width: $width;
    bottom: 0px;
    left: calc(50% - #{$width} / 2);
  }

  #lampadaire {
    $width: 25%;
    width: $width;
    padding-bottom: 25%;
    bottom: 0;
    left: calc(50% - #{$width} / 2);
  }
}

@media screen and (max-width: 290px) {
  #sol {
    $width: 150%;
    width: $width;
    bottom: 0px;
    left: calc(50% - #{$width} / 2);
  }

  #lampadaire {
    $width: 40%;
    width: $width;
    padding-bottom: 25%;
    bottom: 0;
    left: calc(50% - #{$width} / 2);
  }
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
