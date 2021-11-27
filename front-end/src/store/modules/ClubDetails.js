import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'


export default {
    namespaced: true,
    state: {
        announcements: [],
    },
    mutations: {
        setAnnouncements(state, newArr) {
            state.announcements = newArr
            console.log("Inside Mutation")
        },
    },
    actions: {
        async getAnnouncements({ commit, state }, club) {
            // console.log("getting the announcements for club: ", club)
            const params = new URLSearchParams([
                ['clubId', club]
            ]);
            // const objHeaders = {
            //         "Authorization": `Token ${store.getters.getToken}`
            //     }
            await axios.get("http://127.0.0.1:8000/api/announcements", { params }).then(res => {
                console.log("inside dispatch function")
                commit('setAnnouncements', res.data)

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