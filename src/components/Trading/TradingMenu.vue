<template>
  <!-- trading menu -->
  <div class="app-tradingmenu">
    <div id="trading-tradingmenu-holder">
      <div id="trading-tradingmenu-content">
        <ul class="list-inline mx-0 my-0 px-0">
          <li class="list-inline-item mx-0">
            <a href="#" class="active">
              주문
            </a>
          </li>
          <li class="list-inline-item mx-0">
            <a href="#">
              호가
            </a>
          </li>
          <li class="list-inline-item mx-0">
            <a href="#">
              차트
            </a>
          </li>
          <li class="list-inline-item mx-0">
            <a href="#">
              체결기록
            </a>
          </li>
          <li class="list-inline-item mx-0">
            <a href="#">
              코인 정보
            </a>
          </li>
        </ul>
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
