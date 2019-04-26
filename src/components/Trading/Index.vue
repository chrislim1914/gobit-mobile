<template>
  <!-- trading -->
  <div class="app-trading">
    <topbar></topbar>
  </div>
</template>

<script>
import Topbar from './Topbar'
export default {
  name: 'Trading',
  components: {
    'topbar': Topbar
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/base.scss';
</style>
