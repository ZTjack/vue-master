<!--
 * @Author: Rayman
 * @Description: 资金划转控件
-->
<template>
<div class="app">
    
    <div class="searchView">
        <div class="selectstyle" @click="showList">{{title}}</div>

        <div class="listRoot">
            <transition-group>
                    <li 
                    v-show="isShowOrHideList" 
                    @click="select(index)" 
                    :class="['liststyle', currentindex==index?'active':'liststyle']" 
                    v-for="(item,index) in datalist"
                    @mouseenter="showCurrentBg(index)" 
                    @mouseleave="showCurrentBg(-1)" :key="index">
                        {{item.name}}
                        <div class="arrow" v-show="item.subArr.length > 0">></div>
                    </li>
            </transition-group>
        </div>

        <div class="list-and-search" v-show="isShowSearchList">
            <div class="search-module">
                <input class="search-text" v-model='clearText' @keyup='search($event)' placeholder="搜索" />
            </div>
            <ul class="list-module">
                <li v-for ="(item,index) in getSubArray" @click="selectToggle(item)" :key="index">
                    {{item.subname}}
                </li>
            </ul>
            <div class="tip-nodata" v-show="getSubArray.length == 0">{{nodatatext}}</div>
        </div>
    </div>

</div>
</template>

<script>
 export default {
    name: "FundsTransfer",
    data(){
    return {
            title: '点击选择',
            tempTitle: '',
            currentindex: -1,
            isShowOrHideList: false,
            subArray: [],
            searchText: '',
            datalist:[
                {name:'选择1', subArr: []},
                {name:'选择2', subArr: []},
                {name:'选择3', 
                 subArr: [
                    {subname: '选择11'},
                    {subname: '选择12'},
                    {subname: '选择13'},
                    {subname: '选择14'},
                    {subname: '选择15'}
                    ]
                },
                {name:'选择4', subArr: []},
                {name:'选择5', subArr: []},
                {name:'选择6', subArr: []},
                {name:'选择7', subArr: []},
                {name:'选择8', subArr: []},
                {name:'选择9', subArr: []},
                {name:'选择10', subArr: []},
            ],
            isShowSearchList:false,
            nodatatext: "未找到结果"
        } 
    },
  created(){
  //点击组件以外的地方，收起
  document.addEventListener('click', (e) => {
    if (!this.$el.contains(e.target)){
        this.isShowSearchList = false,
        this.isShowOrHideList = false,
        this.clearText = '',
        this.searchText = ''
    }
   }, false)
  },
  methods:{
   showList: function() {
        this.isShowOrHideList = !this.isShowOrHideList,
        this.isShowSearchList = false
    },
    showCurrentBg: function(index) {
      this.currentindex = index
    },
    select(index) {
      if(this.datalist[index].subArr.length > 0){
          this.subArray = this.datalist[index].subArr,
          this.isShowSearchList =! this.isShowSearchList,
          this.subTitle = this.datalist[index].name
      } else {
          this.isShowSearchList = false,
          this.isShowOrHideList = false,
          this.title = this.datalist[index].name
      }
    },

   selectToggle(val){
    this.isShowSearchList = false;
    this.isShowOrHideList = false,
    this.title = this.subTitle + val.subname

    this.clearText = '',
    this.searchText = ''
    // to do  点击传给父控件

    console.log(val)
   },
   search(element){
    // 搜索
    this.searchText = element.currentTarget.value;
   }
  },
    computed: {
        getSubArray() {
            if(this.searchText == '') {
                return this.subArray
            } else {
                let searchArr = this.subArray.filter((item)=>{
                    return item.subname.indexOf(this.searchText) != -1;
                });
                return searchArr
            }
        }
    }
 }
</script>

<style lang="scss" scoped>
  .selectstyle {
    display: flex;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
     vertical-align: middle;
    border: 1px solid #ccc;
  }
  .listRoot {
    position: absolute; 
    width: 200px;
    padding-right: 10px;
    top: 50px;
    height: 300px;
    overflow: auto;
  }
  .liststyle {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    width: 200px;
    height: 50px;
    margin-top: -1px;
    margin-bottom: -2px;
    line-height: 50px;
    border: 1px solid #ccc;

    &:last-child {
      padding: 0 0 0 0;
    }
  }
  .arrow {
      margin-left: 100px;
  }
  .active {
    background: #ccc;
  }

 .list-and-search{
    position: absolute;
    left: 220px;
    top: 45px;
    width: 200px;
    background: #fff;
    border: 1px solid #ccc;
 }
 .searchView {
    overflow: auto;
    width: 200px;
    border-radius:3px; 
    border: 1px solid #ccc;
    cursor: pointer;
    .search-module {
        border-bottom: 1px solid #ccc;
        .search-text {
            width: 80%;
            height: 50px;
            text-indent: 10px;
            box-shadow: none;
            outline: none;
            border: none;
        }
        :after {
            width: 100px;
        }

    }
    input::-webkit-input-placeholder{
        font-size: 14px;
    }
    .list-module {
        max-height: 250px;
        width: 200px;
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-inline-start: 0px;
        overflow-y: auto;
        li {
            list-style-type:none;
            height: 50px;
            margin-top: -1px;
            line-height: 50px;
            border: 1px solid #ccc;
            &:hover {
                cursor:pointer;
                color: #fff;
                background: #00a0e9;
            }
        }
    }
 }
 .tip-nodata {
    font-size: 14px;
    padding: 10px 0;
    text-indent: 10px;
 }
</style>





