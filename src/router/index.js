import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Timer from '@/components/Timer'
import Game from '@/components/Game'
import Burst from '@/components/Burst'
import Protopage from '@/components/Protopage'

// import { MdButton, MdContent, MdTabs, MdField, MdInput } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
// import { TweenMax, TweenLite, SteppedEase } from 'gsap/all'
// import gsap from 'gsap/TweenMax'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
// Vue.use(gsap)
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
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/burst',
      name: 'Burst',
      component: Burst
    },
    {
      path: '/protovue-grid',
      name: 'Protopage',
      component: Protopage
    }
  ]
})
