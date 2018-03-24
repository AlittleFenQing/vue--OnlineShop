// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router =new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
    }
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  template: '<Layout/>',
  components: { Layout }
 
})
