<template>
  <div v-if="projects.length">
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project" />
    </div>
  </div>
</template>

<script>
import SingleProject from '@/components/SingleProject.vue';
export default {
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
    components: { SingleProject }
};
</script>
