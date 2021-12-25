<template>
    <div
      class="container rounded bg-white mt-3 mb-3"
      style="outline: solid #000000"
    >
      <div class="row">
        <div class="col-md-12">
          <div
            class="d-flex flex-column align-items-center text-center p-1 py-1"
          >
          <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 >Profile Settings</h4>
            </div>
            <div>
            <img
              class="rounded-circle mt-5"
              width="170"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            </div>
            <span class="font-weight-bold">{{name}} {{surname}}</span
            ><span class="text-black-50">Email: {{email}}</span>
            <span class="text-black-50">Member Since: {{DOJ}}</span>
            <span class="text-black-50">Student ID: {{student_id}} </span>
          </div>
          <div class="p-2 ">
            <div class="row mt-3">
              <div class="col-md-6">
                <h4><label class="badge badge-pill badge-info">Old Password</label
                ></h4><input
                  type="password"
                  class="form-control"
                  placeholder="Enter Your Password"
                  v-model="OldPassword"
                />
              </div>
              <div class="col-md-6">
                <h4><label class="badge badge-pill badge-info">New Password</label
                ></h4><input
                  type="password"
                  class="form-control"
                  placeholder="Enter Your Password"
                  v-model="NewPassword"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button
                @click="updateProfile()"
                class="btn btn-primary profile-button"
                type="button"
                style="border-radius: 7px"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import store from "@/store/index";
import axios from "axios";
import swal from 'sweetalert';
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      student_id: "",
      DOJ: "",

      oldPassword: "",
      newPassword: "",
      token: {
        "Authorization": `Token ${store.getters.getToken}`
      }
    };
  },
  computed: {
    OldPassword: {
      get() {
        return this.oldPassword;
      },
      set(newVal) {
        this.oldPassword = newVal;
      },
    },
    NewPassword: {
      get() {
        return this.newPassword;
      },
      set(newVal) {
        this.newPassword = newVal;
      },
    },
  },
  methods: {
    async updateProfile() {
      console.log("Old Password is ", this.oldPassword, " New password is ", this.newPassword)
      console.log(this.token)
      var objHeaders = {
      "Authorization": `Token ${store.getters.getToken}`,
    }
      await axios.put('http://127.0.0.1:8000/api/change-password', {
        old_password: this.oldPassword,
        new_password: this.newPassword
      }, {
        headers: objHeaders
      }).then (res => {
        console.log(res)
      }).catch (err => {
        console.log(err)
      })
    },
  },
  async mounted() {
    var userID = sessionStorage.getItem('userID')

    await axios.get(`http://127.0.0.1:8000/api/account/${userID}`, {
      headers: this.token
    }).then(res => {
      var DOJ = new Date(res.data.date_joined)
      this.name = res.data.first_name
      this.surname = res.data.last_name
      this.email = res.data.email
      this.DOJ = `${DOJ.getDate()}/${DOJ.getMonth()}/${DOJ.getFullYear()}`
      this.student_id = res.data.student_id
    }).catch (err => {
      console.log(err)
    })
  },
};
</script>

<style>
.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: rgb(99, 39, 120);
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
</style>