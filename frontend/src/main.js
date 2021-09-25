// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'

// L71. 開発用のコメント出力
Vue.config.productionTip = false

// #appは、index.htmlに挿入される。
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
