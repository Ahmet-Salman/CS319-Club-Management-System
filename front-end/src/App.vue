<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <router-link to="/login" type="button" class="btn btn-info mx-3 px-2" style="width: 100px"
            >Login</router-link
          >
          <router-link to="/signup" type="button" class="mx-auto btn btn-success px-2" style="width: 100px"
            >Register</router-link
          >
        </div>
      </div>
      <div>
        <button @click="$store.dispatch('getAuthQuote')">Get Auth Quote</button>
        <button @click="$store.commit('logout')">Logout</button>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

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
