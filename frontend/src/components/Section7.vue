<template>
  <div>
    <h1>いいね{{ number / 2 }}</h1>
  </div>
</template>

<script>
  export default {
    // L89. 子コンポーネントを受け取る
    props: ['number']
  }
</script>