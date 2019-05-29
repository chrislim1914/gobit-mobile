<template>
  <div class="app-tradingmenu">
    <div class="menu-holder">
      <ul>
        <li>
          <router-link to="/newtrade/first_link" :class="{ 'active': $route.path === '/newtrade/first_link' }">
              주문
          </router-link>
        </li>
        <li>
          <router-link to="/newtrade/second_link" :class="{ 'active': $route.path === '/newtrade/second_link' }">
              호가<img src="~img/and-inactive12x12.png" alt="menu icon">
          </router-link>
        </li>
        <li>
           <router-link to="/newtrade/chart" :class="{ 'active': $route.path === '/newtrade/chart' }">
              차트
          </router-link>
        </li>
        <li>
          <a href="#">체결기록</a>
        </li>
        <li>
          <router-link to="/newtrade/coin_info" :class="{ 'active': $route.path === '/newtrade/coin_info' }">
              코인정보
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingMenu'
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/tradingmenu.scss';
</style>
