<template>
  <div class="app-investment">
    <topbar></topbar>
    <!-- <balance></balance> -->
    <history></history>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
import Balance from './Balance'
import History from './History'
export default {
  name: 'Investment',
  components: {
    'topbar': Topbar,
    'balance': Balance,
    'history': History
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/investment/base.scss';
</style>
