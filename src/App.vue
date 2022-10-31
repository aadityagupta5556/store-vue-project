<template>
  <div>
    <one-tag></one-tag>
    <eight-tag></eight-tag>
  </div>
</template>

<script>
import One from './components/One.vue'
import Eight from './components/Eight.vue'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    'one-tag':One,
    'eight-tag':Eight
  },
  mounted() {
   
    this.$store.dispatch('actCode').then((data)=>{
      console.log(data)
    }).catch((data)=>{
      console.log(data)
    })
  
  }
}
</script>

<style>

</style>