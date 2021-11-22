<template>
  <div>
    <!-- L145. グローバルfilter -->
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | upperCase }}</h2>

    <!-- L146. ローカルfilter -->
    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>

    <!-- L147. 複数フィルタの適用 -->
    <!-- -> パイプで繋ぐことで、結果をさらに次に実行する。shellのsedと同じ -->
    <!-- <h2>{{ title | lowerCase | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase | upperCase }}</h2> -->

    <!-- L149. グローバルのupperCaseフィルタを、使用しているコンポーネントで再描画があった際 -->
    <!-- -> "フィルタ"という文字が複数回出力される -->
    <!-- -> [重要] 何度も再描画される際には、「使わない」 -->
    <!-- -> パフォーマンスを考えた際には、computedを使った方が良い -->
    <!-- -> 冗長を避けるにも注意。 -->
    <p>{{ number }}</p>
    <button @click="number++">+1</button>

    <p>{{ otherNums }}</p>
    <button @click="hogeInc">+1</button>
  </div>
</template>

<script>
  // L150. コードの共有しているので被っていない要素だけ変更すれば良い。
  import { sec11TokyoNumber } from '@/mixin/sec11TokyoNumber.js';

  export default {
    // L150. 不足要素だけ変更
    mixins: [sec11TokyoNumber],
    data() {
      return {
        otherNums: 1
      }
    },
    methods: {
      hogeInc() {
        this.otherNums++;
      }
    }

    // data() {
    //   return {
    //     title: "Welcome to tokyo",
    //     subTitle: "Tokyo is a great city",
    //     number: 0
    //   };
    // },
    // // L145. titleの大文字化だけでなく、subtitleの大文字化もしたい場合問題が生じる。
    // // -> 2つcomputedプロパティを記述する必要が出てくる。
    // // -> [注意] computedは引数を持たせられない。
    // // computed: {
    // //   upperCaseTitle() {
    // //     return this.title.toUpperCase();
    // //   },
    // //   // upperCaseSubTitle() {}
    // // }

    // // L146. コンポーネント内で定義することもできる
    // filters: {
    //   lowerCase(value) {
    //     // L148. [注意] filters内では、this.titleのようにできない
    //     // -> DIして使うこと。下記は不可能。
    //     // return this.title.toLowerCase();

    //     return value.toLowerCase();
    //   }
    // }
  }
</script>