<template>
  <div>
<div float="left">
   <span @click="go_back()" class="iconfont iconarrow-left-small pos">返回</span>
   </div>
<h1>Music</h1>
<a href="http://www.bejson.com/other/music/">Music 163 com</a>
  </div>
</template>
<script>
export default {
data(){
  return {}
 },
methods: {
go_back(){this.$router.back(-1);}
 }
}
</script>
<style>
.pos {
       margin-left: -800px;
     }
</style>
