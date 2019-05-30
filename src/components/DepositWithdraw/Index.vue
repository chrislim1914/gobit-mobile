<template>
  <div class="app-depositwithdraw">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
export default {
  name: 'DepositWithdraw',
  components: {
    'topbar': Topbar
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/deposit/base.scss';
</style>
