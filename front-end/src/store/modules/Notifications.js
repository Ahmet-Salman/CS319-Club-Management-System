import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {
        AllAnnouncements: [],
        ClubIDs: [],
        filteredAnn: [],
    },
    mutations: {
        setAnnouncements(state, newArr) {
            state.AllAnnouncements = newArr
        },
        setclubIDs(state, newArr) {
            state.ClubIDs = newArr
        },
        setFilteredAnnouncement(state, val) {
            var response = state.AllAnnouncements.filter(item => {
                var clubID = item.club.id
                for (let x of state.ClubIDs) {
                    if (x.club == clubID) {
                        return item
                    }
                }
            });
            response = response.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
            state.filteredAnn = response
        },
    },
    actions: {
        async getAnnouncements({ commit, state }) {;
            await axios.get("http://127.0.0.1:8000/api/announcements").then(res => {
                commit('setAnnouncements', res.data)
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },
        async getClubIDs({ commit }) {
            var userId = sessionStorage.getItem('userID')
            await axios.get(`http://127.0.0.1:8000/api/request/clubenrollments?user_id=${userId}`).then(res => {
                commit('setclubIDs', res.data)
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },
    },
    getters: {},
    modules: {},
};