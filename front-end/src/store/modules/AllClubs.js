import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';



export default {
    namespaced: true,
    state: {
        AllClubs: [
            { id: 1, name: 'Club1', catagory: 'catagory1', manager: 'Person1' },
            { id: 2, name: 'Club2', catagory: 'catagory2', manager: 'Person2' },
            { id: 5, name: 'Club5', catagory: 'catagory5', manager: 'Person5' },
            { id: 7, name: 'Club7', catagory: 'catagory7', manager: 'Person7' },
            { id: 9, name: 'Club9', catagory: 'catagory9', manager: 'Person9' },
            { id: 11, name: 'Club11', catagory: 'catagory11', manager: 'Person11' },
        ],
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
        testAllClubs: [],
        testAllManagerClub: []

    },
    mutations: {
        reloadPage(state) {
            // router.go()
        },
        setAllClubs(state, res) {
            state.testAllClubs = res
                // parse the recieved JSON response and convert it to an array
                // Then set the resulting array to its respective array
        },

        setAllMemberClubs(state, res) {
            // parse the recieved JSON response and convert it to an array
            // Then set the resulting array to its respective array
        },

        setAllManagerClubs(state) {
            var userID = sessionStorage.getItem('userID')
                // console.log(userID)
            var managerArray = state.testAllClubs.filter((value) => {
                return value.owner == userID
            })

            state.AllManagerClub = managerArray
                // console.log(managerArray)
                // state.testAllManagerClub = managerArray
                // parse the recieved JSON response and convert it to an array
                // Then set the resulting array to its respective array
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
            // console.log("update all clubs")
            await axios.get('http://127.0.0.1:8000/api/clubs')
                .then(res => {
                    commit('setAllClubs', res.data) // returns the array of data
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

        async joinClub() {
            await axios.post('http://localhost:3000/requests/:club_id', {
                name: $store.user.name,
                surname: $store.user.surname,
                student_id: $store.user.student_id
            }).then(res => {
                console.log(res)
                console.log('Request Send Successfully')
            }).catch(err => {
                console.log(err)
            })
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