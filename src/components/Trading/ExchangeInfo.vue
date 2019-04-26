<template>
  <!-- exchange info -->
  <div class="app-tradingexchangeinfo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ul class="list-inline">
            <li class="list-inline-item">
              <h6 id="trading-exchangeinfo-text-1">
                Binance
              </h6>
            </li>
            <li id="trading-exchangeinfo-text-1-value" class="list-inline-item font-weight-bold">
              5,935,947
              <span>
                ($5,212.00)
              </span>
            </li>
            <li class="list-inline-item ml-5">
              <h6 id="trading-exchangeinfo-text-2">
                Huobi
              </h6>
            </li>
            <li id="trading-exchangeinfo-text-2-value" class="list-inline-item font-weight-bold">
              5,935,947
              <span>
                ($5,212.00)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingExchangeInfo'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/exchangeinfo.scss';
</style>
