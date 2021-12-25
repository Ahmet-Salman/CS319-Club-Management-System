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
                      <!-- <h3>{{this.createReqs.length}}</h3> -->
                      <h3 v-if="this.createReqs.length == 0">
                        There Are No Club Requests
                      </h3>
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
                        <h6 class="mb-0">{{ req.club_name }}</h6>
                        <span
                          ><button
                            class="btn btn-outline-info mx-2"
                            @click="
                              openModal({
                                name: req.club_name,
                                desc: req.club_description,
                                time: req.date,
                                user_id: req.user_id,
                              })
                            "
                          >
                            View Club Details
                          </button>
                          <button
                            class="btn btn-outline-secondary mx-2"
                            @click="$store.dispatch('Admin/Accept', req.id)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus-circle"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                              />
                              <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                              />
                            </svg>
                          </button>
                          <button
                            class="btn btn-outline-primary mx-2"
                            @click="$store.dispatch('Admin/Reject', req.id)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dash-circle"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                              />
                              <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
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
      user_name: "",
      clubName: "",
      clubDescription: "",
      createReqs: [],
    };
  },
  methods: {
    async openModal(data) {
      var id = data.user_id;
      await this.get_user_name(id);
      var name = data.name;
      var description = data.desc;
      var time = new Date(data.time);
      var userName = this.user_name;

      swal({
        title: `Club Name: ${name}`,
        text: `Club Description: ${description} \n\nTime of Creation: ${time.getDate()}/${time.getMonth()}/${time.getFullYear()} at ${time.getHours()}:${time.getMinutes()}\n\n By Student: ${userName} with ID ${id}`,
        icon: "info",
        button: "Close",
      });
    },
    async get_user_name(id) {
      var token = sessionStorage.getItem("token");
      const objHeaders = {
        Authorization: `Token ${token}`,
      };
      await axios
        .get(`http://127.0.0.1:8000/api/account/${id}`, {
          headers: objHeaders,
        })
        .then((res) => {
          this.user_name = res.data.first_name + " " + res.data.last_name;
        })
        .catch((err) => {
          swal('Error', 'An error Occured, Please Try Again', 'error');
        });
    },
  },
  async mounted() {
    await this.$store.dispatch("Admin/getRequests");
    this.createReqs = this.$store.state.Admin.createReqs;
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