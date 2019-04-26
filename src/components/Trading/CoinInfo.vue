<template>
  <!-- coin info -->
  <div class="app-tradingcoininfo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-0 px-0 text-left">
          <a href="#" class="trading-coininfo-navigator">
            <img src="~img/left-arrow24x24.png" alt="Gobit trading coin information left arrow" class="img-fluid">
          </a>
        </div>
        <div class="col-6">
          <h6 id="trading-coininfo-value">
            190,150
          </h6>
          <h6 class="mb-0 pb-0">
            <ul class="list-inline mb-0 pb-0">
              <li id="trading-coininfo-text-1" class="list-inline-item">
                샘플 메시지
              </li>
              <li id="trading-coininfo-text-2" class="list-inline-item">
                1.88%
              </li>
              <li id="trading-coininfo-text-3" class="list-inline-item">
                <i class="fa fa-caret-up position-relative"></i>
                3,500
              </li>
            </ul>
          </h6>
        </div>
        <div class="col-5 pt-3">
          <div class="row">
            <div class="col-6">
              <h6 id="trading-coininfo-text-4">
                견본
                <span class="font-weight-light">(KRW)</span>
              </h6>
            </div>
            <div class="col-6">
              <h6 id="trading-coininfo-text-5" class="font-weight-bold">
                6,243,000
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <h6 id="trading-coininfo-text-6">
                견본
                <span class="font-weight-light">(KRW)</span>
              </h6>
            </div>
            <div class="col-6">
              <h6 id="trading-coininfo-text-7" class="font-weight-bold">
                5,950,000
              </h6>
            </div>
          </div>
        </div>
        <div class="col-0 px-0 text-right">
          <a href="#" class="trading-coininfo-navigator">
            <img src="~img/right-arrow24x24.png" alt="Gobit trading coin information right arrow" class="img-fluid">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingCoinInfo'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/coininfo.scss';
</style>
