import { createStore } from "vuex";
import axios from "axios";
import router from './../../router/index'
import swal from "sweetalert";
import store from '@/store/index'

export default {
    namespaced: true,
    state: {
        student_id: "",
        password: "",
        token: null,
        user: null,
    },
    mutations: {
        handleSubmit() {
            router.push({ path: '/home' })
        },
        setStudent_id(state, newVal) {
            state.student_id = newVal;

        },
        setPassword(state, newVal) {
            state.password = newVal;
        },
        setToken(state, token) {
            state.token = token

        },
        setUser(state, userData) {
            state.user = userData
        },
    },
    actions: {
        async handleSubmit({ commit, state }) {
            if (state.student_id === "" || state.password === "") {
                swal("Input Error", "Please Fill All Fields", "error");
            } else {
                await axios.post('http://127.0.0.1:8000/api/login', {
                    student_id: state.student_id,
                    password: state.password
                }).then(res => {
                    // console.log(res.data.user.id)
                    store.commit('setToken', res.data.token)
                    store.commit('setUserID', res.data.user.id)
                    sessionStorage.setItem('userID', res.data.user.id);
                    sessionStorage.setItem('token', res.data.token);
                    commit('handleSubmit')
                }).catch(err => {
                    // console.log(err)
                    if (err.response.status == 401 || err.response.status == 500) {
                        swal('Input Error', 'Your Credentials Are Invalid, Please Check Your Student ID and Password', "error")
                    } else {
                        swal('Internal Error', 'An Error Occured, Please Try Again', "error")
                    }
                })
            }
        },
    },
    modules: {},
};