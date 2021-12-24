import { processFor } from "@vue/compiler-core";
import {
    Router,
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import AllClubs from "../views/AllClubs.vue";
import PageNotFound from "../views/PageNotFound.vue";
import ManageClub from "../views/ManageClub.vue";
import CreateEvent from "../views/CreateEvent.vue";
import CreateAnnouncement from "../views/CreateAnnouncement.vue";
import clubDetails from "../views/ClubDetails.vue";
import Profile from "../views/Profile.vue";
import members from "../views/MembersList.vue";
import message from "../views/MessageManager.vue";
import createClub from "../views/CreateClub.vue";
import ann from "../views/Announcements.vue";
import clubAnn from "../views/ClubAnnouncements.vue";
import clubEvents from "../views/ClubEvents.vue";
import admin from "../views/Admin.vue";
import store from "@/store/index";
import Notifications from "../views/Notifications.vue";
import axios from "axios";

const routes = [{
        path: "/",
        redirect: {
            name: "Login",
        },
        component: Home,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/admin",
        name: "Admin",
        component: admin,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next();
            } else {
                next("/home");
            }
        },
    },
    {
        path: "/clubs",
        name: "Clubs",
        component: AllClubs,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/createClub",
        name: "CreateClub",
        component: createClub,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/clubs/:clubID",
        name: "ClubDetails",
        component: PageNotFound,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/manage/:clubID",
        name: "Manage",
        component: ManageClub,
        props: true,
        beforeEnter: (to, from, next) => {
            var ManageID = sessionStorage.getItem("manageID");
            if (store.state.token == null) {
                next("/login");
            } else if (to.params.clubID != ManageID) {
                next("/notFound");
            } else {
                next();
            }
        },
    },
    {
        path: "/createEvent/:clubID",
        name: "CreateEvent",
        component: CreateEvent,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/createAnnouncement/:clubID",
        name: "CreateAnnouncement",
        component: CreateAnnouncement,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/clubDetails/:clubID",
        name: "ClubDetails",
        component: clubDetails,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/Notifications",
        name: "Notifications",
        component: Notifications,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/Notifications");
            } else {
                next();
            }
        },
    },
    {
        path: "/members/:clubID",
        name: "Members",
        component: members,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/messages/:clubID",
        name: "Messages",
        component: message,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/announcement/:clubID",
        name: "Announcements",
        component: ann,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/clubAnn/:clubID",
        name: "ClubAnnouncements",
        component: clubAnn,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/clubEvents/:clubID",
        name: "ClubEvents",
        component: clubEvents,
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token == null) {
                next("/login");
            } else {
                next();
            }
        },
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;