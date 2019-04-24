<template>
  <div class="app-exchange">

    <!-- extra -->
    <div id="extra-colored-space"></div>
    <!-- globals -->
    <global-cs></global-cs>
    <global-footer></global-footer>
  </div>
</template>

<script>
import CustomerService from '../Globals/CustomerService'
import Footer from '../Globals/Footer'
export default {
  name: 'Exchange',
  components: {
    'global-footer': Footer,
    'global-cs': CustomerService
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/base.scss';
</style>
