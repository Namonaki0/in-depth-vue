<template>
    <form class="form">
        <label>EMAIL:</label>
        <input type="email" required v-model="email">
        <label>PASSWORD:</label>
        <input type="password" required v-model="password">

        <label>ROLE:</label>
        <select name="roles" v-model="role" class="roles">
            <option value="Architect">architect</option>
            <option value="Developer">developer</option>
            <option value="Designer">designer</option>
        </select>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>Accept terms and conditions</label>
        </div>

        <div>
            <input type="checkbox" value="mark" v-model="names">
            <label>Mark</label>
            <input type="checkbox" value="jess" v-model="names">
            <label>Jess</label>
            <input type="checkbox" value="connor" v-model="names">
            <label>Connor</label>
            <input type="checkbox" value="ruth" v-model="names">
            <label>Ruth</label>
        </div>
    </form>


    <div class="details">
        <p>Email: {{email}}</p>
        <p>Password: {{password}}</p>
        <p>Role: {{role}}</p>
        <p>TERMS: {{terms}}</p>
        <p>NAMES: {{names}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                role: "",
                terms: false,
                names: []
            }
        }

    }
</script>

<style scoped>

    form, .details {
        display: grid;
        margin: auto;
        max-width: 450px;
        text-align: left;
    }

    select {
        display: block;
    }

    .details p {
        margin-bottom: 0;
    }

    input[type="checkbox"]{
        display: inline-block;
        margin-right: 10px;
    }

    input, select {
        display: block;
        border: none;
        border-bottom: 1px solid rgba(141, 141, 141, 0.566);
        margin-bottom: 20px;
        outline: none;
        padding: 10px;
    }


</style>