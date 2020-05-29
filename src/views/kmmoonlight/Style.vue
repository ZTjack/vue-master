<template>
  <div>
    <div :class="{ bg: hasBg, error: hasError }">
      Hello World!
    </div>

    <div :class="classObject">
      Hello Vue!
    </div>

    <div :class="styleObject">
      Hello Javascript!
    </div>

    <div :class="[bgClass, errorClass]">
      Hello TypeScript!
    </div>

    <div :class="[hasBg ? bgClass : '', errorClass]">
      Hello CSS!
    </div>

    <div :class="[{ bgClass: hasBg }, errorClass]">
      Hello HTML!
    </div>

    <div :style="style_object">
      Hello Java!
    </div>
  </div>
</template>

<script>
export default {
  name: 'Style',
  data() {
    return {
      hasBg: true,
      hasError: true,
      classObject: {
        bg: false,
        error: true
      },
      bgClass: 'bg',
      errorClass: 'error',
      style_object: {
        fontWight: 'bold',
        color: '#F00'
      }
    }
  },
  computed: {
    styleObject: function() {
      return {
        bg: this.classObject.bg && this.classObject.error,
        error: this.classObject.bg || this.classObject.error
      }
    }
  }
}
</script>

<style>
.bg {
  color: #f00;
}

.error {
  font-style: italic;
}
</style>
