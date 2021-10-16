import Vue from 'vue'
// L78. vue-loaderが".vue"を読み込み、単一ファイルコンポーネントを理解する
// vueファイルをimportして、コンポーネントのオブジェクトにする
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'

// L71. 開発用のコメント出力
Vue.config.productionTip = false

/*
  L78. "App"の中身はこんな感じ
  {
    "name": "App",
    "staticRenderFns": [],
    "_compiled": true,
    "beforeCreate": [
      null,
      null
    ],
    "__file": "src/App.vue",
    "beforeDestroy": [
      null
    ],
    "_Ctor": {}
  }
 */
console.log(App)

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
