<template>
    <div>
        <p>score: {{score}} ms</p>
    </div>
    <span>your rank: {{rank}}</span>
</template>

<script>
    
    export default {
        props: ["score"],
        data() {
            return{
                rank: null
            }
        },
        mounted() {
            if(this.score < 200) {
                this.rank = "perfect"
            } else if (this.score < 400) {
                this.rank = "very good"
            } else {
                this.rank = "super slow"
            }
        }
    }

</script>