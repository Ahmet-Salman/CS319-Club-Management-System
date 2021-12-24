<template>
  <div>
    <nav style="border-radius: 10px" class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand"
          >Home</router-link
        >
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button style="border-radius: 10px" type="button" class="btn btn-outline-primary mx-3" @click="goToNotifications()" v-if="token">
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
            v-if="token"
          >
            <svg width="16" height="16" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
              <path d="M232,148a52.00505,52.00505,0,0,1-80.459,43.52539l10.6538,34.08789A7.99984,7.99984,0,0,1,154.55908,236H101.44092a7.99954,7.99954,0,0,1-7.63526-10.38672L104.45459,191.542a51.7046,51.7046,0,0,1-29.9624,8.43653c-27.72657-.78516-50.377-24.00489-50.4917-51.75977A51.99976,51.99976,0,0,1,76,96q2.02881,0,4.04883.15625a52.00294,52.00294,0,1,1,95.89648,0,53.33621,53.33621,0,0,1,5.46387-.1377A51.70261,51.70261,0,0,1,232,148Z"/>
            </svg>
            All Clubs
          </router-link>
          <router-link
            to="/profile"
            type="button"
            class="btn btn-outline-dark mr-3"
            style="width: 100px; border-radius: 10px"
            v-if="token"
            
            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>  Profile</router-link
          >
          <button
            to="/signup"
            type="button"
            class="btn btn-outline-secondary mr-3"
            style="width: 100px; border-radius: 10px"
            @click="$store.dispatch('logout')"
            v-if="token"
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
            Logout
          </button>
          <!-- <router-link
            to="/login"
            type="button"
            class="btn btn-info mx-3 px-2"
            style="width: 100px; border-radius: 10px"
            v-show="!token"
            >Login</router-link
          > -->
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
  methods: {
    goToNotifications() {
      this.$router.push('/notifications');
    }
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

