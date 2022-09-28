<template>
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>this is route {{ id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>...loading job description</p>
    </div>
</template>

<script>

    export default {
        props: ["id"],
        data() {
            return {
                job: null
            }
        },
        mounted() {
            fetch("http://localhost:3000/jobs/" + this.id)
                .then(data => data.json())
                .then(data => this.job = data)
                .catch(err => console.log(err.message))
        }
    }
</script>