import Vue from 'vue'
import Router from 'vue-router'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'

Vue.use(Router)

export default new Router({
  // https://qiita.com/hshota28/items/765cf903f055754f7557/#導入
  mode: 'history',
  routes: [{
      path: '/section',
      name: 'Section1',
      component: Section1
    },
    {
      path: '/section2',
      name: 'Section2',
      component: Section2
    },
  ]
})
