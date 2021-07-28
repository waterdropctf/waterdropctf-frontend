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
      <div v-if="flag_type===consts.Model.flag.type.dynamic">
        <div class="row">
          <b-input-group prepend="uid" class="col">
            <b-form-input type="number" v-model="model.uid"></b-form-input>
          </b-input-group>
          <b-input-group prepend="gid" class="col">
            <b-form-input type="number" v-model="model.gid"></b-form-input>
          </b-input-group>
          <b-input-group prepend="perm" class="col">
            <b-form-input type="number" v-model="model.mode"></b-form-input>
          </b-input-group>
        </div>
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
      flag_type: consts.Model.flag.type.dynamic,
      flagType_options: consts.Model.flag.type.options
    }
  },
  watch: {
    flag_type: function () {
      this.model.flag_type = this.flag_type
    }
  },
  created() {
    this.model.flag_type = this.flag_type
    this.model.uid = 0
    this.model.gid = 0
    this.model.mode = 400
  },
}
</script>

<style scoped>

</style>
