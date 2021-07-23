<template>
  <div>
    <p class="hello">{{ message }}</p>
    <p>{{ number }}</p>
    <!-- 下記のように判定文も記述可能 -->
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <button v-on:click="reverseMess">メッセージ反転</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello World!!',
      number: 1,
      ok: true
    }
  },
  methods: {
    reverseMess: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
