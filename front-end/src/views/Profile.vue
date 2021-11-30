<template>
  <div>
    <div class="container rounded bg-white mt-5 mb-5" style="outline: solid #000000;">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /><span class="font-weight-bold">Edogaru</span
            ><span class="text-black-50">edogaru@mail.com.my</span
            >
            <span class="text-black-50">Member Since: </span
            >
            <span class="text-black-50">Student ID: </span
            ><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  v-model="Name"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="surname"
                  v-model="Surname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Email</label
                ><input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                  v-model="Email"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">New Password</label
                ><input
                  type="text"
                  id="txtPassword"
                  class="form-control"
                  placeholder="Enter Your Password"
                  v-model="Password"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button @click="updateProfile()" class="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import axios from 'axios'
export default {
    data() {
        return {
            first_name: "",
      last_name: "",
      email: "",
      password: "",
        }
    },
    computed: {
    Name: {
      get() {
        return this.first_name
      },
      set(newVal) {
        // console.log("name: ", newVal);
        this.first_name = newVal
      },
    },
    Surname: {
      get() {
        return this.last_name
      },
      set(newVal) {
        // console.log("surname: ", newVal);
        this.last_name = newVal
      },
    },
    Email: {
      get() {
        return this.email
      },
      set(newVal) {
        // console.log("student_id: ", newVal);
        this.email = newVal
      },
    },
    Password: {
      get() {
        return this.password
      },
      set(newVal) {
        // console.log("password: ", newVal);
        this.password = newVal
      },
    },
  },
  methods: {
      async updateProfile ()
      {
          console.log(`Name: ${this.first_name}\nLast Name: ${this.last_name}\nEmail: ${this.email}\nPassword: ${this.password} `)
      }
  },
mounted() {
    var userID = store.getters.getUserID
    var userName = null
    var userSurname = null
    var userEmail = null
    const objHeaders = {
                    "Authorization": `Token ${store.getters.getToken}`
                }

    axios.get(`http://127.0.0.1:8000/api/account/${userID}`, {
        headers: objHeaders
    }).then (res => {
        console.log(res)
    }).catch (err => {
        console.log(err)
    })
    // console.log(userID)
    // this.first_name = "something"
    // this.last_name = "last name"
    // this.email = "some email"
},

beforeUpdate() {
    // 
},

};
</script>
<style>
/* body {
    background: rgb(99, 39, 120)
} */

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}

#txtPassword{
           -webkit-text-security:disc;
       }
</style>