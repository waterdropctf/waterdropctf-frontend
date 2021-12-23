<template>
  <b-modal id="modal-challenge-model" :title="title" size="xl" @ok="saveResource">
    <form>
      <div class="row">
        <div class="col">
          <Common :model="model"/>
          <hr>
          <Dynamic :model="model" v-if="model.challenge_type===consts.Model.challenge.type.dynamic"/>
          <Static v-else/>
        </div>
        <!--                <hr>-->
        <div class="col">
          <Attachment :model="model"/>
          <flag :model="model"/>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
import consts from "@/consts";
import lightweightRestful from "vue-lightweight_restful";
import Common from "@/components/challenge/Management/Common";
import Attachment from "@/components/challenge/Management/Attachment";
import Flag from "@/components/challenge/Management/Flag";
import Dynamic from "@/components/challenge/Management/Dynamic";
import Static from "@/components/challenge/Management/Static";

export default {
  name: "Model",
  components: {Static, Dynamic, Attachment, Flag, Common},
  data() {
    return {
      model: {},
      consts: consts,
    }
  },
  computed: {
    title() {
      return this.model.ID === undefined ? 'New Challenge' : `Edit Challenge # ${this.model.ID}`
    }
  },
  methods: {
    async saveResource() {
      if (this.model.ID) {
        await lightweightRestful.api.updateResource(consts.api.v1.challenge, this.model.ID, this.model, {
          caller: this,
        })
      } else {
        await lightweightRestful.api.createResource(consts.api.v1.challenge, this.model, {
          caller: this,
        })
      }
      this.model = this.empty
      this.$emit("refreshChallenges")
    },
  }
}
</script>

<style scoped>

</style>
