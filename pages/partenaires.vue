<template>
  <div class="container">
    <h1 class="center-text title">Nos partenaires</h1>
    <div class="flex h-center wrap">
      <div v-for="sponsor in sponsors" :key="sponsor.name" class="sponsor">
        <div class="logo" :class="{ noBG: sponsor.noBG }">
          <img
            v-if="sponsor.img"
            :src="sponsor.img"
            :alt="sponsor.name"
            :style="`padding: ${sponsor.padding}`"
          />
          <img
            v-else
            class="picture"
            src="http://placehold.it/300"
            :alt="sponsor.name"
          />
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

export default {
  name: 'Partenaires',
  data() {
    return {
      sponsors: [
        { name: 'Les théâtres de Compiègne' },
        { name: 'Le BDE', img: BDEImg },
        { name: 'Le PAE', img: PAEImg, padding: '0.5em' },
        { name: 'La Société Générale', img: SoGeImg },
        { name: 'Les Hauts de France', img: HDFImg, padding: '0.5em' },
        { name: "L'Oise", img: OiseImg, padding: '0.5em' },
        { name: "L'antre de mondes", img: ADMImg },
        { name: 'Les petits bilingues', img: LPBImg, noBG: true },
        { name: 'La cauette à bière', img: CauetteImg, noBG: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 3em;
  padding: 1em 0;
}

.sponsor {
  margin: 1em;
}

.logo {
  position: relative;
  height: 300px;
  width: 300px;
  margin: 0.5em;
  background-color: white;
  box-shadow: 2px 2px 2px black;

  &.noBG {
    background: none;
    box-shadow: none;
    & img {
      filter: drop-shadow(2px 2px 2px black);
    }
  }
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
