<template>
  <div>
    <b-button @click.prevent="getAttachment(attachment_id)" variant="light" v-if="attachment_id>0">
      <i class="fas fa-download"> attachment </i>
    </b-button>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "downloadAttachment",
  props: {
    attachment_id: Number,
  },
  methods: {
    async getAttachment(id) {
      await api.getAttachment(id)
    },
  }
}
</script>

<style scoped>

</style>
