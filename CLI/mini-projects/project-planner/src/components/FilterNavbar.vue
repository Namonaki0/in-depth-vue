<template>
  <nav>
    <button 
        @click="filterProjects('all')" 
        :class="{ active: current === 'all' }"
    >
      ALL
    </button>
    <button
      @click="filterProjects('completed')"
      :class="{ active: current === 'completed' }"
    >
      COMPLETED
    </button>
    <button
      @click="filterProjects('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      ONGOING
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    filterProjects(by) {
      this.$emit("filter", by);
    },
  },
};
</script>

<style scoped>
nav {
  text-align: left;
}

nav button {
  all: unset;
  padding: 1rem 0.5rem .3rem;
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-weight: bold;
}

nav button.active {
  color: rgb(67, 67, 67);
}
</style>
