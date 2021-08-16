<template>
  <div>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "InitCheck",
  async created() {
    let count = await this.check()
    if (count === 0) {
      // redirect
      await this.$router.push("/init")
    }
  },
  methods: {
    async check() {
      let data = await lightweightRestful.api.get(consts.api.v1.user.count, null, {
        caller: this,
      })
      return data.count
    }
  }
}
</script>

<style scoped>

</style>
