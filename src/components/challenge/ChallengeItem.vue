<template>
  <div>
    <b-card>
      <div slot="header" class="row">
        <span class="col text-left">{{ challenge.name }}</span>
        <b-button v-if="is_admin"
                  @click.prevent="$emit('edit_challenge', challenge)"
                  style="line-height:100%" variant="light">
          <i class="fas fa-pen"/>
        </b-button>
        <Delete v-if="is_admin"/>
        <b-badge variant="success" v-if="challenge.solved" style="line-height:200%">solved</b-badge>
      </div>
      <Body :challenge="challenge"/>
      <div slot="footer" class="row">
        <div class="col"/>
        <Submit :challenge="challenge"/>
        <DownloadAttachment :attachment_id="challenge.attachment_id"/>
        <ApplyContainer :logged_in="logged_in" :is_dynamic="!is_static_challenge(challenge.type)"/>
      </div>
    </b-card>
  </div>
</template>

<script>

import consts from "@/consts";
import Submit from "@/components/challenge/Submit";
import DownloadAttachment from "@/components/challenge/DownloadAttachment";
import ApplyContainer from "@/components/challenge/ApplyContainer";
import lightweightRestful from "vue-lightweight_restful";
import Body from "@/components/challenge/Body";
import Delete from "@/components/challenge/Management/Delete";

export default {
  name: 'challengeItem',
  components: {Delete, Body, ApplyContainer, DownloadAttachment, Submit},
  props: {
    challenge: Object,
    is_admin: Boolean,
  },
  data: function () {
    return {
      challenge_template: {
        id: 1,
        name: 'challenge1',
        solved: true,
        description: 'challenge description',
        hint: '["hint1", "hint2"]',
        attachment_id: 1,
        type: 2,
      },
      logged_in: false,
    }
  },
  async created() {
    this.logged_in = await lightweightRestful.api.loggedIn()
  },
  methods: {
    is_static_challenge(type) {
      return type === consts.Model.challenge.type.static
    }
  }
}
</script>

<style scoped>

</style>
