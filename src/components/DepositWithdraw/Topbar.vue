<template>
  <!-- depositwithdraw topbar -->
  <div class="app-depositwithdrawTopbar">
      <div class="topbar-container">
        <div class="back">
          <img src="~img/back-arrow32x32.png" alt="back icon">
        </div>
        <div class="title text-align">
          입출금
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
  @import '~scss/deposit/topbar.scss';
</style>
