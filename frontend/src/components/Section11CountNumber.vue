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
  import { sec11TokyoNumber } from '@/mixin/sec11TokyoNumber.js';

  /** L152. [重要] 優先度
   * data     : components -> mixin
   * lifecycle: mixin      -> components
  */
  export default {
    mixins: [sec11TokyoNumber],
    data() {
      return {
        // L152. [重要] mixin要素が被った際には、コンポーネントが優先される。
        title: 'Welcome to newyork',
      }
    },
    // L152. [注意] createdの優先度は、"mixin.craeted()" -> "component.created()" となる
    // -> ライフサイクルは、mixinが優先
    created() {
      console.log('created in component');
    }
  }
</script>