<template>
<div class="container">
    <input class="inputFields" type="text"  placeholder="Enter title" v-model="title">
    <br><br><br>
    <input class="inputFields" type="text" placeholder="Enter task" v-model="task">
    <br><br><br>
    <input class="inputFields" type="text"  placeholder="Enter email" v-model="email">
    <br><br><br>
</div>

    <button class="submitButton" @click="addTask">Add Task</button>

</template>

<script>
import axios from 'axios'

export default {
data(){
    return{
        title: '',
        task: '',
        email: ''
    }
},

methods: {
    async addTask(){
        try{
        await axios.post('http://localhost:5000/data', {
            my_title: this.title,
            my_task: this.task,
            my_email: this.email
        })

            this.title = ''
            this.task = ''
            this.email = ''

            setTimeout(() => {
            this.$router.push('/')
            }, 1500)
        }
        catch(err){
            console.log(err)
        }
    }
}
}
</script>

<style>

.container{
    position: absolute;
    top: 100px;
    left: 440px;
}

.inputFields{
    width: 500px;
    height: 50px;
    border-radius: 4px;
    border: none;
    background: wheat;
    /* transition: 0.1s; */
    font-size: 15px;
    padding: 0 10px;
    font-weight: 600;
}
.inputFields:focus{
    background: white;
    border: 3px solid wheat;
    outline: none;
}

.submitButton{
    position: absolute;
    top: 400px;
    left: 830px;
    width: 130px;
    height: 35px;
    font-size: 16px;
    font-weight: 600;
    background: rgb(228, 201, 150);
    color: rgb(65, 63, 63);
    border: none;
    border-radius: 3px;
    transition: 0.2s;
}
.submitButton:hover{
    background: rgb(185, 184, 184);
    color: black;
    box-shadow: 0px 0px 5px 2px black;
    cursor: pointer;
}

</style>