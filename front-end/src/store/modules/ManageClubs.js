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
        setJoinRequests(state, val) {
            state.JoinRequests = val
        },
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
            swal("Success", `You have Accepted Memeber ${id}`, "success")

        },
        testReject(state, id) {
            swal("Success", `You have Rejected Memeber ${id}`, "success")

        },
        testCancelEvent(state, id) {

        },
        setClubID(state, newVal) {
            state.club = newVal
        }
    },
    actions: {
        async CreateEvent({ commit, state }, clubID) {
            var today = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString()
            if (state.eventDescription == "" || state.eventLocation == "" || state.eventName == "" || state.eventDate == "") {
                swal('Input Error', 'All Fields Must Be Entered', 'error')
            } else {
                if (today > state.eventDate) {
                    swal('Input Error', 'Time Chosen Cannot Be In The Past', 'error')
                } else {
                    const objHeaders = {
                        "Authorization": `Token ${store.getters.getToken}`
                    }
                    await axios.post("http://127.0.0.1:8000/api/events", {
                        title: state.eventName,
                        description: state.eventDescription,
                        location: state.eventLocation,
                        date: state.eventDate,
                        club: clubID
                    }, {
                        headers: objHeaders
                    }).then(res => {
                        swal("Success", "Event Has Been Created Successfully", "success");
                        router.push({ path: `/manage/${clubID}` })
                    }).catch(err => {
                        swal('Error', 'An error Occured, Please Try Again', 'error')
                    })
                }

            }

        },
        async CreateAnnouncement({ commit, state }, club) {
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

                    swal("Success", "Announcement Has Been Created Successfully", "success");
                    router.push({ path: `/manage/${club}` })

                }).catch(err => {
                    swal('Error', 'An error Occured, Please Try Again', 'error')
                })
            } else {
                swal('Input Error', 'Announcement Cannot Be Empty', 'error')
            }

        },
        async getJoinRequests({ commit }, clubID) {
            await axios.get(`http://127.0.0.1:8000/api/request/joinclubfilter?club_id=${clubID}`).then(res => {
                commit('setJoinRequests', res.data)
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })
        },
        async AcceptMember({ commit }, reqId) {
            await axios.post("http://127.0.0.1:8000/api/request/approvejoin", {
                id: reqId
            }).then(res => {
                location.reload();
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })

        },
        async RejectMember({ commit }, reqId) {
            var isConfirmed = false
            await swal("Are You Sure You Want To Reject This Member?", {
                dangerMode: true,
                buttons: true,
            }).then(res => {
                isConfirmed = res
            })
            if (isConfirmed == true) {
                await axios.post("http://127.0.0.1:8000/api/request/rejectjoin", {
                    id: reqId
                }).then(res => {
                    location.reload();
                }).catch(err => {
                    swal('Error', 'An error Occured, Please Try Again', 'error')
                })
            }

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