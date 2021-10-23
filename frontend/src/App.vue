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
    <!-- <Section6></Section6> -->

    <!-- <Section7 :total-number="number" @my-click="incrementNumber"></Section7> -->
    <!-- <h1>トータルのいいね数</h1>
    <h2>{{number}}</h2> -->

    <!-- Section8 -->
    <Section8 headerText="hello">
      <!-- L103. フォールバックコンテンツ(Slotが空の場合) -->
      <!-- <h1>トータルのいいね数</h1>
      <h1>{{ number }}</h1> -->
    </Section8>
  </div>
</template>

<script>
  // import Section6 from '@/components/Section6.vue'
  // import Section7 from '@/components/Section7.vue'
  import Section8 from '@/components/Section8.vue'

  export default {
    name: 'App',
    /*
      L81. ES6では同じ名前を定義することでコロンで記述しなくて良い
      components: {
        Section6: Section6
      }
    */

    // L88. 親子間のコンポーネントでデータを受け渡す
    // L90. propsはケバブケースで渡すのがオススメ
    // data() {
    //   return {
    //     number: 10
    //   }
    // },
    // components: {
    //   Section7
    // },
    // methods: {
    //   incrementNumber(value) {
    //     this.number = value
    //   }
    // }

    // L100. 子コンポーネントに渡すには、propsでは限界がある
    data() {
      return {
        number: 10
      }
    },
    components: {
      Section8
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

  /* .red {
    color: red;
  }

  .bg-blue {
    background-color: blue;
  } */


  /* div {
    border: 1px solid blue;
  } */
</style>