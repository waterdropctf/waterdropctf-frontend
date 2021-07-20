<template>
  <div id="index">
    <div class="demo">
      <div class="container">
        <h1>
          {{ remote_config.WEBSITE_NAME }}
          <a style="color: #000;font-size: 14px;font-weight: 400;"
             :href="remote_config.GIT_ADDRESS">
            GITHUB <i class="fas fa-link"></i>
          </a>
        </h1>
        <p> {{ remote_config.WEBSITE_DESCRIPTION }} </p>
        <hr>
        <Auth :base_url="base_url" :auth_uri="auth_uri"
              welcome_class="text-black" button_size="sm" style="line-height: 2.5"
              :after_sign_in="function (){$router.go(0)}" :after_sign_out="function () {$router.go(0)}"
        />
        <hr>
        <img src="../assets/logo.jpeg" style="margin-top: 30px; width: 100%" alt="">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import consts from "@/consts";
import VueCookies from "vue-cookies"
import lightweightRestful from "vue-lightweight_restful";

export default {
  name: 'Index',
  data: function () {
    return {
      model: {},
      remote_config: {
        WEBSITE_NAME: 'WaterDrop CTF',
        WEBSITE_DESCRIPTION: 'A security training platform, not only ctf',
        GIT_ADDRESS: 'https://github.com/waterdropctf/waterdropctf'
      },
      base_url: consts.BaseUrl,
      auth_uri: consts.api.v1.auth
    }
  },
  methods: {
    async get_remote_config() {
      let remote_config = await lightweightRestful.api.get(consts.api.v1.remote_config, null, {
        caller: this,
        error_msg: 'failed',
      })
      if (!(remote_config instanceof Error) && remote_config instanceof Object) {
        this.remote_config = remote_config
      }
    }
  },
  created() {
    console.log(VueCookies.isKey("token"))
    this.get_remote_config()
  }
}
</script>

<style>
/* do not delete this style below */
.input-group {
  margin-top: 3%;
  margin-bottom: 3%;
}


body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}

#app {
  padding-left: 350px;
}

#app.collapsed {
  padding-left: 50px;
}

.demo {
  padding: 10px;
}

.badge-danger {
  background-color: #ff2a2a;
  color: #fff;
}

.container {
  max-width: 600px;
}

pre {
  color: #2a2a2e;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
}

a, a:hover {
  color: #212529;
  /*color: turquoise;*/
}
</style>
