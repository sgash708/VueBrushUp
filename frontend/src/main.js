// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'

// L71. 開発用のコメント出力
Vue.config.productionTip = false

// L77. ローカルコンポーネント
// var component = {
//   data() {
//     return {
//       number: 12
//     }
//   }
// }
// #appは、index.htmlに挿入される。
new Vue({
  router,
  render: h => h(App),

  // L77. localコンポーネントの使い方
  // ファイルの肥大化を避けるためにローカルコンポーネントを使う場合がある。
  // components: {
  //   'my-component': component
  // }
}).$mount('#app');
