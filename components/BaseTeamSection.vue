<template>
  <div class="horizontal-flex section">
    <div class="container">
      <h1 class="center-text" style="font-size: 2em">
        {{ name }}
      </h1>
      <br />
      <div class="resps">
        <div
          v-for="resp in members.resps"
          :key="resp.name"
          class="vertical-flex"
        >
          <img
            v-if="resp.img"
            class="picture"
            :src="resp.img"
            :alt="resp.name"
          />
          <img
            v-else
            class="picture"
            src="http://placehold.it/120"
            :alt="resp.name"
          />
          <h2 class="center-text role">
            {{ resp.role }}
          </h2>
          <h3 class="center-text name">
            {{ resp.name }}
          </h3>
        </div>
      </div>
      <div
        v-for="subTeam in members.subTeams"
        :key="subTeam.name"
        style="margin-bottom: 1em"
      >
        <h2 class="center-text">
          {{ subTeam.name }}
        </h2>
        <div class="members">
          <div v-for="member in subTeam.members" :key="member.name">
            <h2 v-if="member.role" class="role">
              {{ member.role }}
            </h2>
            <h3 class="name">
              {{ member.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTeamSection',
  props: {
    name: {
      type: String,
      required: true
    },
    members: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  min-height: calc(100vh - #{$nav-height});
  padding-bottom: 5em;
}

.picture {
  border: solid $intermediate-color 5px;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin: 5px;
  box-shadow: 2px 2px 10px black;
}

.role {
  color: #b4b4b4;
}

.members {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    margin: 10px auto;
    text-align: center;
    width: 100%;
    @include sm {
      width: 45%;
    }
    @include lg {
      width: 30%;
    }
  }
}

.resps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    margin: 15px 10px;

    height: 220px;
    width: 100%;
    @include sm {
      width: 45%;
    }
    @include lg {
      width: 30%;
    }
  }
}
</style>
