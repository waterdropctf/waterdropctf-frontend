<template>
  <span class="row" style="margin-right: 0 !important;">
    <Remove :instance-id="instanceId"/>
    <Delete class="ml-1" :instance-id="instanceId"/>
  </span>
</template>

<script>
import Delete from "@/components/instance/management/Delete";
import Remove from "@/components/instance/management/Remove";

export default {
  name: "Action",
  components: {Remove, Delete},
  props: {
    instanceId: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>
