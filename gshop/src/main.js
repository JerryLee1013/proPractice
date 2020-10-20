/*
  入口js
* */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
//  图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
//  加载mockServer
import './mock/mockServer'
//  加载过滤器
import './filters'

//  注册全局组件标签
Vue.component(Button.name, Button)
//  图片懒加载
Vue.use(VueLazyload, {
  loading
})

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
  router, //  使用上vue-router
  store //  使用上vuex
})
