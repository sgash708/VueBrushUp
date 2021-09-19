# リアクティブシステムについて
VueJsはバニラjsではできないことをやっている。

Vueインスタンスは作成された時点でgetterとsetterを用意して要素の変更を行えるようにする。

# watcher
setterをトリガー(起点)として、ある関数を実行させる。

REF: ./reactive_element.png

```:vue
// できること：instanceの複数作成
<div id="app">
    <p>{{ message }}</p>
    <p>{{ name }}</p>
    <!-- 下記は、変更されない -->
    <button @click="name = 'ボタンに変更'">変更する</button>
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'インスタンス1'
        }
    })
    vm.message = '変更しました'
    // watcherに追加されていないので、"name"はgetter・setterが作成されない
    // あとから要素を変更することができない
    vm.name = 'ほげ'

</script>
```