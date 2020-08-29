import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import domain from './modules/domain'
import loadImg from './modules/loadImg'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        domain,
        loadImg
    }
})