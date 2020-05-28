<template>
  <div>
    msg: {{ msg }}
    <div v-once>const value : {{ const_value }}</div>
    <div>raw string {{ html_value }}</div>
    <div v-html="html_value"></div>

    <div>js表达式 {{ 1 + 2 }}</div>
    <div>js表达式 {{ ok ? 'Hello' : 'World' }}</div>
    <div>js表达式 {{ msg.split(' ')[1] }}</div>

    <div v-if="show">you can see me ?</div>
    <div v-show="show">you can see me ?</div>

    <a v-bind:href="url">click me!</a>
    <div>
      <button v-on:click="increament">click add 1 to {{ num }}</button>
    </div>
    <!-- 缩写 -->
    <a :href="url">click me!</a>
    <div>
      <button @click="increament">click add 1 to {{ num }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template',
  data() {
    return {
      msg: 'Hello Vue',
      const_value: '这个值不会改变',
      html_value: '<strong>Hello World!</strong>',
      ok: true,
      show: false,
      url: 'https://www.baidu.com',
      num: 0
    }
  },
  methods: {
    increament: function() {
      this.num += 1
    }
  }
}
</script>

<style scoped>
.text_color {
  color: #ff0000;
}
</style>
