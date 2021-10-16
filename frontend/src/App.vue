<!-- singleファイルコンポーネントは、「template」「script」「style」で構成されることが多い -->
<!-- → タグは全部なくても問題ない -->
<!-- → 今回はルーティングを使っているので<router-view/>に依存している -->
<!-- → router/index.jsでのルーティングを<router-view>に集約 -->
<template>
  <div id="app">
    <!-- L84. パスカルケース(RouterView)コンポーネントとした場合、ケバブケース(router-view)やキャメルケース(routerView)でも記述できる -->
    <!-- パスカルケース統一がおすすめ → HTMLは大文字小文字を認識できなく要素はケバブケースが多いので、一眼でコンポーネントだと理解できるため -->
    <!-- "しかし" JSfiddleなどでは、DOMテンプレートを使う際にはHTMLが先行して読み込まれるので"ケバブケース"にすること！ -->
    <RouterView />
    <!-- ローカル登録は、App.vueに書く -->
    <Section6></Section6>
  </div>
</template>

<script>
import Section6 from '@/components/Section6.vue'

export default {
  name: 'App',
  // L81. ES6では同じ名前を定義することでコロンで記述しなくて良い
  // Section6: Section6
  components: {
    Section6
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
</style>
