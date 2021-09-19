# 内側からVueインスタンスのプロパティやメソッドにアクセス

```:vue
// できること：instanceの複数作成
<div id="app">
    <p>{{ myData }}</p>
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: data,
        computed: {
            myData: function() {
                return this.$data;
            }
        }
    })
</script>
```