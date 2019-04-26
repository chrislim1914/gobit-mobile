<template>
  <!-- trading -->
  <div class="app-trading">
    <topbar></topbar>
    <coininfo></coininfo>
  </div>
</template>

<script>
import Topbar from './Topbar'
import CoinInfo from './CoinInfo'
export default {
  name: 'Trading',
  components: {
    'topbar': Topbar,
    'coininfo': CoinInfo
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/base.scss';
</style>
