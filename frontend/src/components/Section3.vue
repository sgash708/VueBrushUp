<template>
  <div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        renderTemplate: true,
        ok: false,　
        mayBeOk: true,
        fruits: ['banana', 'apple', 'lemon'],
        // objectは連想配列のように使える
        object: {
          lastName: 'hoge',
          firstName: 'taro',
          age: 21,
        }
      }
    },
    methods: {
    }
  }
</script>