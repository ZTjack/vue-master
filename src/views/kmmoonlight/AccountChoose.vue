<template>
  <div>
    <div ref="container">
      <div class="account" @click="expandAccountList = !expandAccountList">
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
          @click="chooseChildAccount(index)"
        >
          {{ item.type }}
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
        />
        <div class="child-item-list">
          <div
            v-for="item in getChildrenList"
            :key="item"
            class="account-item"
            @click="nowChildAccount = item"
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
          type: 'a',
          children: []
        },
        {
          type: 'b',
          children: [
            'account1',
            'account2',
            'account3',
            'account4',
            'account5',
            'account6',
            'account7'
          ]
        },
        {
          type: 'c',
          children: ['accountA', 'accountB', 'accountC']
        },
        {
          type: 'd',
          children: []
        },
        {
          type: 'e',
          children: []
        },
        {
          type: 'f',
          children: []
        },
        {
          type: 'g',
          children: []
        }
      ],
      expandAccountList: false,
      expandChildAccountList: false,
      nowAccount: '',
      nowChildAccount: '',
      filterText: ''
    }
  },
  methods: {
    chooseChildAccount: function(index) {
      this.expandChildAccountList = this.accountList[index].children.length > 0
      if (this.nowAccount != this.accountList[index].type) {
        this.nowChildAccount = ''
      }
      this.nowAccount = this.accountList[index].type
      this.filterText = ''
    },
    addOutSideClickListener: function(element) {
      document.addEventListener('click', event => {
        if (!element.contains(event.target)) {
          this.expandAccountList = false
          this.expandChildAccountList = false
          this.filterText = ''
        }
      })
    }
  },
  mounted() {
    this.addOutSideClickListener(this.$refs.container)
  },
  computed: {
    arrow: function() {
      return this.expandAccountList ? '↑' : '↓'
    },
    getChildrenList: function() {
      for (let account of this.accountList) {
        if (account.type === this.nowAccount) {
          return account.children.filter(item => {
            return item.indexOf(this.filterText) != -1
          })
        }
      }
      return []
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
}

.account-list {
  width: 200px;
  position: absolute;
  top: 100px;
  height: 324px;
  overflow: auto;
}

.account-item {
  height: 80px;
  border: 1px solid #000;
}

.child-account-list {
  position: absolute;
  left: 220px;
  top: 40px;
  width: 200px;
  display: flex;
  flex-direction: column;
}

.info {
  flex-grow: 1;
}

.child-item-list {
  height: 324px;
  overflow: auto;
}

.arrow {
  width: 20px;
}
</style>
