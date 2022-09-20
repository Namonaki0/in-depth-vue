<template>
    <div class="backdrop" @click.self="closeModalTwo">
        <div class="modalTwo" :class="{funkyClr : funky === 'funkyClr'}">
            <slot></slot>
            <div class="cta-links">
                <slot name="cta-links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["funky", "modalTwoColour"],
        methods: {
            closeModalTwo(){
                this.$emit("closeModalTwo")
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
    .modalTwo {
        display: grid;
        place-content: center;
        width: 500px;
        height: 200px;
        padding: 20px;
        margin: 100px auto;
        background: #fff;
        border-radius: 10px;
    }

    .modalTwo.funkyClr {
        background: orange;
    }

    .modalTwo .cta-links{ 
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .modalTwo .cta-links a {
        color: white;
        padding: .5rem 1rem;
        margin-top: 1.8em;
    }

 
</style>