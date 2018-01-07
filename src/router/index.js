import Vue from 'vue'
import Router from 'vue-router'

import Project from '@/components/project/project'
import ProjectDetail from '@/components/project-detail/project-detail'
import Homepage from '@/components/homepage/homepage'
import Calendar from '@/components/calendar/calendar'
import Manage from '@/components/manage/manage'
import Launch from '@/components/launch/launch'
import Begin from '@/components/calendar/begin/begin'
import Doing from '@/components/calendar/doing/doing'
import Ended from '@/components/calendar/ended/ended'
import Ready from '@/components/manage/ready/ready'
import Running from '@/components/manage/running/running'
import Over from '@/components/manage/over/over'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import AddPro from '@/components/manage/addPro'
import ModifyPro from '@/components/manage/modifyPro'
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
      path: '/addPro',
      name: 'addPro',
      component: AddPro
    },
    {
      path: '/modifyPro',
      name: 'modifyPro',
      component: ModifyPro
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
      path: '/manage',
      name: 'manage',
      component: Manage,
      children: [
        {
          path: '/ready',
          component: Ready
        },
        {
          path: '/running',
          component: Running
        },
        {
          path: '/over',
          component: Over
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
