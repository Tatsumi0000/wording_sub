import Settings from '@/components/Settings.vue'
import Start from '@/components/Start.vue'
import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home.vue'

// Vue.use(Router)

export const routes =
    [
      {path: '/top', component: Start},
      {path: '/settings', component: Settings}, {path: '', redirect: '/top'}, {
        path: '*',
        redirect: '/top'
      },  // "いずれにもマッチしないとtopに自動でリダイレクト"
    ]

    // export default new Router({
    //   mode: 'history',
    //   base: process.env.BASE_URL,
    //   routes: [
    //     {path: '/', name: 'start', component: Start},
    //     {path: '/', name: 'settings', component: Settings}, {
    //       path: '/about',
    //       name: 'about',
    //       // route level code-splitting
    //       // this generates a separate chunk (about.[hash].js) for this route
    //       // which is lazy-loaded when the route is visited.
    //       component: () =>
    //           import(/* webpackChunkName: "about" */ './views/About.vue')
    //     }
    //   ]
    // })
