<template lang="html">
  <div v-show='show'>
    父组件传递属性，并使用sync修饰符，子组件通过emit update:prop 事件来更改值
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show: {
      immediate: true,
      handler (v) {
        if (v) {
          setTimeout(() => {
            this.$emit('update:show', false)
          }, 1000)
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
