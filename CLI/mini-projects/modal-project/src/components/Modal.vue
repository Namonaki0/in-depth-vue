<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{ dark: theme === 'dark' }">
            <h3>{{title}}</h3>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["title", "text", "theme"],
        methods: {
            closeModal() {
                this.$emit("close")
            }
        }
    }
</script>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
    }
    .modal {
        display: grid;
        place-content: center;
        width: 500px;
        height: 200px;
        padding: 20px;
        margin: 100px auto;
        background: #fff;
        border-radius: 10px;
    }

    .modal.dark {
        background: #1c1c1c;
        color: white;
    }
</style>