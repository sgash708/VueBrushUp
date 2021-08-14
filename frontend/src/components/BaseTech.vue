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
    <!-- v-once：上書きされているのでBaseTech!!は表示されない -->
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

    <!-- v-onの引数に "[]" を使って動的に表現する -->
    <!-- propertyにclickが割り当ててあるので修正 -->
    <button v-on:[event]="addCount(1)">カウントアップ</button>
    <!-- "v-on" or "@ディレクティブ" を使うかは統一をしたほうが良い -->
    <button @click="addCount(1)">カウントアップ</button>

    <!-- v-model：双方向データバインディングが可能になる -->
    <input type="text" v-model="message">
    <h1>{{ message }}</h1>

    <!-- computedプロパティ：動的な表現が可能 -->
    <button @click="number += 1">+1</button>
    <!-- <p>{{ number > 3 ? '3以上' : '3以下' }}</p> -->
    <p>{{ lessThanThree }}</p>
    <!-- 別の要素が変更されても再読み込みされる -->
    <!-- 実際にはcomputedを使うこと！！ -->
    <!-- <p>{{ lessThanThreeMethod() }}</p> -->

    <!-- methodとcomputedの違いの表現 -->
    <p>{{ otherCount }}</p>
    <button @click="otherCount += 1">別のカウンター</button>

    <!-- 丸括弧の表現の違いについて -->
    <!-- v-onディレクティブは丸括弧が "あってもなくても良い" -->
    <!-- ""内では、インラインメソッドとしてjsの式として評価されるため -->
    <button @click="countUp()">+1メソッド</button>
    <!-- computedは丸括弧を "付けない！" -->
    <p>{{ doubleComputed }}</p>
    <!-- methodは丸括弧を "必須！" -->
    <p>{{ doubleMethod() }}</p>

    <!-- v-bind：クラスにデータを紐づける -->
    <!-- ":"で省略することもできる！また、ケバブケース('bg-blue')の場合シングルクォートで括る -->
    <!-- 否定文なら"!"で表現 -->
    <h1 :class="classObject">Hello</h1>
    <button @click="changeActiveBgBlue">切り替え</button>

    <!-- 別のバインディング方法 -->
    <!-- 赤色だけは動的にしたい場合 -->
    <h1 :class="[{ red: isActive }, bg]">Hello</h1>
  </div>
</template>

<script>
export default {
  name: 'BaseTech',
  // "data" は初期値を入れるところ
  // 静的につかう
  data () {
    return {
      message: 'Hello World!!',
      number: 0,
      counter: 0,
      isActive: true,
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
      y: 0,
      event: 'click',
      // アンチパターン
      // lessThanThree: this.number > 3 ? '3以上' : '3以下'

      // 処理の違いについての表現
      otherCount: 0,
      color: 'red',
      bg: 'bg-blue'
    }
  },
  // computedは動的なプロパティのように扱う
  // 呼び出しは、"{{ lessThanThree }}" のように使用する
  // 参照している要素が変更された場合には呼び出される
  computed: {
    lessThanThree: function () {
      return this.number > 3 ? '3以上' : '3以下'
    },
    doubleComputed: function () {
      return this.counter * 2
    },
    classObject: function () {
      return {
        // data要素はjs内ではthisをつけてアクセスする
        red: this.isActive,
        'bg-blue': !this.isActive
      }
    }
  },
  // watch：データが変わった時(非同期処理)に使う
  watch: {
    number: function () {
      var vm = this
      // 非同期処理を使う際には、関数内部でthisが使えないのでvarで置き換える
      setTimeout(function () {
        vm.number = 0
      }, 3000)
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
    },
    // methodは、動的プロパティと同じ振る舞い
    // しかし、 {{  }} で呼び出し際には要素が変わるたびにメソッドをcallしていなくても実行される
    // キャッシュを持たないためページレンダリングに影響が出る
    // lessThanThreeMethod: function () {
    //   return this.number > 3 ? '3以上' : '3以下'
    // }
    countUp: function () {
      this.counter += 1
    },
    doubleMethod: function () {
      return this.counter * 2
    },
    changeActiveBgBlue: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>
