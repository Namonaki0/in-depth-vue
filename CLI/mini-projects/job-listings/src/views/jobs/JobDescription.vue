<template>
    <h3>job description</h3>
    <p>this is route {{ id }}</p>
</template>

<script>

    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        }
    }
</script>