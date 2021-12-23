<template>
  <div>
    <h2>Compose Manage</h2>
    <b-table striped hover :items="items" :busy="busy" :fields="fields">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(original_content)="row">
        <b-button size="sm" @click="showOriginContent(row.item.original_content)">show</b-button>
      </template>
    </b-table>
    <b-modal id="modal-show-original-content" title="Original Content" ok-only>
      <code style="white-space: pre-wrap;">{{content}}</code>
    </b-modal>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "Compose",
  data() {
    return {
      busy: false,
      items: [],
      fields: ["ID", "description", "name", "uploader_user_id", "original_content"],
      content: "",
    }
  },
  created() {
    this.listCompose()
  },
  methods: {
    async listCompose() {
      this.busy = true
      this.items = await lightweightRestful.api.listResource(consts.api.v1.compose, {
        caller: this,
      })
      this.busy = false
    },
    showOriginContent(content) {
      this.content = content
      this.$bvModal.show('modal-show-original-content')
    }
  }
}
</script>

<style scoped>

</style>
