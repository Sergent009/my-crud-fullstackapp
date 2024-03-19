<template>
<div class="header">UPDATE TASK</div>
<div class="container">
    <input class="inputFields" type="text"  placeholder="re-enter title" v-model="title">
    <br><br><br>
    <input class="inputFields" type="text" placeholder="re-enter task" v-model="task">
    <br><br><br>
    <input class="inputFields" type="text"  placeholder="re-enter email" v-model="email">
    <br><br><br>
</div>

    <button class="submitButton" @click="updateTask">Update Task</button>
    <button class="backToHome" @click="backToHome">Back</button>

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
    // async updateTask(){
    //     await axios.put(`http://localhost:5000/data/${this.$route.params.id}`, {
    //       my_title: this.title,
    //       my_task: this.task,
    //       my_email: this.email
    //     })
    // },

    backToHome(){
        this.$router.push('/')
    }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

.header{
    width: 100%;
    height: 8%;
    background: wheat;
    color: black;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px 2px black;
    font-family: "Madimi One", sans-serif;
}
.container{
    position: absolute;
    top: 100px;
    left: 440px;
    font-family: "Madimi One", sans-serif;

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
    font-family: "Madimi One", sans-serif;

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
    font-family: "Madimi One", sans-serif;

}
.submitButton:hover{
    background: rgb(185, 184, 184);
    color: black;
    box-shadow: 0px 0px 5px 2px black;
    cursor: pointer;
}

.backToHome{
    position: absolute;
    top: 88%;
    left: 93%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: grey;
    color: white;
    font-weight: 550;
    font-size: 15px;
    transition: 0.2s;
}
.backToHome:hover{
    background: white;
    color: grey;
    border: 1px solid rgb(87, 86, 86);
    cursor: pointer;
}

</style>