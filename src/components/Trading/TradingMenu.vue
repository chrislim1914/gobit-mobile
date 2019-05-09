<template>
  <!-- trading menu -->
  <div class="app-tradingmenu">
    <div id="trading-tradingmenu-holder">
      <div id="trading-tradingmenu-content">
        <ul class="list-inline mx-0 my-0 px-0">
          <li class="list-inline-item mx-0">
            <router-link to="/trading" :class="{ 'active': $route.path === '/trading' }">
              주문
            </router-link>
          </li>
          <li class="list-inline-item mx-0">
            <router-link to="/trading/ltwo" :class="{ 'active': $route.path === '/trading/ltwo' }">
              호가
            </router-link>
          </li>
          <li class="list-inline-item mx-0">
            <router-link to="/trading/chart" :class="{ 'active': $route.path === '/trading/chart' }">
              차트
            </router-link>
          </li>
          <li class="list-inline-item mx-0">
            <router-link to="/trading/records" :class="{ 'active': $route.path === '/trading/records' }">
              체결기록
            </router-link>
          </li>
          <li class="list-inline-item mx-0">
            <router-link to="/trading/coin_information" :class="{ 'active': $route.path === '/trading/coin_information' }">
              코인 정보
            </router-link>
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
