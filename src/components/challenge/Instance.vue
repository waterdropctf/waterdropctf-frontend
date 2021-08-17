<template>
  <div>
    <div v-if="isDynamicChallenge()">
      <b-list-group v-for="(instance, instance_id) in instances" :key="instance_id">
        <b-list-group-item v-if="isReady(instance.status)">
          {{ challenge.address_template.formatUnicorn(instanceTemplateValue(instance.exposed_host_ports)) }}
          <b-button @click.prevent="stopInstance(instance.id)" variant="light">
            <i class="far fa-stop-circle text-primary" style="padding: 0"><strong> remove </strong></i>
          </b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import consts from "@/consts";

export default {
  name: "Instance",
  props: {
    challenge: Object,
    instances: Array,
  },
  data() {
    return {
      instances_example: [
        {status: consts.Model.instance.status.ready, exposed_host_ports: 30000, id: 1}
      ],
    }
  },
  methods: {
    isDynamicChallenge() {
      return this.challenge.challenge_type === consts.Model.challenge.type.dynamic
    },
    isReady(status) {
      return status === consts.Model.instance.status.ready
    },
    instanceTemplateValue(ports) {
      return ports
    },
    stopInstance(instanceId) {
      console.log("stop:", instanceId)
    }
  }
}
</script>

<style scoped>

</style>
