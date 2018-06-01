import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Item from '@/components/Item'
import Card from '@/components/Card'

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
