import Vue from 'vue'
import Router from 'vue-router'
import model from '@/pages/model'
import delimiter from '@/pages/delimiter'
import sync from '@/pages/sync'
import bus from '@/pages/bus'
import inheritAttrs from '@/pages/inheritAttr'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'model',
    menu: '非表单使用v-model',
    component: model
  },
  {
    path: '/sync',
    name: 'sync',
    menu: 'sync双向绑定',
    component: sync
  },
  {
    path: '/bus',
    name: 'bus',
    menu: 'bus监听事件的销毁',
    component: bus
  },
  {
    path: '/delimites',
    name: 'delimiter',
    menu: '自定义插入符',
    component: delimiter
  },
  {
    path: '/inheritattrs',
    name: 'inheritattrs',
    menu: '默认属性',
    component: inheritAttrs
  },
  {
    path: '*',
    redirect: '/'
  }
]
var router = new Router({routes})
export {
  routes,
  router
}
