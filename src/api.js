import lightweightRestful from "vue-lightweight_restful";
import consts from "@/consts";

export default {
    async check_initialize() {
        let response = await lightweightRestful.api.get(consts.api.v1.initialize.initialize)
        return response.should_initialize
    },
    async checkAuth() {
        if (!this.$cookies.isKey('token')) {
            return false
        }
        let response = await lightweightRestful.api.get('auth').catch(function (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    response = error.response
                    return Promise
                }
            }
        })

        return response.status === 200
    },
}
