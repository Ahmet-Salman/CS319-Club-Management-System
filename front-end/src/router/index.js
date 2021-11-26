import { processFor } from '@vue/compiler-core'
import { Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import AllClubs from '../views/AllClubs.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ManageClub from '../views/ManageClub.vue'
import CreateEvent from '../views/CreateEvent.vue'
import CreateAnnouncement from '../views/CreateAnnouncement.vue'
import store from '@/store/index'

const routes = [{
        path: '/',
        redirect: {
            name: "Login"
        },
        component: Home,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/clubs',
        name: 'Clubs',
        component: AllClubs,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }

    },
    {
        path: '/clubs/:clubID',
        name: 'ClubDetails',
        component: PageNotFound,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: '/manage/:clubID',
        name: 'Manage',
        component: ManageClub,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: '/createEvent/:clubID',
        name: 'CreateEvent',
        component: CreateEvent,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: '/createAnnouncement/:clubID',
        name: 'CreateAnnouncement',
        component: CreateAnnouncement,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router