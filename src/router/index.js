import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/login',
    },{
        path: '/login',
        name: 'login',
        component: () => import ('../components/Login/Login.vue')
    }, {
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('../components/Login/Register.vue')
    },{
        path: '/retrievepwd',
        name: 'retrievepwd',
        component: () =>
            import ('../components/Login/retrievepwd.vue')
    }, {
        path: '/main',
        name: 'main',
        component: () =>
            import ('../components/Main.vue'),
        children: [
            
        ]
    }]
})