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
          v-for="challenge in challenges" v-bind:key="challenge.ID"
          :instances="instances[challenge.ID]"
      />
    </b-card-group>
    <Model ref="model" v-on:refreshChallenges="refreshChallenges"/>
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
      instances: {},
      is_admin: false,
    }
  },
  created() {
    this.listChallenges()
    if (lightweightRestful.api.loggedIn() && this.$cookies.get("is_admin") === "true") {
      this.is_admin = true
    }
    this.getInstances()
  },
  methods: {
    async getInstances() {
      let instances = await lightweightRestful.api.listResource(consts.api.v1.instance.instance, {
        caller: this,
      })
      let instanceMapByChallengeId = {}
      instances.forEach(function (instance) {
        instance.exposed_host_ports = instance.exposed_host_ports.length > 0 ? JSON.parse(instance.exposed_host_ports) : {}
        if (instanceMapByChallengeId[instance.challenge_id] === undefined) {
          instanceMapByChallengeId[instance.challenge_id] = []
        }
        instanceMapByChallengeId[instance.challenge_id].push(instance)
      })
      this.instances = instanceMapByChallengeId
    },
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
    },
    refreshChallenges() {
      this.listChallenges()
    }
  }
}
</script>

<style scoped>

</style>
