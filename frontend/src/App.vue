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

    <Section8>
      <!-- L103. フォールバックコンテンツ(Slotが空の場合) -->
      <!-- <h1>トータルのいいね数</h1>
      <h1>{{ number }}</h1> -->

      <!-- L104. 名前付きスロットの適用はtemplateタグを必ず使う -->
      <!-- L104. v-slot:引数 -->
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <h1>{{ number }}</h1>
      </template>

      <!-- L105. デフォルトスロットについて -->
      <h3>みなさん</h3>
      <h3>はじめまして</h3>
      <p>よろしくお願いします。</p>

      <!-- L106. v-slotはtemplate以外はエラーが出力される -->
      <!-- <div v-slot:hoge></div> -->

      <!-- L107. スロットプロパティを使って子コンポーネントにデータアクセス -->
      <template v-slot:sl="slotProperty">
        <p>{{ slotProperty.user.firstName }}</p>
        <p>{{ slotProperty.user.lastName }}</p>
      </template>

      <!-- L110. 動的なスロット名(v-slot:[dataプロパティの何か]) -->
      <!-- → my_titleの中身を展開した値を、子コンポーネントのnameで受け取る -->
      <template v-slot:[my_title]>
        <p>hoge</p>
      </template>

      <template #rep>
        <p>シャープに置き換えた場合の挙動も同じ</p>
      </template>
    </Section8>

    <!-- <Section8 v-slot:default="slotProperty"> -->
    <!-- L108. デフォルトスロットしかないときに、子コンポーネントの値を受け取ることができる -->
    <!-- → ただ冗長なので、コンポーネント(Section8)にv-slotを直接記述することもできる。 -->
    <!-- → さらに、コンポーネント上のdefaultも削除してこうなる↓ -->
    <!-- <Section8 v-slot="slotProperty"><p>{{ slotProperty }}</p></Section8> -->

    <!-- <template v-slot:default="slotProperty"> -->
    <!-- <p>{{ slotProperty }}</p> -->
    <!-- </template> -->
    <!-- </Section8> -->

    <!-- L109. デフォルトスロットと名前付きスロットは混在できない。 -->
    <!-- <Section8 v-slot="slotProperty">
      <template v-slot:title="slotProperty"></template>
    </Section8> -->

    <!-- L113. 複数コンポーネントの切り替え -->
    <!-- → 切り替えが面倒なのでVue.jsでは、componentタグを使う -->
    <button @click="currentComp = 'Home'">Home</button>
    <button @click="currentComp = 'About'">About</button>
    <!-- <About v-if="currentComp === 'About'"></About>
    <Home v-if="currentComp === 'Home'"></Home> -->

    <!-- L115. 動的コンポーネントの状態保持はkeep-aliveによって避けることができる -->
    <!-- → destroyedを実行しなくなる -->
    <keep-alive>
      <!-- L113. "is:動的な値"とすることで、切り替えが簡単になる -->
      <!-- L114. destoryによってコンポーネントを削除して再作成しているのでコストがかかる -->
      <!-- → 動的コンポーネントは状態を保持しないのでコンポーネントを切り替えたら削除される点に注意すること -->
      <component :is="currentComp"></component>
    </keep-alive>

    <!-- L129. componentにv-modelを導入するとどうなるか-->
    <EventTitle v-model="eventData.title"></EventTitle>
    <label for="title">タイトル</label>
    <input id="title" type="text" v-model.lazy="eventData.title">
    <pre>{{eventData.title}}</pre>
    <!-- <EventTitle :value="eventData.title" @input="eventData.title = $event"></EventTitle> -->

    <Section10></Section10>
  </div>
</template>

<script>
  // import Section6 from '@/components/Section6.vue'
  // import Section7 from '@/components/Section7.vue'
  import Section8 from '@/components/Section8.vue'

  // L113. 動的コンポーネントについて
  import Home from '@/components/Section8Home.vue'
  import About from '@/components/Section8About.vue'

  // L129. 
  import EventTitle from "@/components/Section9EventTitle.vue";

  // L136. elプロパティの使い方
  import Section10 from "@/components/Section10.vue";

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
        number: 10,
        my_title: "nice_title",
        currentComp: "Home",
        eventData: {
          title: "ほげ"
        }
      }
    },
    components: {
      Section8,
      Home,
      About,
      EventTitle,
      Section10
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