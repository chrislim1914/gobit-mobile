<template>
  <div class="app-tradingtopbar debugger">
    <div class="topbar-container">
      <div class="back">
        <img src="~img/back-arrow32x32.png" alt="back icon">
      </div>
      <div class="title">
        이더리움(ETH/KRW)
        <img src="~img/and12x12.png" alt="and icon">
        <img src="~img/star32x32.png" alt="star icon">
      </div>
      <div class="home-icon">
        <img src="~img/home32x32.png" alt="home icon">
      </div>
      <div class="menu-icon">
        <img src="~img/menu.png" alt="menu icon">
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
  @import '~scss/newtrading/tradingtopbar.scss';
</style>
