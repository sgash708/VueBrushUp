<template>
  <div>
    <p>About</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    destroyed() {
      // L114. destoryによってコンポーネントを削除して再作成しているのでコストがかかる
      console.log("destroyed")
    },
    created() {
      console.log("created")
    }
  }
</script>