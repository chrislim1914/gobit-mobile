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
          <a href="#">호가</a>
        </li>
        <li>
          <a href="#">차트</a>
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
