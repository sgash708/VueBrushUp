<template>
  <div>
    <label for="title">タイトル</label>
    <!-- $eventを受け取る時に、$emit(受け取り, )にする -->
    <input id="title" type="text" :value="value" @input="$emit('input', $event.target.value)">
    <pre>{{eventData.title}}</pre>
  </div>
</template>

<script>
  export default {
    props: ["value"]
  }
</script>