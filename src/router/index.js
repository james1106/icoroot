import Vue from 'vue'
import Router from 'vue-router'

import Project from '@/components/project/project'
import ProjectDetail from '@/components/project-detail/project-detail'
import Homepage from '@/components/homepage/homepage'
import Calendar from '@/components/calendar/calendar'
import Launch from '@/components/launch/launch'
import Begin from '@/components/calendar/begin/begin'
import Doing from '@/components/calendar/doing/doing'
import Ended from '@/components/calendar/ended/ended'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import Error from '@/components/error/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/project/:id',
      component: ProjectDetail
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      children: [
        {
          path: '/begin',
          component: Begin
        },
        {
          path: '/ended',
          component: Ended
        },
        {
          path: '/doing',
          component: Doing
        }
      ]
    },
    {
      path: '/launch',
      name: 'launch',
      component: Launch
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      component: Error
    }
  ]
})
