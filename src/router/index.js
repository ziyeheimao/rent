import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import details from '@/components/details/details'
import add from '@/components/add/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/add',
      name: 'add',
      component: add
    }
  ]
})
