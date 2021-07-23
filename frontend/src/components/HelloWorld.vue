<template>
  <div>
    <p class="hello">{{ message }}</p>
    <button v-on:click="reverseMess">メッセージ反転</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello World!!'
    }
  },
  methods: {
    reverseMess: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
