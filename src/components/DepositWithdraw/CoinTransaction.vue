<template>
  <!-- depositwithdraw cointransaction -->
  <div class="app-cointransaction">
    <!-- start topbar -->
    <div class="topbar-container">
      <div class="back">
        <img src="~img/back-arrow32x32.png" alt="back icon">
      </div>
      <div class="title generic-title">
        NEO 입출금
      </div>
      <div class="home-icon">
        <img src="~img/home32x32.png" alt="back icon">
      </div>
      <div class="menu-icon">
        <img src="~img/menu.png" alt="back icon">
      </div>
    </div>
    <!-- end topbar -->
    <!-- start transaction-head -->
    <div class="transaction">
      <div class="t-head debugger">
        <div class="t-head-left">총 보유수량</div>
        <div class="t-head-right">0.58236151 ETH</div>
      </div>
    </div>
    <!-- end transaction-head -->
  </div>
</template>

<script>
export default {
  name: 'Cointransaction'
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/cointransaction.scss';
</style>
