import { createStore } from "vuex";
import axios from "axios";
import router from './../../router/index'
import swal from "sweetalert";
import store from '@/store/index'

export default {
    namespaced: true,
    state: {
        clubName: "",
        clubDescription: "",
    },
    mutations: {
        setName(state, newVal) {
            state.clubName = newVal
        },
        setDesc(state, newVal) {
            state.clubDescription = newVal
        }
    },
    actions: {
        async createClub({ commit, state }) {
            if (state.clubName == "" || state.clubDescription == "") {
                swal("Missing Information", "All Fields Must be Populated", "error")
            } else {
                var userID = sessionStorage.getItem("userID");
                axios.post("http://127.0.0.1:8000/api/request/createclubrequest", {
                    user_id: userID,
                    club_name: state.clubName,
                    club_description: state.clubDescription
                }).then(res => {
                    swal("Success", "Your request has been recieved successfully and will be evaluted soon", "success")
                    router.push({ path: '/clubs' })
                }).catch(err => {
                    swal("Error", "You Cannot Create A Club Request Because You Are Already The Manager of A Club", "error")
                })
            }

        },
    },
}