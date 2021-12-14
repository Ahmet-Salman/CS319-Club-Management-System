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
import clubDetails from '../views/ClubDetails.vue'
import Profile from '../views/Profile.vue'
import members from '../views/MembersList.vue'
import createClub from '../views/CreateClub.vue'
import admin from '../views/Admin.vue'
import store from '@/store/index'
import axios from 'axios'

// var allClubs = [],

//     async getClubs() {
//         await axios.get('http://127.0.0.1:8000/api/clubs')
//             .then(res => {
//                 commit('setAllClubs', res.data) // returns the array of data
//             }).catch(err => {
//                 console.log(err)
//             })
//     }



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
        path: '/admin',
        name: 'Admin',
        component: admin,
        beforeEnter: (to, from, next) => {
            // var isSuper = store.state.isSuperUser
            // console.log("Value outside is: ", isSuper)
            // if (store.state.token == null) {
            //     next("/login");
            // } else if (isSuper == true) {
            //     console.log("Value inside if is: ", isSuper)
            //     next("/admin");
            // } else {
            //     console.log("Value inside else is: ", isSuper)
            //     next("/home");
            // }

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
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next();
            } else {

                next("/home");
            }
        }
    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    }, {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    }, {
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

    }, {
        path: '/createClub',
        name: 'CreateClub',
        component: createClub,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }

    }, {
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
    }, {
        path: '/manage/:clubID',
        name: 'Manage',
        component: ManageClub,
        props: true,
        beforeEnter: (to, from, next) => {
            var ManageID = sessionStorage.getItem('manageID')
                // console.log(managerClubs[0])
                // console.log(to.params.clubID)
                // console.log(managerClubs.owner)
            if (store.state.token == null) {
                next("/login");
            } else if (to.params.clubID != ManageID) {
                next('/notFound')
            } else {
                next();
            }
            // if (store.state.token == null) {
            //     next("/login");
            // } else {
            //     next();
            // }
        },
    }, {
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
    }, {
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
    }, {
        path: '/clubDetails/:clubID',
        name: 'ClubDetails',
        component: clubDetails,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    }, {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    }, {
        path: '/members/:clubID',
        name: 'Members',
        component: members,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        }
    }, {
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