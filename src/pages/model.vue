<template lang="html">
  <div class="page">
    <div class="hz-title">非表单组件使用v-model</div>
    <div class="hz-btn" @click='toggle'>更改model值</div>
    <div class="hz-btn" @click='toggleCode'>{{code ? '收起源码' : '展开源码'}}</div>
    <test v-model='show' />
    <pre v-hz-pre v-show='code'>
      <code class='html'>
        &lt;template lang="html"&gt;
          &lt;div v-show='show'&gt;
            通过v-model来自己触发注册事件自己更改值
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;script&gt;
        export default {
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
      &lt;/script&gt;
      </code>
    </pre>
  </div>
</template>

<script>
import Test from '../components/model/index'
// import {formatObj} from '../utils/format'
export default {
  data () {
    return {
      show: false,
      code: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    toggleCode () {
      this.code = !this.code
    }
  },
  components: {
    Test
  }
}
</script>

<style lang="scss" scoped>
.hz-btn {
  margin: 10px 20px;
}
</style>
