<template>
  <div v-if="showBlock" class="block" @click="stopTimer">
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
    stopGame() {
      this.$emit("stop");
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTimer += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(this.reactionTimer);
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
