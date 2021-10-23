<template>
  <div>
    <!-- L101. propsでは複数送れなかったのが、"HTML"をまとめて送信することができる -->
    <!-- L101. v-ifやv-forも使うことができる -->
    <slot></slot>
    <!-- L102. スコープの概念について、親コンポーネントは子コンポーネントにアクセスはできない。 -->
    <h1>{{ headerText }}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      headerText: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped>
  /* L102. CSSは共有されるが、親コンポーネントを優先する */
  h1 {
    color: red;
  }
</style>