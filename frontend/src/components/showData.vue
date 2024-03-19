<template>
  
<div>
    <router-link :to="{name: 'createData'}">
        <button class="addTaskButton">Add New Task</button>
    </router-link> 
    <div class="data">
    {{data}}
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
data(){
    return{
        data: []
    }
},

async created(){
    const response = await axios.get('http://localhost:5000/data')
    this.data = response.data
}
}
</script>

<style>

.addTaskButton{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 160px;
    height: 35px;
    font-size: 18px;
    font-weight: 550;
    background: grey;
    border: none;
    border-radius: 3px;
    color: rgb(238, 212, 162);
    transition: 0.2s;
}
.addTaskButton:hover{
    background: rgb(238, 212, 162);
    color: grey;
    cursor: pointer;
    box-shadow: 0px 0px 5px 2px grey;
}

.data{
    position: relative;
    top: 200px;
}

</style>