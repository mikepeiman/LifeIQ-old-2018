import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Item from '@/components/Item'
import Card from '@/components/Card'
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
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/',
      name: 'Home',
      component: Item
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})
