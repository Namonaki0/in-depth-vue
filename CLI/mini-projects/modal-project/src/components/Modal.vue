<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ dark: theme === 'dark' }">
            <slot></slot>
            <div class="cta">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["theme"],
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

    .modal.info {
        background: red;
    }

    .modal.cta{
        width: 100%;
        background: red;
        display: flex;
        justify-content: space-around;
    }

    .modal .cta a {
        color: white;
        border: 1px solid white;
        padding: .5rem 1rem;
        margin-top: 1.8em;
    }

</style>