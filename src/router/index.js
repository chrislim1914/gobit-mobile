import Vue from 'vue'
import Router from 'vue-router'

/*
import exchange component
*/
import Exchange from '@/components/Exchange/Index'
/*
import investment component
*/
import Investment from '@/components/Investment/Index'
/*
import trading component
*/
import Trading from '@/components/Trading/Index'
/*
import login component
*/
import Login from '@/components/Login/Index'
/*
import signup component
*/
import Signup from '@/components/Signup/Index'
import SignupEmailVerification from '@/components/Signup/EmailVerification'

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup,
      children: [
        {
          path: 'verify-email',
          component: SignupEmailVerification,
          name: 'SignupEmailVerification'
        }
      ]
    },
    {
      path: '/invesment',
      name: 'Investment',
      component: Investment
    },
    {
      path: '/trading',
      name: 'Trading',
      component: Trading
    }
  ]
})
