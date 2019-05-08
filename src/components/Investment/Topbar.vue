<template>
  <!-- investment topbar -->
  <div class="app-investmentTopbar">
    <div class="topbar-container">
      <div class="back">
        <img src="~img/back-arrow32x32.png" alt="back icon">
      </div>
      <div class="title text-align">
        투자내역
      </div>
      <div class="home-icon">
        <img src="~img/home32x32.png" alt="back icon">
      </div>
      <div class="menu-icon">
        <img src="~img/menu.png" alt="back icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestmentTopbar'
}
</script>

<style lang='scss' scoped>
  @import '~scss/investment/topbar.scss';
</style>
