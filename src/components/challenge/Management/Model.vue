<template>
  <b-modal id="modal-challenge-model" :title="title" size="xl">
    <form @submit.prevent="saveResource()">
      <div class="row">
        <Common :model="model" class="col"/>
        <!--        <hr>-->
        <div class="col">
          <Attachment :model="model"/>
          <flag :model="model"/>
        </div>
        <!--        <hr>-->
        <div class="col">
          <Dynamic :model="model" v-if="model.challenge_type===consts.Model.challenge.type.dynamic"/>
          <Static v-else/>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
import consts from "@/consts";
import lightweightRestful from "vue-lightweight_restful";
import Common from "@/components/challenge/Management/Common";
import Dynamic from "@/components/challenge/Management/Dynamic";
import Static from "@/components/challenge/Management/Static";
import Flag from "@/components/challenge/Management/Flag";
import Attachment from "@/components/challenge/Management/Attachment";

export default {
  name: "Model",
  components: {Attachment, Flag, Static, Dynamic, Common},
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
