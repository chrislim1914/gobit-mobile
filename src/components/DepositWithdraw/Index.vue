<template>
  <div class="app-depositwithdraw">
    <topbar></topbar>
    <depositwithdraw></depositwithdraw>
    <!-- <coinTransaction></coinTransaction> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
import Depositwithdraw from './Depositwithdraw'
import CoinTransaction from './CoinTransaction'
export default {
  name: 'DepositWithdraw',
  components: {
    'topbar': Topbar,
    'depositwithdraw': Depositwithdraw,
    'coinTransaction': CoinTransaction
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/deposit/base.scss';
</style>
