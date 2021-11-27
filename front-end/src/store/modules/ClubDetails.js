import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'


export default {
    namespaced: true,
    state: {
        announcements: [],
        clubDescription: "",
        clubName: "",
    },
    mutations: {
        setAnnouncements(state, newArr) {
            state.announcements = newArr
        },
        setClubDetails(state, payload) {
            state.clubDescription = payload.desc
            state.clubName = payload.name
                // console.log("Club Desc: ", state.clubDescription, ", club name: ", state.clubName)
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
            // console.log(payload.club_id)
            // console.log(payload.annId)
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
                // console.log(res.data.name)
                // console.log(res.data.description)
                commit('setClubDetails', {
                    desc: res.data.description,
                    name: res.data.name
                })
            }).catch(err => {
                console.log(err)
            })
        },
    },
    getters: {
        getAllAnnouncements(state) {
            return state.announcements;
        }
    },
};