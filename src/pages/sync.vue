<template lang="html">
  <div class="page">
    <div class="hz-title">sync修饰符双向数据绑定</div>
    <div class="hz-btn" @click='toggle("show")'>更改show值</div>
    <div class="hz-btn" @click='toggle("showCode")'>{{showCode ? '收起源码' : '展开源码'}}</div>
    <div class="hz-con">
      当属性添加了sync修饰符，vue会为其注册一个update:propName事件，无需父组件显式注册。子组件想更改该prop只需要触发该事件即可，整体比非表单v－model更为灵活，同样不违背单向数据流原则
    </div>
    <test :show.sync='show' />
    <pre v-hz-pre v-show='showCode'>
      <code class='html'>
        &lt;template lang="html"&gt;
          &lt;div v-show='show'&gt;
            父组件传递属性，并使用sync修饰符，子组件通过emit update:prop 事件来更改值
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;script&gt;
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
        &lt;/script&gt;
      </code>
    </pre>
  </div>
</template>

<script>
import Test from '../components/sync/index'
export default {
  data () {
    return {
      show: false,
      showCode: false
    }
  },
  methods: {
    toggle (prop) {
      this[prop] = !this[prop]
    }
  },
  components: {
    Test
  }
}
</script>

<style lang="scss">
</style>
