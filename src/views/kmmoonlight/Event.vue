<template>
  <div>
    <button @click="doIncrement">
      click me to increament
    </button>
    <br />
    <button @click="doIncrement2(2)">
      click me to increament number
    </button>

    <div>
      {{ counter }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    doIncrement: function() {
      this.counter++
    },
    doIncrement2: function(num) {
      this.counter += num
    }
  }
}
</script>

<style></style>
