<template>
  <b-button size="sm" @click.prevent="deleteRecord">
    <b-icon icon="trash"/>
  </b-button>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "Delete",
  props: {
    instanceId: {
      type: Number,
      required: true,
    }
  },
  methods: {
    deleteRecord() {
      if (confirm(`Are you sure you want to delete instance ${this.instanceId} ?`)) {
        lightweightRestful.api.delete(consts.api.v1.instance.item(this.instanceId), null, {
          caller: this,
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
