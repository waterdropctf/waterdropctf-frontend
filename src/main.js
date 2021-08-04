import Vue from 'vue'

Vue.config.productionTip = false

require('format-unicorn')

// bootstrap
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// sidebar
// https://www.npmjs.com/package/vue-sidebar-menu
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueSidebarMenu)

// lightweight_restful
import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

lightweightRestful.api.initClient(consts.BaseUrl)
Vue.use(lightweightRestful)

// router
import App from './App.vue'
import router from '@/router'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
