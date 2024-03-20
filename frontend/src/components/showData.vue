<template>

<div class="header">FullStack Todo App</div>  
<div>
    <router-link :to="{name: 'createData'}">
        <button class="addTaskButton">Add New Task</button>
    </router-link> 

    <!-- <div class="data">
    {{data}}
    </div> -->

    <table class="data">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Task</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.my_title }}</td>
          <td>{{ item.my_task }}</td>
          <td>{{ item.my_email }}</td>
          <td>
            <router-link :to="{name: 'updateData',  params: { id: item.id } }">
            <button class="actionButtons" id="edit">Edit</button>
            </router-link>
            <button class="actionButtons" id="delete" @click="deleteTask(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

</div>
<div class="name">Abdul Mannan Khan</div>

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
},

methods:{
  async deleteTask(id){
    try{
   await axios.delete(`http://localhost:5000/data/${id}`)
    // this.data = response.data
    } 
    catch(err){
      console.log(err)
    }
  }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

.addTaskButton{
    position: absolute;
    top: 15%;
    left: 1%;
    width: 160px;
    height: 35px;
    font-size: 18px;
    font-weight: 550;
    background: grey;
    border: none;
    border-radius: 3px;
    color: rgb(238, 212, 162);
    transition: 0.2s;
    font-family: "Madimi One", sans-serif;
}
.addTaskButton:hover{
    background: rgb(238, 212, 162);
    color: grey;
    cursor: pointer;
    box-shadow: 0px 0px 5px 2px grey;
}

.name{
    position: absolute;
    left: 84.6%;
    top: 92.4%;
    width: 200px;
    height: 50px;
    background: grey;
    color: white;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Madimi One", sans-serif;
    border-top-left-radius: 50px;
}

.data {
  position: relative;
  top: 200px;
  font-family: "Madimi One", sans-serif;
  border-collapse: collapse; /* Add this line to collapse borders */
    width: 100%;
}

.data th, .data td {
  border: 1px solid black; /* Add borders to table cells */
  padding: 8px; /* Add padding for better spacing */
}

.data th {
  background-color: #f2f2f2; /* Add background color for table header */
}

.data tr:nth-child(even) {
  background-color: #f2f2f2; /* Add background color for even rows */
}

.actionButtons{
    width: 20%;
    font-weight: 550;
    font-size: 13px;
    font-family: "Madimi One", sans-serif;
    border: none;
    border-radius: 2px;
    transition: 0.2s;
    margin: 0 5px;
}
.actionButtons:hover{
    cursor: pointer;
    width: 25%;
    height: 10%;

}

#edit{
    background: blue;
    color: white;
}

#delete{
  width: 25%;
    background: red;
    color: white;
}

</style>