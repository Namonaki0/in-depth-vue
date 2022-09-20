<template>
  <h1>Welcome to the {{ title }}</h1>
  <input ref="details" />
  <button @click="handleClick">get details</button>
  <Section theme="orangePunch" />
  <div v-if="modal">
    <Modal theme="dark" @close="toggleModal">
      <template v-slot:links class="shop-cta">
        <a href="#">shop</a>
        <a href="#">sale</a>
      </template>
      <h3>{{ modalTitle }}</h3>
      <p>{{ modalText }}</p>
    </Modal>
  </div>
  <div v-if="modalDup">
    <Modal @close="toggleModalDup">
      <h1>{{modalDupTitle}}</h1>
      <p>{{modalDupText}}</p>
    </Modal>
  </div>
  <teleport to=".modals" v-if="modalTwo">
    <ModalTwo funky="funkyClr" @closeModalTwo="toggleModalTwo">
      <template v-slot:cta-links class="cta-links">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">Join Us</a>
      </template>
      <h2>{{modalTitle2}}</h2>
      <p>{{modalText2}}</p>
    </ModalTwo>
  </teleport>
  <button @click="toggleModal">show modal</button>
  <button @click="toggleModalTwo">show modal two</button>
  <button @click="toggleModalDup">show modal dup</button>
</template>

<script>
import Modal from "./components/Modal.vue";
import ModalTwo from "./components/ModalTwo.vue";
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    Modal,
    ModalTwo,
    Section,
  },
  data() {
    return {
      title: "first Vue app",
      modalTitle: "congrats on the offer",
      modalText: "we'll email you the content",
      modalTitle2: "this is modal two",
      modalText2: "text for modal 2",
      modalDupTitle: "modal dup title",
      modalDupText: "modal dup text",
      modal: false,
      modalTwo: false,
      modalDup: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.details);
      this.$refs.details.classList.add("active");
      this.$refs.details.focus();
    },
    toggleModal() {
      this.modal = !this.modal;
    },
    toggleModalTwo() {
      this.modalTwo = !this.modalTwo;
    },
    toggleModalDup() {
      this.modalDup = !this.modalDup
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app, .modals {
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
