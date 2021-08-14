import Vue from 'vue'
import Router from 'vue-router'
import BaseTech from '@/components/BaseTech'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'BaseTech',
    component: BaseTech
  }]
})
