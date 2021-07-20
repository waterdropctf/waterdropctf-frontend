<template>
  <b-modal id="modal-challenge-model" :title="title">
    <form @submit.prevent="saveResource()">
      <Common :model="model"/>
      <hr>
      <Static v-if="model.challenge_type===consts.Model.challenge.type.static"/>
      <Dynamic :model="model" v-else/>
    </form>
  </b-modal>
</template>

<script>
import consts from "@/consts";
import lightweightRestful from "vue-lightweight_restful";
import Common from "@/components/challenge/Management/Common";
import Dynamic from "@/components/challenge/Management/Dynamic";
import Static from "@/components/challenge/Management/Static";

export default {
  name: "Model",
  components: {Static, Dynamic, Common},
  data() {
    return {
      model: {},
      consts: consts,
    }
  },
  created() {
  },
  computed: {
    title() {
      return this.model.id === undefined ? 'New Challenge' : `Edit Challenge # ${this.model.id}`
    }
  },
  methods: {
    async saveResource() {
      if (this.model.id) {
        await lightweightRestful.api.updateResource(consts.api.v1.challenge, this.model.id, this.model, {
          caller: this,
        })
      } else {
        await lightweightRestful.api.createResource(consts.api.v1.challenge, this.model, {
          caller: this,
        })
      }
      this.model = {}
    },
  }
}
</script>

<style scoped>

</style>
