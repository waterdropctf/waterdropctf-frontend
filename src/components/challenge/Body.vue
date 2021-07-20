<template>
  <div>
    <b-card-body class="text-left">
      <b-card-text>{{ challenge.description }}</b-card-text>
      <Hint :challenge="challenge"/>
    </b-card-body>
  </div>
</template>

<script>
import Hint from "@/components/challenge/Hint";

export default {
  name: "Body",
  components: {Hint},
  props: {
    challenge: Object,
  }
}
</script>

<style scoped>

</style>
