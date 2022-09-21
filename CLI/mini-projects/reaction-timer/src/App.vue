<template>
    <button @click="startGame" :disabled="isPlaying">start game</button>
    <h2>reaction-timer</h2>
    <Block v-if="isPlaying" :delay="delay" :isPlaying="isPlaying" @stop="stopGame"/>
    <Results />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  data() {
    return {
      delay: null,
      isPlaying: false
    }
  },
  methods: {
    startGame(){
      this.delay = 1000 + Math.random() * 4000
      this.isPlaying = true
   
    },
    stopGame(){
      this.isPlaying = false
      console.log("game ended", this.delay)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
}

</style>
