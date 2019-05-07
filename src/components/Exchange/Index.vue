<template>
  <!-- exchange -->
  <div class="app-exchange">
    <!-- exchange header -->
    <global-header></global-header>
    <!-- exchange market selection -->
    <exchange-marketselection></exchange-marketselection>
    <!-- exchange search -->
    <exchange-search></exchange-search>
    <!-- exchange tickerbar -->
    <exchange-tickerbar></exchange-tickerbar>
    <!-- exchange symbols -->
    <exchange-symbolbar></exchange-symbolbar>
    <!-- exchange table -->
    <exchange-table></exchange-table>
    <!-- extra -->
    <div id="extra-colored-space"></div>
    <!-- globals -->
    <global-cs></global-cs>
    <global-banner @close-banner="closeBanner" :is-banner-shown="bannerStatus" :is-notice-shown="noticeStatus"></global-banner>
    <global-notice @close-notice="closeNotice" :is-notice-shown="noticeStatus"></global-notice>
    <global-footer></global-footer>
  </div>
</template>

<script>
// import Sidebar from '../Globals/Sidebar'
import Header from '../Globals/Header'
import MarketSelection from './MarketSelection'
import Search from './Search'
import Tickerbar from './Tickerbar'
import Symbolbar from './Symbolbar'
import Table from './Table'
import CustomerService from '../Globals/CustomerService'
import Banner from '../Globals/Banner'
import Footer from '../Globals/Footer'
import Notice from '../Globals/Notice'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Exchange',
  components: {
    // 'global-sidebar': Sidebar,
    'exchange-marketselection': MarketSelection,
    'exchange-search': Search,
    'exchange-tickerbar': Tickerbar,
    'exchange-symbolbar': Symbolbar,
    'exchange-table': Table,
    'global-header': Header,
    'global-footer': Footer,
    'global-banner': Banner,
    'global-notice': Notice,
    'global-cs': CustomerService
  },
  data () {
    return {
      activemarket: ''
    }
  },
  computed: {
    ...mapState({
      'bannerStatus': ({misc}) => misc.isBannerShown,
      'noticeStatus': ({misc}) => misc.isNoticeShown
    })
  },
  methods: {
    ...mapActions(['setBannerStatus', 'setNoticeStatus']),
    closeBanner (status) {
      this.setBannerStatus({ status: status })
    },
    closeNotice (status) {
      this.setNoticeStatus({ status: status })
    }
  },
  beforeMount () {
    this.activemarket = this.$route.params.market
  },
  mounted () {
    this.$refs.firstsymbol.focus()
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/base.scss';
</style>
