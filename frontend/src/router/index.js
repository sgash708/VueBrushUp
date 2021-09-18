import Vue from 'vue'
import Router from 'vue-router'
import BaseTech from '@/components/BaseTech'
import Redndering from '@/components/Redndering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseTech',
      component: BaseTech
    },
    {
      path: '/render',
      name: 'Redndering',
      component: Redndering
    },
  ]
})
