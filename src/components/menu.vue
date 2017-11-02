<template lang="html">
  <div class="content">
    <div class="head">目录</div>
    <div class="list-con" @click='click'>
      <div :data-name='item.key' :class="['item', item.key === name ? 'active' : '']" v-for='item in list' :key='item.key'>
        {{item.name}}
      </div>
    </div>
    <div class="foot">&copy; by hz</div>
  </div>
</template>

<script>
import {routes} from '../router'
export default {
  props: {
    name: String
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    click (e) {

    },
    init () {
      this.list = routes.filter(item => item.menu).map(item => {
        return {
          key: item.name,
          name: item.menu
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 200px;
  height: 100%;
  background: #eee;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  .list-con {
    flex: 1;
    overflow: auto;
  }
  .head, .foot {
    height: 50px;
    line-height: 50px;
    background: #333;
    color: #fff;
    text-align: center;
  }
  .item {
    padding-left: 15px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
  }
  .active {
    background: #fff;
    color: #f55;
  }
}
</style>
