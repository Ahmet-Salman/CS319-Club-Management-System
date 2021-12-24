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
        isSuperUser: false,
        token: null,
        user: null,
        clubs: [],
    },
    mutations: {
        handleSubmit(state) {
            if (state.isSuperUser == true) {
                router.push({ path: '/admin' })
            } else {
                router.push({ path: '/home' })
            }

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
        setSuperUser(state, newVal) {
            state.isSuperUser = newVal
        },
        setClubs(state, newArr) {
            state.clubs = newArr
        },
        setManageID(state) {
            var userID = sessionStorage.getItem('userID')
            var ManagerClubs;
            ManagerClubs = state.clubs.filter((value) => {
                return value.owner.id == userID
            })
            if (ManagerClubs[0] == null) {
                sessionStorage.setItem('manageID', -1)
            } else {
                sessionStorage.setItem('manageID', ManagerClubs[0].id)
            }

        }
    },
    actions: {
        async handleSubmit({ commit, dispatch, state }) {
            if (state.student_id === "" || state.password === "") {
                swal("Input Error", "Please Fill All Fields", "error");
            } else {
                await axios.post('http://127.0.0.1:8000/api/login', {
                    student_id: state.student_id,
                    password: state.password
                }).then(res => {
                    store.commit('setToken', res.data.token)
                    store.commit('setUserID', res.data.user.id)
                    store.commit('setSuperUser', res.data.user.is_superuser)
                    sessionStorage.setItem('userID', res.data.user.id);
                    sessionStorage.setItem('token', res.data.token);
                    sessionStorage.setItem('isAuth', res.data.user.is_superuser);
                    state.isSuperUser = res.data.user.is_superuser
                    dispatch('getClubs') // this.$store.state.Signin.clubs
                    commit('handleSubmit')
                }).catch(err => {
                    if (err.response.status == 401 || err.response.status == 500) {
                        swal('Input Error', 'Your Credentials Are Invalid, Please Check Your Student ID and Password', "error")
                    } else {
                        swal('Internal Error', 'An Error Occured, Please Try Again', "error")
                    }
                })
            }
        },
        async getClubs({ commit }) {
            await axios.get('http://127.0.0.1:8000/api/clubs')
                .then(res => {
                    commit('setClubs', res.data)
                    commit('setManageID')
                }).catch(err => {
                    swal('Error', 'An error Occured, Please Try Again', 'error')
                })
        }
    },
    modules: {},
};