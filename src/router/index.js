import Vue from 'vue'
import Router from 'vue-router'

/*
import exchange component
*/
import Exchange from '@/components/Exchange'
/*
import investment component
*/
import Investment from '@/components/Investment/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/invesment',
      name: 'Investment',
      component: Investment
    }
  ]
})
