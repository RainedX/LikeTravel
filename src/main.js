// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import "@/assets/styles/reset.css"
import "@/assets/styles/border.css"
import "@/assets/styles/iconfont.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from '@/store/index.js'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body) //解决移动端300ms点击延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
