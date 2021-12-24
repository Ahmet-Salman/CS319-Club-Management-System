import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {
        clubID: -1,
        members: [],
    },
    mutations: {
        getMembers(state, newArr) {
            state.members = newArr
        },
        setClubID(state, newVal) {
            state.clubID = newVal
        }
    },
    actions: {
        async KickMember({ commit, state }, user_id) {
            var club_id = state.clubID
            var isConfirmed = null

            await swal("Are You Sure You Want To Kick This Member?", {
                dangerMode: true,
                buttons: true,
            }).then(res => {
                isConfirmed = res
            })
            if (isConfirmed == true) {
                await axios.delete(`http://127.0.0.1:8000/api/request/deleteclubenrollments?club_id=${club_id}&user_id=${user_id}`).then(res => {
                    location.reload();
                }).catch(err => {
                    swal('Error', 'An error Occured, Please Try Again', 'error')
                })
            }
        },
        async getMembers({ commit }, clubID) {

            await axios.get(`http://127.0.0.1:8000/api/request/clubenrollments?club_id=${clubID}`).then(res => {
                commit('setClubID', clubID)
                commit('getMembers', res.data)
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },
    },
    getters: {},
    modules: {},
};