<template>
  <div>111111</div>
</template>

<script>
export default {
  name: 'Hook',
  data() {
    return {}
  },
  beforeCreate() {
    console.log('Do something before create')
  },
  created() {
    console.log('Do something after create')
  },
  beforeMount() {
    console.log('Do something before mount')
  },
  mounted() {
    console.log('Do something after mount')
  },
  beforeUpdate() {
    console.log('Do something before update')
  },
  updated() {
    console.log('Do something after update')
  },
  beforeDestroy() {
    console.log('Do something before destroy')
  },
  destroyed() {
    console.log('Do something after destroy')
  }
}
</script>

<style scoped></style>
