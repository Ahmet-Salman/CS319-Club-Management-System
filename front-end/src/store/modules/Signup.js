import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        name: "",
        surname: "",
        student_id: "",
        password: "",
        confirmPass: "",
    },
    mutations: {
        handleSubmit(state, response) {
            // console.log('name: ', state.name, 'surname: ', state.surname, 'student id: ', state.student_id, 'password: ', state.password, "confirm pass: ", state.confirmPass);
            console.log(response)

        },
        setName(state, newVal) {
            state.name = newVal
        },
        setSurname(state, newVal) {
            state.surname = newVal
        },
        setStudent_id(state, newVal) {
            state.student_id = newVal
        },
        setPassword(state, newVal) {
            state.password = newVal
        },
        setConfirmPass(state, newVal) {
            state.confirmPass = newVal
        }
    },
    actions: {
        handleSubmit({ commit, state }) {
            if (state.name === "" || state.surname === "" || state.password === "" || state.student_id === "") {
                // alert('Please Fill All Fields')
                swal("Input Error", "Please Fill All Fields", "error");
            } else {
                if (state.password.length >= 8) {
                    if (!isNaN(state.student_id)) {
                        if (state.password === state.confirmPass) {
                            // axios('https://reqres.in/api/users?page=2').then(res => {
                            //         console.log(res)
                            //     }).catch(err => {
                            //         console.log('error')
                            //     })
                            axios.post('https://reqres.in/api/register', {
                                email: state.name, //+ '.' + state.surname + '@' + state.student_id + '.com',
                                password: state.password
                            }).then(res => {
                                commit('handleSubmit', res)
                            }).catch(err => {
                                swal("Internal Error", "Something Wrong Happened, Please Retry Again", "error")
                            })
                        } else {
                            swal("Input Warning", 'Password Do Not Match, Please Enter Password Again', "warning")
                        }
                    } else {
                        swal("Input Error", 'User ID Can Only Contain Numbers', "error")
                    }
                } else {
                    swal("Input Error", 'Password Must Be At Least 8 Characters', "error")
                }
            }
        },
        changeUser({ commit }) {
            axios('https://random-data-api.com/api/id_number/random_id_number').then(res => {
                commit('setStudent_id', res.data.id)
            })
        },
        changePassword({ commit }) {
            axios('https://random-data-api.com/api/users/random_user').then(res => {
                commit('setPassword', res.data.password)
            })
        }
    },
    getters: {},
    modules: {}
}