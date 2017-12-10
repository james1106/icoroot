import Vue from 'vue'
import Router from 'vue-router'
import Mheader from '@/components/header/header'
import Homepage from '@/components/homepage/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'header',
      component: Mheader
    },
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    }
  ]
})
