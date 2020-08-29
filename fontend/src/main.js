import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'assets/css/public.less';
import 'amfe-flexible';
import router from './router'
import store from './store/store'
import API from './lib/API'
// import './lib/rem'

import {
    config
} from './lib/config'
import util from './lib/util'

// vconsole开发阶段使用，项目发版正式后注释掉【方便移动端调试】
// import VConsole from 'vconsole'
// if (process.env.NODE_ENV !== 'development') {
//     let vConsole = new VConsole()
// }

Vue.use(Vant);
Vue.prototype.api = API;
Vue.prototype.util = util;

// --------------------------路由拦截start-----------------------
router.beforeEach((to, from, next) => {
    // 路由同步页面title
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.matched.length === 0) {
        next({
            path: '/404'
        })
        return
    }
    if (to.meta.noLogin) {
        // 不需要登录清除token
        config.headers.token = ''
        next();
    } else {
        //需要登录而未登录跳转login,   需要登录而已登录设置token
        if (!store.state.user.isLogin) {
            next({
                path: '/login'
            });
        } else {
            let loginData = store.state.user.loginData
            if (loginData) {
                config.headers.token = loginData.token;
            } else {
                config.headers.token = ''
            }
            next()
        }
    }
    next();

    //Vue 页面跳转到新页面时, 默认在页面底部,不是顶部
    window.scrollTo(0, 0);
})
// --------------------------路由拦截 end------------------------

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')