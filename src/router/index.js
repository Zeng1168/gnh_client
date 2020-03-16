import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('../components/Login.vue')
    } {
        path: '/sign',
        name: 'sign',
        component: () =>
            import ('../components/Sign.vue')
    }, , {
        path: '/main',
        name: 'main',
        component: () =>
            import ('../components/Main.vue'),
        children: [{}]
    }]
})