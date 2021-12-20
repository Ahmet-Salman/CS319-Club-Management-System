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
        AllMemberClub: [
            { id: 3, name: 'Club3', catagory: 'catagory3', manager: 'Person3' },
            { id: 6, name: 'Club6', catagory: 'catagory6', manager: 'Person6' },
            { id: 12, name: 'Club12', catagory: 'catagory12', manager: 'Person12' },
        ],
        AllManagerClub: [],
        pendingRequests: [
            { id: 13, name: 'Club13', catagory: 'catagory13', manager: 'Person13' },
            { id: 14, name: 'Club14', catagory: 'catagory14', manager: 'Person14' },
            { id: 15, name: 'Club15', catagory: 'catagory15', manager: 'Person15' },
            { id: 16, name: 'Club16', catagory: 'catagory16', manager: 'Person16' },
        ],

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
                return value.owner != userID
            })
            state.UnaffiliatedClub = unAffArray

            // Filter through member clubs

            // Filter through pending requests

            // array which holds all values
            // const namesArr = ["Lily", "Roy", "John", "Jessica"];

            // // array of values that needs to be deleted
            // const namesToDeleteArr = ["Roy", "John"];

            // // make a Set to hold values from namesToDeleteArr
            // const namesToDeleteSet = new Set(namesToDeleteArr);

            // // use filter() method
            // // to filter only those elements
            // // that need not to be deleted from the array
            // const newArr = namesArr.filter((name) => {
            //     // return those elements not in the namesToDeleteSet
            //     return !namesToDeleteSet.has(name);
            // });

            // console.log(newArr); // ["Lily", "Jessica"]
        },

        setAllMemberClubs(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
        },

        setAllManagerClubs(state) {
            var userID = sessionStorage.getItem('userID')
            var managerArray = state.AllClubs.filter((value) => {
                return value.owner == userID
            })

            state.AllManagerClub = managerArray
        },

        setPendingRequests(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
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
                    commit('setUnaffiliatedClub')
                }).catch(err => {
                    console.log(err)
                })
        },

        async setAllMemberClubs({ commit }) {
            await axios.get('http://localhost:3000/:user_id/clubs')
                .then(res => {
                    commit('setAllMemberClubs', res.data)
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

        async setPendingRequests({ commit }) {
            await axios.get('http://localhost:3000/Pending_join/:user_id')
                .then(res => {
                    commit('setPendingRequests', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },

        async JoinClub({ commit }, clubID) {
            console.log("User ", sessionStorage.getItem("userID"), " Joined club ", clubID)
            await axios.post('http://127.0.0.1:8000/api/request/joinclubrequest', {
                user_id: sessionStorage.getItem("userID"),
                club_id: clubID,
            }).then(res => {
                console.log(res)
                swal("Success", "Your Request Has Been Recieved, Please Wait Until The Club Manager Accepts Your Request", "success")
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