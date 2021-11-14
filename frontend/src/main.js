import Vue from 'vue'
// L78. vue-loaderが".vue"を読み込み、単一ファイルコンポーネントを理解する
// vueファイルをimportして、コンポーネントのオブジェクトにする
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'
import {
  bind
} from 'leaflet'

// L71. 開発用のコメント出力
Vue.config.productionTip = false
// L132. グローバルにカスタムディレクティブに登録
// L135. Vue.directive("v-000000の0000部分", オブジェクトもしくは省略記法を用いた関数)
// Vue.directive("border", {
/** Hook関数 */
// bind/updateが重要となる
// bind(el, binding, vnode) {
// ディレクティブが初めて対象の要素に紐づいたとき
// },
// inserted(el, binding, vnode) {
//   // 親Nodeに挿入された時
// },
// update(el, binding, vnode, oldVnode) {
// コンポーネントが更新される。子コンポーネントの仮想DOMが更新される前。
// }
// componentUpdated(el, binding, vnode, oldVnode) {
//   // コンポーネントが更新される。子コンポーネントが更新される後。
// },
// unbind(el, binding, vnode) {
//   // ディレクティブが紐づいている要素から取り除かれた時。
// },
// });

// L135. カスタムディレクティブの省略記法について
// → bind/updateの省略記号
Vue.directive("border", function (el, binding) {
  // L136. HTML要素の1つ(el)
  // el.style.border = "solid black 2px";
  // L137. Section10.vueから、データの受け取りができる
  // → binding.valueで渡す
  // el.style.borderWidth = binding.value;

  // L138. 複数の値を受け取るには、value.プロパティ名で取り出す
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;

  // L140. binding.modifiers.xxxx: roundが修飾子として存在しているか
  // → booleanを返す
  if (binding.modifiers.round) {
    // 角を削る
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow) {
    // 影をつける
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
  }
});

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
