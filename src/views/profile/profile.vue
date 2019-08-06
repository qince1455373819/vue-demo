<template>
<div>
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_1312621_hxin5c57h67.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css">
   <div float="left">
   <span @click="go_back()" class="iconfont iconarrow-left-small pos">返回</span>
   </div>
  <h1>Vue-lazyload图片懒加载+ Vue 图片轮播</h1>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(imgUrl,index) in imageUrls">
        <img v-if="imgUrl !='' " v-lazy="imgUrl" width="400" height="400" />
        <img v-else src="/static/img/404.jpg" width="400" height="400" />
        </div>
    </div>
 <div class="swiper-pagination"></div>
 <div class="swiper-button-prev"></div>
 <div class="swiper-button-next"></div>
 <div class="swiper-scrollbar"></div>
 </div>
</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js"></script>
<script>
export default {
data(){
   return {
    imageUrls: ['/static/img/test0.jpg',
                '/static/img/test1.jpg',
                '/static/img/test2.jpg',
                '/static/img/test3.jpg',
                '/static/img/test4.jpg',
                '/static/img/test5.jpg',
                '/static/img/test6.jpg',
                '/static/img/test7.jpg',
                '/static/img/test8.jpg',
                '/static/img/test9.jpg'
            ],
   src: true
   }
  },
mounted(){
  var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项 
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })       
},
methods:{
  go_back(){this.$router.back(-1);}
}

}
</script>
<style>
.pos {
       margin-left: -800px;
     }
li {list-style-type: none;}
.swiper-container {
    width: 600px;
    height: 450px;
}  
</style>
