<template>
  <div>
    <nav style="border-radius: 10px" class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand">Home</router-link>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            style="border-radius: 10px"
            type="button"
            class="btn btn-outline-primary mx-3"
            @click="goToNotifications()"
            v-if="token"
          >
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
            class="btn btn-outline-info mr-3"
            style="width: 120px; border-radius: 10px"
            v-if='token'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-club"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a3.25 3.25 0 0 0-3.25 3.25c0 .186 0 .29.016.41.014.12.045.27.12.527l.19.665-.692-.028a3.25 3.25 0 1 0 2.357 5.334.5.5 0 0 1 .844.518l-.003.005-.006.015-.024.055a21.893 21.893 0 0 1-.438.92 22.38 22.38 0 0 1-1.266 2.197c-.013.018-.02.05.001.09.01.02.021.03.03.036A.036.036 0 0 0 5.9 15h4.2c.01 0 .016-.002.022-.006a.092.092 0 0 0 .029-.035c.02-.04.014-.073.001-.091a22.875 22.875 0 0 1-1.704-3.117l-.024-.054-.006-.015-.002-.004a.5.5 0 0 1 .838-.524c.601.7 1.516 1.168 2.496 1.168a3.25 3.25 0 1 0-.139-6.498l-.699.03.199-.671c.14-.47.14-.745.139-.927V4.25A3.25 3.25 0 0 0 8 1zm2.207 12.024c.225.405.487.848.78 1.294C11.437 15 10.975 16 10.1 16H5.9c-.876 0-1.338-1-.887-1.683.291-.442.552-.88.776-1.283a4.25 4.25 0 1 1-2.007-8.187 2.79 2.79 0 0 1-.009-.064c-.023-.187-.023-.348-.023-.52V4.25a4.25 4.25 0 0 1 8.5 0c0 .14 0 .333-.04.596a4.25 4.25 0 0 1-.46 8.476 4.186 4.186 0 0 1-1.543-.298z"
              />
            </svg>
            All Clubs
          </router-link>
          <router-link
            to="/profile"
            type="button"
            class="btn btn-outline-dark mr-3"
            style="width: 100px; border-radius: 10px; color: black; border-color: black;"
            v-if="token"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            Profile</router-link
          >
          <button
            to="/signup"
            type="button"
            class="btn btn-outline-secondary mr-3"
            style="width: 100px; border-radius: 10px"
            @click="$store.dispatch('logout')"
            v-if="token"
          >
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
            Logout
          </button>
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
data() {
  return {
    isSuper: false
  }
},

  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
  methods: {
    goToNotifications() {
      this.$router.push("/notifications");
    },
  },

  mounted(){
    console.log("navbar mounted")
    this.isSuper = sessionStorage.getItem('isAuth')
  }
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
