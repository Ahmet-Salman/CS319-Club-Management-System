import { createStore } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from '../../router';

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
        async handleSubmit({ commit, state }) {
            if (state.name === "" || state.surname === "" || state.password === "" || state.student_id === "") {
                swal("Input Error", "Please Fill All Fields", "error");
            } else {
                if (state.password.length >= 8) {
                    if (!isNaN(state.student_id)) {
                        if (state.password === state.confirmPass) {
                            await axios.post('http://localhost:3001/users', {
                                username: state.student_id,
                                password: state.password
                            }).then(res => {
                                console.log(res)
                                swal('Success', 'Registration Successful', 'success')
                                router.push('/login')
                            }).catch(err => {
                                console.log(err)
                                swal('Internal Error', 'Registration Unuccessful', 'error')
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
    },
    getters: {},
    modules: {}
}