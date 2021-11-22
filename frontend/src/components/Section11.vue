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
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase | upperCase }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Welcome to tokyo",
        subTitle: "Tokyo is a great city"
      };
    },
    // L145. titleの大文字化だけでなく、subtitleの大文字化もしたい場合問題が生じる。
    // -> 2つcomputedプロパティを記述する必要が出てくる。
    // -> [注意] computedは引数を持たせられない。
    // computed: {
    //   upperCaseTitle() {
    //     return this.title.toUpperCase();
    //   },
    //   // upperCaseSubTitle() {}
    // }

    // L146. コンポーネント内で定義することもできる
    filters: {
      lowerCase(value) {
        return value.toLowerCase();
      }
    }
  }
</script>