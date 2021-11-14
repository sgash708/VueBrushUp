<template>
  <div>
    <h2>イベントのフォーム</h2>
    <!-- L119. 動的に値を書き換えることができる -->
    <!-- L120. ".lazy": focusが外れた時(changeイベント)で発火する -->
    <!-- → メールアドレスの入力バリデーションなどはUXのために使うことができる -->
    <label for="title">タイトル</label>
    <input id="title" type="text" v-model.lazy="eventData.title">
    <p>{{eventData.title}}</p>

    <!-- L121. ".number": カウントアップした時にstring型になってしまうのを防ぐ -->
    <label for="maxNumber">最大人数</label>
    <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
    <p>{{ typeof(eventData.maxNumber) }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        eventData: {
          title: "ほげ",
          maxNumber: 0,
        }
      }
    }
  }
</script>
