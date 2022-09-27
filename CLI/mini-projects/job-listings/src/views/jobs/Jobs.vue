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
                // top-level keys -> resources
                "jobs": [
                    {title: "UX Designer", id: 1, details: "Lorem ipsum dolor."},
                    {title: "Web Developer", id: 2, details: "Lorem ipsum dolor, sit amet consectetur."},
                    {title: "UI Designer", id: 3, details: "Lorem ipsum dolor, sit."},
                    {title: "FE Architect", id: 4, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
                ],
                // resource
                "blogs": [
                    { title: "UX Design", id: 10, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo." },
                    { title: "Web Dev", id: 11, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo." },
                    { title: "UI Design", id: 12, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo." },
                    { title: "FE Architecture", id: 13, details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quo." },
                ]
            }
        }
    }
</script>