import Vue from 'vue'
import Router from 'vue-router'
import LMap from 'vue2-leaflet'
import Map from '@/components/Map'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'
import Section9 from '@/components/Section9'
import Section11 from '@/components/Section11'
import Section11mixin from '@/components/Section11CountNumber'

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
      path: '/section6',
      name: 'Section6',
      component: Section6
    },
    {
      path: '/section7',
      name: 'Section7',
      component: Section7,
      props: {
        // L92. 各コンポーネントでデフォルト値で記述し、なくすこともできる
        // totalNumber: 10
        testProps: "test"
      }
    },
    {
      path: '/section9',
      name: 'Section9',
      component: Section9,
    },
    {
      path: '/section11',
      name: 'Section11',
      component: Section11,
    },
    {
      path: '/section11mixin',
      name: 'Section11mixin',
      component: Section11mixin,
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
