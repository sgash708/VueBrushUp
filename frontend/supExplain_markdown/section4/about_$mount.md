# 内側からVueインスタンスのプロパティやメソッドにアクセス

```:vue
// できること：instanceの複数作成
<div id="app">
    <p>{{ myData }}</p>
</div>

<script>
    var data = {
        name: 'ほげ'
    }
    var vm = new Vue({
        // vueインスタンスとして認識させるために必要
        // 「基本的には後からつけない！」けど後からつけることができる
        // el: '#app',
        data: data,
        computed: {
            myData: function() {
                return this.$data;
            }
        }
    })

    // elプロパティを、$mountで置き換えることもできる。
    vm.$mount('#app')
</script>
```