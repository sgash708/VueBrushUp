<template>
  <div>
    <!-- L101. propsでは複数送れなかったのが、"HTML"をまとめて送信することができる -->
    <!-- L101. v-ifやv-forも使うことができる -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>