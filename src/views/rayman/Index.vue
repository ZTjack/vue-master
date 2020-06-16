<!--
 * @Author: Jack
 * @Date: 2020-05-28 15:50:01
 * @LastEditors: Jack
 * @LastEditTime: 2020-05-28 16:15:16
 * @Description: 
-->
<template>
  <div class="about">
    <component :is="componentName" />
  </div>
</template>

<script>
import FundsTransfer from './FundsTransfer'
import Lesson1 from './Lesson1'
import Lesson2 from './Lesson2'
import Lesson3 from './Lesson3'
import Lesson4 from './Lesson4'

export default {
  name: 'Rayman',
  components: {
    FundsTransfer,
    Lesson1,
    Lesson2,
    Lesson3,
    Lesson4
  },
  data() {
    return {
      componentName: ''
    }
  },
  created() {
    this.componentName = this.$route.params.name
  }
}
</script>
