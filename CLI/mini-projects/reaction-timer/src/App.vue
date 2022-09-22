<template>
    <button @click="startGame" :disabled="isPlaying">START GAME</button>
    <h2>REACTION-TIMER</h2>
    <Block v-if="isPlaying" :delay="delay" :isPlaying="isPlaying" @stop="endGame"/>
    <Results v-if="showResults" :score="score"/>
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
      isPlaying: false,
      showResults: false,
      score: null
    }
  },
  methods: {
    startGame(){
      this.delay = 1000 + Math.random() * 4000
      this.isPlaying = true
      this.showResults = false
   
    },
    endGame(reactionTimer){
      this.isPlaying = false
      this.showResults = true
      this.score = reactionTimer
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

button[disabled] {
  cursor: not-allowed
}

</style>
