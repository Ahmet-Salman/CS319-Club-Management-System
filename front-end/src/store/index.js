import { createStore } from 'vuex'
import axios from 'axios'
import Signin from './modules/Signin'
import Signup from './modules/Signup'
import router from '../router/index'

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {},

    // modules
    modules: {
        Signin,
        Signup
    }
})