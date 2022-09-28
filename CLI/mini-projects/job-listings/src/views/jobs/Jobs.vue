<template>
    <div v-if="jobs.length">
        <h2>JOB LISTINGS</h2>
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'JobDescription', params: { id: job.id } }">
                <p>{{job.title}}</p>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>loading content ...</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs: []
            }
        },
        mounted() {
            fetch("http://localhost:3000/jobs")
            .then(data => data.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message))
        }
    }
</script>