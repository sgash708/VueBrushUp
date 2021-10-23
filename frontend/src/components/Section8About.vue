<template>
  <div>
    <p>About</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    // L115. keep-alivenによってdestroyedは実行されなくなる
    destroyed() {
      // L114. destoryによってコンポーネントを削除して再作成しているのでコストがかかる
      console.log("destroyed")
    },
    created() {
      // L116. createdは一回は実行されるので注意すること。s
      console.log("created")
    },
    // L116. keep-aliveで状態保持した場合には、別のライフサイクルが適用される
    // なので、"deactivated"と"activated"を使うようにする。
    deactivated() {
      console.log("deactivated!!")
    },
    activated() {
      console.log("activated!!")
    }
  }
</script>