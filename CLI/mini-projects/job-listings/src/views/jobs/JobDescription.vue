<template>
    <p>this is route {{ id }}</p>
</template>

<script>

    export default {
        props: ["id", "title"]
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // }
    }
</script>