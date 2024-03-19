<template>
  <div>
    <div class="inputFields">
        <label for="title"></label>
        <input type="text" class="title" placeholder="Enter title" v-model="title">
    </div>
    <div class="inputFields">
        <label for="task"></label>
        <input type="text" class="task" placeholder="Enter task" v-model="task">
    </div>
    <div class="inputFields">
        <label for="email"></label>
        <input type="text" class="email" placeholder="Enter email" v-model="email">
    </div>
    <button @click="addTask">submit</button>
  </div>
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
        await axios.post('http:localhost:5000/data', {
            my_title: this.title,
            my_task: this.task,
            my_email: this.email
        })
        }
        catch(err){
            console.log(err)
        }
    }
}
}
</script>

<style>

</style>