<template>
  <div>
    <div class="container">
      <div v-for="item in numArray" :key="item" class="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridLayout',
  data() {
    return {
      numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  /* grid-template-columns: 100px auto 100px; */
  /* grid-template-columns: 1fr 2fr minmax(100px, 1fr); */
  grid-template-rows: repeat(3, 100px);
  /* justify-items: center;
  align-items: center; */
  /* column-gap: 20px;
  row-gap: 20px; */
  grid-template-areas:
    'a b b'
    'c e e'
    'd f f';
}

.item {
  /* width: 100px;
  height: 100px; */
  /* background-color: blue;
  color: white; */
}
</style>
