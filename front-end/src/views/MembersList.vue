<template>
  <div>
      <!-- <h1>Members List For Club {{$route.params.clubID}}</h1> -->
    <div class="container my-5">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                      Members List
                    </h5>
                    <ul class="list-group list-group-flush">
                      <!-- <h3>{{this.createReqs.length}}</h3> -->
                      <h3 v-if="this.members.length == 0">
                        Your Club Has No Members
                      </h3>
                      <li
                        v-for="mem in members"
                        :key="mem.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="mb-0">{{ mem.user_id.first_name }} {{mem.user_id.last_name}}</h6>
                        <span
                          ><button
                            class="btn btn-outline-info mx-2"
                            @click="
                              openModal({
                                name: mem.user_id.first_name,
                                surname: mem.user_id.last_name,
                                email: mem.user_id.email,
                                student_id: mem.user_id.student_id,
                                DOJ: mem.timeStamp
                              })
                            "
                          >
                            View Profile
                          </button>
                          <button
                            class="btn btn-outline-primary mx-2"
                            @click="$store.dispatch('Members/KickMember', mem.user_id.id)"
                          >Kick Member Out
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
export default {
  name: "MembersList",
  data() {
    return {
      clubID: this.$route.params.clubID,
      members: [],
    };
  },
  methods: {
    async openModal(data) {
      var id = data.student_id;
      var name = data.name;
      var surname = data.surname;
      var email = data.email
      var DOJ = new Date(data.DOJ);

      swal({
        title: `Student Name: ${name} ${surname}`,
        text: `Student Email: ${email} \n\nJoined on: ${DOJ.getDate()}/${DOJ.getMonth()}/${DOJ.getFullYear()}\n\n Student ID: ${id}`,
        icon: "info",
        button: "Close",
      });
    },
  },
  async mounted() {
    await this.$store.dispatch("Members/getMembers", this.clubID);
    this.members = this.$store.state.Members.members;
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