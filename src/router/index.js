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
import SignupPasswordForm from '@/components/Signup/PasswordForm'
import SignupEmailVerification from '@/components/Signup/EmailVerification'
/*
import forgot password component
*/
import ForgotPassword from '@/components/ForgotPassword/Index'
/*
import service component
*/
import Service from '@/components/Service/Index'
import ServiceNotice from '@/components/Service/Notice'
import ServicePress from '@/components/Service/Press'
import ServicePromotionCoin from '@/components/Service/PromotionCoin'
import ServiceGuide from '@/components/Service/Guide'
import ServiceWalletStatus from '@/components/Service/WalletStatus'
import ServiceOpenApiGuide from '@/components/Service/OpenApiGuide'
import ServicePolicy from '@/components/Service/Policy'
import ServiceQna from '@/components/Service/Qna'
import ServiceQnaList from '@/components/Service/QnaList'
import ServiceFaq from '@/components/Service/Faq'
/*
import mypage component
*/
import MyPage from '@/components/MyPage/Index'
import MyPageCustomerInfo from '@/components/MyPage/CustomerInfo'
import MyPageSecurityCertificate from '@/components/MyPage/SecurityCertificate'
import MyPageApplicationListing from '@/components/MyPage/ApplicationListing'
import MyPageInquireListing from '@/components/MyPage/InquireListing'
import MyPageManagement from '@/components/MyPage/Management/Index'
import MyPageManagementInformationManagement from '@/components/MyPage/Management/InformationManagement'
import MyPageManagementModifyInformation from '@/components/MyPage/Management/ModifyInformation'
import MyPageManagementCoinManagement from '@/components/MyPage/Management/CoinManagement'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/exchange',
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
          path: '',
          component: SignupEmailVerification,
          name: 'SignupEmailVerification'
        },
        {
          path: 'setup-password',
          component: SignupPasswordForm,
          name: 'SignupPasswordForm'
        }
      ]
    },
    {
      path: '/forgot-password',
      component: ForgotPassword
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
    },
    {
      path: '/service',
      component: Service,
      children: [
        {
          path: 'notice',
          component: ServiceNotice,
          name: 'ServiceNotice'
        },
        {
          path: 'press',
          component: ServicePress,
          name: 'ServicePress'
        },
        {
          path: 'promotion_coin',
          component: ServicePromotionCoin,
          name: 'ServicePromotionCoin'
        },
        {
          path: 'guide',
          component: ServiceGuide,
          name: 'ServiceGuide'
        },
        {
          path: 'wallet_status',
          component: ServiceWalletStatus,
          name: 'ServiceWalletStatus'
        },
        {
          path: 'open_api_guide',
          component: ServiceOpenApiGuide,
          name: 'ServiceOpenApiGuide'
        },
        {
          path: 'policy',
          component: ServicePolicy,
          name: 'ServicePolicy'
        },
        {
          path: 'qna',
          component: ServiceQna,
          name: 'ServiceQna'
        },
        {
          path: 'qna_list',
          component: ServiceQnaList,
          name: 'ServiceQnaList'
        },
        {
          path: 'faq',
          component: ServiceFaq,
          name: 'ServiceFaq'
        }
      ]
    },
    {
      path: '/mypage',
      component: MyPage,
      children: [
        {
          path: 'customer_info',
          component: MyPageCustomerInfo,
          name: 'MyPageCustomerInfo'
        },
        {
          path: 'security_certificate',
          component: MyPageSecurityCertificate,
          name: 'MyPageSecurityCertificate'
        },
        {
          path: 'application_listing',
          component: MyPageApplicationListing,
          name: 'MyPageApplicationListing'
        },
        {
          path: 'inquire_listing',
          component: MyPageInquireListing,
          name: 'MyPageInquireListing'
        },
        {
          path: 'management',
          component: MyPageManagement,
          children: [
            {
              path: 'information_management',
              component: MyPageManagementInformationManagement,
              name: 'MyPageManagementInformationManagement'
            },
            {
              path: 'modify_information',
              component: MyPageManagementModifyInformation,
              name: 'MyPageManagementModifyInformation'
            },
            {
              path: 'coin_management',
              component: MyPageManagementCoinManagement,
              name: 'MyPageManagementCoinManagement'
            }
          ]
        }
      ]
    }
  ]
})
