import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Timer from '@/components/Timer'
import Game from '@/components/Game'

// import { MdButton, MdContent, MdTabs, MdField, MdInput } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(MdField)
// Vue.use(MdInput)
Vue.use(VueMaterial)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/timer',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/Tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
})
