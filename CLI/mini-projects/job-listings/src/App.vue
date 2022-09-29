<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'Blogs' }">Blogs</router-link>
  </nav>

  <button @click="redirect">redirect</button>
  <button @click="back">back</button>
  <button @click="forward">forward</button>

  <router-view/>
</template>

<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: "Home"})
      },
      back() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)
      }
    }
  }
</script>

<style>
#app, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: none;
  background: #7d7d7d;
  border-radius: 5px;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  color: white;
}

a.blog-links, a.job-links {
  text-decoration: none;
  display: block;
  padding: .8rem .5rem;
  color: white;
}

.blogs-wrapper, .jobs-wrapper {
  background: #5d5d5d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.jobs-wrapper div {
  border-bottom: 1px solid silver;
  width: 100%;

}
</style>
