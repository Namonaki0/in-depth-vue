const app = Vue.createApp({
  data() {
    return {
      isShowing: true,
      name: "Robert D J",
      age: 75,
      country: "America",
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Mike";
    },
    changeCountry(country) {
      this.country = country;
    },
    showInfo() {
      this.isShowing = !this.isShowing;
    },
    handleEvent(e, num) {
      console.log("event", e, e.type);
      if (num) {
        console.log(num);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
