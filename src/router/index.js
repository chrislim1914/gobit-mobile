import Vue from 'vue'
import Router from 'vue-router'

/*
import main component
 */
import Main from '@/components/Main'
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
      name: 'Main',
      component: Main
    },
    {
      path: '/invesment',
      name: 'Investment',
      component: Investment
    }
  ]
})
