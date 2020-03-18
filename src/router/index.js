import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/main',
        name: 'main',
        component: () =>
            import ('../components/Main.vue'),
        children: [{
            path: 'home',
            name: "home",
            component: () =>
                import ('../components/Home/Home.vue')
        }, {
            path: 'group',
            name: "group",
            component: () =>
                import ('../components/Group/Group.vue'),
            children: [{
                path: 'task',
                name: 'studyTask',
                component: () =>
                    import ('../components/Group/StudyTask.vue')
            }, {
                path: 'members',
                name: 'groupMembers',
                component: () =>
                    import ('../components/Group/Members.vue')
            }]
        }]
    },
    {
        path: '*',
        redirect: '/main/home',
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router