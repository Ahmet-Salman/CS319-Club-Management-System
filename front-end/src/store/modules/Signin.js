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
        isAuthenticated: false
    },
    mutations: {
        handleSubmit(state, newVal, s, newS) {
            var responseCode = newVal.status;
            if (responseCode === 201) {
                console.log('redirect to somewhere')
                    // state.forward_url = '/'
                router.push({ path: '/' })
            }
            console.log(newVal)
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
        // getAuthQuote(state, res) {
        //     console.log(res)
        // }
    },
    actions: {
        async handleSubmit({ commit, dispatch, state }) {
            if (state.student_id === "" || state.password === "") {
                swal("Input Error", "Please Fill All Fields", "error");
            } else {
                await axios.post('http://localhost:3001/sessions/create', {
                    username: state.student_id,
                    password: state.password
                }).then(res => {
                    sessionStorage.setItem('token', res.data.access_token)
                    console.log(res)
                }).catch(err => {
                    if (err.response.status == 401) {
                        swal('Input Error', 'Your Credentials Are Invalid, Please Check Your Student ID and Password', "error")
                    } else {
                        swal('Input Error', 'An Error Occured,Please Try Again', "error")
                    }
                })
            }
        },
        async attemptLogin({ commit }, token) {
            commit('setToken', token)
            try {
                let response = await axios.post('auth/me', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                commit('setUser', response.data)
            } catch (error) {
                console.log('failed')
            }
        },
    },
    getters: {
        getAuth: state => {
            return state.isAuthenticated
        }
    },
    modules: {},
};