import { createStore } from "vuex";
import axios from "axios";
import router from './../../router/index'

export default {
    namespaced: true,
    state: {
        student_id: "",
        password: "",
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
    },
    actions: {
        handleSubmit({ commit, state }) {
            if (state.student_id === "" || state.password === "") {
                swal("Input Error", "Please Fill All Fields", "error");
            } else {
                axios
                    .post("https://jsonplaceholder.typicode.com/todos", {
                        title: state.student_id,
                        completed: state.password,
                    })
                    .then((res) => {
                        commit('handleSubmit', res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        changeUser({ commit }) {
            axios("https://random-data-api.com/api/id_number/random_id_number").then(
                (res) => {
                    commit("setStudent_id", res.data.id);
                }
            );
        },
        changePassword({ commit }) {
            axios("https://random-data-api.com/api/users/random_user").then((res) => {
                commit("setPassword", res.data.password);
            });
        },
    },
    getters: {},
    modules: {},
};