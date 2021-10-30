<template>
  <div class="login">
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Signup Form</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <div class="login-form">
          <form>
            <h2 class="text-center">Register</h2>
            <div class="form-group">
              <label for="name" class="badge col-lg-4">Name:</label>
              <input
              id="name"
                type="text"
                class="form-control"
                required="required"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="surname" class="badge col-lg-4">Surname:</label>
              <input
              id="surname"
                type="text"
                class="form-control"
                required="required"
                v-model="surname"
              />
            </div>
            <div class="form-group">
              <label for="s_id" class="badge col-lg-4">Student ID:</label>
              <input
              id="s_id"
                type="text"
                class="form-control"
                required="required"
                v-model="user_id"
              />
            </div>
            <div class="form-group">
              <label for="password" class="badge col-lg-4">Password:</label>
              <input
              id="password"
                type="password"
                class="form-control"
                required="required"
                v-model="Password"
              />
            </div>
            <div class="form-group">
              <label for="con_pass" class="badge col-lg-4">Confirm Password:</label>
              <input
              id="con_pass"
                type="password"
                class="form-control"
                required="required"
                v-model="Confirm_Password"
              />
            </div>
            <div class="form-group">
              <button
                @click.prevent="$store.dispatch('Signup/handleSubmit')"
                class="btn btn-primary btn-block"
              >
                Signup
              </button>
            </div>
            <div></div>
            <div class="clearfix">
              <label class="float-left form-check-label">
                <router-link to="/login">Back To Login</router-link>
              </label>
            </div>
          </form>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      first_name: "",
      last_name: "",
      student_id: "",
      password: "",
      confirm_password: "",
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(newVal) {
        // console.log("name: ", newVal);
        this.$store.commit("Signup/setName", newVal);
      },
    },
    surname: {
      get() {
        return this.$store.state.surname;
      },
      set(newVal) {
        // console.log("surname: ", newVal);
        this.$store.commit("Signup/setSurname", newVal);
      },
    },
    user_id: {
      get() {
        return this.$store.state.student_id;
      },
      set(newVal) {
        // console.log("student_id: ", newVal);
        this.$store.commit("Signup/setStudent_id", newVal);
      },
    },
    Password: {
      get() {
        return this.$store.state.password;
      },
      set(newVal) {
        // console.log("password: ", newVal);
        this.$store.commit("Signup/setPassword", newVal);
      },
    },
    Confirm_Password: {
      get() {
        return this.$store.state.confirmPass;
      },
      set(newVal) {
        // console.log("confirm: ", newVal);
        this.$store.commit("Signup/setConfirmPass", newVal);
      },
    },
  },
  methods: {},
};
</script>

<style>
.login-form {
  width: 340px;
  margin: 50px auto;
  font-size: 15px;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
