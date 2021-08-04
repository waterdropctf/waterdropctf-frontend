<template>
  <div>
    <div>
      <b-button @click.prevent="applyContainer(challenge.id)" variant="light"
                v-if="is_dynamic">
        <i class="fab fa-docker text-primary"><strong> apply </strong></i>
      </b-button>
    </div>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";

export default {
  name: "ApplyContainer",
  props: {
    logged_in: Boolean,
    challenge: Object,
    is_dynamic: Boolean,
  },
  methods: {
    async applyContainer(id) {
      if (!this.logged_in) {
        alert('please login')
        window.location = '/'
      }
      this.loading = true
      // this.challenge = Object.assign({}, this.challenge, {applying: true})
      // this.challenge.applying = true
      this.applyingStatus = 'creating'
      this.updateProgress()
      await this.deploy(id)
      this.applyingStatus = 'ready'
      this.$emit('refresh_instance')
      // this.challenge = Object.assign({}, this.challenge, {applying: false})
      // this.challenge.applying = false
      this.loading = false
    },
    updateProgress() {

    },
    async deploy(id) {
      let path = `/api/v1/challenge/${id}/deploy/block`
      await lightweightRestful.api.post(path, null, null, {
        caller: this,
      })
    }
  }
}
</script>

<style scoped>

</style>
