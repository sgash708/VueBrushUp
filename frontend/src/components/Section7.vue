<template>
  <div>
    <h1>いいね{{ halfNumber }}</h1>
  </div>
</template>

<script>
  export default {
    // L89. 子コンポーネントを受け取る
    // L90. キャメルケースで記述してケバブケースで出力する
    props: ['totalNumber'],
    computed: {
      halfNumber() {
        // L91. コンポーネント内でpropsを扱う場合は、this.totalNumberのようにアクセスする
        return this.totalNumber / 2
      }
    }
  }
</script>