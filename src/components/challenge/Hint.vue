<template>
  <div>
    <b-button v-for="(hint, hint_id) in challenge.hint.length >0 ?JSON.parse(challenge.hint):[]"
              :key="'hint_'+hint_id"
              :id="'hint_button_'+challenge.id+'_'+hint_id" variant="light">
      <i class="fas fa-lightbulb" style="color: sandybrown;"></i>
      <b-tooltip :target="'hint_button_'+challenge.id+'_'+hint_id" :title="hint"></b-tooltip>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Hint",
  props: {
    challenge: Object,
  },
}
</script>

<style scoped>

</style>
