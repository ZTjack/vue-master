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
import Style from './Style.vue'
import Render from './Render.vue'
import Event from './Event.vue'
import FormBind from './FormBind.vue'
import ComponentBase from './ComponentBase.vue'
import Demo from './Demo.vue'

export default {
  name: 'Kmmoonlight',
  components: {
    Hook,
    Template,
    Computed,
    Style,
    Render,
    Event,
    FormBind,
    ComponentBase,
    Demo
  },
  data() {
    return {
      componentName: ''
    }
  },
  created: function() {
    this.componentName = this.$route.params.name
  }
}
</script>
