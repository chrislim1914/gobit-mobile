<template>
  <div class="app-newTrading">
    <topbar></topbar>
    <slideData></slideData>
    <exchangeFeeder></exchangeFeeder>
    <tradingmenu></tradingmenu>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './TradingTopbar.vue'
import SlideData from './SlideData.vue'
import ExchangeFeeder from './ExchangeFeeder.vue'
import TradingMenu from './TradingMenu.vue'
export default {
  name: 'NewTrading',
  components: {
    'topbar': Topbar,
    'slideData': SlideData,
    'exchangeFeeder': ExchangeFeeder,
    'tradingmenu': TradingMenu
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/base.scss';
</style>
