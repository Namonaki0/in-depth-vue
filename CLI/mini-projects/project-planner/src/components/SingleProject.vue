<template>
  <div class="project" >
    <div class="actions">
      <p @click="showDetails">{{ project.title }}</p>
    <div class="icons">
      <span class="material-icons" @click="deleteProject">
        delete
      </span>
      <span class="material-icons">
        edit
      </span>
      <span class="material-icons">
        done
      </span>
    </div>
    </div>
    <div class="details" v-if="details">
      {{ project.details }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      details: false,
      uri: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods: {
    showDetails() {
        this.details = !this.details;
    },
    deleteProject() {
      fetch(this.uri, {method: "DELETE"})
      .then(() => this.$emit("delete", this.project.id))
      .catch(err => console.log(err))
    }
  }
};
</script>

<style>
.project {
  background: grey;
  margin-bottom: 10px;
  color: white;
  border-left: 5px solid rgb(219, 67, 67);
    padding: 10px 8px;
    line-height: 20px;
    cursor: pointer;
    transition: background 100ms linear;
}

.project:hover {
  background: rgb(137, 137, 137);
}

 .project .details {
  font-size: 0.8rem;
  color: rgb(223, 223, 223);
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons .material-icons {
  color: rgb(190, 190, 190)
}
.icons .material-icons:hover {
  color: rgb(223, 223, 223)
}

</style>
