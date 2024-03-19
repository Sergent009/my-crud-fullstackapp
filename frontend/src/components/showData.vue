<template>
  
<div>
    <router-link :to="{name: 'createData'}">
        <button>Add Data</button>
    </router-link> 
    <div>
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

</style>