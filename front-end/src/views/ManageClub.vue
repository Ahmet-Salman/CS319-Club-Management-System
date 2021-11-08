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
                    <button class="btn btn-outline-dark mx-1">
                      Create Event
                    </button>
                    <button class="btn btn btn-outline-info mx-1">
                      Send Announcment
                    </button>
                  </div>
                </div>
                <hr class="my-4" />
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
                    <span class="text-secondary">13/02/2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Join Requests
                    </h5>
                    <ul class="list-group list-group-flush">
                      <li v-for="req in JoinRequests" :key="req.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="mb-0">{{req.name}}</h6>
                        <span
                          ><button class="btn btn-outline-secondary mx-2" @click="$store.dispatch('ManageClubs/testAccept', req.id)">
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
                          <button class="btn btn-outline-primary mx-2" @click="$store.dispatch('ManageClubs/testReject', req.id)">
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
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Current Events
                    </h5>
                    <ul class="list-group list-group-flush">
                      <li v-for="event in CurrentEvents" :key="event.id" 
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="badge badge-primary even-larger-badge mb-0">{{event.name}}</h6>
                        <h6 class="badge badge-info even-larger-badge mb-0">Time: {{event.time}} </h6>
                        <h6 class="badge badge-info even-larger-badge mb-0">Location: {{event.location}} </h6>
                        <span
                          ><button class="btn btn-outline-info mx-2" @click="$store.dispatch('ManageClubs/testCancelEvent', event.id)">
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
                            </svg> Cancel Event
                          </button></span>
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
export default {
  name: "ManageClubs",
  data(){
    return {
      JoinRequests: [
            { id: 1, name: 'Member 1' },
            { id: 2, name: 'Member 2' },
            { id: 5, name: 'Member 5' },
            { id: 7, name: 'Member 7' },
            { id: 9, name: 'Member 9' },
        ],
        CurrentEvents: [
            { id: 3, name: 'Event 3', time: '12:00 ', location: 'B building' },
            { id: 6, name: 'Event 6', time: '13:00', location: 'SA building' },
            { id: 8, name: 'Event 8', time: '14:00', location: 'EE building' },
        ],
    }
  },
  methods: {
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