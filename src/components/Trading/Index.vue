<template>
  <!-- trading -->
  <div class="app-trading">
    <topbar></topbar>
    <coininfo></coininfo>
    <exchangeinfo></exchangeinfo>
  </div>
</template>

<script>
import Topbar from './Topbar'
import CoinInfo from './CoinInfo'
import ExchangeInfo from './ExchangeInfo'
export default {
  name: 'Trading',
  components: {
    'topbar': Topbar,
    'coininfo': CoinInfo,
    'exchangeinfo': ExchangeInfo
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/base.scss';
</style>
