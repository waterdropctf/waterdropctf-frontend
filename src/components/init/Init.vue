<template>
  <div>
    <b-tabs content-class="mt-3" class="container">
      <b-tab title="First Step: User" active>
        <p class="text-left">
          <b-input-group prepend="Username" size="mt">
            <b-form-input type="text" :state="model.username !== undefined && model.username.length > 0"
                          v-model="model.username"/>
          </b-input-group>
          <b-input-group prepend="Password" size="mt">
            <b-form-input type="password" :state="model.password !== undefined && model.password.length > 0"
                          v-model="model.password"/>
          </b-input-group>
          <b-form-checkbox v-model="model.is_admin"> Is Admin</b-form-checkbox>
        </p>
        <p class="text-right">
          <b-btn @click="create_user">Submit</b-btn>
        </p>
      </b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "Init",
  data() {
    return {
      model: {
        is_admin: true,
      }
    }
  },
  async created() {
    let count = await this.check()
    if (count > 0) {
      this.$bvToast.toast("already init", {variant: 'danger'})
      await this.sleep(1000)
      await this.$router.push("/")
    }
  },
  methods: {
    sleep (ms) {
      return new Promise(resolve =>
          setTimeout(resolve, ms)
      )
    },
    async check() {
      let data = await lightweightRestful.api.get(consts.api.v1.user.count, null, {
        caller: this,
      })
      return data.count
    },
    async create_user() {
      await lightweightRestful.api.post(consts.api.v1.user.init, null, this.model, {
        caller: this,
      })
    }
  }
}
</script>

<style scoped>

</style>
