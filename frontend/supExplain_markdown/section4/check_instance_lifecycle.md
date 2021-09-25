# ライフサイクルフックのタイミングについて

```:vue
// できること：instanceの複数作成
<div id="app">
    <h1>こんにちは、{{name}}</h1>
    <!-- 2回目以降は仮想DOMに変更がないためbeforeUpdateとupdatedはコールされない -->
    <button @click="name = '太郎'">名前を変更</button>
    <button @click="destroy">インスタンスを破壊</button>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            name: 'hoge'
        },
        beforeCreate: function () {
            console.log('beforeCreate');
        },
        created: function () {
            console.log('created');
        },
        beforeMount: function () {
            console.log('beforeMount');
        },
        mounted: function () {
            console.log('mounted');
        },
        beforeUpdate: function () {
            console.log('beforeUpdate');
        },
        updated: function () {
            console.log('updated');
        },
        beforeDestroy: function () {
            console.log('beforeDestroy');
        },
        destroyed: function () {
            console.log('destroyed');
        },
        methods: {
            destroy: function () {
                // インスタンスの破壊
                // 一度破壊してしまうと表示はされているが、要素の変更等ができなくなる
                this.destroy();
            }
        }
    })
</script>
```