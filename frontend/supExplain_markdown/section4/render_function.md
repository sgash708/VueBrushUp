# render関数について
vue.jsのコンポーネントは通常templateタグの中にhtml文を記述することでブラウザ上にコンテンツを表示させることができます。render関数はtemplateタグを利用することなしでtemplateタグと同様にhtml文をブラウザに表示させることができる関数です。
REF: https://reffect.co.jp/vue/vue-js-render

今回は、仮想DOMを作成(仮想Nodeを使用)して実際のDOMに反映させている。

```:vue
<!-- <p>こんにちは、hoge1</p>と表示される。 -->
<div id="app"></div>

<script>
    new Vue({
        data: {
            name: 'hoge1'
        }
        // createElementは「仮想DOM」
        // hとして表記することがある
        render: function (createElement) {
            // VDOMを使うために、VNode(仮想Node)を返している
            console.log()
            return createElement('p', 'こんにちは、' + this.name);
        }
    }).$mount('#app')
</script>

// 直接ブラウザのDOMにアクセスしている
var dir = document.createElement('div');
console.log(dir);
console.log(document);
// DOM(DocumentObjectModel)の要素一覧を表示できる
console.dir(document);
```