# インスタンスプロパティについて

```:vue
<div id="app1">
    <p>{{ name }}</p>
</div>

<div id="app2"></div>

<script>
    new Vue({
        el: '#app1',
        data: {
            name: 'hoge1'
        }
    })

    // vm.$mountを省略して"new Vue({}).$mount('#app2')"とすることもできる
    new Vue({
        data: {
            name: 'hoge2'
        }
        // templateプロパティでタグ展開するものを入れられる
        template: '<p>{{ name }}</p>'
    }).$mount('#app2')
</script>
```