<!--
 * @Author: Jack
 * @Date: 2020-05-28 15:50:03
 * @LastEditors: Jack
 * @LastEditTime: 2020-05-28 16:15:26
 * @Description: 
-->
<template>
  <div class="about">
    <component :is="componentName"></component>
  </div>
</template>

<script>
import Hook from './Hook.vue'
import Template from './Template.vue'
import Computed from './Computed.vue'
export default {
  name: 'Kmmoonlight',
  components: {
    Hook,
    Template,
    Computed
  },
  data() {
    return {
      componentName: ''
    }
  },
  created: function() {
    console.log(this.$route.params.name)
    this.componentName = this.$route.params.name
  }
}
</script>
