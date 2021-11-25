import { createStore } from 'vuex'
import axios from 'axios'
import Signin from './modules/Signin'
import Signup from './modules/Signup'
import AllClubs from './modules/AllClubs'
import ManageClubs from './modules/ManageClubs'
import router from '../router/index'
import swal from 'sweetalert'


export default createStore({
    state: {
        token: null,
        user: null
    },
    mutations: {
        checkToken(state) {
            console.log(state.token)
        },
        logout(state) {
            state.token = null
            sessionStorage.removeItem('token')
            router.push('/login')

        },
        printQuote(state, res) {
            console.log(res)
        },
        setToken(state, aToken) {
            state.token = aToken
        }
    },
    actions: {
        async getAuthQuote({ commit, state }) {
            commit('setToken', sessionStorage.getItem('token'))
            await axios.get('http://localhost:3001/api/protected/random-quote', {
                headers: { "Authorization": `Bearer ${state.token}` }
            }).then(res => {
                commit('printQuote', res)
            }).catch(err => {
                if (err.response.status == 401) {
                    swal('Input Error', 'You Are Not Authenticated', 'error')
                } else {
                    swal('Input Error', 'An Error Occured', 'error')
                }
            })
        },
    },
    getters: {},

    // modules
    modules: {
        Signin,
        Signup,
        AllClubs,
        ManageClubs
    }
})