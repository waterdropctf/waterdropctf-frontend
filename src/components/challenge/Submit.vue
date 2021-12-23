<template>
  <div>
    <b-button v-b-modal="'modal-submit_flag_'+challenge.id" variant="light">
      <i class="fas fa-external-link-alt"><strong>submit</strong></i>
    </b-button>
    <b-modal :id="'modal-submit_flag_'+challenge.id" :title="challenge.name"
             @ok="check_flag_static(challenge.id)">
      <b-form-group label="flag">
        <b-form-input type="text" v-model="model.flag"></b-form-input>
      </b-form-group>
    </b-modal>

  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Submit",
  props: {
    logged_in: Boolean,
    challenge: Object,
  },
  data() {
    return {
      model: {
        flag: '',
      }
    }
  },
  methods: {
    async check_flag_static(id) {
      if (!this.logged_in) {
        alert('please login')
        window.location = '/'
      }
      let response = await api.checkFlagStatic(id, this.model)
      alert(response.data.correct === true ? 'right' : 'wrong')
      this.$emit('refresh_challenges')
    },
  }
}
</script>

<style scoped>

</style>
