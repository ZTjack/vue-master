<template>
    <div class="container">
        <div>
            <ul>
                <div v-for="(item,index) in mydatas" :key="item">
                    <div class="titleclass" @click="clickitem(index)" :id="'item_'+index">
                        {{item.title}}
                        <div v-if="index==0"><div class="jtupcss" :id="'item_jt'+index"></div></div>
                        <div v-else><div class="jtdowncss" :id="'item_jt'+index"></div></div>
                    </div>

                    <div v-if="index==0">
                        <ul :style="{'display':'block'}" :id="'item_s'+index">
                            <li v-for="data in item.content" :key="data">
                                {{data.name}}
                            </li>
                        </ul>
                    </div>

                    <div v-else>
                        <ul :style="{'display':'none'}" :id="'item_s'+index">
                            <li v-for="data in item.content" :key="data">
                                {{data.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "lesson2",
    el:"#container",
    data() {
       return {
           mydatas:[
          {
            title:'标题1',
            content:[
              {name:'TigerChain',address:'中国'},
              {name:'TigerChain1',address:'中国'},
              {name:'TigerChain2',address:'中国'},
              {name:'TigerChain3',address:'中国'},
              {name:'TigerChain4',address:'中国'},
              {name:'TigerChain5',address:'中国'},
              {name:'TigerChain6',address:'中国'},
              {name:'TigerChain7',address:'中国'},
              {name:'TigerChain8',address:'中国'}
            ]
          },
          {
            title:'标题2',
            content:[
              {name:'马超',address:'中国'},
              {name:'TigerChain1',address:'中国'},
              {name:'TigerChain2',address:'中国'},
              {name:'TigerChain3',address:'中国'},
              {name:'TigerChain4',address:'中国'},
              {name:'TigerChain5',address:'中国'},
              {name:'TigerChain6',address:'中国'},
              {name:'TigerChain7',address:'中国'},
              {name:'TigerChain8',address:'中国'}
            ]
          },
          {

            title:'标题3',
            content:[
              {name:'刘斌',address:'中国'},
              {name:'TigerChain1',address:'中国'},
              {name:'TigerChain2',address:'中国'},
              {name:'TigerChain3',address:'中国'},
              {name:'TigerChain4',address:'中国'},
              {name:'TigerChain5',address:'中国'},
              {name:'TigerChain6',address:'中国'},
              {name:'TigerChain7',address:'中国'},
              {name:'TigerChain8',address:'中国'}
            ]
          }
        ] 
       }
    },
    methods: {
        clickitem(index) {
            var el = this.$el.querySelector('#item_s'+index).style;
            var img = this.$el.querySelector('#item_jt'+index);

            if(el.display=='none') {
                el.display = "block",
                img.className = "jtupcss"
            } else if(el.display=='block') {
                el.display = "none",
                img.className = "jtdowncss"
            }
        }
    },
    computed: {

    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .titleclass {
        display: flex;
        background-color: #ffeecc;
        align-content: space-between;
        align-items: center;
        padding: 7px;
        border-bottom: 1px solid red;
        margin-top: 5px;
        margin-bottom: 7px;
    }
    .jtupcss {
        background:  url("../../assets/blue-socks.png") no-repeat; 
        width: 50px;
        height: 30px;
    }
    .jtdowncss {
       background:  url("../../assets/green-socks.png") no-repeat;
       width: 50px;
       height: 30px; 
    }
</style>