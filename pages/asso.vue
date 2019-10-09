<template>
  <div>
    <base-scroll-arrow :show="showArrow"></base-scroll-arrow>
    <div class="full-page horizontal-flex">
      <div class="container">
        <h1>La Com' c'est quoi ?</h1>
        <div class="text-font">
          <p>
            La Comédie Musicale, nommée affectueusement « La Com' » par ses
            membres, est une commission du Pôle Artistique et Événementiel de
            l'Université de Technologie de Compiègne (<span
              class="bold"
              style="padding: 0 0.2em"
              >PAE UTC</span
            >). Créée en 1995, la Comédie Musicale est aujourd’hui un événement
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
              gestion et du management de toute cette belle équipe.
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
      <base-team-section name="Team Décors" :members="teamDeco" />
      <base-team-section name="Team Costumes" :members="teamCostumes" />
      <base-team-section name="Team Théâtre" :members="teamTheatre" />
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
import DanseImage from '~/assets/img/danse1.jpg'

export default {
  name: 'Asso',
  components: { BaseScrollArrow, BaseTeamSection, Parallax },
  data() {
    return {
      DanseImage,
      showArrow: true,
      bureau: {
        resps: [
          { role: 'Présidente', name: 'Calista Richard' },
          { role: 'Vice Président', name: 'Quentin Stauder' },
          { role: 'Vice Président', name: 'Hugo Ollier' },
          { role: 'Vice Présidente', name: 'Selma Leonardi' },
          { role: 'Vice Président', name: 'Cédric Dussaut' },
          { role: 'Trésorier', name: 'Victor Tondolo' },
          { role: 'Trésorière', name: 'Anaïs Sogno' },
          { role: 'Secrétaire', name: 'Victor Ronfaut' }
        ]
      },
      teamCom: {
        resps: [
          { role: "Resp' Com'", name: 'Quentin Miel' },
          { role: "Resp' Com'", name: 'Clara Gauly' },
          { role: "Resp' Info", name: 'Luc Varoqui' },
          { role: "Resp' Com'", name: 'Rami Jerbaka', noImg: true },
          { role: "Resp' Com'", name: 'Jonathan Perez', noImg: true },
          { role: 'Graphiste', name: 'Emma Bidault', noImg: true }
        ],
        subTeams: [
          {
            name: 'Les Membres',
            members: [{ name: 'Heloïse Eliet' }, { name: 'Melissa Mimouni' }]
          }
        ]
      },
      teamOrga: {
        resps: [
          { role: "Resp' Events", name: 'Alix Levrault' },
          { role: "Resp' Log", name: 'Merwan Bouvier' },
          { role: "Resp' Events", name: 'Elodie Martinaud', noImg: true }
        ],
        subTeams: [
          {
            name: 'Les Membres',
            members: [
              { name: 'Amelie Lagoria' },
              { name: 'Cyrielle Debeir' },
              { name: 'Domitille Foucault' },
              { name: 'Oubine Perrin' }
            ]
          }
        ]
      },
      teamDeco: {
        resps: [
          { role: "Resp' Déco", name: 'Lauriane Esther' },
          { role: "Resp' Déco", name: 'Camille Apert' },
          { role: "Resp' Déco", name: 'Laure Margerand', noImg: true }
        ],
        subTeams: [
          {
            name: 'Les Membres',
            members: [
              { name: 'Amélie Lagorio' },
              { name: 'Anaïs Sogno' },
              { name: 'Apolline Brisson' },
              { name: 'Camille Chartier' },
              { name: 'Cheng Ruochong' },
              { name: 'Corentin Carrée' },
              { name: 'Emma Bonte' },
              { name: 'Fanny Bourgeois' },
              { name: 'Jade Scarmoncin' },
              { name: 'Laurene Coyen' },
              { name: 'Lucie Deronzier' },
              { name: 'Marie Lecorguille' },
              { name: 'Matéo Estrade ' }
            ]
          }
        ]
      },
      teamCostumes: {
        resps: [{ role: "Resp' Costumes", name: 'Sibylle Lebert' }],
        subTeams: [
          {
            name: 'Les Membres',
            members: [
              { name: 'Anaïs Latge' },
              { name: 'Elise Helfer' },
              { name: 'Fanny Bourgeois' },
              { name: 'Lilou Babinet' },
              { name: 'Oubine Perrin' }
            ]
          }
        ]
      },
      teamMusique: {
        resps: [{ role: "Resp' Musique", name: 'Maxime Escourrou' }],
        subTeams: [
          {
            name: 'Compositeur.rice.s',
            members: [
              { name: 'Cédric Dussaut' },
              { name: 'Felix Courades' },
              { name: 'Hugo Ollier' },
              { name: 'Laura Hénin' },
              { name: 'Marianne Guesneau' },
              { name: 'Marie Margerand' },
              { name: 'Matthieu Decaux' },
              { name: 'Rémy Huet' },
              { name: 'Rindra Rabiazamaholy' },
              { name: 'jantie' },
              { name: 'Salomé Wanty' },
              { name: 'Selma Leonardi' },
              { name: 'Simon Devauchelle' },
              { name: 'Thomas Lécluse' },
              { name: 'Victor Ronfaut' }
            ]
          },
          {
            name: 'Chefs',
            members: [{ name: 'Maxime Escourrou' }, { name: 'Cédric Dussaut' }]
          },
          {
            name: 'Orchestre',
            members: [
              { name: 'Laureline Geirnaert', role: 'Flûte' },
              { name: 'Solène Stoens', role: 'Flûte' },
              { name: 'Elouan Wauquier', role: 'Hautbois' },
              { name: 'Julie Cotte', role: 'Clarinette' },
              { name: 'Victor Ronfaut', role: 'Clarinette' },
              { name: 'Hugo Ollier', role: 'Saxophone' },
              { name: 'Théo Duchateau', role: 'Cor' },
              { name: 'Maxime Richard', role: 'Trompette' },
              { name: 'Thomas Lécluse', role: 'Trompette' },
              { name: 'Narjisse Boulekras', role: 'Trombone' },
              { name: 'Rémy Ploix', role: 'Euphonium' },
              { name: 'Thomas Heyligen', role: 'Tuba' },
              { name: 'Louanne Bertrand', role: 'Percussions' },
              { name: 'Matthieu Decaux', role: 'Percussions' },
              { name: 'Alexandre Berthet', role: 'Batteur' },
              { name: 'Aurélie Law-Yen', role: 'Violon' },
              { name: 'Diego Mejia', role: 'Violon' },
              { name: 'Emile Kubler', role: 'Violon' },
              { name: 'Rémy Huet', role: 'Violon' },
              { name: 'Romain Mallard', role: 'Violon' },
              { name: 'Simon Devauchelle', role: 'Violon' },
              { name: 'Selma Leonardi', role: 'Violon' },
              { name: 'Carole Ramdame', role: 'Alto' },
              { name: 'Clément Aronica', role: 'Alto' },
              { name: 'Line Mardini', role: 'Alto' },
              { name: 'Anouk Chômienne', role: 'Violoncelle ' },
              { name: 'Eugène Pin', role: 'Violoncelle ' },
              { name: 'Elise Helfer', role: 'Contrebasse ' },
              { name: 'Sébastien Darche', role: 'Guitare ' }
            ]
          }
        ]
      },
      teamTheatre: {
        resps: [
          { role: 'Metteuse en scène', name: 'Elise Charlet' },
          { role: 'Scribe', name: 'Camille Beaudou' },
          { role: 'Scribe', name: 'Aurélien	Beranger ', noImg: true }
        ],
        subTeams: [
          {
            name: 'Assistant.e.s mise en scène',
            members: [{ name: 'Clément	Vadaine' }]
          },
          {
            name: 'Acteur.rice.s',
            members: [
              { name: 'Céleste	Moudileno', role: 'Mohéa' },
              { name: 'Anthony	Le Breton', role: 'Arsène' },
              { name: 'Cyrielle	Debeir', role: 'Raphaëll' },
              { name: 'Florence	Cupessala', role: 'Suzanne' },
              { name: 'David	Solis', role: 'Le Maire' },
              { name: 'Ismaël	Maayoufi', role: 'M. Pipe' },
              { name: 'Anaël	Lacour', role: 'Le Journaliste' },
              { name: 'Simon	Cattez', role: 'Le Technicien' },
              { name: 'Elise	Pinard', role: 'Priscille Des Grives' },
              { name: 'Théo	Pezin', role: 'La Radio' },
              { name: 'Marion	Voisin', role: 'Journaliste 1' },
              { name: 'Marianne	Guesneau', role: 'Journaliste 2' }
            ]
          }
        ]
      },
      teamDance: {
        resps: [
          { role: 'Chorégraphe', name: 'Jade Lecerf' },
          { role: 'Chorégraphe', name: 'Valentine Delrieu' }
        ],
        subTeams: [
          {
            name: 'Danseur.se.s',
            members: [
              { name: 'Alix Levrault' },
              { name: 'Anne-Laure Caminade' },
              { name: 'Bérengère Lanneau' },
              { name: 'Caroline Werlé' },
              { name: 'Chloé Grippi' },
              { name: 'Clara Balmisse' },
              { name: 'Elwynn Neglokpe' },
              { name: 'Emma Faivre-Duboz' },
              { name: 'Jade Lecerf' },
              { name: 'Julie Hong' },
              { name: 'Léonie Challant' },
              { name: 'Lola Daboussy' },
              { name: 'Marianne Guesneau' },
              { name: 'Marine Viegas' },
              { name: 'Marion Voisin' },
              { name: 'Maud Ondet' },
              { name: 'Ombeline Lheureux' },
              { name: 'Renaud Voisin' },
              { name: 'jantie' },
              { name: 'Sarah Dubus' },
              { name: 'Sebastian Balanta' },
              { name: 'Valentine Delrieu' },
              { name: 'Valentine Verschelde' }
            ]
          }
        ]
      },
      teamChant: {
        resps: [
          { role: "Resp' Chant", name: 'Felana Ramiliariniaina', noImg: true },
          { role: "Resp' Paroles", name: 'Perrine Malchair', noImg: true }
        ],
        subTeams: [
          {
            name: 'Paroliers',
            members: [
              { name: 'Aurélien Béranger' },
              { name: 'Camille Beaudou' },
              { name: 'Cédric Dussaut' },
              { name: 'Daniel Duthoit' },
              { name: 'Elvire Beyret' },
              { name: 'Elise Mozin' },
              { name: 'Marion Voisin' }
            ]
          },
          {
            name: 'Choeurs',
            members: [
              { name: 'Anne-Laure Caminade' },
              { name: 'Anthony Le Breton' },
              { name: 'Basile Sugranes' },
              { name: 'Caroline Werle' },
              { name: 'Cécile Forestier' },
              { name: 'Celeste Moudileno' },
              { name: 'Célia Yota' },
              { name: 'Clotilde Douville De Franssu' },
              { name: 'Cyrielle Debeir' },
              { name: 'Elise Pinard' },
              { name: 'Etienne Morambert' },
              { name: 'Florence Cupessala' },
              { name: 'Ismaël Maayoufi' },
              { name: 'Julie Hong' },
              { name: 'Juliette Vanneuville' },
              { name: 'Lea Louvion' },
              { name: 'Marianne Guesneau' },
              { name: 'Marion Voisin' },
              { name: 'Maxence Valet' },
              { name: 'Miora Laiarinandrasana' },
              { name: 'jantie' },
              { name: 'Simon Cattez' },
              { name: 'Valentine Verschelde' }
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
