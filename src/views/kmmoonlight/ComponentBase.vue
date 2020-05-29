<template>
  <div>
    <button-counter
      :num="2"
      :posts="posts"
      :textSize="textSize"
      v-on:largerText="largerText"
    >
      lalala! i am in slot position
    </button-counter>
  </div>
</template>

<script>
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'ComponentBase',
  components: {
    ButtonCounter
  },
  data() {
    return {
      textSize: 14,
      posts: [
        {
          title: 'lalala',
          author: 'A',
          date: '2017'
        },
        {
          title: 'hahaha',
          author: 'B',
          date: '2018'
        },
        {
          title: 'caocaocao',
          author: 'C',
          date: '2019'
        },
        {
          title: 'aaa',
          author: 'D',
          date: '2020'
        }
      ]
    }
  },
  methods: {
    largerText: function(addSize) {
      this.textSize += addSize
    }
  }
}
</script>

<style></style>
