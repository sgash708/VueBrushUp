<template>
  <div>
    <!-- 関数が実行される前のプロパティを参照する -->
    <p v-once>{{ message }}</p>
    <p>{{ number }}</p>
    <button v-on:click="reverseMess">メッセージ反転</button>

    <!-- 下記のように判定文も記述可能 -->
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <!-- 関数呼び出しもできる -->
    <p>{{ sayHi() }}</p>
    <p>{{ useThisMethod() }}</p>

    <!-- ディレクティブ(v-〇〇)(ex. v-text) -->
    <!-- v-onceは、上書きされているのでHelloWorld!!は表示されない -->
    <a v-once v-text="message"></a>
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
      this.message = 'Hello Vue.js!!'
      return 'Hi'
    },
    useThisMethod () {
      return this.message
    }
  }
}
</script>
