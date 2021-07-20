<template>
  <div>
    <b-form-group label="Attachment">
      <b-form-input type="text" v-model="attachment.name" placeholder="name"></b-form-input>
      <b-form-input type="text" v-model="attachment.description" placeholder="description"
                    style="margin-top: 2px;"></b-form-input>
      <b-form-file @change="onFileChangeAttachment" v-model="attachment.file"
                   :state="Boolean(model.attachment_id)"
                   placeholder="Choose a file..." drop-placeholder="Drop file here..."
                   style="margin-top: 2px;"></b-form-file>
      <b-button @click="attachment.file = null" style="margin-top: 2px;">reset</b-button>
      <b-button @click="uploadAttachment" style="margin-top: 2px;">upload</b-button>
      <b-alert :show="uploadingAttachment" variant="info">Uploading...</b-alert>
    </b-form-group>
  </div>
</template>


<script>
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
  name: "Attachment",
  props: {
    model: Object,
  },
  data() {
    return {
      attachment: {},
      uploadingAttachment: false,
    }
  },
  methods: {
    onFileChangeAttachment(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      let file = files[0]
      let reader = new FileReader()

      reader.onload = (e) => {
        this.attachment.content = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length)
      }
      reader.readAsDataURL(file)
    },
    async uploadAttachment() {
      this.uploadingAttachment = true
      let resp = await lightweightRestful.api.createResource(consts.api.v1.Attachment, this.attachment)
      this.model.attachment_id = resp.id
      this.attachment = {}
      this.uploadingAttachment = false
    },
  }
}
</script>

<style scoped>

</style>
