import Vue from 'vue'
import Router from 'vue-router'
import IHeader from '@/components/iHeader/iHeader'
import IFooter from '@/components/ifooter/ifooter'
import Fix from '@/components/fix/fix'
import Homepage from '@/components/homepage/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/iHeader',
      name: 'iheader',
      component: IHeader
    },
    {
      path: '/ifooter',
      name: 'ifooter',
      component: IFooter
    },
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/fix',
      name: 'fix',
      component: Fix
    }
  ]
})
