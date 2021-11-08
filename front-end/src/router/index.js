import { processFor } from '@vue/compiler-core'
import { Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import AllClubs from '../views/AllClubs.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ManageClub from '../views/ManageClub.vue'
import store from '../store/index'




const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: { auth: false }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { auth: false }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { auth: false }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: { auth: false }
    },
    {
        path: '/clubs',
        name: 'Clubs',
        component: AllClubs,
        meta: { auth: true }
    },
    {
        path: '/clubs/:clubID',
        name: 'ClubDetails',
        component: PageNotFound,
        meta: { auth: true },
        props: true
    },
    {
        path: '/manage/:clubID',
        name: 'Manage',
        component: ManageClub,
        meta: { auth: true },
        props: true
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router