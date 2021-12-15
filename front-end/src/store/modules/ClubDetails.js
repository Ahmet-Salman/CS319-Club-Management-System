import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'


export default {
    namespaced: true,
    state: {
        announcements: [],
        events: [],
        clubDescription: "",
        clubName: "",
    },
    mutations: {
        setAnnouncements(state, annArr) {
            state.announcements = annArr
        },
        setEvents(state, eventArr) {
            state.events = eventArr
        },
        setClubDetails(state, payload) {
            state.clubDescription = payload.desc
            state.clubName = payload.name
        }
    },
    actions: {
        async getAnnouncements({ commit, state }, club) {
            const params = new URLSearchParams([
                ['clubId', club]
            ]);

            await axios.get("http://127.0.0.1:8000/api/announcements", {
                params
            }).then(res => {
                commit('setAnnouncements', res.data)
            }).catch(err => {
                swal('Errpr', 'An error Occured, Please Try Again', 'error')
            })
        },

        async deleteAnnouncement({ commit }, payload) {
            var annId = payload.annId
            const objHeaders = {
                "Authorization": `Token ${store.getters.getToken}`
            }

            await axios.delete(`http://127.0.0.1:8000/api/announcement/${annId}`, {
                headers: objHeaders
            }).then(res => {
                location.reload();
            }).catch(err => {
                swal('Errpr', 'An error Occured, Please Try Again', 'error')
            })
        },

        async getClubDescription({ commit }, clubId) {
            await axios.get(`http://127.0.0.1:8000/api/club/${clubId}`).then(res => {
                commit('setClubDetails', {
                    desc: res.data.description,
                    name: res.data.name
                })
            }).catch(err => {
                console.log(err)
            })
        },

        async getEvents({ commit }, club) {
            const params = new URLSearchParams([
                ['clubId', club]
            ]);
            await axios.get("http://127.0.0.1:8000/api/events", {
                params
            }).then(res => {
                commit('setEvents', res.data)
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },

        async deleteEvent({ commit }, eventID) {
            const objHeaders = {
                "Authorization": `Token ${store.getters.getToken}`
            }

            await axios.delete(`http://127.0.0.1:8000/api/event/${eventID}`, {
                headers: objHeaders
            }).then(res => {
                location.reload();

            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },


    },
    getters: {
        getAllAnnouncements(state) {
            return state.announcements;
        }
    },
};