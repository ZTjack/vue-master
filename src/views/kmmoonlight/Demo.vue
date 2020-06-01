<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <h2>Socks</h2>
    <p>In Stock</p>
    <p>Shipping: {{ shipping }}</p>
    <div style="width: 200px">
      <ul>
        <li v-for="item in attrs" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div>
      <img :src="nowImage" alt="none" style="width:200px" />
    </div>

    <div style="display:flex; flex-direction: row; justify-content: center">
      <div
        style="width: 50px; height: 50px; background-color: green"
        @mouseenter="changeSocksType('green')"
      ></div>
      <div
        style="width: 50px; height: 50px; background-color: blue; margin-left: 10px"
        @mouseenter="changeSocksType('blue')"
      ></div>
    </div>

    <div style="margin-top: 30px">Shopping Cart: ({{ cartCounter }})</div>
    <button
      style="margin-top: 30px; background-color:blue; color: white; width: 100px; height: 30px"
      @click="addToCart"
    >
      Add To Cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      shipping: 'Free',
      attrs: ['80% cotton', '20% polyester', 'Gender-neutral'],
      nowColor: 'green',
      imageArray: [
        require('../../assets/green-socks.png'),
        require('../../assets/blue-socks.png')
      ],
      cartCounter: 0
    }
  },
  methods: {
    changeSocksType: function(color) {
      this.nowColor = color
    },
    addToCart: function() {
      this.cartCounter++
    }
  },
  computed: {
    nowImage: function() {
      return this.imageArray[this.nowColor === 'green' ? 0 : 1]
    }
  }
}
</script>

<style></style>
