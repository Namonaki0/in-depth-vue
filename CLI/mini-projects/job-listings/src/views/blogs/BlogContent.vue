<template>
    <div v-if="blogContent">
        <h2>{{ blogContent.title }}</h2>
        <p>{{ blogContent.details }}</p>
        <span>blog id: {{ id }}</span>
    </div>
    <div v-else>
        <p>...loading blog content</p>
    </div>
</template>

<script>
    export default {
        props: ["id"],
        data() {
            return {
                blogContent: null
            }
        },
        mounted() {
            fetch("http://localhost:3000/blogs/" + this.id)
            .then(data => data.json())
            .then(data => this.blogContent = data)
            .catch(err => console.log(err.message))
        }
    }
</script>