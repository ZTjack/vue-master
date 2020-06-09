<template>
    <div class="container">
        <div>
            <ul class="headul">
                <li v-for="data in datas" :key="data.index">
                    <div class="header">{{data.title}}</div>
                    <div class="content">
                        <ul class="contentul">
                            <li class="contentitem" v-for="(content,index) in data.content" :key="content.name" @click="change(index, $event)">
                                {{content.name}}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div @click="clear" v-show="selectDatas.length>0">一键清空</div>
            <span v-show="selectDatas.length>0">当前选择：</span>
            <span v-for="value in selectDatas" :key="value.index">
                {{value}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lesson3',
    el: "#container",
    data() {
        return {
            selectDatas: [],
            cssStyles: [],
            datas: [
                {
                title:'section1',
                content:[
                    {name:'内容1'},
                    {name:'内容2'},
                    {name:'内容3'},
                    {name:'内容4'},
                    {name:'内容5'},
                    {name:'内容6'},
                    {name:'内容7'},
                    {name:'内容8'},
                    {name:'内容9'},
                ]
                },
                {
                title:'section2',
                content:[
                    {name:'选择1'},
                    {name:'选择2'},
                    {name:'选择3'},
                    {name:'选择4'},
                    {name:'选择5'},
                    {name:'选择6'}
                ]
                },
                {
                title:'section3',
                content:[
                    {name:'内容1'},
                    {name:'内容2'},
                    {name:'内容3'},
                    {name:'内容4'},
                    {name:'内容5'},
                    {name:'内容6'}
                ]
                }
            ]
        }
    },
    methods: {
        change(index, event) {
            var e = event.target;

            if (e.className == 'contentitem') {
                e.className = 'contentitemSelect',
                this.selectDatas.push(e.innerText),
                this.cssStyles.push(e)
            } else if(e.className == 'contentitemSelect') {
                e.className = 'contentitem',
                this.selectDatas.remove(e.innerText),
                this.cssStyles.remove(e)
            }
        },
        clear() {
            for(var i=0;i<this.cssStyles.length;i++) {
                this.cssStyles[i].className = 'contentitem'
            }
            this.selectDatas = []
        }
    },
    computed: {

    }
}
Array.prototype.indexOf = function(val) {
    for (var i=0; i<this.length; i++) {
        if(this[i] == val) {
            return i;
        }
    }
    return -1;
}
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if(index > -1) {
        this.splice(index, 1);
    }
}
</script>

<style scoped>
    .headul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .contentul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
    }
    .contentitem {
        border: 1px solid gray;
        border-radius: 5px;
        margin: 10px;
        padding: 5px;
    }
    .contentitemSelect {
        border: 1px solid orange;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
    }

</style>