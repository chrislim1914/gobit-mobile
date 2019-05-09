import Vue from 'vue'
import Router from 'vue-router'

/*
import error component
*/
import FourOFour from '@/components/FourOFour'
/*
import exchange component
*/
import Exchange from '@/components/Exchange/Index'
/*
import investment component
*/
import Investment from '@/components/Investment/Index'
import InvestmentBalance from '@/components/Investment/Balance'
import InvestmentHistory from '@/components/Investment/History'
import InvestmentWaitOrders from '@/components/Investment/Order'
/*
import trading component
*/
import Trading from '@/components/Trading/Index'
import TradingLinkOne from '@/components/Trading/LinkOne'
import TradingLinkTwo from '@/components/Trading/LinkTwo'
import TradingLinkThree from '@/components/Trading/LinkThree'
import TradingLinkFour from '@/components/Trading/LinkFour'
import TradingLinkFive from '@/components/Trading/LinkFive'
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
import ServiceList from '@/components/Service/List'
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
/*
import deposit component
*/
import IndexDeposit from '@/components/DepositWithdraw/Index'
import DepositBalance from '@/components/DepositWithdraw/Depositwithdraw'
import CoinTransaction from '@/components/DepositWithdraw/CoinTransaction'
import WalletAddress from '@/components/DepositWithdraw/WalletAddress'
import NoWalletAddress from '@/components/DepositWithdraw/NoWalletAddress'
import Withdrawal from '@/components/DepositWithdraw/Withdrawal'

// sidebar
import Sidebar from '@/components/Globals/Sidebar'

// commision
import Commission from '@/components/Commission'

// Security
import IndexSecurity from '@/components/Security/Index'
import SecurityAuthentication from '@/components/Security/SecurityAuthentication'
// import AccountAuth from '@/components/Security/AccountAuth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'FourOFour',
      component: FourOFour
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/commission',
      name: 'Commission',
      component: Commission
    },
    {
      path: '/exchange/:market',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot_password',
      component: ForgotPassword
    },
    {
      path: '/security',
      component: IndexSecurity,
      children: [
        {
          path: '/',
          component: SecurityAuthentication,
          name: 'SecurityAuthentication'
        },
        // {
        //   path: 'accountauth',
        //   component: AccountAuth,
        //   name: 'AccountAuth'
        // }
      ]
    },
    {
      path: '/investment',
      component: Investment,
      children: [
        {
          path: 'balance',
          component: InvestmentBalance,
          name: 'InvestmentBalance'
        },
        {
          path: 'history',
          component: InvestmentHistory,
          name: 'InvestmentHistory'
        },
        {
          path: 'wait_orders',
          component: InvestmentWaitOrders,
          name: 'InvestmentWaitOrders'
        }
      ]
    },
    {
      path: '/deposit',
      component: IndexDeposit,
      children: [
        {
          path: '/',
          component: DepositBalance,
          name: 'DepositBalance'
        },
        {
          path: 'coin-transaction',
          component: CoinTransaction,
          name: 'CoinTransaction'
        },
        {
          path: 'wallet',
          component: WalletAddress,
          name: 'WalletAddress'
        },
        {
          path: 'new-address',
          component: NoWalletAddress,
          name: 'NoWalletAddress'
        },
        {
          path: 'withdraw',
          component: Withdrawal,
          name: 'Withdrawal'
        }
      ]
    },
    // Trading routes
    // TODO: update trading placeholder routes to client specific routes.
    {
      path: '/trading',
      component: Trading,
      children: [
        {
          path: '',
          component: TradingLinkOne,
          name: 'TradingLinkOne'
        },
        {
          path: 'ltwo',
          component: TradingLinkTwo,
          name: 'TradingLinkTwo'
        },
        {
          path: 'chart',
          component: TradingLinkThree,
          name: 'TradingLinkThree'
        },
        {
          path: 'records',
          component: TradingLinkFour,
          name: 'TradingLinkFour'
        },
        {
          path: 'coin_information',
          component: TradingLinkFive,
          name: 'TradingLinkFive'
        }
      ]
    },
    // Sign up routes
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
          path: 'setup_password',
          component: SignupPasswordForm,
          name: 'SignupPasswordForm'
        }
      ]
    },
    /**
     * Service routes
      A. 공지사항 : /service/notice
      B. 이벤트 안내 : /service/press
      C. 이달의승급코인 : /service/promotion_coin
      D. 이용안내 : /service/guide
      E. 입출금현황 : /service/wallet_status
      F. Open API 안내 : /service/open_api_guide
      G. 정책 및 고지 : /service/policy
      H. 1:1문의하기 : /service/qna
      I. 문의내역 : /service/qna_list
      J. 자주하는 질문 : /service/faq
      K. 카카오톡 문의(24시간) : Gobit 비즈니스 전용 주소 URL 링크
     */
    {
      path: '/service',
      component: Service,
      children: [
        {
          path: '',
          component: ServiceList,
          name: 'ServiceList'
        },
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
    /**
      A. 회원정보 : /mypage/customer_info
      B. 보안인증 : /mypage/security_certificate
      C. 상장신청 : /mypage/application_listing
      D. 상장문의 : /mypage/inquire_listing
      E. 상장관리 (management)
        i. 상장 정보 관리 : /mypage/management/information_management
        ii. 정보 등록 수정 : /mypage/management/modify_information
        iii. 코인 정보 관리 : /mypage/management/coin_management
    */
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
