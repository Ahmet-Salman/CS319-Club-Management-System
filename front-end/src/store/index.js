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
        token: sessionStorage.getItem('token'),
        user_id: sessionStorage.getItem('userID')
    },
    mutations: {
        checkToken(state) {
            console.log(state.token)
        },
        logout(state) {
            state.token = null
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userID')
            router.push('/login')

        },
        setUserID(state, res) {
            state.user_id = res
        },
        setToken(state, aToken) {
            state.token = aToken
        }
    },
    actions: {
        async getAuthQuote({ commit, state }) {
            // console.log(state.token)
            // console.log(state.user_id)
            // console.log(sessionStorage.getItem('token'))
            // commit('setToken', sessionStorage.getItem('token'))
            // await axios.get('http://localhost:3001/api/protected/random-quote', {
            //     headers: { "Authorization": `Bearer ${state.token}` }
            // }).then(res => {
            //     commit('printQuote', res)
            // }).catch(err => {
            //     if (err.response.status == 401) {
            //         swal('Input Error', 'You Are Not Authenticated', 'error')
            //     } else {
            //         swal('Input Error', 'An Error Occured', 'error')
            //     }
            // })
        },

        async logout({ commit, state }) {
            await axios.get('http://127.0.0.1:8000/api/logout', {
                headers: { "Authorization": `Token ${state.token}` }
            }).then(res => {
                state.token = null
                state.user_id = null
                commit('logout')
            }).catch(err => {
                swal('Internal Error', 'An Error Occured', 'error')
            })
        }
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