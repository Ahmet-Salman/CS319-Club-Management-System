<template>
  <!-- In this, i need a "send announcment" button that redirects to a form
also a create event which also redirects to another page with a form
the main dashboard includes all members currently enrolled
at the bottom there is a place to accept/reject member requests
at the top there is a delete button for the club 
 -->
  <div>
    <h1>Hello Manager of club {{ club_id }}</h1>
    <div class="container">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="mt-3">
                    <router-link
                      :to="{
                        name: 'CreateEvent',
                        params: { clubID: $route.params.clubID },
                      }"
                      ><button class="btn btn-outline-dark mx-1">
                        Create Event
                      </button>
                    </router-link>
                    <router-link
                      :to="{
                        name: 'CreateAnnouncement',
                        params: { clubID: $route.params.clubID },
                      }"
                      ><button class="btn btn btn-outline-info mx-1">
                        Send Announcment
                      </button></router-link
                    >
                  </div>
                </div>
                <hr class="my-4" />
                <router-link
                  :to="{
                    name: 'Announcements',
                    params: { clubID: $route.params.clubID },
                  }"
                  ><button class="btn btn btn-outline-success my-3 mx-1">
                    Check Announcements
                  </button></router-link
                >
                <router-link
                  :to="{
                    name: 'Members',
                    params: { clubID: $route.params.clubID },
                  }"
                  ><button class="btn btn btn-outline-success mx-1">
                    Go To Members List
                  </button></router-link
                >
                <router-link
                  :to="{
                    name: 'Messages',
                    params: { clubID: $route.params.clubID },
                  }"
                  ><button class="btn btn btn-outline-success my-3 mx-1">
                    View Messages
                  </button></router-link
                >

                <hr class="my-2" />
                <ul class="list-group list-group-flush">
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      flex-wrap
                    "
                  >
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-globe me-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path
                          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                        ></path></svg
                      >Number of Members
                    </h6>
                    <span class="text-secondary">26</span>
                  </li>
                  <li
                    class="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      flex-wrap
                    "
                  >
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar4"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
                        />
                      </svg>
                      Created:
                    </h6>
                    <span class="text-secondary">{{ dateOfCreation }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <router-link
              :to="{
                name: 'ClubDetails',
                params: { clubID: $route.params.clubID },
              }"
              ><button class="btn btn btn-outline-success mx-1">
                Go To Club Details
              </button></router-link
            >
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Join Requests
                    </h5>
                    <ul 
                    v-if="JoinRequests.length"
                    class="list-group list-group-flush">
                      <li
                        v-for="req in JoinRequests"
                        :key="req.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="mb-0">{{ req.id }}/Name TBI</h6>
                        <h6 class="badge badge-primary even-larger-badge mb-0">
                          Date: {{new Date(req.date).getDate() }}/{{new Date(req.date).getMonth() }}/{{new Date(req.date).getFullYear() }}
                        </h6>
                        <span
                          ><button class="btn btn-outline-info mx-2">
                            View Profile
                          </button>
                          <button
                            class="btn btn-outline-secondary mx-2"
                            @click="
                              $store.dispatch('ManageClubs/AcceptMember', req.id)
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
                              $store.dispatch('ManageClubs/RejectMember', req.id)
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
                    <h4 v-if="!JoinRequests.length">
                      There Are No Join Requests
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      All Events
                    </h5>
                    <ul 
                     v-if="events.length"
                    class="list-group list-group-flush">
                      <li
                        v-for="req in events"
                        :key="req.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="badge badge-primary even-larger-badge mb-0">
                          Title: {{ req.title }}
                        </h6>
                        <span>
                          <button
                            class="btn btn-outline-dark mr-1"
                            @click="
                              openModal({
                                title: req.title,
                                loc: req.location,
                                time: req.date,
                                desc: req.description,
                              })
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-info-circle"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                              />
                              <path
                                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                              />
                            </svg>
                            Details
                          </button>
                          <button v-if="req.date > today"
                            class="btn btn-outline-info mx-2"
                            @click="
                              $store.dispatch('ClubDetails/deleteEvent', req.id)
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-x-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                              />
                              <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                            Cancel Event
                          </button></span
                        >
                      </li>
                    </ul>
                    <h4 v-if="!events.length">
                      There Are No Events
                    </h4>
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
  name: "ManageClubs",
  data() {
    return {
      today: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString(),
      club_id: this.$route.params.clubID,
      dateOfCreation: "",
      JoinRequests: [],
      events: [],
    };
  },
  methods: {
    getDateCreated() {
      axios
        .get(`http://127.0.0.1:8000/api/club/${this.club_id}`)
        .then((res) => {
          var DOC = new Date(res.data.date);
          this.dateOfCreation = `${DOC.getDate()}/${
            DOC.getMonth() + 1
          }/${DOC.getFullYear()}`;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    openModal(data) {
      var title = data.title;
      var location = data.loc;
      var time = new Date(data.time);
      var description = data.desc;

      swal({
        title: `Event Title: ${title}`,
        text: `Event Location: ${location}\n\n Event Date: ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}\n\n Event Time: ${time.getHours()}:${time.getMinutes()} \n\n Event Description: ${description}`,
        icon: "info",
        button: "Close",
      });
    },
  },
  async mounted() {
    this.getDateCreated();

    await this.$store.dispatch("ClubDetails/getEvents", this.club_id);
    this.events = this.$store.state.ClubDetails.events;
    await this.$store.dispatch("ManageClubs/getJoinRequests", this.club_id)
    this.JoinRequests = this.$store.state.ManageClubs.JoinRequests;
    // console.log(this.$store.state.ManageClubs.JoinRequests)
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