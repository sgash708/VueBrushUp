<template>
  <div>
    <h2>イベントのフォーム</h2>
    <label for="title">タイトル</label>

    <!-- L119. 動的に値を書き換えることができる -->
    <!-- L120. ".lazy": focusが外れた時(changeイベント)で発火する -->
    <!-- → メールアドレスの入力バリデーションなどはUXのために使うことができる -->
    <input id="title" type="text" v-model.lazy="eventData.title">
    <p>{{eventData.title}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        eventData: {
          title: "ほげ",
          text: "hogetext"
        }
      }
    }
  }
</script>
