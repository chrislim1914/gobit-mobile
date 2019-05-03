<template>
  <!-- exchange -->
  <div class="app-exchange">
    <!-- exchange header -->
    <global-header></global-header>
    <!-- exchange search -->
    <exchange-search></exchange-search>
    <!-- exchange tickerbar -->
    <exchange-tickerbar></exchange-tickerbar>
    <!-- exchange symbols -->
    <exchange-symbolbar></exchange-symbolbar>
  </div>
</template>

<script>
// import Sidebar from '../Globals/Sidebar'
import Header from '../Globals/Header'
import Search from './Search'
import Tickerbar from './Tickerbar'
import Symbolbar from './Symbolbar'
import CustomerService from '../Globals/CustomerService'
import Banner from '../Globals/Banner'
import Footer from '../Globals/Footer'
import Notice from '../Globals/Notice'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Exchange',
  components: {
    // 'global-sidebar': Sidebar,
    'exchange-search': Search,
    'exchange-tickerbar': Tickerbar,
    'exchange-symbolbar': Symbolbar,
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
