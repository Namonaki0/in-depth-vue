<template>
    <h2>JOB LISTINGS</h2>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDescription', params: { id: job.id } }">
            <p>{{job.title}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs: [
                    {title: "UX Designer", id: 1, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo."},
                    {title: "Web Developer", id: 2, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo."},
                    {title: "UI Designer", id: 3, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo."},
                    {title: "FE Architect", id: 4, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo."},

                ]
            }
        }
    }
</script>