<template>
  <div>
    <!-- L132. カスタムディレクティブを使って、コードを抽象化して再利用する -->
    <!-- → componentを使うより効率が良い -->
    <!-- L137. v-border="js式" になるので、「"'文字列'"」でmain.jsのVue.directive渡してあげる -->
    <!-- <p v-border="'100px'">Section10</p> -->

    <!-- L138. 複数値を渡すには、「object」にする -->
    <!-- <p v-border="{width: '10px', color: 'brown'}">Section10</p> -->

    <!-- L139. 引数を「v-カスタムディレクティブ:引数」のように渡すこともできる -->
    <!-- → dottedは、点線にするということ -->
    <!-- → [注意] 引数は1つしか取れない！！ -->
    <!-- <p v-border:dotted="{width: '10px', color: 'brown'}">Section10</p> -->

    <!-- L140. カスタムディレクティブの修飾子は続けられる -->
    <!-- → round.shadow -->
    <p v-border:solid.round.shadow="{width: '10px', color: 'brown'}">{{ tmpData }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tmpData: "hello"
      }
    },
    // L141. ローカルにカスタムディレクティブを登録することができる
    // [注意] あくまでも、このコンポーネント内でしか使えない！！
    directives: {
      border(el, binding) {
        // L142. カスタムディレクティブの中では、thisは使用することができない
        // this.tmpData = 'こんにちは';
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        el.style.borderStyle = binding.arg;

        if (binding.modifiers.round) {
          el.style.borderRadius = "0.5rem";
        }
        if (binding.modifiers.shadow) {
          el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
        }
      }
    }
  }
</script>