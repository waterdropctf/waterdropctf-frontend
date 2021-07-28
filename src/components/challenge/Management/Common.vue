<template>
  <div>
    <b-input-group prepend="Name" size="mt">
      <b-form-input type="text" :state="model.name !== undefined && model.name.length > 0"
                    v-model="model.name"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Description">
      <b-form-input type="text" :state="model.description !== undefined && model.description.length > 0"
                    v-model="model.description"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Category">
      <b-form-select v-model="model.category_id"
                     :options="categories_options"></b-form-select>
    </b-input-group>
    <b-input-group prepend="Type">
      <b-form-select v-model="challenge_type" :options="types_options"></b-form-select>
    </b-input-group>
    <b-input-group prepend="Hint">
      <b-form-input :state="validate_hint()" type="text" v-model="model.hint" placeholder="hint (json)"></b-form-input>
    </b-input-group>
    <!--    <hr>-->
  </div>
</template>

<script>
import consts from "@/consts";

export default {
  name: "Common",
  components: {},
  props: {
    model: Object
  },
  data() {
    return {
      consts: consts,
      challenge_type: consts.Model.challenge.type.static,
      categories_options: [],
      types_options: consts.Model.challenge.type.options,
    }
  },
  watch: {
    challenge_type: function () {
      this.$set(this.model, 'challenge_type', this.challenge_type)
    }
  },
  methods: {
    validate_hint() {
      if (this.model.hint === undefined || this.model.hint.length === 0) {
        return true
      }
      try {
        JSON.parse(this.model.hint);
      } catch (e) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style scoped>

</style>
