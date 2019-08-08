<template>
  <div class="scroll-snap-parent">
    <div class="scroll-snap-child full-page horizontal-flex">
      <div class="container">
        <h1>La Com' c'est quoi ?</h1>

        <div class="text-font">
          <p>
            La Comédie Musicale, nommée affectueusement « La Com' » par ses
            membres, est une commission du Pôle Artistique et Événementiel de
            l'Université de Technologie de Compiègne (<span
              class="bold"
            >PAE UTC</span>). Créée en 1995, la Comédie Musicale est aujourd’hui un événement
            incontournable de la vie associative UTCéenne.
          </p>

          <p>
            Présentant à ses débuts des adaptations de pièces connues (« On Ne
            Badine Pas Avec L’Amour » en 2001 par exemple), la Com’ a évolué en
            2003 vers <span class="bold">des créations 100 % originales</span>.
            Depuis, elle propose tous les 2 ans des comédies musicales créées
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
    <div class="scroll-snap-child full-page horizontal-flex team">
      <div class="container">
        <h1 class="center-text">
          L'équipe
        </h1>
        <br>
        <h2 class="center-text">
          Le bureau
        </h2>
        <div class="bureau">
          <div v-for="membre in bureau" :key="membre.id" class="vertical-flex">
            <div class="avatar" />
            <h2>{{ membre.role }}</h2>
            <h3>{{ membre.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Asso',
  data() {
    return {
      bureau: [
        { id: 1, role: "Prez'", name: 'Calista Richard' },
        { id: 2, role: 'Secrétaire', name: 'Victor Ronfaut' },
        { id: 3, role: "Resp' Info", name: 'Luc Varoqui' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bold {
  color: $light-color;
}

.team {
  background-color: $dark-grey-color;
  text-shadow: 2px 2px 2px black;
}

.bureau {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  & > div {
    margin: 15px 10px;
  }
}

.avatar {
  border: solid $intermediate-color 5px;
  border-radius: 50%; height: 120px; width: 120px;
  margin: 5px;
  box-shadow: 2px 2px 10px black;
}
ul {
  padding-left: 2em;
}
</style>
