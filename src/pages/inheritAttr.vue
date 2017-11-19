<template lang="html">
  <div class="page">
    <div class="hz-title">
      默认属性
    </div>
    <div class="hz-btn" @click='() => showCode = !showCode'>
      {{showCode ? '收起源码' : '展示源码'}}
    </div>
    <div class="hz-con" v-pre>
      我们知道vue会将子组件绑定的属性如果该属性存在于props列表中那么子组件渲染的节点上是不会绑定该属性，反之就会显式绑定在节点上。 <br>
      例如，我们给子组件绑定了data-text test text三个属性，但是子组件props中只注册了text那么剩下两个属性会显式出现在渲染的节点上。 <br>
      其实不论你是否需要它们显示出现在渲染后的节点上，它们都会在$attrs中，如果你不希望用户看到它们，可以在子组件中将inheritAttrs设置为false，在子组件中通过$attrs访问即可 <br>
      并且在created钩子里就可以访问 <br>
      思考：如果一些属性不需要响应式，是否考虑使用属性？其次一些不愿意显式出现在dom上的属性是不是考虑inheritAttrs设置？
    </div>
    <child :data-text='text' :test='"1"' :text='text' />
    <pre v-hz-pre v-show='showCode'>
      <code class='js' v-pre>
        {
          props: {
            text: String
          },
          inheritAttrs: false,
          beforeCreate () {
            console.log(this.$arrts, 'beforeCreate') // undefined
          },
          created () {
            console.log(this.$attrs, 'created') // attrs created
          },
          mounted () {
            console.log(this.$attrs, this._props)
          }
        }
      </code>
    </pre>
  </div>
</template>

<script>
import child from '../components/inheritAttrs/index'
export default {
  data () {
    return {
      text: 'test',
      showCode: false
    }
  },
  components: {child}
}
</script>

<style lang="scss" scoped>
</style>
