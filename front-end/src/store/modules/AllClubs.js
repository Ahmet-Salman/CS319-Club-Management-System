import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';
import store from '@/store/index'



export default {
    namespaced: true,
    state: {
        AllClubs: [],
        UnaffiliatedClub: [],
        AllMemberClub: [],
        AllManagerClub: [],
        pendingRequests: [],

    },
    mutations: {
        reloadPage(state) {
            // router.go()
        },
        setAllClubs(state, res) {
            state.AllClubs = res
                // parse the recieved JSON response and convert it to an array
                // Then set the resulting array to its respective array
        },
        setUnaffiliatedClub(state) {
            // Filters through manager clubs
            var userID = sessionStorage.getItem('userID')
            var unAffArray = state.AllClubs.filter((value) => {
                return value.owner.id != userID
            })

            unAffArray = unAffArray.filter(item => !state.pendingRequests.includes(item));
            unAffArray = unAffArray.filter(item => !state.AllMemberClub.includes(item));
            state.UnaffiliatedClub = unAffArray
        },

        setAllMemberClubs(state, res) {
            var response = state.AllClubs.filter(item => {
                var clubID = item.id
                for (let x of res) {
                    if (x.club == clubID) {
                        return item
                    }
                }
            });
            state.AllMemberClub = response
        },

        setAllManagerClubs(state) {
            var userID = sessionStorage.getItem('userID')
            var managerArray = state.AllClubs.filter((value) => {
                return value.owner.id == userID
            })

            state.AllManagerClub = managerArray
        },

        setPendingRequests(state, pendingReq) {
            state.pendingRequests = pendingReq
        },

        filterClubs(state) {
            // filter the arrays according to the following rules
            // 1- If an element is in AllClubs and AllMemberClub, the common elements are removed from AllClubs
            // 2- If an element is in AllClubs and AllManagerClub, the common elements are removed from AllClubs
            // 3- If an element is in AllClubs and pendingRequests, the common elements are removed from AllClubs
            // 3- (still not confirmed) if an element is in AllManagerClub and AllMemberClub
            // the common elements are removed from AllMemberClub
        }
    },
    actions: {
        async setAllClubs({ commit, state }) {
            await axios.get('http://127.0.0.1:8000/api/clubs')
                .then(res => {
                    commit('setAllClubs', res.data) // returns the array of data
                    commit('setPendingRequests')
                }).catch(err => {
                    console.log(err)
                })
        },

        async setAllMemberClubs({ commit }) {
            var userID = sessionStorage.getItem('userID')
            await axios.get(`http://127.0.0.1:8000/api/request/clubenrollments?user_id=${userID}`)
                .then(res => {
                    // console.log(res.data)
                    commit('setAllMemberClubs', res.data)
                    commit('setUnaffiliatedClub')
                }).catch(err => {
                    console.log(err)
                })
        },

        async setAllManagerClubs({ commit }) {
            commit('setAllManagerClubs')
                // await axios.get('http://localhost:3000/:user_id/clubsManager')
                //     .then(res => {
                //         commit('setAllManagerClubs', res.data)
                //     }).catch(err => {
                //         console.log(err)
                //     })
        },

        async setPendingRequests({ commit, state }) {
            var userID = sessionStorage.getItem('userID')
            await axios.get(`http://127.0.0.1:8000/api/request/joinclubfilter?user_id=${userID}`)
                .then(res => {
                    var response = state.AllClubs.filter(item => {
                        var clubID = item.id
                        for (let x of res.data) {
                            if (x.club_id == clubID /*&& (x.user_id == userID)*/ ) {
                                return item
                            }
                        }
                    });
                    commit('setPendingRequests', response)
                }).catch(err => {
                    console.log(err)
                })
        },

        async JoinClub({ commit }, clubID) {
            // console.log("User ", sessionStorage.getItem("userID"), " Joined club ", clubID)
            await axios.post('http://127.0.0.1:8000/api/request/joinclubrequest', {
                user_id: sessionStorage.getItem("userID"),
                club_id: clubID,
            }).then(res => {
                console.log(res)
                location.reload()
                    // swal("Success", "Your Request Has Been Recieved, Please Wait Until The Club Manager Accepts Your Request", "success")
            }).catch(err => {
                console.log(err)
            })
        },

        async deleteClub({ commit }, clubID) {
            var isConfirmed = null

            await swal("Are You Sure You Want To Delete Your Club?", {
                dangerMode: true,
                buttons: true,
            }).then(res => {
                isConfirmed = res
            })

            if (isConfirmed == true) {
                const objHeaders = {
                    "Authorization": `Token ${store.getters.getToken}`
                }

                await axios.delete(`http://127.0.0.1:8000/api/club/${clubID}`, {
                    headers: objHeaders
                }).then(res => {
                    location.reload();
                }).catch(err => {
                    swal('Error', 'An error Occured, Please Try Again', 'error')
                })
            }
        },

        async cancelJoin({ commit }, clubID) {
            var userID = sessionStorage.getItem('userID')
            var reqId = -1
            await axios.get(`http://127.0.0.1:8000/api/request/joinclubrequest?userId=${userID}&clubId=${clubID}`).then(res => {
                reqId = res.data[0].id
            }).catch(err => {
                swal('Error', 'An error Occured, Please Try Again', 'error')
            })

            await axios.post("http://127.0.0.1:8000/api/request/rejectjoin", {
                id: reqId
            }).then(res => {
                location.reload();
            }).catch(err => {
                console.log(err)
            })
        },

        async leaveClub({ commit }, club_id) {
            var userID = sessionStorage.getItem('userID')
            var isConfirmed = null

            await swal("Are You Sure You Want To Leave This Club?", {
                dangerMode: true,
                buttons: true,
            }).then(res => {
                isConfirmed = res
            })
            if (isConfirmed == true) {
                await axios.delete(`http://127.0.0.1:8000/api/club/${clubID}`, {
                    headers: objHeaders
                }).then(res => {
                    location.reload();
                }).catch(err => {
                    swal('Error', 'An error Occured, Please Try Again', 'error')
                })
            }
            // const objHeaders = {
            //     "Authorization": `Token ${store.getters.getToken}`
            // }
            // await axios.post(`http://127.0.0.1:8000/api/comments`, {
            //     content: text,
            //     club: clubID
            // }, {
            //     headers: objHeaders
            // }).then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
        }
    },
    getters: {
        getAllClubs(state) {
            return state => state.AllClubs
        },
        getAllMemberClub(state) {
            return state => state.AllMemberClub
        },

        AllManagerClub(state) {
            return state => state.AllManagerClub
        },

        getPendingRequests(state) {
            return state => state.pendingRequests
        },


    },
    modules: {},
};