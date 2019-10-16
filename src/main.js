import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
// import fastclick from 'fastclick'
import '@/assets/stylus/index.styl'
import {Tab, Tabs,List,Swipe, SwipeItem,Lazyload,Cell  } from 'vant'

Vue.config.productionTip = false
// fastclick.attach(document.body)
Vue.use(Tab).use(Tabs).use(List).use(Swipe).use(SwipeItem).use(Lazyload ).use(Cell)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
