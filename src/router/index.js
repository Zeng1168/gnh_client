import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/main',
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () =>
    //         import ('../components/Login/Login.vue')
    // }, {
    //     path: '/Register',
    //     name: 'Register',
    //     component: () =>
    //         import ('../components/Login/Register.vue')
    // }, {
    //     path: '/retrievepwd',
    //     name: 'retrievepwd',
    //     component: () =>
    //         import ('../components/Login/Retrievepwd.vue')
    // }, 
    {
        path: '/main',
        name: 'main',
        component: () =>
            import ('../components/Main.vue'),
        children: [

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router