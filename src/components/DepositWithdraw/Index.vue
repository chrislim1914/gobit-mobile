<template>
  <div class="app-depositwithdraw">
    <!-- <topbar></topbar> -->
    <!-- <depositwithdraw></depositwithdraw> -->
    <!-- <coinTransaction></coinTransaction>
    <walletAddress></walletAddress>
    <nowalletAddress></nowalletAddress>
    <withdrawal></withdrawal> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
import Depositwithdraw from './Depositwithdraw'
import CoinTransaction from './CoinTransaction'
import WalletAddress from './WalletAddress'
import NoWalletAddress from './NoWalletAddress'
import Withdrawal from './Withdrawal'
export default {
  name: 'DepositWithdraw',
  components: {
    'topbar': Topbar,
    'depositwithdraw': Depositwithdraw,
    'coinTransaction': CoinTransaction,
    'walletAddress': WalletAddress,
    'nowalletAddress': NoWalletAddress,
    'withdrawal': Withdrawal
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/deposit/base.scss';
</style>
