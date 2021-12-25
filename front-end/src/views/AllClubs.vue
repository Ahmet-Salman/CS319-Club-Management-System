<template>
  <div>
    
    <router-link v-if='isSuper != "true"' :to="{ name: 'CreateClub' }"
      ><button style="float: right; border-radius: 7px" class="btn btn-outline-secondary my-2 mr-4">
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
        Create Club
      </button></router-link
    >
    <h1 v-if="AllManagerClub.length == 0 && AllMemberClub.length == 0 && UnaffiliatedClub.length == 0 && pendingRequests.length == 0">There Are No Clubs in The System</h1>
    <table v-if="AllManagerClub.length != 0 || AllMemberClub.length != 0 || UnaffiliatedClub.length != 0 || pendingRequests.length != 0"  class="table table-striped">
      <thead>
        <tr style="border-radius: 7px" class="bg-info">
          <th>Club Name</th>
          <th>Manager</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      
      <tbody>
        
        <!-- We loop over the AllManagerClub Array here -->
        <tr  v-for="clubs in AllManagerClub" :key="clubs.id" class="table-info">
          
          <td>{{ clubs.name }}</td>
          <td>{{ clubs.owner.first_name }} {{ clubs.owner.last_name }}</td>
          <td style="color: white; border-radius: 7px" class="bg-danger">Manager</td>
          <td>
            <router-link
              :to="{ name: 'Manage', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-secondary mr-1"
              style="border-radius: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                />
                <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                />
              </svg>
              Manage
            </router-link>
            <router-link
              :to="{ name: 'ClubDetails', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-dark mr-1"
              style="border-radius: 7px;"
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
            </router-link>

            <button
              type="button"
              class="btn btn-outline-primary mr-1"
              @click="$store.dispatch('AllClubs/deleteClub', clubs.id)"
              style="border-radius: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                />
              </svg>
              Delete
            </button>
          </td>
        </tr>
        <br v-if="AllMemberClub.length" />
        <!-- We loop over AllClubMember Array here -->
        <tr v-for="clubs in AllMemberClub" :key="clubs.id" class="table-info">
          <td>{{ clubs.name }}</td>
          <!-- <td>{{clubs.catagory}}</td> -->
          <td>{{ clubs.owner.first_name }} {{ clubs.owner.last_name }}</td>
          <td style="color: white; border-radius: 10px" class="bg-success">Member</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-info mr-1"
              @click="getComment(clubs.id)"
              style="border-radius: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Comment on Club
            </button>
            <router-link
              :to="{ name: 'ClubAnnouncements', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-info mr-1"
              style="border-radius: 7px;"
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
              Announcements
            </router-link>
            <router-link
              :to="{ name: 'ClubEvents', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-info mr-1"
              style="border-radius: 7px;"
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
              Events
            </router-link>
            <router-link
              :to="{ name: 'ClubDetails', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-dark mr-1"
              style="border-radius: 7px;"
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
            </router-link>

            <button @click="$store.dispatch('AllClubs/leaveClub', clubs.id)"
            type="button" class="btn btn-outline-primary mr-1"
            style="border-radius: 7px;">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              Leave
            </button>
          </td>
        </tr>
        <br v-if="pendingRequests.length" />
        <!-- We will loop over pendingRequests here -->
        <tr v-for="clubs in pendingRequests" :key="clubs.id" class="table-info">
          <td>{{ clubs.name }}</td>
          <!-- <td>{{clubs.catagory}}</td> -->
          <td>{{ clubs.owner.first_name }} {{ clubs.owner.last_name }}</td>
          <td style="color: white; background-color: #c632f5; border-radius: 7px">
            Waiting For Response
          </td>
          <td>
            
            <router-link
              :to="{ name: 'ClubDetails', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-dark mr-1"
              style="border-radius: 7px;"
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
            </router-link>
            <button
              type="button"
              class="btn btn-outline-primary mr-1"
              data-toggle="modal"
              data-target="#exampleModal"
              data-backdrop="static"
              data-keyboard="false"
              @click="$store.dispatch('AllClubs/cancelJoin', clubs.id)"
              style="border-radius: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
              Cancel Request
            </button>
          </td>
        </tr>
        <br />
        <!-- we loop over AllClubs array here -->
        <tr
          v-for="clubs in UnaffiliatedClub"
          :key="clubs.id"
          class="table-info"
        >
          <td>{{ clubs.name }}</td>
          <td>{{ clubs.owner.first_name }} {{ clubs.owner.last_name }}</td>
          <td style="color: white; border-radius: 10px" class="bg-info">Unaffiliated</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-info mr-1"
              @click="getComment(clubs.id)"
              style="border-radius: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Comment on Club
            </button>
            <router-link
              :to="{ name: 'ClubDetails', params: { clubID: clubs.id } }"
              type="button"
              class="btn btn-outline-dark mr-1"
              style="border-radius: 7px;"
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
            </router-link>
            <button
              type="button"
              class="btn btn-outline-secondary mr-1"
              data-toggle="modal"
              data-target="#exampleModal"
              data-backdrop="static"
              data-keyboard="false"
              @click="$store.dispatch('AllClubs/JoinClub', clubs.id)"
              style="border-radius: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-in-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
              Join
            </button>
          </td>
        </tr>
        <br />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store/index";
import swal from "sweetalert";
export default {
  name: "AllClubs",
  data() {
    return {
      testAllClubs: [],
      userID: sessionStorage.getItem("userID"),
      isSuper: sessionStorage.getItem("isAuth"),
      UnaffiliatedClub: [],
      AllMemberClub: [],
      AllManagerClub: [],
      pendingRequests: [],
    };
  },
  methods: {
    async getComment(club_ID) {
      const objHeaders = {
        Authorization: `Token ${store.getters.getToken}`,
      };
      await swal({
        content: {
          element: "input",
          attributes: {
            placeholder: "Type your Comment",
            type: "text",
          },
        },
      });
      var commentText = swal.getState().actions.confirm.value;
       
      await axios
        .post(
          "http://127.0.0.1:8000/api/comments",
          {
            content: commentText,
            club: club_ID,
          },
          {
            headers: objHeaders,
          }
        )
        .then((res) => {
          swal(
            "Success",
            "Your Comment Has Been Successfully Added",
            "success"
          );
        })
        .catch((err) => {
          swal(
            "Error",
            "An Error Occured, Your Comment Has Not Been Posted",
            "error"
          );
        });

      //  
    },
  },
  async mounted() {
    await this.$store.dispatch("AllClubs/setAllClubs");
    await this.$store.dispatch("AllClubs/setAllManagerClubs");
    this.AllManagerClub = this.$store.state.AllClubs.AllManagerClub;
    await this.$store.dispatch("AllClubs/setPendingRequests");
    await this.$store.dispatch("AllClubs/setAllMemberClubs");
    this.AllMemberClub = this.$store.state.AllClubs.AllMemberClub;
    this.pendingRequests = this.$store.state.AllClubs.pendingRequests;
    this.UnaffiliatedClub = this.$store.state.AllClubs.UnaffiliatedClub;
  },
};
</script>

<style>
.btn-outline-dark:hover {
  background-color: #5a1ca5 !important;
  border-color: black;
}
.btn-outline-secondary:hover {
  background-color: #49be05 !important;
}
.btn-outline-secondary {
  color: black;
  border-color: black;
}
.btn-outline-primary:hover {
  background-color: red !important;
}
.btn-outline-primary {
  color: black;
  border-color: black;
}
.btn-outline-info:hover {
  background-color: #e6af17;
}
.btn-outline-info {
  color: black;
  border-color: black;
}
</style>