<template lang="html">
  <div class="page">
    <div class="hz-title">
      bus监听事件的销毁
    </div>
    <div class="hz-btn" @click='toggle("child")'>{{child ? '销毁子组件' : '创建子组件'}}</div>
    <div class="hz-btn" @click='toggle("showCode")'>{{showCode ? '收起源码' : '展示源码'}}</div>
    <div class="hz-btn" @click='emit'>点击触发事件</div>
    <child v-if='child' />
    <div class="hz-con" v-pre>
      我们知道vue在销毁实例时会解除事件监听，但是这个主要是指实例本身的事件，那么意味着其他事件并不会解除绑定，如原生addEventListener及bus等。<br />
      但是vue提供了$off方法来取消事件绑定，而bus正好是一个vue实例，因此可以在销毁相关钩子中取消掉，参数为事件名或事件名列表(部分版本有bug)或无（无参数解除所有事件）<br />
      当然其实我们也可以使用$once方式来注册事件，这样就避免手动销毁，前提是事件仅需要触发一次 <br />
      第二个参数是监听函数
    </div>
    <pre v-hz-pre v-show='showCode'>
      <code class='html' v-pre>
        &lt;template lang="html"&gt;
          &lt;div&gt;
            我是子组件
            {{text}}
          &lt;/div>
        &lt;/template&gt;

        &lt;script&gt;
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
          },
          beforeDestroy () {
            console.log('销毁中。。。')
            // bus.$off()
            // bus.$off('change')
            bus.$off(['change'])
          }
        }
        &lt;/script&gt;
      </code>
    </pre>
  </div>
</template>

<script>
import Child from '../components/bus/index'
import bus from '../utils/bus'
export default {
  data () {
    return {
      child: true,
      showCode: false
    }
  },
  methods: {
    toggle (prop) {
      this[prop] = !this[prop]
    },
    emit () {
      bus.$emit('change', 123)
    }
  },
  components: {
    Child
  }
}
</script>

<style lang="scss">
</style>
