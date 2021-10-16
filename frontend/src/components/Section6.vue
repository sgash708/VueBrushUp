<template>
  <div>
    <p>{{number}}<button @click='increment()'>+1</button></p>
    <p>{{number}}<button @click='increment()'>+1</button></p>
    <p>{{number}}<button @click='increment()'>+1</button></p>
  </div>
</template>

<script>
  export default {
    // L75. componentでは、"data"は関数として使用する
    /*
     * L76. dataは初期値を入れる場所
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