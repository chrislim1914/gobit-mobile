<template>
  <div class="app-depositwithdraw">
    <!-- <coinTransaction></coinTransaction> -->
    <topbar></topbar>
    <depositwithdraw></depositwithdraw>
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
