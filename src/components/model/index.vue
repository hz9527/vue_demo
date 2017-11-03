<template lang="html">
  <div v-show='show'>
    通过v-model来自己触发注册事件自己更改值
  </div>
</template>

<script>
export default
{
  model: {
    prop: 'show',
    event: 'change'
  },
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
            this.$emit('change', false)
          }, 1000)
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
