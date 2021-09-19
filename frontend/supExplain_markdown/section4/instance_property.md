# インスタンスプロパティについて

```:vue
// できること：instanceの複数作成
<div id="app">
    <p>{{ message }}</p>
    <p>{{ name }}</p>
    <!-- 下記は、変更されない -->
    <button @click="name = 'ボタンに変更'">変更する</button>
</div>

<script>
    // ラッピングすることもできてVueインスタンスないで再使用することができる
    var data = {
        message: 'こんにちは',
        name: 'ほげ'
    }

    var vm = new Vue({
        el: '#app',
        data: {
            data: data
        }
    })
    // ユーザ定義の変数と区別するために、"$変数"で展開させる
    console.log(vm.$data);

    // このように一致していることを確認することができる
    console.log(data === v.$data); // true
</script>
```