<template>
  <!-- commission -->
  <div class="app-commission">
    <div class="container-fluid">
      <div class="row">
        <div class="fee-head">
          <a href=""><i class="fa fa-chevron-left"></i></a> 수수료 등급
        </div>
        <div class="fee-title">
          현재 거래수수료
        </div>
        <div class="coin-list">
          <div class="col-3 coin-panel">
            <p>KRW</p>
            <p>코인</p>
          </div>
          <div class="col-3 coin-panel">
            <p>BTC</p>
            <p>코인</p>
          </div>
          <div class="col-3 coin-panel">
            <p>ETH</p>
            <p>코인</p>
          </div>
          <div class="col-3 coin-panel">
            <p>USDT</p>
            <p>코인</p>
          </div>
          <div class="col-3 coin-panel charge">
            <p>0.05%</p>
          </div>
          <div class="col-3 coin-panel charge">
            <p>0.05%</p>
          </div>
          <div class="col-3 coin-panel charge">
            <p>0.05%</p>
          </div>
          <div class="col-3 coin-panel charge">
            <p>0.05%</p>
          </div>
        </div>
        <div class="fee-notes">
          <p>구매 이전에 기능적인 부분은 제외하고,</p>
          <p>구매 이전에 기능적인 부분은 제외하고,</p>
          <a href="">구매 이전에 기능적인 부분은 제외하고</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Commission'
}
</script>

<style lang='scss' scoped>
  @import '~scss/commission/base.scss';
</style>
