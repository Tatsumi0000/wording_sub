import Settings from '@/components/Settings.vue'
import Start from '@/components/Start.vue'

export const routes = [

  {path: '/', component: Start}, {path: '/settings', component: Settings}, {
    path: '*',
    redirect: '/'
  },  // "いずれにもマッチしないと/に自動でリダイレクト"
]
