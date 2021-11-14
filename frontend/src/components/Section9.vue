<template>
  <div>
    <h2>イベントのフォーム</h2>
    <!-- L119. 動的に値を書き換えることができる -->
    <!-- L120. ".lazy": focusが外れた時(changeイベント)で発火する -->
    <!-- → メールアドレスの入力バリデーションなどはUXのために使うことができる -->
    <label for="title">タイトル</label>
    <input id="title" type="text" v-model.lazy="eventData.title">
    <pre>{{eventData.title}}</pre>

    <!-- L121. ".number": カウントアップした時にstring型になってしまうのを防ぐ -->
    <label for="maxNumber">最大人数</label>
    <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
    <p>{{ typeof(eventData.maxNumber) }}</p>

    <!-- L122. ".trim": 入力値の前後の空白を削除する -->
    <label for="host">主催者</label>
    <input id="host" type="text" v-model.trim="eventData.host">
    <!-- L122. htmlは空白を認識しづらいのでpreタグで検証してみる -->
    <pre>{{ eventData.host }}</pre>

    <!-- L123. textareaで複数行の双方向バインディング -->
    <label for="detail">イベントの内容</label>
    <textarea name="detail" id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
    <pre>{{ eventData.detail }}</pre>
    <p style="white-space: pre;">{{ eventData.detail }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        eventData: {
          title: "ほげ",
          maxNumber: 0,
          host: "hoge",
          detail: "detail"
        }
      }
    }
  }
</script>