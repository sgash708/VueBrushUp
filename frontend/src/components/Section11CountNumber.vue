<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | upperCase }}</h2>

    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>
  </div>
</template>

<script>
  // L150. コンポーネント間で、コードを共有することができる
  import { sec11TokyoNumber } from '@/sec11TokyoNumber.js';

  export default {
    mixins: [sec11TokyoNumber]
  }
</script>