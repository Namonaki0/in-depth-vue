<template>
    <h2>Blog Posts</h2>
    <div class="blogs-wrapper" v-if="blogs.length">
        <div v-for="blog in blogs" :key="blog.id">
            <router-link class="blog-links" :to="{ name: 'BlogContent', params: { id: blog.id } }">
                {{ blog.title }}
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

