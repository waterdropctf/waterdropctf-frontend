<template>
  <div>
    <b-input-group prepend="Address Template">
      <b-form-input type="text" v-model="model.address_template"></b-form-input>
    </b-input-group>
    <b-form-group label="Compose">
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Upload New" active>
            <b-form-input type="text" v-model="compose.name" placeholder="name"></b-form-input>
            <b-form-input type="text" v-model="compose.description" placeholder="description"
                          style="margin-top: 2px;"></b-form-input>
            <b-form-file @change="onFileChangeCompose" v-model="compose.file"
                         :state="Boolean(model.compose_id)"
                         placeholder="Choose a file..." drop-placeholder="Drop file here..."
                         style="margin-top: 2px;"></b-form-file>
            <b-button @click="compose.file = null" style="margin-top: 2px;">reset</b-button>
            <b-button @click="uploadCompose" style="margin-top: 2px;">upload</b-button>
            <b-alert :show="uploadingCompose" variant="info">Uploading...</b-alert>
          </b-tab>
          <b-tab title="Select Exists" v-show="composeOptions.length>0"
                 @click="$bvModal.show('modal-select-compose')"></b-tab>
        </b-tabs>
      </div>
      <br><span>selected:</span><br>
      <span v-show="composeOptions.length>0" v-if="model.compose_id">
              {{ selected() }}
      </span>
      <b-modal id="modal-select-compose" title="Select Compose">
        <!--TODO: change to a table with pagination-->
        <b-form-select v-model="model.compose_id" :options="composeOptions"></b-form-select>
      </b-modal>
    </b-form-group>
  </div>
</template>

<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "Dynamic",
  props: {
    model: Object
  },
  data() {
    return {
      compose: {},
      composeOptions: [],
      uploadingCompose: false,
    }
  },
  methods: {
    selected() {
      let composeOption = this.composeOptions.find(function (v) {
        return v.value === this.model.compose_id
      })
      return composeOption !== undefined ? composeOption['text'] : ''
    },
    onFileChangeCompose(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      let file = files[0]
      let reader = new FileReader()
      console.log(file)
      reader.onload = (e) => {
        this.compose.original_content = e.target.result
      }
      reader.readAsText(file)
    },
    async uploadCompose() {
      this.uploadingCompose = true
      let resp = await lightweightRestful.api.createResource(consts.api.v1.compose, this.compose, {
        caller: this,
      })
      this.model.compose_id = resp.id
      this.compose = {}
      this.uploadingCompose = false
    },
  }
}
</script>

<style scoped>

</style>
