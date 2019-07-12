import Settings from '@/components/Settings.vue'
import ShowMessages from '@/components/ShowMessages.vue'
import Start from '@/components/Start.vue'

export const routes = [

  {path: '/', component: Start}, {path: '/settings', component: Settings},
  {path: '/showMessages', component: ShowMessages}, {
    path: '*',
    redirect: '/'
  },  // "いずれにもマッチしないと/に自動でリダイレクト"
]
