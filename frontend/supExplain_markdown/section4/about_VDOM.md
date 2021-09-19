# 仮想DOMについて
JSを模したオブジェクトのこと。
ブラウザの持っているDOMと仮想DOMは別物

```:vue
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

// 直接ブラウザのDOMにアクセスして要素を変更するのは処理が遅くなる
// WHY: 全ての要素を書き換えなくてはいけないから
// → 一部の変更したい要素だけを変えれば遅くならない
// → そのために仮想DOMを使う！！！
// → 実際の処理の流れはどうなるか
// → 変更時の効率化には、「変更したいDOM」と「前回のDOM」を比較して変更させる
// → [前提]として、「表示コスト」がかかるのでJSのObjectを作成して変更を容易にする。
// → ブラウザDOMは変更が大変だけど、自分のJSは変更が簡単ならそれを変更すべき！！！！
// → 以上のことから、VueJsは仮想DOMを使い効率化させる
var dir = document.createElement('div');
```