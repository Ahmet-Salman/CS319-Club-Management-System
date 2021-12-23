<template>
  <div>
    <br/>
    <br/>
    <div class="container">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="mt-3" style="word-wrap: break-word; width: 300px">
                    <h3>Club Description</h3>
                    <hr />
                    <h5>{{ clubDescription }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <router-link
            v-if="club_id == manageID"
              :to="{ name: 'Manage', params: { clubID: $route.params.clubID } }"
              ><button class="btn btn btn-outline-success mx-1">
                Go To Club Management
              </button></router-link
            >
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Past Events
                    </h5>
                    <ul
                      v-if="pastEvents.length"
                      class="list-group list-group-flush"
                    >
                      <li
                        v-for="event in pastEvents"
                        :key="event.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="badge badge-primary even-larger-badge mb-0">
                          Name: {{ event.title }}
                        </h6>
                        <h6 class="badge badge-primary even-larger-badge mb-0">
                          Date: {{new Date(event.date).getDate() }}/{{new Date(event.date).getMonth() }}/{{new Date(event.date).getFullYear() }}
                        </h6>
                        <span>
                          <button
                            class="btn btn-outline-dark mr-1"
                            @click="
                              openModal({
                                title: event.title,
                                loc: event.location,
                                time: event.date,
                                desc: event.description,
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
                        </span>
                      </li>
                    </ul>
                    <h4 v-if="!pastEvents.length">
                      This Club Has No Past Events
                    </h4>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Comments
                    </h5>
                    <ul
                      v-if="comments.length"
                      class="list-group list-group-flush"
                    >
                      <li
                        v-for="com in comments"
                        :key="com.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="badge badge-primary even-larger-badge mb-0">
                          Name: {{com.owner}}/Name TBI
                        </h6>
                        <h6 class="badge badge-info even-larger-badge mb-0">
                          Date: {{new Date(com.date).getDate() }}/{{new Date(com.date).getMonth() }}/{{new Date(com.date).getFullYear() }}
                        </h6>
                        <span>
                          <div
                          class="
                            d-flex
                            flex-column
                            align-items-center
                            text-center
                          "
                        >
                          <div
                            class="mt-9"
                            style="word-wrap: break-word; width: 130px"
                          >
                            <h4>Comment:</h4>
                            <h6>{{ com.content }}</h6>
                          </div>
                        </div>
                        </span>
                        <button v-if="com.owner == userID" @click="$store.dispatch('ClubDetails/DeleteComment', com.id)"
            type="button" class="btn btn-outline-primary mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
              Delete
            </button>
                      </li>
                    </ul>
                    <h4 v-if="!comments.length">
                      There Are No Comments on This Club
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
import swal from "sweetalert";
export default {
  name: "ClubDetails",
  data() {
    return {
      club_id: this.$route.params.clubID,
      manageID: sessionStorage.getItem("manageID"),
      JoinRequests: [],
      comments: [],
      pastEvents: [],
      userID: sessionStorage.getItem("userID"),
      clubDescription: "",
      clubName: "",
    };
  },
  methods: {
    openModal(data) {
      var title = data.title;
      var location = data.loc;
      var time = new Date(data.time);
      var description = data.desc;

      swal({
        title: `Event Title: ${title}`,
        text: `Event Location: ${location}\n\n Event Date: ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}\n\n Event Description: ${description}`,
        icon: "info",
        button: "Close",
      });
    },
  },
  async mounted() {
    await this.$store.dispatch("ClubDetails/getClubDescription", this.club_id);
    this.clubDescription = this.$store.state.ClubDetails.clubDescription;
    this.clubName = this.$store.state.ClubDetails.clubName;

    await this.$store.dispatch("ClubDetails/getEvents", this.club_id);
    this.pastEvents = this.$store.state.ClubDetails.pastEvents;

    await this.$store.dispatch("ClubDetails/getComments", this.club_id);
    this.comments = this.$store.state.ClubDetails.comments;
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