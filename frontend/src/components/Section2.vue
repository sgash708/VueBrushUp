<template>
  <div>
    <!-- templateはグループ化して条件分岐することができる -->
    <!-- ここにもv-ifディレクティブを使うことができる -->
    <template v-if="renderTemplate">
      <!-- v-elseはv-ifのすぐ下に来ないといけない -->
      <!-- v-else-ifでelseの間に挟むこと -->
      <p v-if="ok">OK!!</p>
      <p v-else-if="mayBeOk">MayBe OK!!</p>
      <p v-else>Not OK...</p>
    </template>
    <button @click="renderTemplate = !renderTemplate">反転</button>

    <!-- v-show：CSSベースで"display:none;"に変更させる -->
    <!-- → v-showはtemplateのように存在しないタグにはdisplay_noneを追加することができない -->
    <!-- → デメリット：v-showは一度HTMLとして読み込むため表示コストが嵩む -->

    <!-- v-if：完全にタグごと削除してくれる -->
    <!-- → デメリット：v-ifはHTMLを都度削除しているため「頻繁に行われる処理」(e.x 文字が多くなると処理速度)に影響する -->

    <!-- 使い分け -->
    <!-- → v-show：「頻繁にきりかわる場合」 -->
    <!-- → v-if：「実行時に条件が変わらない場合」 -->
    <p v-show="ok">v-showでの表示</p>
    <button @click="ok = !ok">ok要素の反転</button>

    <ul>
      <!-- v-for：「単数 in 配列」 -->
      <!-- v-for：「(単数, index) in 配列」 -->
      <!-- → 'of'としての使用可能「(単数, index) of 配列」 -->
      <li v-for="(fruit, index) in fruits">{{ index }}：{{ fruit }}</li>
    </ul>

    <ul>
      <!-- v-for：「(value, key, index) in 配列」 -->
      <li v-for="(v, k, index) in object">{{ index }}：{{ k }}：{{ v }}</li>
    </ul>

    <ul>
      <!-- hrタグも含めてループして描画したい場合は、templateタグを使うと便利 -->
      <template v-for="fruit in fruits">
        <li>{{ fruit }}</li>
        <hr>
      </template>
    </ul>

    <ul>
      <!-- 整数値を利用しても描画可能 -->
      <li v-for="n in 10">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    // REF: https://jp.vuejs.org/v2/guide/components.html#data-%E3%81%AF%E9%96%A2%E6%95%B0%E3%81%A7%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93
    data() {
      return {
        renderTemplate: true,
        ok: false,
        mayBeOk: true,
        fruits: ['banana', 'apple', 'lemon'],
        object: {
          lastName: 'hoge',
          firstName: 'taro',
          age: 21,
        }
      }
    }
  }
</script>