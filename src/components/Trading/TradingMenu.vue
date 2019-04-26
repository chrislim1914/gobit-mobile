<template>
  <!-- trading menu -->
  <div class="app-tradingmenu">
    <div class="container-fluid">
      <div id="trading-menu-row" class="row text-center">
        <div class="col">
          <a href="#" class="active">
            본문
          </a>
        </div>
        <div class="col">
          <a href="#">
            본문
            <img id="trading-menu-dropdownarrow" src="~img/drop-down-arrow16x16.png" alt="Gobit trading dropdown" class="img-fluid pt-3">
          </a>
        </div>
        <div class="col">
          <a href="#">
            본문
          </a>
        </div>
        <div class="col">
          <a href="#">
            본문
          </a>
        </div>
        <div class="col">
          <a href="#">
            본문
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
