import Vue from 'vue'
import Router from 'vue-router'
import LMap from 'vue2-leaflet'
import Map from '@/components/Map'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'

Vue.use(Router)

export default new Router({
  // https://qiita.com/hshota28/items/765cf903f055754f7557/#導入
  mode: 'history',
  routes: [{
      path: '/section2',
      name: 'Section2',
      component: Section2
    },
    {
      path: '/section3',
      name: 'Section3',
      component: Section3
    },
    {
      path: '/map',
      name: 'Map',
      components: {
        Map,
        LMap
      }
    },
  ]
})
