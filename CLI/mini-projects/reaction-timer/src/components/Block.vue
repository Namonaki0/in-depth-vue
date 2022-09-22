<template>
  <div v-if="showBlock" class="block" @click="endGame">
    <p>click me fast</p>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTimer: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
    methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTimer += 10;
      }, 10);
    },
    endGame() {
      clearInterval(this.timer)
      this.showBlock = false
      this.$emit("stop", this.reactionTimer);
    },
  },
};
</script>

<style scoped>
.block {
  display: grid;
  place-content: center;
  width: 500px;
  height: 300px;
  background: lightskyblue;
  color: white;
  border-radius: 10px;
  margin: 0 auto;
}
</style>
