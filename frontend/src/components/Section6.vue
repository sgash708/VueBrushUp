<template>
  <div>
    <p>{{number}}<button @click='increment()'>+1</button></p>
    <p>{{number}}<button @click='increment()'>+1</button></p>
  </div>
</template>

<script>
  // L77. グローバル登録
  export default {
    /*
     * L75. componentでは、"data"は関数として使用する
     * L76. dataは初期値を入れる場所
     * L79. Babelを使用しているので、ES6の書き方もできる。
     * e.g.) <ES6> data()
     * e.g.) <ES5> data: function () {}
     * どちらでも同じ！
     */
    data() {
      return {
        number: 12
      }
    },
    methods: {
      increment() {
        this.number++
      }
    }
  }
</script>