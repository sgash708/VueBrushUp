<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | upperCase }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "welcome to tokyo",
        subTitle: "tokyo is a great city"
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
  }
</script>