<template>
  <div>
    <base-scroll-arrow :show="showArrow"></base-scroll-arrow>
    <div class="scroll-snap-child full-page horizontal-flex">
      <div class="container">
        <h1>La Com' c'est quoi ?</h1>

        <div>
          <p>
            La Comédie Musicale, nommée affectueusement « La Com' » par ses
            membres, est une commission du Pôle Artistique et Événementiel de
            l'Université de Technologie de Compiègne (
            <span class="bold" style="padding: 0 0.2em">PAE UTC</span>). Créée
            en 1995, la Comédie Musicale est aujourd’hui un événement
            incontournable de la vie associative UTCéenne.
          </p>

          <p>
            Présentant à ses débuts des adaptations de pièces connues (« On Ne
            Badine Pas Avec L’Amour » en 2001 par exemple), la Com’ a évolué en
            2003 vers
            <span class="bold">des créations 100 % originales</span>. Depuis,
            elle propose tous les 2 ans des comédies musicales créées
            entièrement par des étudiant·e·s qui gèrent chaque partie de cet
            immense projet :
          </p>
          <ul>
            <li>
              Côté artistique, on pensera notamment au script, à la mise en
              scène, à la composition des musiques et à l’orchestration, aux
              chants, aux chorégraphies, aux décors ou encore aux costumes.
            </li>
            <li>
              Côté organisation, il s’agit de s’occuper de la promotion, de la
              communication, du sponsoring, de la trésorerie, ou encore de la
              gestion gestion et du management de toute cette belle équipe.
            </li>
          </ul>
          <p>
            Au final, ce sont plus d’une centaine d’étudiant·e·s qui se
            regroupent pour mener à bien ce grand projet, qui finira en
            apothéose avec 3 représentations dans un lieu aussi historique
            qu’exceptionnel : le
            <span class="bold">Théâtre Impérial de Compiègne</span> !
          </p>
        </div>
      </div>
    </div>
    <Parallax :src="DanseImage" height="300px" />
    <div class="scroll-snap-child full-page team">
      <h1 class="center-text" style="padding: 25px 0; font-size: 2.5em">
        L'équipe
      </h1>
      <base-team-section name="Bureau" :members="bureau" />
      <base-team-section name="Team Communication" :members="teamCom" />
      <base-team-section name="Team Log/Events" :members="teamOrga" />
      <base-team-section name="Team Déco" :members="teamDeco" />
      <base-team-section name="Team Théatre" :members="teamTheatre" />
      <base-team-section name="Musique" :members="teamMusique" />
      <base-team-section name="Danse" :members="teamDance" />
      <base-team-section name="Chant" :members="teamChant" />
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
import BaseTeamSection from '../components/BaseTeamSection'
import BaseScrollArrow from '../components/BaseScrollArrow'
import Parallax from '../components/BaseParallaxPicture'
import DanseImage from '~/assets/img/Danse1.jpg'

export default {
  name: 'Asso',
  components: { BaseScrollArrow, BaseTeamSection, Parallax },
  data() {
    return {
      DanseImage: DanseImage,
      showArrow: true,
      bureau: {
        resps: [
          { role: "Prez'", name: 'Calista Richard' },
          { role: 'Vice Président', name: 'Cédric Dussaut' },
          { role: 'Vice Présidente', name: 'Selma Leonardi' },
          { role: 'Trésorier', name: 'Victor Tondolo' },
          { role: 'Trésorier', name: 'Quentin Stauder' },
          { role: 'Secrétaire', name: 'Victor Ronfaut' }
        ]
      },
      teamCom: {
        resps: [
          { role: "Resp' Com'", name: 'Rami Jerbaka' },
          { role: "Resp' Com'", name: 'Jonathan Perez' },
          { role: "Resp' Com'", name: 'Quentin Miel' },
          { role: "Resp' Com'", name: 'Clara Gauly' },
          { role: "Resp' Info", name: 'Luc Varoqui' },
          { role: 'Graphiste', name: 'Emma Bidault' }
        ],
        subTeams: [
          { name: 'Les Membres', members: [{ name: 'Sebastian Balanta' }] }
        ]
      },
      teamOrga: {
        resps: [
          { role: "Resp' Events", name: 'Elodie Martinaud' },
          { role: "Resp' Log", name: 'Merwan Bouvier' }
        ],
        subTeams: [
          {
            name: 'Les Membres',
            members: [{ name: 'Alix Levrault' }, { name: 'Cyrielle Debeir' }]
          }
        ]
      },
      teamDeco: {
        resps: [
          { role: "Resp' Déco", name: 'Laure Margerand' },
          { role: "Resp' Déco", name: 'Sibylle Lebert' }
        ],
        subTeams: [
          {
            name: 'Les Membres',
            members: [
              { name: 'Alexia	Le Gall' },
              { name: 'Corentin	Carrée' },
              { name: 'Cloé	Bigaux' },
              { name: 'Lauriane	Esther' },
              { name: 'Camille	Apert' },
              { name: 'Cheng	Ruochong' },
              { name: 'Fanny	Bourgeois' },
              { name: 'Anaïs	Latge' }
            ]
          }
        ]
      },
      teamMusique: {
        resps: [{ role: "Resp' Musique", name: 'Maxime Escourrou' }],
        subTeams: [
          {
            name: 'Compositeurs',
            members: [
              { name: 'Cédric	Dussaut' },
              { name: 'Rémy	Huet' },
              { name: 'Rindra	Rabiaza' },
              { name: 'jantie' },
              { name: 'Salomé	Wanty' },
              { name: 'Selma	Leonardi' },
              { name: 'Thomas	Lécluse' },
              { name: 'Marie	Margerand' },
              { name: 'Simon	Devauchelle' },
              { name: 'Victor	Ronfaut' },
              { name: 'Matthieu	Decaux' },
              { name: 'Hugo	Ollier' },
              { name: 'Marianne	Guesneau' },
              { name: 'Felix	Courades' },
              { name: 'Laura	Hénin' }
            ]
          }
        ]
      },
      teamTheatre: {
        resps: [
          { role: 'Scribe', name: 'Camille	Beaudou' },
          { role: 'Scribe', name: 'Aurélien	Beranger ' },
          { role: 'Metteuse en scène', name: 'Elise	Charlet' }
        ],
        subTeams: [
          {
            name: 'Assistants mise en scène',
            members: [{ name: 'Camille	Rochelet' }, { name: 'Clément	Vadaine' }]
          },
          {
            name: 'Acteurs',
            members: [
              { name: 'Simon	Cattez', role: 'Technicien' },
              { name: 'Florence	Cupessala', role: 'Suzanne' },
              { name: 'Cyrielle	Debeir', role: 'Raphaëlle' },
              { name: 'Anaël	Lacour', role: 'Journaliste' },
              { name: 'Anthony	Le Breton', role: 'Arsène' },
              { name: 'Ismaël	Maayoufi', role: 'Mr. Pipe' },
              { name: 'Céleste	Moudileno', role: 'Mohéa' },
              { name: 'Théo	Pezin', role: 'Radio ' },
              { name: 'Elise	Pinard', role: 'Chanteuse cabaret/PDG' },
              { name: 'David	Solis', role: 'Maire' },
              { name: 'Marion	Voisin', role: 'Journaliste 1' },
              { name: 'Marianne	Guesneau', role: 'Journaliste 2' }
            ]
          }
        ]
      },
      teamDance: {
        resps: [
          { role: "Resp' Chorégraphie", name: 'Jade Lecerf' },
          { role: "Resp' Chorégraphie", name: 'Valentine Delrieu' }
        ],
        subTeams: [
          {
            name: 'Danseurs',
            members: [
              { name: 'Valentine Verschelde' },
              { name: 'Marion Voisin' },
              { name: 'Julie Hong' },
              { name: 'Anne-Laure Caminade' },
              { name: 'Marianne Guesneau' },
              { name: 'Célia Yota' },
              { name: 'Caroline Werlé' },
              { name: 'Lola Daboussy' },
              { name: 'Emma Faivre-Duboz' },
              { name: 'Camille Beaudou' },
              { name: 'ChloéGrippi' },
              { name: 'Bérengère Lanneau' },
              { name: 'Marine ERASMUS' },
              { name: 'Maud Ondet' },
              { name: 'Sebastian Balanta' },
              { name: 'Sarah Dubus' },
              { name: 'jantie' },
              { name: 'Miora Layari' },
              { name: 'Mélina Gauthier' },
              { name: 'Ombeline Lheureux' },
              { name: 'Clara Balmisse' },
              { name: 'Renaud Voisin' }
            ]
          }
        ]
      },
      teamChant: {
        resps: [{ role: "Resp' Chant", name: 'Felana Ramiliariniaina' }],
        subTeams: [
          {
            name: 'Choeurs',
            members: [
              { name: 'Valentine	Verschelde' },
              { name: 'jantie' },
              { name: 'Basile	Sugranes' },
              { name: 'Julie	Hong' },
              { name: 'Mélina	Gauthier' },
              { name: 'Anne-Laure	Caminade' },
              { name: 'Caroline	Werle' },
              { name: 'Maria	Al Bejjani' },
              { name: 'Celia	Yota' },
              { name: 'Cécile	Forestier' },
              { name: 'Juliette	Vanneuville' },
              { name: 'Miora	Laiarinandrasana' },
              { name: 'Aurore	Allard' },
              { name: 'Hugo	Malet' },
              { name: 'Etienne	Morambert' },
              { name: 'Daniel	Duthoit' }
            ]
          }
        ]
      }
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
hr {
  background-color: white;
  height: 3px;
  width: 60%;
  margin: 2em auto;
  box-shadow: 2px 2px 2px black;
}

.bold {
  color: $light-color;
}

.team {
  background-color: $dark-grey-color;
  text-shadow: 2px 2px 2px black;
}

ul {
  padding-left: 2em;
}
</style>
