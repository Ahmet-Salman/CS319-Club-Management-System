import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {
        members: [],
    },
    mutations: {
        getMembers(state, newArr) {
            state.members = newArr
        }
    },
    actions: {
        async KickMember({ commit, state }, userID) {
            var token = sessionStorage.getItem("token")
            const objHeaders = {
                "Authorization": `Token ${token}`
            }
            console.log("Kicked Out member with ID", userID)
        },
        async getMembers({ commit }) {
            // await axios.get("http://127.0.0.1:8000/api/request/createclubrequest").then(res => {
            //     console.log(res.data)
            //     commit('getRequests', res.data)
            // }).catch(err => {
            //     console.log(err)
            // })
        },
    },
    getters: {},
    modules: {},
};