<template>
  <div>
    <!-- L101. propsでは複数送れなかったのが、"HTML"をまとめて送信することができる -->
    <!-- L101. v-ifやv-forも使うことができる -->
    <!-- L103. SLOTが空だった場合に描画される。これをフォールバックコンテンツと呼ぶ。 -->
    <!-- <slot>
      <h1>こんにちは</h1>
    </slot> -->
    <!-- L102. スコープの概念について、親コンポーネントは子コンポーネントにアクセスはできない。 -->
    <!-- <h1>{{ headerText }}</h1> -->

    <!-- L104. slotは複数配置することができる -->
    <hr>
    <p>いいねの数</p>
    <!-- L104. slotの受け取りかたは、name="引数"とする -->
    <!-- L104. 複数の出力箇所を受け取ることで複雑なものにも対応できる -->
    <slot name="title"></slot>
    <slot name="number"></slot>

    <hr>
    <!-- L105. デフォルトスロットは、名前付きslotを除いて"新しい名前付きスロット"を作成します。 -->
    <!-- → <slot name="default"></slot> も同じ意味になる -->
    <slot></slot>

    <hr>
    <!-- L107. slotPropertyを使うことで子コンポーネントにアクセスできる。 -->
    <!-- → 使い方： <slot name="親コンポーネントのv-slotの名前(sl)" :定義したい名前="dataプロパティの何か"></slot> -->
    <slot name="sl" :user="user"></slot>
  </div>
</template>

<script>
  export default {
    // props: {
    //   headerText: {
    //     type: String,
    //     default: null
    //   }
    // },
    data() {
      return {
        user: {
          firstName: "Jack",
          lastName: "nico"
        }
      }
    }
  }
</script>

<style scoped>
  /* L102. CSSは共有されるが、親コンポーネントを優先する */
  h1 {
    color: red;
  }
</style>