import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login.vue'
import shoplist from '@/views/shoplist/shoplist.vue'
import home from '@/views/home/home.vue'
import profile from '@/views/profile/profile.vue'
import music from '@/views/music/music.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/shoplist',
      component: shoplist
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/profile',
      component: profile
    },
    {
       path: '/music',
       component: music
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
