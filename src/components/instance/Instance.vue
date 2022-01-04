<template>
  <div>
    <h2>Instance Manage</h2>
    <b-table striped hover responsive="sm" :items="items" :busy="busy" :fields="fields">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(action)="row">
        <Action :instanceId="row.item.ID"></Action>
      </template>
    </b-table>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";
import Action from "@/components/instance/management/Action";

export default {
  name: "Instance",
  components: {Action},
  data() {
    return {
      busy: false,
      items: [],
      fields: ["ID",
        {key: "challenge_id", label: "Challenge"},
        {key: "compose_id", label: "Compose"},
        {key: "owner_id", label: "Owner"},
        {key: "exposed_host_ports", label: "Ports"},
        "status", "node_ip", "namespace",
        {key:"action"}
      ]
    }
  },
  created() {
    this.listResource()
  },
  methods: {
    async listResource() {
      this.busy = true
      this.items = await lightweightRestful.api.listResource(consts.api.v1.instance.instance, {
        caller: this,
      })
      this.busy = false
    },
  },
}
</script>

<style scoped>

</style>
