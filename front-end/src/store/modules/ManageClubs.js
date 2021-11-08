import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';



export default {
    namespaced: true,
    state: {
        JoinRequests: [],
        currentEvents: [],
        numberOfMembers: 0,
        creatdAt: "13/2/2021"
    },
    mutations: {
        testAccept(state, id) {
            console.log("Member with id: ", id, "has been accepted")
        },
        testReject(state, id) {
            console.log("Member with id: ", id, "has been rejected")
        },
        testCancelEvent(state, id) {
            console.log("event with id: ", id, "has been cancelled")
        }
    },
    actions: {
        testAccept({ commit }, id) {
            commit('testAccept', id)
        },
        testReject({ commit }, id) {
            commit('testReject', id)
        },
        testCancelEvent({ commit }, id) {
            commit('testCancelEvent', id)
        }
    },
    getters: {},
    modules: {},
};