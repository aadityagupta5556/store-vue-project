<template>
    <div>
        <h1>{{value}}</h1>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'App',
    components: {},
      data() {
        return {
            value:''
        }
      
    },
    
    mounted() {
        
        this.$store.commit('setName','Aaditya Gupta')
        this.value=this.$store.getters.getName
    },
    created() {

    }
  }
  </script>
  
  <style>
  
  </style>
  