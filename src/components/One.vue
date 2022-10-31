<template>
    <div>
        <h1>{{value}}</h1>
        
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'App',
    data() {
     return {
      value:''
     }
    },
    components: {
      
    },
    mounted() {
 
    this.$store.commit('setName','Sumit Sir Mobiotics It Solution Ltd')
    this.value=this.$store.getters.getName
  
    
  }
  }
  </script>
  
  <style>
  
  </style>
  