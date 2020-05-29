<template>
  <div>
    <button @click="counter += num">
      click me to increament
    </button>
    <p>
      {{ counter }}
    </p>

    <br />
    <br />
    <div v-for="post in posts" :key="post.title" :style="styleObject">
      post title: {{ post.title }}<br />
      post author: {{ post.author }}<br />
      post date: {{ post.date }}<br />
    </div>
    <button @click="$emit('largerText', 2)">
      change text larger size
    </button>

    <!-- 插槽 -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  props: ['num', 'posts', 'textSize'],
  data() {
    return {
      counter: 0,
      styleObject: {
        marginTop: '30px',
        fontSize: `${this.textSize}px`
      }
    }
  },
  watch: {
    textSize: function() {
      this.styleObject = {
        ...this.styleObject,
        fontSize: `${this.textSize}px`
      }
    }
  }
}
</script>

<style scoped></style>
