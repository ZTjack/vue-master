<template>
    <div id="container">
        <div>
            <header :class="'head'">我是头部</header>
            <!-- <div :class="[{'fix':isFix},'tabbar']" id="tabbar" >
                <router-link to="/tab1">TAB1</router-link>
                <router-link to="/tab2">TAB2</router-link>
                <router-link to="/tab3">TAB3</router-link>
            </div>
            <div :style="{ 'minHeight': contentMinHeight + 'px', 'marginTop': contentMarginTop + 'px'}">
                <router-view></router-view>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
//     el: "#container",
//     router,
//     data() {
//         return {
//             msg: "hello",
//             isFix: false,
//             headerHeight: 0,
//             titleBarHeight: 0
//         }
//     },
//     methods: {
//         handleScroll() {
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//             console.log(scrollTop)
//             var offsetTop = this.$el.querySelector('#tabbar').offsetTop

//             if(scrollTop > offsetTop) {
//                 this.isFix = true
//             } else {
//                 this.isFix = false
//             }
//             this.headerHeight = this.$el.querySelector('.head').clientHeight
//             this.titleBarHeight = this.$el.querySelector('#tabbar').clientHeight
//         }
//     },
//     mounted() {
//         window.addEventListener('scroll', this.handleScroll)
//     },
//     computed: {
//         contentMinHeight() {
//             const windowHeight = document.documentElement.clientHeight
//             return this.isFix ? windowHeight - this.titleBarHeight : windowHeight - this.headerHeight - this.titleBarHeight
//         },
//         contentMarginTop() {
//             return this.isFix ? this.titleBarHeight : 0
//         }
//     },
//     destroyed() {
//         window.removeEventListener('scroll', this.handleScroll)
//     },
//     watch: {
//         '$router'(to, from) {
//             this.$nextTick(() => {
//                 if(this.isFix) {
//                     window.scrollTo(0, 0)
//                     window.scrollTo(0, this,headerHeight)
//                 } else {
//                     window.scrollTo(0, 0)
//                 }
//             })
//         } 
//     }
}

// const Tab1 = {
//     template: `<ul :class="'ulstyle'">
//       <li v-for="(item,index) in myDataList" :class="'listyle'">
//       <ul :class="'ulstyle'">
//         <li>
//           {{item.id}}
//         </li>
//         <li>{{item.name}}</li>
//       </ul>
//       </li>
//      </ul>`,
//     data(){
//       return {
//         myDataList:[
//           {id:1,name:'TigerChain'},
//           {id:2,name:'TigerChain'},
//           {id:3,name:'TigerChain'},
//           {id:4,name:'TigerChain'},
//           {id:5,name:'TigerChain'},
//           {id:6,name:'TigerChain'},
//           {id:7,name:'TigerChain'},
//           {id:8,name:'TigerChain'},
//           {id:9,name:'TigerChain'},
//           {id:10,name:'TigerChain'},
//           {id:11,name:'TigerChain'},
//           {id:12,name:'TigerChain'},
//           {id:13,name:'TigerChain'},
//           {id:14,name:'TigerChain'},
//           {id:15,name:'TigerChain'},
//           {id:16,name:'TigerChain'},
//           {id:17,name:'TigerChain'}
//         ]
//       }
//     }
//   }
//   const Tab2= {
//     template: `<div>
//       我是tab2
//     </div>`
//   }
//   const Tab3 = {
//     template: `<div>
//       我是tab3
//     </div>`
//   }
//   const routes = [
//     {
//       path:'/',
//       component:Main,
//       children:[
//         {
//           path:'',
//           component:Tab1
//         },
//         {
//           path:'tab1',
//           component:Tab1
//         },
//         {
//           path:'tab2',
//           component:Tab2
//         },
//         {
//           path:'tab3',
//           component:Tab3
//         }

//       ]
//     }
//   ]

//   const router = new VueRouter({
//     routes
//   })
</script>

<style scoped>
    /* .head {
        height: 20px;
        background-color: red;
    }
    .tabbar {
        width: 100%;
        display: flex;
        align-items: center;
        height: 40px;
        text-align: center;
        background-color: orange;
    }
    .tabbar a {
        flex: 1;
        text-decoration: none;
        color: green;
        line-height: 40px;
    }
    .tabbar a:hover {
        color: yellow;
    }
    .tabbar a.router-link-active {
        color: yellow;
    }
    .ulstyle {
        margin: 0;
        padding: 0;
    }
    .listyle {
        list-style-type: none;
        padding:  7px;
        background-color: #ffeecc;
        border-bottom: 1px solid white;
    }
    .fix {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    } */
</style>