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
    <p v-border:solid.round.shadow="{width: '10px', color: 'brown'}">Section10</p>
  </div>
</template>

<script>
</script>