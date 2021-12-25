import { createStore } from 'vuex'
import axios from 'axios'
import Signin from './modules/Signin'
import AllClubs from './modules/AllClubs'
import ManageClubs from './modules/ManageClubs'
import ClubDetails from './modules/ClubDetails'
import Admin from './modules/Admin'
import CreateClub from './modules/CreateClub'
import Members from './modules/Members'
import Notifications from './modules/Notifications'
import router from '../router/index'
import swal from 'sweetalert'
import Home from './modules/Home'

export default createStore({
    state: {
        token: sessionStorage.getItem('token'),
        user_id: sessionStorage.getItem('userID'),
        isSuperUser: sessionStorage.getItem('isAuth'),
    },
    mutations: {
        checkToken(state) {

        },
        logout(state) {
            state.token = null
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userID')
            sessionStorage.removeItem('isAuth')
            sessionStorage.removeItem('manageID')
            router.push('/login')

        },
        setUserID(state, res) {
            state.user_id = res
        },
        setToken(state, aToken) {
            state.token = aToken
        },
        setSuperUser(state, newVal) {
            state.isSuperUser = newVal
        }
    },
    actions: {
        async getAuthQuote({ commit, state }) {


        },

        async logout({ commit, state }) {
            await axios.get('https://gestalt-ver-23242.herokuapp.com/api/logout', {
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
    getters: {
        getToken: (state) => {
            return state.token
        },
        getUserID: (state) => {
            return state.user_id
        }
    },

    // modules
    modules: {
        Signin,
        AllClubs,
        ManageClubs,
        ClubDetails,
        Admin,
        CreateClub,
        Members,
        Home,
        Notifications
    }
})