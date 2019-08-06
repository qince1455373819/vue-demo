/* eslint-disable */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
//Vue.prototype.HOST='/index'
Vue.use(VueResource)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: '/static/img/error.png',
  loading: '/static/img/loading.gif',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created:function(){
     console.log('this is Vue instance create function !');
  },
  mounted(){
  // console.log(this.$http)
  }
})
