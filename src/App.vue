<template>
  <div id="app" :class="[{'collapsed' : collapsed}]">
    <init-check v-show="false"/>
    <router-view class="ml-3"/>
    <Menu :is_admin="is_admin" v-on:onToggleCollapse="onToggleCollapse"/>
  </div>
</template>

<script>

import Menu from "@/components/Menu";
import lightweightRestful from "vue-lightweight_restful";
import InitCheck from "@/components/init/InitCheck";

export default {
  name: 'App',
  components: {InitCheck, Menu},

  data() {
    return {
      collapsed: false,
      is_admin: false,
    }
  },
  computed: {},
  created() {
    if (lightweightRestful.api.loggedIn() && this.$cookies.get("is_admin") === "true") {
      this.is_admin = true
    }
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
