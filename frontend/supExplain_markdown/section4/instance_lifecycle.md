# Vueインスタンスライフサイクルについて
Vueインスタンスを作成した際に起動される関数や流れなどの理解をする。

```
new Vue()
↓
beforeCreate()
↓
インスタンス作成
↓
created()
↓
elプロパティが存在しているか？
(No) → vm.$mount()が呼ばれた時 ↓ 
(Yes) → templateをrender関数にコンパイル 
↓
render関数が作成される前！
仮想DOMを作成する前の関数
beforeMount()
↓
$elを作成して実際のDOMに追加する
仮想Nodeを仮想DOMにして、実際のDOMに変更する
↓
mounted() <-----------|
実際にマウントする       |
↓                     |
データが変わった       　|
↓                     |
beforeUpdate()        |
↓                     |
DOMを再描画            |
updated() ------------|

↓
beforeDestroy()
↓
destroyed()

```