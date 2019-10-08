<template>
  <div class="partenaires">
    <div class="container">
      <h1 class="center-text title">Nos partenaires</h1>
      <div class="flex h-center wrap">
        <div v-for="sponsor in sponsors" :key="sponsor.name" class="sponsor">
          <div
            class="logo"
            :class="{ noBG: sponsor.noBG, black: sponsor.blackBG }"
          >
            <img
              v-if="sponsor.img"
              :src="sponsor.img"
              :alt="sponsor.name"
              :style="`padding: ${sponsor.padding}`"
            />
            <img v-else class="picture" src="" :alt="sponsor.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BDEImg from '~/assets/img/sponsors/bde.jpg'
import PAEImg from '~/assets/img/sponsors/pae.png'
import SoGeImg from '~/assets/img/sponsors/soge.png'
import HDFImg from '~/assets/img/sponsors/haut_de_france.png'
import OiseImg from '~/assets/img/sponsors/oise.png'
import ADMImg from '~/assets/img/sponsors/antre_de_mondes.png'
import LPBImg from '~/assets/img/sponsors/les_petits_bilingues.png'
import CauetteImg from '~/assets/img/sponsors/cauette.png'
import Compi from '~/assets/img/sponsors/compiegne.jpg'
import Crous from '~/assets/img/sponsors/crous.png'
import UTC from '~/assets/img/sponsors/utc.png'
import SSP from '~/assets/img/sponsors/ssp.png'
import Decibels from '~/assets/img/sponsors/decibels.png'
import Picsart from '~/assets/img/sponsors/picsart.jpg'
import Strava from '~/assets/img/sponsors/strava.png'
import Polar from '~/assets/img/sponsors/polar.png'
import Fil from '~/assets/img/sponsors/fil.png'
import SiMDE from '~/assets/img/sponsors/simde.png'
import TheatreIMG from '~/assets/img/sponsors/theatre.png'
import LibrairieIMG from '~/assets/img/sponsors/librairie.jpg'

export default {
  name: 'Partenaires',
  data() {
    return {
      sponsors: [
        { name: 'Les théâtres de Compiègne', img: TheatreIMG, blackBG: 'true' },
        { name: 'Le BDE', img: BDEImg },
        { name: 'Le PAE', img: PAEImg, padding: '0.5em' },
        { name: "L'UTC", img: UTC, padding: '0.5em' },
        { name: 'La Société Générale', img: SoGeImg },
        { name: 'Les Hauts de France', img: HDFImg, padding: '0.5em' },
        { name: "L'Oise", img: OiseImg, padding: '0.5em' },
        { name: 'La ville de Compiègne', padding: '0.5em', img: Compi },
        { name: 'Le Crous', img: Crous, padding: '0.5em' },
        { name: "L'antre de mondes", img: ADMImg },
        { name: 'Librairie des Signes', img: LibrairieIMG, padding: '0.5em' },
        { name: 'Les petits bilingues', img: LPBImg },
        { name: 'La cauette à bière', img: CauetteImg },
        { name: 'SSP', img: SSP },
        { name: 'Décibels', img: Decibels, padding: '0.5em' },
        { name: "Pics'Art", img: Picsart },
        { name: 'Stravaganza', img: Strava, padding: '0.5em' },
        { name: 'Le Polar', img: Polar },
        { name: 'Le Fil', img: Fil, padding: '0.5em' },
        { name: 'SiMDE', img: SiMDE, padding: '0.5em' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.partenaires {
  background-color: $dark-grey-color;
}

.black {
  background-color: black !important;
}

.title {
  font-size: 3em;
  padding: 1em 0;
}

.sponsor {
  margin: 1em;
}

.logo {
  position: relative;
  height: 250px;
  width: 250px;
  margin: 0.5em;
  background-color: white;
  box-shadow: 2px 2px 2px black;
}

img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
