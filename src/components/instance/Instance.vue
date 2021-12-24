<template>
  <div>
    <h2>Instance Manage</h2>
    <b-table striped hover :items="items" :busy="busy" :fields="fields">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "Instance",
  data() {
    return {
      busy: false,
      items: [],
      fields: ["ID", "challenge_id", "compose_id", "owner_id", "exposed_host_ports", "status", "node_ip", "namespace"]
    }
  },
  created() {
    this.listResource()
  },
  methods: {
    async listResource() {
      this.busy = true
      this.items = await lightweightRestful.api.listResource(consts.api.v1.instance, {
        caller: this,
      })
      this.busy = false
    },
  },
}
</script>

<style scoped>

</style>
