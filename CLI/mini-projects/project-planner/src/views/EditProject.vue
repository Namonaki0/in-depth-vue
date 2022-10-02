<template>
  <form @submit.prevent="handleSubmit">
    <label>TITLE:</label>
    <input type="text" required v-model="title" />
    <label>CONTENT:</label>
    <input type="text" v-model="details" />

    <button>UPDATE PROJECT</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleSubmit() {
        let project = {
            title: this.title,
            details: this.details,
        };
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
form {
  box-sizing: border-box;
  max-width: 600px;
  padding: 20px 0;
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.475);
  border-top: 1px solid rgba(0, 0, 0, 0.137);
  border-left: 1px solid rgba(0, 0, 0, 0.137);
  border-radius: 2px;
}

label,
input {
  display: block;
  width: 90%;
  margin: 25px auto;
  padding: 0;
  border: none;
  outline: none;
}

input {
  border-bottom: 1px solid rgba(192, 192, 192, 0.374);
  padding: 0 0.2rem 0.5rem;
  margin-top: 0;
}

label {
  margin-bottom: 10px;
}

button {
  cursor: pointer;
  background: rgb(50, 113, 50);
  border: none;
  padding: 1rem;
  color: white;
  display: block;
  margin: auto;
}
</style>
