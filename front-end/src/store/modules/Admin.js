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
            console.log("Rejected Club Request ", reqId)
                // axios.post("localhost/8000/clubReq/reject").then(res => {
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
        },
        async Accept({ commit, state }, reqId) {
            var token = sessionStorage.getItem("token")
            const objHeaders = {
                "Authorization": `Token ${token}`
            }
            console.log("Accepted Club Request ", reqId)
            var req = state.createReqs.find(x => x.id == reqId)
            console.log(req)
            var clubName = req.clubName
            var clubDescription = req.clubDescription
            var clubOwner = req.student_id
            axios.post("http://127.0.0.1:8000/api/clubs", {
                name: clubName,
                description: clubDescription,
                owner: clubOwner
            }, {
                headers: objHeaders
            }).then(res => {
                location.reload();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        async getRequests({ commit }) {
            await axios.get("http://127.0.0.1:8000/api/request/createclub").then(res => {
                commit('getRequests', res.data)
            }).catch(err => {
                console.log(err)
            })
        },
        async user({ commit }) {
            await axios.get("http://127.0.0.1:8000/api/request/createclub").then(res => {
                commit('getRequests', res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    getters: {},
    modules: {},
};