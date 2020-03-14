import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// 声明式使用插件
Vue.use(VueResource) // 内部会给vm对象和组件对象添加一个属性：$http
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
