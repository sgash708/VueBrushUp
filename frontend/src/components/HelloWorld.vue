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

    <!-- v-on：マウス処理を追加できる-->
    <p>現在{{ number }}回クリックされています</p>
    <button v-on:click="addCount(2)">カウントアップ</button>

    <!-- $event とすることでeventオブジェクトを取得できる -->
    <p v-on:mousemove="changeMousePosition(3, $event)">
      マウスを、のせてください
      <span v-on:mousemove.stop>
        <!-- stopイベントで親処理を発火させない -->
        反応しないでください
      </span>
    </p>
    <p>マウス座標</p>
    <p>X:{{ x }}, Y:{{ y }}</p>
    <!-- preventでタグの処理をさせない(クリックさせないetc) -->
    <a v-on:click.prevent href="https://google.com">Google</a>
    <!-- v-on:key-up キーを離した瞬間に発火させる -->
    <!-- "keyup.space" "keyup.enter" などがある -->
    <input type="text" v-on:keyup.enter="myAlert">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello World!!',
      number: 0,
      ok: true,
      h1Tex: '<h1>こんにちは</h1>',
      attribute: 'href',
      googleURL: 'https://www.google.com',
      twitterURL: 'https://twitter.com',
      twitterObject: {
        href: 'https://twitter.com',
        id: 1
      },
      x: 0,
      y: 0
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
    },
    // closureにしたほうが()記述なし
    // 上記は、引数がない場合に限る
    addCount: function (times) {
      this.number += 1 * times
    },
    // 変数名は、eventじゃなくても問題ないけど「基本的に」eventを使う
    changeMousePosition: function (divNum, event) {
      this.x = event.clientX / divNum
      this.y = event.clientY / divNum
    },
    // 代用："v-on:mousemove.stop"
    // noEvent: function (event) {
    //   event.stopPropagation()
    // },
    // 代用："v-on:click.prevent"
    // noClick: function(event) {
    //   event.preventDefault
    // }
    myAlert: function () {
      alert('アラート!')
    }
  }
}
</script>
