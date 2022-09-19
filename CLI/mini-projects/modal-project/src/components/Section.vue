<template>
    <div class="section" :class="{ orangePunch: theme === 'orangePunch' }">
        <h2>section title</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque laudantium consequatur nisi vitae quod aliquam earum, odit laboriosam voluptate nesciunt id voluptates adipisci tempore ullam, quas doloribus reprehenderit dolore, quia repellat maiores. Incidunt ratione nesciunt soluta aut suscipit accusamus voluptatibus minima, rerum amet fugiat quis est, blanditiis excepturi impedit dolore.</p>
    </div>
</template>

<script>
    export default {
        props: ["theme"]
    }
</script>

<style>
    .section {
        background: orange;
    }
    .section.orangePunch {
        background: rgb(255, 85, 0);
    }
</style>