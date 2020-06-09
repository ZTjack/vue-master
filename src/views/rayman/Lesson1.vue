<!--
 * @Author: Jack
 * @Date: 2020-05-28 16:03:54
 * @LastEditors: Jack
 * @LastEditTime: 2020-05-28 16:19:22
 * @Description: 
-->
<template>
  <div class="app">
  <div class="selectstyle" @click="showList">{{title}}</div>
    <div class="listRoot">
          <transition-group>
                <li 
                v-show="isShowOrHideList" 
                @click="select(index)" 
                :class="['liststyle', currentindex==index?'active':'liststyle']" 
                v-for="(item,index) in datas"
                @mouseenter="showCurrentBg(index)" 
                @mouseleave="showCurrentBg(-1)" :key="index">
                      {{item.name}}
                </li>
          </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lesson1',
  data() {
    return {
      title: '点击选择',
      currentindex: -1,
      isShowOrHideList: false,
      datas: [
        {name:'选择1'},
        {name:'选择2'},
        {name:'选择3'},
        {name:'选择4'},
        {name:'选择5'},
        {name:'选择6'},
        {name:'选择7'},
      ]
    }
  },
  methods: {
    showList: function() {
        this.isShowOrHideList = !this.isShowOrHideList
    },
    showCurrentBg: function(index) {
      this.currentindex = index
    },
    select(index) {
      this.isShowOrHideList = false,
      this.title = this.datas[index].name
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  .selectstyle {
    display: flex;
    margin: 0 auto;
    width: 200px;
    padding: 9px;
    background: #e3e3e3;
    justify-content: center;
  }
  .listRoot {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .liststyle {
    list-style-type: none;
    padding: 10px;
    width: 200px;
    text-align: center;
    background: #ffeecc;
  }
  .active {
    background: red;
  }
  .list-enter-active, .list-leave-active {
    transition: opacity 1s ease;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>
