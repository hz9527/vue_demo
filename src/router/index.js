import Vue from 'vue'
import Router from 'vue-router'
import model from '@/components/model'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'model',
    menu: '非表单使用v-model',
    component: model
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
