import './plugins/vuetify'
import './registerServiceWorker'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import {routes} from './router/index.js'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false;

const router = new VueRouter({mode: 'hash', routes});

new Vue({router, store, render: h => h(App)}).$mount('#app');
