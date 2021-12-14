<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand"
          >Home</router-link
        >
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" v-if="token">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
              ></path>
            </svg>
            Notifications
          </button>
          <router-link
            to="/clubs"
            type="button"
            class="btn btn-warning mx-3 px-2"
            style="width: 100px"
            v-if="token"
            >All Clubs</router-link
          >
          <router-link
            to="/profile"
            type="button"
            class="btn btn-info mr-3 px-1"
            style="width: 100px"
            v-if="token"
            >Profile</router-link
          >
          <button
            to="/signup"
            type="button"
            class="mx-auto btn btn-success mx-3 px-3"
            style="width: 100px"
            @click="$store.dispatch('logout')"
            v-if="token"
          >
            Logout
          </button>
          <router-link
            to="/login"
            type="button"
            class="btn btn-info mx-3 px-2"
            style="width: 100px"
            v-show="!token"
            >Login</router-link
          >
        </div>
      </div>
      <div></div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

