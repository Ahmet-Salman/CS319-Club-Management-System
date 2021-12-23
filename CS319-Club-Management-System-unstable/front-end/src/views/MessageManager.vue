<template>
  <div>
      <!-- <h1>Messages For Club {{$route.params.clubID}}</h1> -->
    <div class="container my-5">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">
                     Messages
                    </h5>
                    <ul class="list-group list-group-flush">
                      <!-- <h3>{{this.createReqs.length}}</h3> -->
                      <h3 v-if="this.messages.length == 0">
                        You Have No messages
                      </h3>
                      <li
                        v-for="msg in messages"
                        :key="msg.id"
                        class="
                          list-group-item
                          d-flex
                          justify-content-between
                          align-items-center
                          flex-wrap
                        "
                      >
                        <h6 class="mb-0">{{ msg.name }} {{msg.surname}}</h6>
                        <span
                          ><button
                            class="btn btn-outline-info mx-2"
                            @click="
                              openModalP({
                                name: msg.name,
                                surname: msg.surname,
                                email: msg.email,
                                student_id: msg.student_id,
                              })
                            "
                          >
                            View Profile
                          </button>
                          <button
                            class="btn btn-outline-info mx-2"
                            @click="
                              openModalM({
                                content: msg.content
                              })
                            "
                          >
                            Check Message
                          </button>
                         </span>
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
  name: "MessageManger",
  data() {
    return {
      user_name: "",
      clubName: "",
      clubDescription: "",
      messages: [{id: 1, name: "Ahmet", surname: "salman", email: "a@a", student_id: "1",  content: "This is my first message"},
      {id: 2, name: "Javid", surname: "Moradi", email: "b@a", student_id: "2",  content: "Hello There"},
      {id: 5, name: "Onur", surname: "Avci", email: "c@a", student_id: "3",  content: "Can I Join Your CLub"},
      {id: 9, name: "Alperen", surname: "Alkan", email: "d@a", student_id: "4",  content: "Is This the club for weebs"},
      {id: 13, name: "Haisam", surname: "Faramaway", email: "e@a", student_id: "5",  content: "let's go somewhere"},
      ],
    };
  },
  methods: {
    openModalP(data) {
      var id = data.student_id;
      var name = data.name;
      var surname = data.surname;
      var email = data.email

      swal({
        title: `Student Name: ${name} ${surname}`,
        text: `Student Email: ${email} \n\nStudent ID: ${id}`,
        icon: "info",
        button: "Close",
      });
    },
    openModalM(data) {
      var content = data.content

      swal({
        text: `Message: ${content}`,
        icon: "info",
        button: "Close",
      });
    },
  },
//   async mounted() {
//     await this.$store.dispatch("Admin/getRequests");
//     this.createReqs = this.$store.state.Admin.createReqs;
//   },
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