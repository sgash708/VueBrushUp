<template>
  <div>
    <h1>いいね{{ halfNumber }}</h1>
  </div>
</template>

<script>
  export default {
    // L89. 子コンポーネントを配列受け取る
    // L90. キャメルケースで記述してケバブケースで出力する
    // props: ['totalNumber'],

    /*
      L92. propsは、オブジェクトでも受け取れる。
          親コンポーネントから受け取るときには、型などを記述することができる
    */ 
    props: {
      totalNumber: {
        type: Number,
        // L92. 要素必須
        // required: true,
        // L92. requiredと共存できないのでデフォルト値を書くときには注意する
        default: 10
      }
    },
    computed: {
      halfNumber() {
        // L91. コンポーネント内でpropsを扱う場合は、this.totalNumberのようにアクセスする
        return this.totalNumber / 2
      }
    }
  }
</script>