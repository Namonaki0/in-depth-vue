<template>
  <h1>Welcome to the {{title}}</h1>
  <input ref="details" />
  <button @click="handleClick" >get details</button>
  <Section theme="orangePunch" />
  <div v-if="modal">
    <Modal :title="modalTitle" :text="modalText" theme="dark" @close="toggleModal"/>
  </div>
  <button @click="toggleModal">show modal</button>
</template>

<script>

  import Modal from "./components/Modal.vue"
  import Section from "./components/Section.vue"

export default {
  name: 'App',
  components: {
    Modal,
    Section
  },
  data() {
    return {
      title: "first Vue app",
      modalTitle: "congrats on the offer",
      modalText: "we'll email you the content",
      modal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.details)
      this.$refs.details.classList.add("active");
      this.$refs.details.focus();
    },
    toggleModal() {
      this.modal = !this.modal
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-weight: bold;
  border-bottom: 3px solid #000;
  display: inline-block;
  padding: 0 0 1rem;
}
</style>
