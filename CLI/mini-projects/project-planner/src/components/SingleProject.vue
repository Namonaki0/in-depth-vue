<template>
  <div class="project" @click="showDetails">
    <div class="actions">
      {{ project.title }}
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
        details: false
    }
  },
  methods: {
    showDetails() {
        this.details = !this.details;
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
</style>
