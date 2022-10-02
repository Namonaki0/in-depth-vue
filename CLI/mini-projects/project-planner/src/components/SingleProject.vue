<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <p @click="showDetails">{{ project.title }}</p>
      <div class="icons">
        <span class="material-icons" @click="deleteProject"> delete </span>
        <router-link :to="{ name: 'edit-project', params: {id: project.id}}">
          <span class="material-icons"> edit </span>
        </router-link>
        <span class="material-icons tick" @click="completeProject"> done </span>
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
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    showDetails() {
      this.details = !this.details;
    },
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    completeProject() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.project {
  box-shadow: 2px 3px 1px rgba(112, 112, 112, 0.2);
  margin-bottom: 10px;
  border-top: 1px solid rgba(112, 112, 112, 0.053);
  border-left: 5px solid rgb(219, 67, 67);
  padding: 10px 8px;
  line-height: 20px;
  cursor: pointer;
  transition: background 100ms linear;
  border-radius: 2px;
}

.project.complete {
  border-left: 5px solid rgb(60, 174, 125);
}

.project.complete .tick {
  color: rgb(60, 174, 125);
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
  color: rgb(190, 190, 190);
}
</style>
