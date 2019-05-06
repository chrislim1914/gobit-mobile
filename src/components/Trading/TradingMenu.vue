<template>
  <!-- trading menu -->
  <div class="app-tradingmenu">
    <div class="container-fluid">
      <div id="trading-menu-row" class="row text-center">
        <div class="col">
          <a href="#" class="active">
            주문
          </a>
        </div>
        <div class="col">
          <a href="#">
            호가
            <img id="trading-menu-dropdownarrow" src="~img/drop-down-arrow16x16.png" alt="Gobit trading dropdown" class="img-fluid pt-3">
          </a>
        </div>
        <div class="col">
          <a href="#">
            차트
          </a>
        </div>
        <div class="col">
          <a href="#">
            체결기록
          </a>
        </div>
        <div class="col">
          <a href="#">
            코인 정보
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingMenu'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/menu.scss';
</style>
