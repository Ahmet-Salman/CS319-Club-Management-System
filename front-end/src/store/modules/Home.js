import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'

export default {
    namespaced: true,
    state: {
        AllClubs: [],
        Clubs: [],
        AllEvents: [],
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
            console.log("this clubs", Clubs);
        },

        setAllClubs(state, res) {
            state.AllClubs = res
        },
    },
    actions: {
        async getEvents({ commit }, club) {
            
            await axios.get("http://127.0.0.1:8000/api/events").then(res => {
                commit('setEvents', res.data)
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },

        async setAllClubs({ commit, state }) {
            await axios.get('http://127.0.0.1:8000/api/clubs').then(res => {
                    commit('setAllClubs', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },
        async setAllMemberClubs({ commit }) {
            var userID = sessionStorage.getItem('userID')
            await axios.get(`http://127.0.0.1:8000/api/request/clubenrollments?user_id=${userID}`).then(res => {
                    commit('setAllMemberClubs', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },
    }, 
    getters: {},
    modules: {},
}