<template>
 <div id="home">
   <h1>{{msg}}</h1>
   <h2>Author: {{author}}</h2>
   <center>
   <ul v-for="music in musics">
     <li>
       {{music.name}}
     </li><br>
     <li>
        <img :src="music.album.picUrl" style="width:200px;">
      </li>
   </ul>
   </center>
 </div>
</template>
<script>
 export default {
  name: 'home',
  data(){
     return {
      msg: 'vue调用网易云接口',
      author: 'qc',
      musics: []
     }
  },
  mounted(){
   this.$http.get('/index/playlist/detail?id=19723756',{}).then(function(res){
   this.musics=res.data.result.tracks
   }).catch(function(error){})
 }
   
}
</script>

<style scoped>
#home {
float: center;
}
ul {
    text-align: center;
    }
li {
     list-style-type: none;
     text-align: center;
    }
</style>

