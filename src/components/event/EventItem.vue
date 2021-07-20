<template>
  <div>
    <b-card-group columns>
      <challenge-item :logged_in="logged_in" :is-admin="isAdmin" :show-edit-btn="false" :challenge="challenge"
                      :instances="instances"
                      v-on:delete_challenge="delete_event_challenge($event)"
                      v-on:refresh_instance="refreshInstance"
                      v-on:refresh_challenges="refresh_event_challenge"
                      v-for="challenge in event_challenges" v-bind:key="challenge.id"
      />
    </b-card-group>
  </div>
</template>

<script>
import ChallengeItem from "@/components/challenge/ChallengeItem";

export default {
  name: "EventItem",
  components: {ChallengeItem}
}
</script>

<style scoped>

</style>
