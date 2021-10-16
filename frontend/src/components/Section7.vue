<template>
  <div>
    <h1>いいね{{ totalNumber / 2 }}</h1>
  </div>
</template>

<script>
  export default {
    // L89. 子コンポーネントを受け取る
    // L90. キャメルケースで記述してケバブケースで出力する
    props: ['totalNumber']
  }
</script>