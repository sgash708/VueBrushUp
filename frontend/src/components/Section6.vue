<template>
  <p>{{number}}</p>
</template>

<script>
  export default {
    // L75. componentでは、"data"は関数として使用する
    data() {
      return {
        number: 12
      }
    }
  }
</script>