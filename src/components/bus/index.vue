<template lang="html">
  <div>
    我是子组件
    {{text}}
  </div>
</template>

<script>
import bus from '../../utils/bus'
export default {
  data () {
    return {
      text: ''
    }
  },
  created () {
    bus.$on('change', (v) => {
      console.log(v)
      this.text = v
    })
    bus.$on('change', (v) => {
      console.log('hh')
    })
    bus.$once('change', (v) => {
      console.log(v, 321)
    })
  },
  beforeDestroy () {
    console.log('销毁中。。。')
    // bus.$off()
    bus.$off('change')
    // bus.$off(['change'])
  }
}
</script>

<style lang="css">
</style>
