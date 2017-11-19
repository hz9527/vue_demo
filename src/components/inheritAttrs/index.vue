<template lang="html">
  <div>
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  inheritAttrs: false,
  beforeCreate () {
    console.log(this.$arrts, 'beforeCreate')
  },
  created () {
    console.log(this.$attrs, 'created')
  },
  mounted () {
    console.log(this.$attrs, this._props)
  }
}
</script>

<style lang="css">
</style>
