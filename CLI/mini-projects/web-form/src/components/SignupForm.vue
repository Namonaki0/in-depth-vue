<template>
    <form @submit.prevent="handleSubmit" class="form">
        <label>EMAIL:</label>
        <input type="email" required v-model="email">
        <label>PASSWORD:</label>
        <input type="password" required v-model="password">
        <span v-if="submitError" class="submit-error">{{submitError}}</span>

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
<!-- 
        <div>
            <input type="checkbox" value="mark" v-model="names">
            <label>Mark</label>
            <input type="checkbox" value="jess" v-model="names">
            <label>Jess</label>
            <input type="checkbox" value="connor" v-model="names">
            <label>Connor</label>
            <input type="checkbox" value="ruth" v-model="names">
            <label>Ruth</label>
        </div> -->

        <label>SKILLS:</label>
        <input type="text" v-model="tempSkill" @keyup="addSkill">
        <div class="skills-container">
            <div class="pill" v-for="skill in skills" :key="skill">
                <span @click="deleteSkill(skill)">{{skill}}</span>
            </div>
        </div>

        <div class="submit">
            <button>SUBMIT</button>
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
                names: [],
                tempSkill: "",
                skills: [],
                submitError: ""
            }
        },
        methods: {
            addSkill(e){
                if (e.key === "Enter" && this.tempSkill) {
                    if(!this.skills.includes(this.tempSkill)) {
                        this.skills.push(this.tempSkill)
                    }
                    this.tempSkill = ""   
                }
            },
            deleteSkill(skill) {
               this.skills = this.skills.filter(item => {
                return skill !== item
               })
            },
            handleSubmit() {
                this.submitError = this.password.length > 5 ? 
                "" : "password must be at least 6 characters long"

                if(!this.submitError) {
                    console.log("form submitted")
                }
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

    .form {
       background: lightgray;
       border-radius: 5px;
       padding: 1.5rem;
    }

    label {
        margin-bottom: 10px;
    }

    select {
        display: block;
    }

    .terms {
        font-size: .8rem;
        display: flex;
        align-items: baseline;
    }

    .details p {
        margin-bottom: 0;
    }

    .skills-container {
        display: flex;
    }

    .pill {
        background: grey;
        color: white;
        display: flex;
        flex-direction: row;
        width: max-content;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        cursor: pointer;
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

    select {
        margin-bottom: 0;
    }


</style>