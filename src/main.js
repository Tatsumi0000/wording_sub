import './plugins/vuetify'
import './registerServiceWorker'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import {routes} from './router/index.js'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false;


const router = new VueRouter({
  // mode: 'history', // urlに出てくる "#" を消す
  routes,
  // 画面遷移時に上に戻しつつ0.5秒後に遷移
  scrollBehavior(to, from, savedPosition) {
    let position = {x: 0, y: 0};
    if (savedPosition) {
      position = savedPosition
      return position
    } else {
      return position
    }

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(position)
    //   }, 500)
    // })
  }
});

new Vue({router, store, render: h => h(App)}).$mount('#app')
