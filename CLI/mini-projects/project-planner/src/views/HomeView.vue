<template>
  <div v-if="projects.length">
    <FilterNavbar @filter="current = $event" :current="current" />
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import FilterNavbar from "@/components/FilterNavbar.vue";

export default {
  components: { SingleProject, FilterNavbar },
  data() {
    return {
      projects: [],
      current: "all"
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
  computed: {
    filteredProjects() {
      if(this.current === "completed") {
        return this.projects.filter(project => project.complete)
      }
      if(this.current === "ongoing") {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  }
};
</script>
