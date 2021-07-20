<template>
  <div>
    <b-form-group label="Flag">
      <b-input-group prepend="Flag Type">
        <b-form-select v-model="model.flag_type" :options="flagType_options"></b-form-select>
      </b-input-group>
      <div v-if="model.flag_type===1">
        <b-input-group prepend="Flag">
          <b-form-input type="text" v-model="model.flag"></b-form-input>
        </b-input-group>
      </div>
    </b-form-group>
  </div>
</template>

<script>
import consts from "@/consts";

export default {
  name: "Flag",
  props: {
    model: Object,
  },
  data() {
    return {
      flagType_options: [consts.Model.flag.type.static, consts.Model.flag.type.dynamic]
    }
  }
}
</script>

<style scoped>

</style>
