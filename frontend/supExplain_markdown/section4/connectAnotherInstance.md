# Vueインスタンスについて
独立したアプリケーションの場合は、下記のような使い方もできる

```:vue
// できること：instanceの複数作成
<div id="app1">
    <p>{{ message }}</p>
</div>

<div id="app2">
    <p>{{ message }}</p>
    <button @click="changeMes1">インスタンス1のmessageを変更</button>
</div>

<script>
    /* 外部アクセスするには、
    * 「インスタンスの変数化」(e.g. vm1など)して、代入して扱うこと
    */
    var vm1 = new Vue({
        el: '#app1',
        data: {
            message: 'インスタンス1'
        }
    })

    var vm2 = new Vue({
        el: '#app2',
        data: {
            message: 'インスタンス2'
        }
        methods: {
            chnageMes1: function () {
                vm1.message = 'インスタンス2から変えました。'
            }
        }
    })
</script>
```