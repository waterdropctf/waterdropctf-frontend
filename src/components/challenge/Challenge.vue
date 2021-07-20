<template>
  <div>
    <div class="fixed-top text-right mt-3 mr-3" v-if="is_admin">
      <b-button @click="toggleAdd">
        <b-icon icon="plus"/>
      </b-button>
    </div>
    <b-card-group columns>
      <challenge-item
          :is_admin="is_admin"
          :challenge="challenge"
          v-on:edit_challenge="editChallenge"
          v-for="challenge in challenges" v-bind:key="challenge.id"
      />
    </b-card-group>
    <Model ref="model"/>
  </div>
</template>

<script>
import ChallengeItem from "@/components/challenge/ChallengeItem";
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";
import Model from "@/components/challenge/Management/Model";

export default {
  name: "Challenge",
  components: {Model, ChallengeItem},
  data() {
    return {
      challenges: [],
      is_admin: false,
    }
  },
  created() {
    this.listChallenges()
    if (lightweightRestful.api.loggedIn() && this.$cookies.get("is_admin") === "true") {
      this.is_admin = true
    }
  },
  methods: {
    async listChallenges() {
      this.challenges = await lightweightRestful.api.listResource(consts.api.v1.challenge, {
        caller: this,
      })
    },
    editChallenge(challenge) {
      this.$refs.model.model = JSON.parse(JSON.stringify(challenge))
      this.$bvModal.show("modal-challenge-model")
    },
    toggleAdd() {
      this.$refs.model.model = {}
      this.$bvModal.show("modal-challenge-model")
    }
  }
}
</script>

<style scoped>

</style>
