// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/commentList.css'
import './assets/css/basic.css'
import './assets/js/jquery-3.4.1.min.js'
import './assets/js/basic.js'
// import commentList from '@/components/commentList'
// import commentDetails from '@/components/commentDetails'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueGoodTablePlugin)
axios.defaults.baseURL = '/api'
Vue.use(ElementUI)

// const routes = [
//   {
//     path: '/', components: commentList
//   }
//   // {
//   //   path: '/commentDetails', components: commentDetails
//   // }
// ]

// const vueRouters = new VueRouter({
//   routes
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
