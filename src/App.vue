<template>
  <div id="app">
   <keep-alive>
    <router-view/>
   </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

export default {
  name: 'App',
  mounted(){
  console.log('=============start===========');
  this.$http.get('/index/playlist/detail?id=19723756',{}).then(function(res){console.log(res.data)}).catch(function(error){})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
