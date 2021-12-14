<template>
    <div>
        <div class="container my-5">
      <div class="main-body">
        <div class="row">
        <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Club Creation Requests
                    </h5>
                    <ul class="list-group list-group-flush">
                      <li
                        v-for="req in createReqs"
                        :key="req.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="mb-0">{{ req.name }}</h6>
                        <span
                          ><button
                            class="btn btn-outline-info mx-2"
                            @click="
                              openModal({
                                name: req.name,
                                desc: req.desc,
                                time: req.date,
                              })
                            "
                          >View Club Details (TBI)</button>
                          <button
                            class="btn btn-outline-secondary mx-2"
                            @click="
                              $store.dispatch('Admin/Accept', req.id)
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-check-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                              />
                              <path
                                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                              />
                            </svg>
                          </button>
                          <button
                            class="btn btn-outline-primary mx-2"
                            @click="
                              $store.dispatch('Admin/Reject', req.id)
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-x-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                              />
                            </svg></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
        clubName: "",
        clubDesc: "",
      createReqs: [{id: 2, name: "First Club Request", description: "best club ever", date: "abc"},
      {id: 1, name: "Club Request 2", description: "club req 2", date: "abc"},
      {id: 6, name: "Club Request 3", description: "club req 3", date: "abc"},
      {id: 7, name: "Club Request 4", description: "club req 4", date: "abc"},
      {id: 9, name: "Club Request 5", description: "club req 5", date: "abc"},
      {id: 11, name: "Club Request 6", description: "club req 6", date: "abc"},
      {id: 3, name: "Club Request 7", description: "club req 7", date: "abc"},
      ],
    };
  },
//   computed: {
//     clubName: {
//       get() {
//         return this.$store.state.student_id;
//       },
//       set(newVal) {
//         this.$store.commit('Admin/setName', newVal)
//       },
//     },
//     clubDesc: {
//       get() {
//         return this.$store.state.password;
//       },
//       set(newVal) {
//         this.$store.commit('Admin/setDesc', newVal)
//       },
//     },
//   },
  methods: {
    openModal(data) {
      var name = data.name;
      var description = data.desc;
    //   var time = new Date(data.time);
    var time = data.time
      
      swal({
        title: `Club Name: ${name}`,
        text: `Club Description: ${description} \n\nTime of Creation: ${time}`,
        icon: "info",
        button: "Close",
      });
    },
  },
};
</script>

<style>
body {
  background: #f7f7ff;
  margin-top: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%),
    0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
  margin-right: 0.5rem !important;
}
.badge.even-larger-badge {
  font-size: 0.9em;
}
</style>