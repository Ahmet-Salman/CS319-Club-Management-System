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
        <title>Login Form</title>
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
          <form @submit="checkForm(e)">
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Student ID"
                required
                v-model="user_id"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required
                v-model="Password"
              >
            </div>
            <div class="form-group">
              <button
              @click.prevent="$store.dispatch('Signin/handleSubmit')"
                class="btn btn-primary btn-block"
                type="submit"
              >
                Log in
              </button>
              <!-- <button @click="$store.dispatch('changeUser')">
                change user
              </button>
              <button @click="$store.dispatch('changePassword')">
                change password
              </button>
              {{ $store.state.student_id }} --- {{ $store.state.password }} -->
            </div>
            <div></div>
            <div class="clearfix">
              <label class="float-left form-check-label"
                ><input type="checkbox" /> Remember me</label
              >
              <a href="#" class="float-right">Forgot Password?</a>
            </div>
          </form>
          <p class="text-center"><router-link to="/signup">Create An Account</router-link></p>
          <!-- <p class="text-center"><a href="#">Create an Account</a></p> -->
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
      student_id: "",
      password: "",
    };
  },
  computed: {
    user_id: {
      get() {
        return this.$store.state.student_id;
      },
      set(newVal) {
        this.$store.commit('Signin/setStudent_id', newVal)
      },
    },
    Password: {
      get() {
        return this.$store.state.password;
      },
      set(newVal) {
        this.$store.commit('Signin/setPassword', newVal)
      },
    },
  },
  methods:{
  }
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
