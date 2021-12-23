<template>
  <div>
    <br/>
    <br/>
    <div class="container">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-8">
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
export default {
  name: "ManageClubs",
  data() {
    return {
      club_id: this.$route.params.clubID,
      events: [],
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
        text: `Event Location: ${location}\n\n Event Date: ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}\n\n Event Time: ${time.getHours()}:${time.getMinutes()} \n\n Event Description: ${description}`,
        icon: "info",
        button: "Close",
      });
    },
  },
  async mounted() {
    await this.$store.dispatch("ClubDetails/getEvents", this.club_id);
    this.events = this.$store.state.ClubDetails.events;
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