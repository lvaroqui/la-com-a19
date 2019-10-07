<template>
  <div>
    <div id="affiche" class="full-page" style="position: relative;">
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
#synopsis {
  width: 120%;
  margin-left: -10%;
  overflow: hidden;
  box-shadow: 0 -50px 50px $dark-grey-color;
  background-color: $dark-grey-color;
  transform: translateY(0);
  opacity: 1;
}

#synopsis-child {
  width: 80vw;
}

#affiche {
  margin-top: 100px;
}

#titre {
  $width: 35%;
  top: -1%;
  position: absolute;
  width: $width;
  margin: 0 auto;
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
</style>
