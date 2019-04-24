<template>
  <div class="app-exchange">

    <!-- globals -->
    <global-footer></global-footer>
  </div>
</template>

<script>
import Footer from '../Globals/Footer'
export default {
  name: 'Exchange',
  components: {
    'global-footer': Footer
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/base.scss';
</style>
