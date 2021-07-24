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
    <!-- v-once：上書きされているのでHelloWorld!!は表示されない -->
    <a v-once v-text="message"></a>

    <!-- v-html：htmlのレンダリング -->
    <!-- 信頼あるコンテンツ(内部サービスなど)に使用する -->
    <div v-html="h1Tex"></div>

    <!-- v-bind：省略して「:href」とすることもできる -->
    <a v-bind:href="googleURL">google</a>
    <a :href="googleURL">google</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello World!!',
      number: 1,
      ok: true,
      h1Tex: '<h1>こんにちは</h1>',
      googleURL: 'https://www.google.com'
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
