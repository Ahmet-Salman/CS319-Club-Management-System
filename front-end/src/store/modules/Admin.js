import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {},
    mutations: {},
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
            console.log("Accepted Club Request ", reqId)
                // axios.post("localhost/8000/clubReq/reject").then(res => {
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
    },
    getters: {},
    modules: {},
};