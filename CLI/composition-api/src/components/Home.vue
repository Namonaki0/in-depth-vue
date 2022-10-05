<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="searchTerm">

    <p>{{searchTerm}}</p>
    <ul>
      <li v-for="(name, index) in filterSearches" :key="name">
        <span @click="deleteSpan(index)">{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

export default {
  setup() {
    const names = ref(["Mark", "Jeff", "Richard", "Anna", "Julie", "Aurelius"])
    const searchTerm = ref("")

    const filterSearches = computed(() => {
      return names.value.filter(name => name.includes(searchTerm.value))
    })

    const deleteSpan = (idx) => {
       names.value.splice(idx, 1)
    }

    return {names, searchTerm, filterSearches, deleteSpan}
  },

  props: ["message"]
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
