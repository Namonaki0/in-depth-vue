const app = Vue.createApp({
  data() {
    return {
      isShowing: true,
      name: "Robert D J",
      age: 75,
      country: "America",
      x: 0,
      y: 0,
      albums: [
        {
          artist: "Palisades",
          desc: "Reaching Hypercritical",
          albumCover: "assets/img1.jpg",
          isFav: true,
        },
        {
          artist: "Dir En Grey",
          desc: "Phalaris",
          albumCover: "assets/img2.jpg",
          isFav: false,
        },
        {
          artist: "Slipknot",
          desc: "The End So Far",
          albumCover: "assets/img3.jpg",
          isFav: false,
        },
        {
          artist: "The Gazette",
          desc: "MASS",
          albumCover: "assets/img4.jpg",
          isFav: true,
        },
      ],
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
      // console.log("event", e, e.type);
      if (num) {
        // console.log(num);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(album) {
      album.isFav = !album.isFav;
      console.log(album.isFav);
    },
  },
});

app.mount("#app");
