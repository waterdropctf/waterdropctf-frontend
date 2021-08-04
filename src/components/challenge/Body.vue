<template>
  <div>
    <b-card-body class="text-left">
      <b-card-text>{{ challenge.description }}</b-card-text>
      <Hint :challenge="challenge"/>
      <Instance :challenge="challenge" :instances="instances"/>
    </b-card-body>
  </div>
</template>

<script>
import Hint from "@/components/challenge/Hint";
import Instance from "@/components/challenge/Instance";

export default {
  name: "Body",
  components: {Instance, Hint},
  props: {
    challenge: Object,
    instances: Array,
  }
}
</script>

<style scoped>

</style>
