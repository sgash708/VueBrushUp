# Vueインスタンスについて
独立したアプリケーションの場合は、下記のような使い方もできる

```:vue
// できること：instanceの複数作成
<div id="app1">
    <p>{{ message }}</p>
</div>

<div id="app2">
    <p>{{ message }}</p>
</div>

<script>
    new Vue({
        el: '#app1',
        data: {
            message: 'インスタンス1'
        }
    })

    new Vue({
        el: '#app2',
        data: {
            message: 'インスタンス2'
        }
    })
</script>
```