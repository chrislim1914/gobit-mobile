<template>
  <!-- trading topbar -->
  <div class="app-tradingtopbar">
    <div id="trading-topbar-holder">
      <div id="trading-topbar-content">
        <img src="~img/back-arrow32x32.png" alt="Gobit trading topbar back icon" class="img-fluid">
        <span>
          <h6 class="font-weight-bold mb-0">
            이더리움(ETH/KRW)
          </h6>
        </span>
        <img src="~img/star32x32.png" alt="Gobit trading topbar star icon" id="trading-topbar-favorite" class="img-fluid">
        <span id="trading-topbar-right-section">
          <img src="~img/home32x32.png" alt="Gobit trading topbar home icon" class="img-fluid">
          <img src="~img/menu.png" alt="Gobit trading topbar menu icon" class="img-fluid">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingTopbar'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/topbar.scss';
</style>
