import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {
        JoinRequests: [],
        currentEvents: [],
        numberOfMembers: 0,
        creatdAt: "13/2/2021",
        eventDescription: "",
        eventName: "",
        eventDate: "",
        eventLocation: "",
        announcementMsg: "",
        club: "",
    },
    mutations: {
        setEventName(state, val) {
            state.eventName = val
        },
        setEventLocation(state, val) {
            state.eventLocation = val
        },
        setEventDate(state, val) {
            state.eventDate = val
        },
        setEventDescription(state, val) {
            state.eventDescription = val
        },
        setAnnouncement(state, val) {
            state.announcementMsg = val
        },
        testAccept(state, id) {
            console.log("Member with id: ", id, "has been accepted")
        },
        testReject(state, id) {
            console.log("Member with id: ", id, "has been rejected")
        },
        testCancelEvent(state, id) {
            console.log("event with id: ", id, "has been cancelled")
        },
        setClubID(state, newVal) {
            state.club = newVal
        }
    },
    actions: {
        CreateEvent({ commit, state }) {
            var today = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString()
            if (today > state.eventDate) {
                swal('Input Error', 'Time Chosen Cannot Be In The Past', 'error')
            } else {
                console.log('Event ', state.eventName, ' is taking place in ', state.eventLocation, ' at time: ', state.eventDate, ' and its description is ', state.eventDescription)
            }

        },
        async CreateAnnouncement({ commit, state }, club) {
            // console.log("content: ", state.announcementMsg)
            // console.log("club: ", club)
            // console.log("Authorization: Token ", store.getters.getToken)
            const objHeaders = {
                "Authorization": `Token ${store.getters.getToken}`
            }
            if (state.announcementMsg !== "") {
                await axios.post('http://127.0.0.1:8000/api/announcements', {
                    content: state.announcementMsg,
                    club: club
                }, {
                    headers: objHeaders
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            } else {
                swal('Input Error', 'Announcement Cannot Be Empty', 'error')
            }

        },
        testAccept({ commit }, id) {
            commit('testAccept', id)
        },
        testReject({ commit }, id) {
            commit('testReject', id)
        },
        testCancelEvent({ commit }, id) {
            commit('testCancelEvent', id)
        },
    },
    getters: {},
    modules: {},
};