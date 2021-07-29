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
    <a :href="googleURL">Google</a>

    <!-- :[プロパティ]="プロパティ"のような記述もできる -->
    <a :[attribute]="twitterURL">Twitter</a>

    <!-- v-bindのオブジェクト形式で表記 -->
    <!-- これだと冗長記述 -->
    <a v-bind="{href: twitterURL, id: number}">Twitter</a>

    <!-- L28を、さらにDRY -->
    <a v-bind="twitterObject">Twitter</a>
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
      attribute: 'href',
      googleURL: 'https://www.google.com',
      twitterURL: 'https://twitter.com',
      twitterObject: {
        href: 'https://twitter.com',
        id: 1
      }
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
