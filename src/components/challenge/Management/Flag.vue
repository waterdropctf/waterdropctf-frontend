<template>
  <div>
    <b-form-group label="Flag">
      <b-input-group prepend="Flag Type">
        <b-form-select v-model="flag_type" :options="flagType_options"></b-form-select>
      </b-input-group>
      <div v-if="flag_type===consts.Model.flag.type.static">
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
      consts: consts,
      flag_type: consts.Model.flag.type.static,
      flagType_options: [consts.Model.flag.type.static, consts.Model.flag.type.dynamic]
    }
  },
  watch: {
    flag_type: function () {
      this.model.flag_type = this.flag_type
    }
  },
  created() {
    this.model.flag_type = this.flag_type
  },
}
</script>

<style scoped>

</style>
