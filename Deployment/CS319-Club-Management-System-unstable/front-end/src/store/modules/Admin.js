import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {
        createReqs: [],
    },
    mutations: {
        getRequests(state, newArr) {
            state.createReqs = newArr
        }
    },
    actions: {
        async Reject({ commit, state }, reqId) {
            var token = sessionStorage.getItem("token")
            const objHeaders = {
                "Authorization": `Token ${token}`
            }
            axios.post("http://127.0.0.1:8000/api/request/rejectclubrequest", {
                    club_request_id: reqId
                },
                // {
                //     headers: objHeaders
                // }
            ).then(res => {
                location.reload();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        async Accept({ commit, state }, reqId) {
            console.log(reqId)
            var token = sessionStorage.getItem("token")
            axios.post("http://127.0.0.1:8000/api/request/approveclubrequest", {
                club_request_id: reqId
            }).then(res => {
                location.reload();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        async getRequests({ commit }) {
            await axios.get("http://127.0.0.1:8000/api/request/createclubrequest").then(res => {
                console.log(res.data)
                commit('getRequests', res.data)
            }).catch(err => {
                console.log(err)
            })
        },
    },
    getters: {},
    modules: {},
};