<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {

  components: {Navbar}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;
}

nav {
  margin: 30px 0;
  text-align: center;
  text-transform: uppercase;
}

nav a {
  padding: 5px 10px;
  font-weight: bold;
  color: rgb(183, 183, 183);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  border: none;
  border-bottom: 2px solid #42b983;
}
</style>
