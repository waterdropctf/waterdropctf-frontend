<template>
  <div>
    <b-button @click.prevent="delete_challenge(id)"
              style="float: right; line-height:100%" variant="light">
      <i class="fas fa-trash-alt"/>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Delete",
  props: {
    id: Number,
  },
  data() {
    return {}
  },
  methods: {
    delete_challenge(id) {
      console.log("delete challenge ", id)
    }
  }
}
</script>

<style scoped>

</style>
