<template>
  <div>
    <p class="hello">{{ message }}</p>
    <p>{{ number }}</p>
    <!-- 下記のように判定文も記述可能 -->
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <!-- 関数呼び出しもできる -->
    <p>{{ sayHi() }}</p>
    <p>{{ useThisMethod() }}</p>
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
    reverseMess () {
      this.message = this.message.split('').reverse().join('')
    },
    sayHi () {
      return 'Hi'
    },
    useThisMethod () {
      return this.message
    }
  }
}
</script>
