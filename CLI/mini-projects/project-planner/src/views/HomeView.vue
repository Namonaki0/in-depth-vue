<template>
  <div v-if="projects.length">
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
export default {
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((data) => data.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleComplete(id) {
      let findProject = this.projects.find(project => {
        return project.id === id
      })
      findProject.complete = !findProject.complete
    }
  },
};
</script>
