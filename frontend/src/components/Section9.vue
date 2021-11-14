<template>
  <div>
    <!-- <div style="padding: 10rem;"> -->
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

    <!-- L124. 単体のチェックボックスにv-modelを突っ込んだ時はbooleannになる -->
    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>

    <!-- L125. 複数のチェックボックスは"配列"を使用する -->
    <p>参加条件</p>
    <input type="checkbox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>
    <pre>{{ eventData.target }}</pre>

    <!-- L126. チェックボックスのradioボタンの使い方 -->
    <p>参加費</p>
    <input type="radio" name="free" id="free" value="無料" v-model="eventData.price">
    <label for="free">無料</label>
    <input type="radio" name="free" id="paid" value="有料" v-model="eventData.price">
    <label for="paid">有料</label>
    <p>{{ eventData.price }}</p>

    <!-- L127. セレクトタグの双方向バインディング -->
    <p>開催場所</p>
    <!-- L127. 選択したoptionタグをv-modelとして受け取る -->
    <!-- → "multiple" によって複数選択可能 -->
    <!-- → shift押しながらなど -->
    <select v-model="eventData.location" multiple>
      <!-- L127. v-forによって繰り返し出力 -->
      <option v-for="location in locations" :key="location">{{ location }}</option>
    </select>
    <p>{{ eventData.location }}</p>
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
          detail: "detail",
          // L124. 単体チェックボックスはboolean
          isPrivate: false,
          // L125. 複数チェック沒k巣は配列にする
          target: [],
          price: "無料",
          location: "東京"
          // 複数選択時には、配列として受け取る前提で宣言すること
          // location: []
        },
        locations: ["東京", "大阪", "名古屋"]
      }
    }
  }
</script>