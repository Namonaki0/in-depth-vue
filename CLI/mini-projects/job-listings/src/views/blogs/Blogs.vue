<template>
    <div v-if="blogs.length">
        <h2>Blog Posts</h2>
        <div v-for="blog in blogs" :key="blog.id">
            <router-link :to="{ name: 'BlogContent', params: { id: blog.id } }">
                <p>{{ blog.title }}</p>
            </router-link>
        </div>
    </div>

    <div v-else>
        <p>...loading blogs</p>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                blogs: []
            }
        },
        mounted() {
            fetch("http://localhost:3000/blogs")
            .then(data => data.json())
            .then(data => this.blogs = data)
            .catch(err => console.log(err.message))
        }
    }
</script>
