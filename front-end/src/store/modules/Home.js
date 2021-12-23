import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'

export default {
    namespaced: true,
    state: {
        AllEvents: [],
        AllClubs: [],
        Clubs: [],
    },
    mutations: {
        setEvents(state, eventArr) {
            state.AllEvents = eventArr
        },

        setAllMemberClubs(state, res) {
            var response = state.AllClubs.filter(item => {
                var clubID = item.id
                for (let x of res) {
                    if (x.club == clubID) {
                        return item
                    }
                }
            });
            state.Clubs = response
            console.log("clubs", Clubs);
        },

        setAllClubs(state, res) {
            state.AllClubs = res
            console.log("all clubs", AllClubs);
        },
    },
    actions: {
        async setAllClubs({ commit, state }) {
            await axios.get('http://127.0.0.1:8000/api/clubs')
                .then(res => {
                    console.log(res.data);
                    commit('setAllClubs', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },
        async setAllMemberClubs({ commit }) {
            var userID = sessionStorage.getItem('userID')
            await axios.get(`http://127.0.0.1:8000/api/request/clubenrollments?user_id=${userID}`)
                .then(res => {
                    console.log(res.data)
                    commit('setAllMemberClubs', res.data)
                    commit('setUnaffiliatedClub')
                }).catch(err => {
                    console.log(err)
                })
        },

    }, 
    getters: {},
    modules: {},
}