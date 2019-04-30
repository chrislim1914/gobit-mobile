<template>
  <!-- investment topbar -->
  <div class="app-investmentTopbar">
    <div class="container-fluid">
      <div class="invest-head">
        <div class="col col-sm-2 invest-back"><a href=""><img src="~img/back-arrow32x32.png" data-effect="sidebar" alt="gobit logo" class="img-fluid"></a></div>
        <div class="col col-sm-8 invest-title">투자내역</div>
        <div class="col col-sm-1 invest-icons">
          <a href="#">
            <img src="~img/home32x32.png" data-effect="sidebar" alt="gobit logo" class="img-fluid">
          </a>
        </div>
        <div class="col col-sm-1 invest-icons">
          <a href="#">
            <img src="~img/menu.png" data-effect="sidebar" alt="gobit logo" class="img-fluid">
          </a>
        </div>
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
