<template>
  <div class="app-investment">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
import Balance from './Balance'
import History from './History'
import Order from './Order'
export default {
  name: 'Investment',
  components: {
    'topbar': Topbar,
    'balance': Balance,
    'history': History,
    'order': Order
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/investment/base.scss';
</style>
