import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';



export default {
    namespaced: true,
    state: {
        AllClubs: [],
        AllMemberClub: [],
        AllManagerClub: [],
        pendingRequests: []

    },
    mutations: {
        reloadPage(state) {
            // router.go()
        },
        setAllClubs(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
        },

        setAllMemberClubs(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
        },

        setAllManagerClubs(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
        },

        setPendingRequests(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
        },

        filterClubs(state) {
            // filter the arrays according to the following rules
            // 1- If an element is in AllClubs and AllMemberClub, the common elements are removed from AllClubs
            // 2- If an element is in AllClubs and AllManagerClub, the common elements are removed from AllClubs
            // 3- If an element is in AllClubs and pendingRequests, the common elements are removed from AllClubs
            // 3- (still not confirmed) if an element is in AllManagerClub and AllMemberClub
            // the common elements are removed from AllMemberClub
        }
    },
    actions: {
        async setAllClubs({ commit }) {
            await axios.get('http://localhost:3000/clubs')
                .then(res => {
                    commit('setAllClubs', res.data) // returns the array of data
                }).catch(err => {
                    console.log(err)
                })
        },

        async setAllMemberClubs({ commit }) {
            await axios.get('http://localhost:3000/:user_id/clubs')
                .then(res => {
                    commit('setAllMemberClubs', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },

        async setAllManagerClubs({ commit }) {
            await axios.get('http://localhost:3000/:user_id/clubsManager')
                .then(res => {
                    commit('setAllManagerClubs', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },

        async setPendingRequests({ commit }) {
            await axios.get('http://localhost:3000/Pending_join/:user_id')
                .then(res => {
                    commit('setPendingRequests', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },

        async joinClub() {
            await axios.post('http://localhost:3000/requests/:club_id', {
                name: $store.user.name,
                surname: $store.user.surname,
                student_id: $store.user.student_id
            }).then(res => {
                console.log(res)
                console.log('Request Send Successfully')
            }).catch(err => {
                console.log(err)
            })
        }
    },
    getters: {},
    modules: {},
};