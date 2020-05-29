<template>
  <div>
    <div v-if="canSee">can you see me!</div>
    <div v-show="canSee">can you see me!</div>
    <div v-if="Math.random() > 0.5">Random see me!</div>
    <div v-else-if="Math.random() > 0.2">Random see me!</div>
    <div v-else>Random not see me!</div>

    <!-- 数组迭代  单value  /  value 和 index -->
    <div>
      <ul>
        <li v-for="item in items" :key="item">
          <!-- item of items 也可以 -->
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for="(item, index) in items" :key="item">
          {{ tipMessage }} - {{ item }} - {{ index }}
        </li>
      </ul>
    </div>

    <!-- 对象迭代 单value  value和key   value,key和index -->
    <div>
      <ul>
        <li v-for="item in personObject" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for="(value, key) in personObject" :key="key">
          {{ key }} - {{ value }}
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for="(value, key, index) in personObject" :key="key">
          {{ index }} - {{ key }} - {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Render',
  data() {
    return {
      canSee: false,
      items: ['A', 'B', 'C', 'D', 'E', 'F'],
      tipMessage: 'Hello World!',
      personObject: {
        name: 'lalala',
        age: 10,
        doing: 'eat'
      }
    }
  }
}
</script>

<style></style>
