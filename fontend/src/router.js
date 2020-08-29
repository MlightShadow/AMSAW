import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 关于meta
// title => 页面title
// noLogin:true 当前路由不需要登录
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/index'
        }, {
            path: '/index',
            name: 'index',
            meta: {
                title: 'ALWAYS世界: 自治服务器(wow测试帐号管理服务)',
                noLogin: true,
                noBack: true,
                keepAlive: true
            },
            component: () =>
                import( /* webpackChunkName: "command" */ './views/index.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                title: '注册',
                noLogin: true,
                noBack: true,
                keepAlive: true
            },
            component: () =>
                import( /* webpackChunkName: "command" */ './views/register.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            meta: {
                title: '帐号管理',
                noLogin: true,
                noBack: true,
                keepAlive: true
            },
            component: () =>
                import( /* webpackChunkName: "command" */ './views/mine.vue')
        },
        {
            path: '/tools',
            name: 'tools',
            meta: {
                title: '自助工具',
                noLogin: true,
                noBack: true,
                keepAlive: true
            },
            component: () =>
                import( /* webpackChunkName: "command" */ './views/tools.vue')
        },
    ]
})