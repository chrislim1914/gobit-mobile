<template>
  <!-- exchange info -->
  <div class="app-tradingexchangeinfo">
    <div id="app-trading-exchangeinfo-holder">
      <div id="app-trading-exchangeinfo-content">
        <ul class="list-inline my-0 py-0 mx-0 px-0">
          <li class="list-inline-item mx-0 my-0">
            <h1 class="mx-0">Binance</h1>
            <span>
              <h6>
                5,935,947
              </h6>
              <h6>
                ($5,212.00)
              </h6>
            </span>
          </li>
          <li class="list-inline-item mx-0 my-0">
            <h1>Huobi</h1>
            <span>
              <h6>
                5,935,947
              </h6>
              <h6>
                ($5,212.00)
              </h6>
            </span>
          </li>
        </ul>
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
