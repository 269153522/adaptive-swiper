import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Swiper from '@/components/Swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
