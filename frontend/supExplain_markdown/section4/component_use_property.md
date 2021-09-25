# コンポーネントを用いてインスタンスをつかいまわす

```:vue
<!-- 複数個は出力できない -->
<!-- 使い回すには、componentを使う -->
<!-- <div class="hello"></div> -->
<!-- <div class="hello"></div> -->

<!-- 複数呼び出しが可能になる -->
<hello></hello>
<hello></hello>
<hello></hello>
<hello></hello>

<script>
    // 引数1：'名前'
    // 引数2：要素オブジェクト
    // componentは、インスタンスとの棲み分けのため記述が違う点がある(e.g. dataは関数にしないといけないなど)
    Vue.component('hello', {
        template: '<p>こんにちは</p>'
    });
</script>
```