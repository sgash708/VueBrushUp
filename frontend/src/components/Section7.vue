<template>
  <div>
    <h1>いいね{{ halfNumber }}</h1>
    <h1>複数個のProps：{{ testProps }}</h1>
    <button @click='increment()'>+1</button>
  </div>
</template>

<script>
  export default {
    // L89. 子コンポーネントを配列受け取る
    // L90. キャメルケースで記述してケバブケースで出力する
    // L93. 複数個記述する場合は配列に要素を追加する
    // props: ['totalNumber', "testProps"],

    /*
      L92. propsは、オブジェクトでも受け取れる。
          親コンポーネントから受け取るときには、型などを記述することができる
    */
    /*
      L96. propsは、配列とオブジェクトは参照渡しをしている
        一つのメモリを共有しているので、親と子が同じリソースを使っているということ
        なので$emitを使って親ごと変化させる。
    */
    props: {
      totalNumber: {
        type: Number,
        // L92. 要素必須
        // required: true,
        // L92. requiredと共存できないのでデフォルト値を書くときには注意する
        default: 10
      },
      testProps: {
        type: String,
        default: "hoge"
      }
    },
    computed: {
      halfNumber() {
        // L91. コンポーネント内でpropsを扱う場合は、this.totalNumberのようにアクセスする
        return this.totalNumber / 2
      }
    },
    methods: {
      // L94. $emitを使って親コンポーネントに渡す
      // $emitはカスタムイベントを作り親コンポーネントを発火させる
      increment() {
        /*
          L95. 子は親のデータは書き換えられない！
          だから、this.totalNumber++みたいな記述はできない！
        */
        this.$emit("my-click", this.totalNumber + 1)
      }
    }
  }
</script>