import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About/About.vue')
    },

    {
        path: '/online',
        name: 'user',
        component: () => import('../views/OnlineRecognition/OnlineRecognition.vue')
    },
    {
        path: '/discussion',
        name: 'discussion',
        component: () => import('../views/Discussion/Discussion.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/404/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
