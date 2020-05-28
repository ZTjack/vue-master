<template>
  <div>
    <p>Original Message {{ message }}</p>
    <p>Reverse Message {{ reverseMessage }}</p>

    <p>input value1: <input v-model="value1" type="text" /></p>
    <p>input value2: <input v-model="value2" type="text" /></p>
    <p>input options: <input v-model="option" type="text" /></p>
    <p>result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  name: 'Computed',
  data() {
    return {
      message: 'Hello',
      value1: 1,
      value2: 2,
      option: '+',
      result: 3
    }
  },
  methods: {
    calc: function() {
      switch (this.option) {
        case '+':
          this.result = this.value1 + this.value2
          break

        case '-':
          this.result = this.value1 - this.value2
          break

        case '*':
          this.result = this.value1 * this.value2
          break

        case '/':
          this.result = this.value1 / this.value2
          break
      }
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  watch: {
    option: function() {
      this.calc()
    },
    value1: function() {
      this.calc()
    },
    value2: function() {
      this.calc()
    }
  }
}
</script>

<style></style>
