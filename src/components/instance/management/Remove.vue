<template>
  <b-button size="sm" @click.prevent="remove">
    <b-icon icon="stop-circle"/>
  </b-button>
</template>

<script>
export default {
  name: "Remove",
  props: {
    instanceId: {
      type: Number,
      required: true,
    }
  },
  methods: {
    remove() {
      if (confirm(`Are you sure you want to remove instance ${this.instanceId} ?`)) {
        alert("//TODO: remove" + this.instanceId)
      }
    },
  }
}
</script>

<style scoped>

</style>
