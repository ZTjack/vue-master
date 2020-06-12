<template>
  <div>
    <div ref="container">
      <div
        class="account"
        @click="expandAccountList = !expandAccountList"
        :class="{ 'high-light': expandAccountList }"
      >
        <div class="info">
          <div>{{ nowAccount }}</div>
          <div>{{ nowChildAccount }}</div>
        </div>
        <div class="arrow">
          {{ arrow }}
        </div>
      </div>
      <div class="account-list" v-show="expandAccountList">
        <div
          v-for="(item, index) in accountList"
          :key="item.type"
          class="account-item"
          @click="chooseAccount(index, false)"
        >
          <div class="account-info">
            {{ item.type }}
          </div>

          <div v-show="item.hasChild" style="margin-right:10px">
            &gt;
          </div>
        </div>
      </div>
      <div
        v-show="expandAccountList && expandChildAccountList"
        class="child-account-list"
      >
        <input
          type="text"
          style="width:192px; height:30px"
          v-model="filterText"
          placeholder="请输入关键字搜索"
        />
        <div class="child-item-list">
          <div
            v-for="(item, index) in getChildrenList"
            :key="item"
            class="account-item"
            @click="chooseAccount(index, true)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountChoose',
  data() {
    return {
      accountList: [
        {
          type: '币币账户',
          children: []
        },
        {
          type: '币币杠杆账户',
          children: [
            'LTC/BTC',
            'ETH/BTC',
            'ETC/BTC',
            'BTC/USDT',
            'QTUM/BTC',
            'HC/BTC',
            'XRP/BTC'
          ]
        },
        {
          type: '法币账户',
          children: ['accountA', 'accountB', 'accountC']
        },
        {
          type: '交割合约账户',
          children: []
        },
        {
          type: '余币宝',
          children: []
        },
        {
          type: '永续合约账户',
          children: []
        },
        {
          type: '借贷账户',
          children: []
        }
      ],
      expandAccountList: false,
      expandChildAccountList: false,
      nowAccount: '币币账户',
      nowChildAccount: '',
      filterText: ''
    }
  },
  methods: {
    chooseAccount: function(index, isChild) {
      if (isChild) {
        this.nowChildAccount = this.getChildrenList[index]
        this.clearState()
      } else {
        this.expandChildAccountList = this.accountList[index].hasChild
        if (this.nowAccount != this.accountList[index].type) {
          this.nowChildAccount = ''
        }
        this.nowAccount = this.accountList[index].type
        if (!this.expandChildAccountList) {
          this.clearState()
        }
      }
    },
    addOutSideClickListener: function(element) {
      document.addEventListener('click', event => {
        if (!element.contains(event.target)) {
          //debugger
          this.clearState()
        }
      })
    },
    clearState: function() {
      this.expandAccountList = false
      this.expandChildAccountList = false
      this.filterText = ''
    }
  },
  mounted() {
    this.addOutSideClickListener(this.$refs.container)

    //给数组添加一个children是否大于0的标识
    this.accountList = this.accountList.map(item => {
      return {
        ...item,
        hasChild: item.children.length > 0
      }
    })
  },
  computed: {
    arrow: function() {
      return this.expandAccountList ? '↑' : '↓'
    },
    getChildrenList: function() {
      const account = this.accountList.find(
        item => item.type === this.nowAccount
      )
      return account
        ? account.children.filter(item => {
            return item.toUpperCase().includes(this.filterText.toUpperCase())
          })
        : []
    }
  }
}
</script>

<style scoped>
.account {
  width: 200px;
  height: 80px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; */
}

.account-list {
  width: 200px;
  position: absolute;
  top: 100px;
  height: 324px;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  /* border: 0.5px solid gray; */
}

.account-item {
  height: 80px;
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.account-item:hover {
  background-color: lightblue;
}

.account-info {
  flex-grow: 1;
}

.account-list:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.child-account-list {
  position: absolute;
  left: 220px;
  top: 50px;
  width: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  /* border: 0.5px solid gray; */
}

.child-account-list:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.info {
  flex-grow: 1;
}

.child-item-list {
  max-height: 324px;
  overflow: auto;
}

.arrow {
  width: 20px;
}

.high-light {
  border: 2px solid blue;
}
</style>
