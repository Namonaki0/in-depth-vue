<template>
    <h2>JOB LISTINGS</h2>
    <div class="jobs-wrapper" v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id">
            <router-link class="job-links" :to="{ name: 'JobDescription', params: { id: job.id } }">
                {{job.title}}
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