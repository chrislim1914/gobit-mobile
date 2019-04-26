<template>
  <!-- trading topbar -->
  <div class="app-tradingtopbar">
    <div class="container-fluid">
      <div id="trading-topbar-row" class="row">
        <div class="col-0 px-0 text-left">
          <img src="~img/back-arrow24x24.png" alt="Gobit trading back arrow">
        </div>
        <div class="col-5 pl-3 px-0 text-left">
          <h6 id="trading-pairing-active" class="mb-0">
            샘플 기호(ETH/KRW)
            <img id="trading-topbar-dropdownarrow" src="~img/drop-down-arrow16x16.png" alt="Gobit trading dropdown" class="img-fluid pt-3">
          </h6>
        </div>
        <div class="col-0 px-0 text-left pt-0 mt-0">
          <img src="~img/star24x24.png" alt="Gobit trading favorite" class="img-fluid pt-0 mt-0">
        </div>
        <div class="col-6 px-0 text-right">
          <img src="~img/home24x24.png" alt="Gobit trading home" class="img-fluid pr-3">
          <img src="~img/menu24x24.png" alt="Gobit trading menu" class="img-fluid pl-2">
        </div>
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
