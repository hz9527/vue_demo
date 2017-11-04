<template lang="html">
  <div class="page">
    ${num}
    <div class="hz-con">
      别纳闷，delimiters选项是只能使用在无需编译的vue中即非.vue文件中，可以改变默认的双括号作为纯文本插入分隔符
    </div>
  </div>
</template>

<script>
export default {
  delimiters: ['${', '}'],
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
