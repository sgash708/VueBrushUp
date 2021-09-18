<template>
  <div>
    <p v-if="ok">Boolean</p>
  </div>
</template>

<script>
  export default {
    // REF: https://jp.vuejs.org/v2/guide/components.html#data-%E3%81%AF%E9%96%A2%E6%95%B0%E3%81%A7%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93
    data() {
      return {
        ok: false
      }
    }
  }
</script>